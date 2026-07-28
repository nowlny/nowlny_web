export interface ExchangeRate {
  fromCurrencyId: string;
  toCurrencyId: string;
  rate: string | number;
}

export interface Currency {
  code: string;
  name?: string | null;
  symbol?: string | null;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string | null;
  image?: string | null;
  price: string | number;
  discountedPrice?: string | number | null;
  sortOrder?: number;
  isActive?: boolean;
  isAvailable?: boolean;
  isPopular?: boolean;
}

export interface MenuSection {
  id: string;
  name: string;
  description?: string | null;
  sortOrder?: number;
  isActive?: boolean;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  description?: string | null;
  logo?: string | null;
  backgroundImageUrl?: string | null;
  phone?: string | null;
  website?: string | null;
  currency?: Currency | null;
  rating?: number;
  totalRatings?: number;
  isOpen?: boolean;
  status?: string;
}

export interface RestaurantFull {
  restaurant: Restaurant;
  menu: MenuSection[];
  exchangeRates?: ExchangeRate[];
}

export interface OptionGroup {
  id: string;
  name: string;
  type: "radio" | "checkbox";
  isRequired?: boolean;
  sortOrder?: number;
  options: { id: string; name: string; price?: string | number | null; sortOrder?: number }[];
}

export const API_BASE =
  process.env.NOWLNY_API_URL ?? "https://app.nowlny.com/api/v1";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function getRestaurantFull(
  restaurantId: string
): Promise<RestaurantFull | null> {
  if (!UUID_RE.test(restaurantId)) return null;

  try {
    const res = await fetch(`${API_BASE}/restaurants/${restaurantId}/full`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const data = json?.data ?? json;
    if (!data?.restaurant?.id) return null;

    return {
      restaurant: data.restaurant,
      menu: Array.isArray(data.menu) ? data.menu : [],
      exchangeRates: Array.isArray(data.exchangeRates)
        ? data.exchangeRates
        : [],
    };
  } catch {
    return null;
  }
}
