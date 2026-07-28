"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { API_BASE, type MenuItem, type OptionGroup } from "../lib/api";
import type { Lang } from "../lib/i18n";
import { getT } from "../lib/i18n";
import { formatMoney, toAmount } from "../lib/price";

interface ItemOptionsModalProps {
  item: MenuItem;
  lang: Lang;
  priceLabel: string;
  currencyCode: string;
  onClose: () => void;
}

export default function ItemOptionsModal({
  item,
  lang,
  priceLabel,
  currencyCode,
  onClose,
}: ItemOptionsModalProps) {
  const t = getT(lang);
  const [groups, setGroups] = useState<OptionGroup[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/menu/option-groups/item/${item.id}`)
      .then((res) => (res.ok ? res.json() : []))
      .then((json) => {
        if (cancelled) return;
        const data = Array.isArray(json) ? json : json?.data;
        setGroups(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancelled) setGroups([]);
      });
    return () => {
      cancelled = true;
    };
  }, [item.id]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const sortedGroups = (groups ?? [])
    .slice()
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

  // Portaled to <body>: the page wrapper's fade-in animation creates a stacking
  // context that would otherwise trap this z-50 overlay below the fixed
  // "Open in the app" bar.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div
        className="glass-panel w-full sm:max-w-md max-h-[80vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 bg-bg-surface"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold">{item.name}</h3>
            {item.description ? (
              <p className="text-sm text-text-muted mt-1">{item.description}</p>
            ) : null}
            <p className="font-semibold text-primary mt-2">{priceLabel}</p>
          </div>
          {item.image ? (
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className="mt-5 space-y-5">
          {groups === null ? (
            <p className="text-sm text-text-muted">{t("loadingOptions")}</p>
          ) : (
            sortedGroups.map((group) => (
              <div key={group.id}>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-sm">{group.name}</h4>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      group.isRequired
                        ? "bg-primary/20 text-primary"
                        : "bg-text-main/10 text-text-muted"
                    }`}
                  >
                    {group.isRequired ? t("required") : t("optional")}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {group.options
                    .slice()
                    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
                    .map((option) => {
                      const price = toAmount(option.price);
                      return (
                        <li
                          key={option.id}
                          className="flex items-center justify-between text-sm border-b border-border-subtle pb-1.5 last:border-0"
                        >
                          <span>{option.name}</span>
                          <span className="text-text-muted">
                            {price ? `+ ${formatMoney(price, currencyCode)}` : t("free")}
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="btn-primary w-full mt-6"
        >
          {t("close")}
        </button>
      </div>
    </div>,
    document.body
  );
}
