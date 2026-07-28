export default function MenuNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel max-w-md w-full p-8 text-center">
        <p className="text-4xl mb-4">🍽️</p>
        <h1 className="text-xl font-bold mb-2">Restaurant not found</h1>
        <p className="text-sm text-text-muted mb-4">
          This link may be outdated — ask the staff for a new QR code.
        </p>
        <h2 className="text-lg font-bold mb-1" dir="rtl" lang="ar">
          المطعم غير موجود
        </h2>
        <p className="text-sm text-text-muted" dir="rtl" lang="ar">
          قد يكون هذا الرابط قديماً — اطلب رمز QR جديداً من الموظفين.
        </p>
      </div>
    </div>
  );
}
