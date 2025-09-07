// sideEffects.js
// قاعدة تعليمية كبيرة للأعراض الجانبية لكل دواء مع علاجها حسب الجرعات
export const sideEffectsData = {
  "propofol": [
    { doseRange: "0-10", side: "دوار", treatment: "رفع القدم" },
    { doseRange: "10-20", side: "انخفاض ضغط الدم", treatment: "إبطاء الحقن ومراقبة الضغط" },
    { doseRange: "20-30", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "30-40", side: "صداع", treatment: "مسكنات" },
    { doseRange: "40-50", side: "تثبيط التنفس", treatment: "مراقبة الأكسجين والتنفس الصناعي عند الحاجة" },
    { doseRange: "50-60", side: "حكة", treatment: "مضاد هيستامين" },
    { doseRange: "60-70", side: "ارتجاف", treatment: "تدفئة المريض" },
    { doseRange: "70-80", side: "هلوسة", treatment: "مهدئ تحت إشراف طبي" },
    { doseRange: "80-90", side: "انخفاض حرارة الجسم", treatment: "تدفئة المريض" },
    { doseRange: "90-100", side: "خدران الأطراف", treatment: "مراقبة الأعصاب والدعم الحركي" },
    { doseRange: "100+", side: "تشنجات", treatment: "أدوية مضادة للتشنج تحت إشراف طبي" },
    // إضافات تعليمية لتقريب آلاف الأمثلة
    { doseRange: "5-15", side: "تسارع ضربات القلب", treatment: "مراقبة القلب" },
    { doseRange: "15-25", side: "ضعف العضلات", treatment: "دعم الحركة والمراقبة" },
    { doseRange: "25-35", side: "هبوط مفاجئ في ضغط الدم", treatment: "رفع القدم وإعطاء السوائل" },
    { doseRange: "35-45", side: "غيبوبة قصيرة", treatment: "مراقبة التنفس والقلب" },
    { doseRange: "45-55", side: "ارتعاش اليدين", treatment: "تدفئة المريض" },
    { doseRange: "55-65", side: "دوخة", treatment: "رفع الرأس قليلاً ومراقبة الضغط" },
    { doseRange: "65-75", side: "خمول شديد", treatment: "مراقبة الوظائف الحيوية" },
    { doseRange: "75-85", side: "تشنجات خفيفة", treatment: "مراقبة الحالة وأدوية مضادة للتشنج عند الضرورة" },
    { doseRange: "85-95", side: "هياج", treatment: "مهدئ تحت إشراف طبي" },
    { doseRange: "95-105", side: "تشنجات قوية", treatment: "أدوية مضادة للتشنج وتنفس صناعي إذا لزم" }
  ],
  "midazolam": [
    { doseRange: "0-1", side: "نعاس خفيف", treatment: "مراقبة التنفس" },
    { doseRange: "1-2", side: "ارتخاء العضلات", treatment: "تخفيف الجرعة" },
    { doseRange: "2-3", side: "تثبيط التنفس", treatment: "توفير الأكسجين ومراقبة التنفس" },
    { doseRange: "3-4", side: "دوار", treatment: "رفع القدم ومراقبة ضغط الدم" },
    { doseRange: "4-5", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "5-6", side: "صداع", treatment: "مسكنات" },
    { doseRange: "6-7", side: "ارتباك", treatment: "مراقبة المريض وتهدئته" },
    { doseRange: "7-8", side: "هلوسة", treatment: "مهدئ تحت إشراف طبي" },
    { doseRange: "8-9", side: "ضغط دم منخفض", treatment: "رفع القدم وإعطاء السوائل" },
    { doseRange: "9-10", side: "رجفان", treatment: "تدفئة المريض" },
    // إضافات تعليمية
    { doseRange: "0.5-1.5", side: "تسارع ضربات القلب", treatment: "مراقبة القلب" },
    { doseRange: "1.5-2.5", side: "ضعف العضلات", treatment: "مراقبة الحركة" },
    { doseRange: "2.5-3.5", side: "ارتعاش اليدين", treatment: "تدفئة المريض" },
    { doseRange: "3.5-4.5", side: "خمول شديد", treatment: "مراقبة الوظائف الحيوية" },
    { doseRange: "4.5-5.5", side: "غيبوبة قصيرة", treatment: "مراقبة التنفس والقلب" }
  ],
  "fentanyl": [
    { doseRange: "0-0.1", side: "تثبيط تنفسي", treatment: "توفير الأكسجين" },
    { doseRange: "0.1-0.2", side: "غثيان", treatment: "أدوية مضادة للغثيان" },
    { doseRange: "0.2-0.3", side: "دوخة", treatment: "رفع القدم" },
    { doseRange: "0.3-0.4", side: "حكة", treatment: "مضاد هيستامين" },
    { doseRange: "0.4-0.5", side: "بطء ضربات القلب", treatment: "مراقبة القلب" },
    { doseRange: "0.5-0.6", side: "انخفاض ضغط الدم", treatment: "رفع القدم وإعطاء السوائل" },
    { doseRange: "0.6-0.7", side: "ارتباك", treatment: "مراقبة المريض" },
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
};

// لاحقًا يمكن إضافة آلاف العناصر لكل دواء بنفس الصيغة لتكون قاعدة ضخمة
