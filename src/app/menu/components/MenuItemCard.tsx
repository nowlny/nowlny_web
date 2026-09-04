"use client";

import { useState } from "react";
import Image from "next/image";
import type { MenuItem } from "../lib/api";
import { isOptimizable } from "../lib/imageHosts";
import type { Lang } from "../lib/i18n";
import { getT } from "../lib/i18n";
import ItemOptionsModal from "./ItemOptionsModal";

interface MenuItemCardProps {
  item: MenuItem;
  lang: Lang;
  priceLabel: string;
  originalPriceLabel: string | null;
  secondaryPriceLabel: string | null;
  currencyCode: string;
}

export default function MenuItemCard({
  item,
  lang,
  priceLabel,
  originalPriceLabel,
  secondaryPriceLabel,
  currencyCode,
}: MenuItemCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  const t = getT(lang);
  const unavailable = item.isAvailable === false;

  return (
    <>
      <button
        type="button"
        onClick={() => !unavailable && setShowOptions(true)}
        className={`glass-panel w-full p-4 flex items-start gap-4 text-start transition-colors hover:bg-bg-glass-hover ${
          unavailable ? "opacity-50" : "cursor-pointer"
        }`}
        aria-disabled={unavailable}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-base">{item.name}</h3>
            {item.isPopular && (
              <span className="text-[10px] font-semibold uppercase tracking-wide bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                {t("popular")}
              </span>
            )}
            {unavailable && (
              <span className="text-[10px] font-semibold uppercase tracking-wide bg-text-main/10 text-text-muted px-2 py-0.5 rounded-full">
                {t("unavailable")}
              </span>
            )}
          </div>
          {item.description ? (
            <p className="text-sm text-text-muted mt-1 line-clamp-2">
              {item.description}
            </p>
          ) : null}
          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span className="font-semibold text-primary">{priceLabel}</span>
            {originalPriceLabel && (
              <span className="text-sm text-text-muted line-through">
                {originalPriceLabel}
              </span>
            )}
            {secondaryPriceLabel && (
              <span className="text-xs text-text-muted">
                ≈ {secondaryPriceLabel}
              </span>
            )}
          </div>
        </div>
        {item.image ? (
          <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="80px"
              className="object-cover"
              unoptimized={!isOptimizable(item.image)}
            />
          </div>
        ) : null}
      </button>

      {showOptions && (
        <ItemOptionsModal
          item={item}
          lang={lang}
          priceLabel={priceLabel}
          currencyCode={currencyCode}
          onClose={() => setShowOptions(false)}
        />
      )}
    </>
  );
}
