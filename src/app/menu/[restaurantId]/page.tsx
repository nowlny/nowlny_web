import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import Image from "next/image";
import { isOptimizable } from "../lib/imageHosts";
import { notFound } from "next/navigation";
import { getRestaurantFull } from "../lib/api";
import { getT, resolveLang } from "../lib/i18n";
import { getDualPrice, getUsdLbpRate, toAmount } from "../lib/price";
import MenuItemCard from "../components/MenuItemCard";
import OpenInAppBar from "../components/OpenInAppBar";
import ThemeToggle from "../../components/ThemeToggle";

const plexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
  display: "swap",
});

type Params = Promise<{ restaurantId: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { restaurantId } = await params;
  const data = await getRestaurantFull(restaurantId);
  if (!data) return { title: "Menu" };

  const { restaurant } = data;
  const image = restaurant.logo || restaurant.backgroundImageUrl || undefined;
  return {
    title: restaurant.name,
    description:
      restaurant.description ||
      `View the ${restaurant.name} menu on Nowlny.`,
    openGraph: {
      title: restaurant.name,
      description: restaurant.description || undefined,
      images: image ? [image] : undefined,
    },
    itunes: {
      appId: "6778863532",
      appArgument: `https://nowlny.com/menu/${restaurant.id}`,
    },
  };
}

export default async function MenuPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { restaurantId } = await params;
  const sp = await searchParams;
  const data = await getRestaurantFull(restaurantId);
  if (!data) notFound();

  const lang = resolveLang(sp.lang);
  const t = getT(lang);
  const otherLang = lang === "ar" ? "en" : "ar";

  const { restaurant, menu, exchangeRates } = data;
  const rate = getUsdLbpRate(exchangeRates);
  const currencyCode = (restaurant.currency?.code || "USD").toUpperCase();

  const sections = menu
    .filter((s) => s.isActive !== false)
    .map((s) => ({
      ...s,
      items: (s.items || [])
        .filter((i) => i.isActive !== false)
        .slice()
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0)),
    }))
    .filter((s) => s.items.length > 0)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
      className={`min-h-screen w-full ${lang === "ar" ? plexArabic.className : ""}`}
    >
      <div className="max-w-2xl mx-auto px-4 pt-4 pb-32 animate-fade-in">
        {/* Top bar: theme + language toggles */}
        <div className="flex justify-end items-center gap-2 mb-2">
          <ThemeToggle />
          <a
            href={`/menu/${restaurant.id}?lang=${otherLang}`}
            className="text-xs font-bold text-text-main bg-bg-surface border border-text-main/20 rounded-full px-3.5 py-2 shadow-sm hover:text-primary hover:border-primary/60 transition-colors"
          >
            {lang === "ar" ? "English" : "عربي"}
          </a>
        </div>

        {/* Restaurant header */}
        {restaurant.backgroundImageUrl ? (
          <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-[-2.5rem]">
            <Image
              src={restaurant.backgroundImageUrl}
              alt=""
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover"
              priority
              unoptimized={!isOptimizable(restaurant.backgroundImageUrl)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 to-transparent" />
          </div>
        ) : null}

        <header
          className={`relative flex items-end gap-4 ${
            restaurant.backgroundImageUrl ? "px-4" : "mt-4"
          }`}
        >
          {restaurant.logo ? (
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-border-subtle bg-bg-surface shrink-0">
              <Image
                src={restaurant.logo}
                alt={restaurant.name}
                fill
                sizes="80px"
                className="object-cover"
                priority
                unoptimized={!isOptimizable(restaurant.logo)}
              />
            </div>
          ) : null}
          <div className="min-w-0 pb-1">
            <h1 className="text-2xl font-bold truncate">{restaurant.name}</h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span
                className={`text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                  restaurant.isOpen
                    ? "bg-green-500/15 text-green-600 dark:text-green-400"
                    : "bg-text-main/10 text-text-muted"
                }`}
              >
                {restaurant.isOpen ? t("open") : t("closed")}
              </span>
              {typeof restaurant.rating === "number" && restaurant.rating > 0 ? (
                <span className="text-xs text-text-muted">
                  ★ {restaurant.rating.toFixed(1)}
                  {restaurant.totalRatings
                    ? ` · ${restaurant.totalRatings} ${t("ratings")}`
                    : ""}
                </span>
              ) : null}
            </div>
          </div>
        </header>

        {restaurant.description ? (
          <p className="text-sm text-text-muted mt-3">{restaurant.description}</p>
        ) : null}

        {/* Menu */}
        <div className="mt-8 space-y-8">
          {sections.length === 0 ? (
            <p className="text-center text-text-muted py-12">{t("emptyMenu")}</p>
          ) : (
            sections.map((section) => (
              <section key={section.id}>
                <h2 className="text-lg font-bold mb-1">{section.name}</h2>
                {section.description ? (
                  <p className="text-xs text-text-muted mb-3">
                    {section.description}
                  </p>
                ) : (
                  <div className="mb-3" />
                )}
                <div className="space-y-3">
                  {section.items.map((item) => {
                    const price = toAmount(item.price) ?? 0;
                    const discounted = toAmount(item.discountedPrice);
                    const effective =
                      discounted !== null && discounted > 0 && discounted < price
                        ? discounted
                        : price;
                    const dual = getDualPrice(effective, restaurant.currency, rate);
                    const original =
                      effective < price
                        ? getDualPrice(price, restaurant.currency, rate).primary
                        : null;
                    return (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        lang={lang}
                        priceLabel={dual.primary}
                        originalPriceLabel={original}
                        secondaryPriceLabel={dual.secondary}
                        currencyCode={currencyCode}
                      />
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>

        <footer className="mt-12 text-center">
          <a
            href="https://nowlny.com"
            className="text-xs text-text-muted hover:text-text-main transition-colors"
          >
            Powered by <span className="text-gradient-primary font-semibold">Nowlny</span>
          </a>
        </footer>
      </div>

      <OpenInAppBar restaurantId={restaurant.id} label={t("openInApp")} />
    </div>
  );
}
