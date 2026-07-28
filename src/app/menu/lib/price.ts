import type { Currency, ExchangeRate } from "./api";

export function toAmount(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

export function formatMoney(amount: number, code: string): string {
  const decimals = code === "USD" ? 2 : 0;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: code,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString("en-US")} ${code}`;
  }
}

// The backend stores LBP-per-USD in every exchange-rate entry; the app's
// DualPriceDisplay multiplies when the restaurant currency is USD and divides
// otherwise. Prefer an entry naming the USD/LBP pair, fall back to the first.
export function getUsdLbpRate(exchangeRates: ExchangeRate[] | undefined): number | null {
  if (!exchangeRates?.length) return null;
  const pair =
    exchangeRates.find(
      (e) =>
        [e.fromCurrencyId, e.toCurrencyId].includes("USD") &&
        [e.fromCurrencyId, e.toCurrencyId].includes("LBP")
    ) ?? exchangeRates[0];
  const rate = Number(pair.rate);
  return Number.isFinite(rate) && rate > 0 ? rate : null;
}

export interface DualPrice {
  primary: string;
  secondary: string | null;
}

export function getDualPrice(
  amount: number,
  currency: Currency | null | undefined,
  rate: number | null
): DualPrice {
  const code = (currency?.code || "USD").toUpperCase();
  const primary = formatMoney(amount, code);
  if (!rate) return { primary, secondary: null };

  const secondary =
    code === "USD"
      ? formatMoney(amount * rate, "LBP")
      : formatMoney(amount / rate, "USD");
  return { primary, secondary };
}
