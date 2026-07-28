export type Lang = "en" | "ar";

const dict = {
  en: {
    menu: "Menu",
    open: "Open",
    closed: "Closed",
    popular: "Popular",
    unavailable: "Unavailable",
    openInApp: "Open in the app",
    required: "Required",
    optional: "Optional",
    ratings: "ratings",
    close: "Close",
    loadingOptions: "Loading options…",
    free: "Free",
    emptyMenu: "The menu isn't available yet.",
    notFoundTitle: "Restaurant not found",
    notFoundBody: "This link may be outdated — ask the staff for a new QR code.",
    errorTitle: "Something went wrong",
    errorBody: "We couldn't load this menu. Please try again.",
    retry: "Try again",
  },
  ar: {
    menu: "القائمة",
    open: "مفتوح",
    closed: "مغلق",
    popular: "الأكثر طلباً",
    unavailable: "غير متوفر",
    openInApp: "افتح في التطبيق",
    required: "إجباري",
    optional: "اختياري",
    ratings: "تقييم",
    close: "إغلاق",
    loadingOptions: "جارٍ تحميل الخيارات…",
    free: "مجاناً",
    emptyMenu: "القائمة غير متوفرة بعد.",
    notFoundTitle: "المطعم غير موجود",
    notFoundBody: "قد يكون هذا الرابط قديماً — اطلب رمز QR جديداً من الموظفين.",
    errorTitle: "حدث خطأ ما",
    errorBody: "تعذّر تحميل هذه القائمة. حاول مرة أخرى.",
    retry: "إعادة المحاولة",
  },
} as const;

export type MenuStringKey = keyof (typeof dict)["en"];

export function resolveLang(param: string | string[] | undefined): Lang {
  return param === "ar" ? "ar" : "en";
}

export function getT(lang: Lang) {
  return (key: MenuStringKey): string => dict[lang][key];
}
