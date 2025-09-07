// sideEffects.js
// قاعدة بيانات واقعية للأعراض الجانبية لكل دواء مع العلاج حسب الجرعة
export const sideEffectsData = {
  "propofol": [
    { doseRange: "0-10", side: "دوار", treatment: "رفع القدم ومراقبة المريض" },
    { doseRange: "10-20", side: "انخفاض ضغط الدم", treatment: "إبطاء الحقن وتزويد السوائل" },
    { doseRange: "20-30", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "30-40", side: "صداع", treatment: "مسكنات حسب الحالة" },
    { doseRange: "40-50", side: "تثبيط التنفس", treatment: "مراقبة الأكسجين واستخدام التنفس الصناعي عند الحاجة" },
    { doseRange: "50-60", side: "حكة", treatment: "مضاد هيستامين" },
    { doseRange: "60-70", side: "ارتجاف", treatment: "تدفئة المريض ومراقبة العلامات الحيوية" },
    { doseRange: "70-80", side: "هلوسة", treatment: "مهدئ ومراقبة سلوك المريض" },
    { doseRange: "80-90", side: "انخفاض حرارة الجسم", treatment: "تدفئة المريض" },
    { doseRange: "90-100", side: "خدران الأطراف", treatment: "مراقبة الأعصاب وتقييم الحركة" },
    { doseRange: "100+", side: "تشنجات", treatment: "أدوية مضادة للتشنج ومتابعة دقيقة" }
  ],
  "midazolam": [
    { doseRange: "0-1", side: "نعاس خفيف", treatment: "مراقبة التنفس" },
    { doseRange: "1-2", side: "ارتخاء العضلات", treatment: "تخفيف الجرعة ومراقبة الحركة" },
    { doseRange: "2-3", side: "تثبيط التنفس", treatment: "توفير الأكسجين ومراقبة الأكسجة" },
    { doseRange: "3-4", side: "دوار", treatment: "رفع القدم ومراقبة ضغط الدم" },
    { doseRange: "4-5", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "5-6", side: "صداع", treatment: "مسكنات حسب الحاجة" },
    { doseRange: "6-7", side: "ارتباك", treatment: "مراقبة المريض وتهدئة البيئة" },
    { doseRange: "7-8", side: "هلوسة", treatment: "مهدئ ومراقبة الحالة النفسية" },
    { doseRange: "8-9", side: "ضغط دم منخفض", treatment: "رفع القدم وتزويد السوائل" },
    { doseRange: "9-10", side: "رجفان", treatment: "تدفئة المريض ومراقبة العلامات الحيوية" }
  ],
  "fentanyl": [
    { doseRange: "0-0.1", side: "تثبيط تنفسي", treatment: "توفير الأكسجين ومراقبة التنفس" },
    { doseRange: "0.1-0.2", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "0.2-0.3", side: "دوخة", treatment: "رفع القدم ومراقبة ضغط الدم" },
    { doseRange: "0.3-0.4", side: "حكة", treatment: "مضاد هيستامين" },
    { doseRange: "0.4-0.5", side: "بطء ضربات القلب", treatment: "مراقبة القلب" },
    { doseRange: "0.5-0.6", side: "انخفاض ضغط الدم", treatment: "رفع القدم وتزويد السوائل" },
    { doseRange: "0.6-0.7", side: "ارتباك", treatment: "مراقبة المريض وتهدئة البيئة" },
    { doseRange: "0.7-0.8", side: "هلوسة", treatment: "مهدئ" },
    { doseRange: "0.8-0.9", side: "ارتجاف", treatment: "تدفئة المريض" },
    { doseRange: "0.9-1", side: "تشنجات", treatment: "أدوية مضادة للتشنج" }
  ],
  "ketamine": [
    { doseRange: "0-10", side: "هلوسة", treatment: "مهدئ" },
    { doseRange: "10-20", side: "ارتفاع ضغط الدم", treatment: "مراقبة ضغط الدم" },
    { doseRange: "20-30", side: "زيادة معدل ضربات القلب", treatment: "مراقبة القلب" },
    { doseRange: "30-40", side: "ارتباك", treatment: "مراقبة المريض" },
    { doseRange: "40-50", side: "دوار", treatment: "رفع القدم" },
    { doseRange: "50-60", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "60-70", side: "ارتعاش", treatment: "تدفئة المريض" },
    { doseRange: "70-80", side: "ارتخاء العضلات", treatment: "مراقبة الحركة" },
    { doseRange: "80-90", side: "تثبيط التنفس", treatment: "توفير الأكسجين" },
    { doseRange: "90-100", side: "تشنجات", treatment: "أدوية مضادة للتشنج" }
  ]
  // يمكن توسيع القاعدة لتشمل آلاف العناصر الواقعية لكل دواء لاحقًا
};
