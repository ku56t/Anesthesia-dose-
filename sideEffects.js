// sideEffects.js
// قاعدة أعراض جانبية (عينة). تأكد تضيف أو تعدل وتوسع بحسب حاجتك.
// dosePerKg يجب أن يكون رقم (Number) لكي لا يحصل NaN عند الحساب.

export const sideEffectsData = {
  "propofol": [
    { dosePerKg: 2.0, side: "انخفاض ضغط الدم", treatment: "رفع القدمين، إبطاء الحقن، محلول وريدي" },
    { dosePerKg: 2.0, side: "تثبيط تنفسي", treatment: "مراقبة التنفس، دعم أكسجين، تجهيز الأدوات التنفسية" },
    { dosePerKg: 2.0, side: "غثيان/قيء بعد العملية", treatment: "أدوية مضادة للغثيان (ondansetron)" }
  ],
  "midazolam": [
    { dosePerKg: 0.1, side: "نعاس/تخدير مفرط", treatment: "مراقبة التنفس والوظائف الحيوية، تقليل الجرعة" },
    { dosePerKg: 0.1, side: "ارتخاء عضلي", treatment: "مراقبة الحركات التنفسية، دعم تنفسي عند الحاجة" }
  ],
  "fentanyl": [
    { dosePerKg: 0.002, side: "تثبيط تنفسي شديد", treatment: "دعم الأكسجين، نالوكسون إذا لزم، مراقبة صفة التنفس" },
    { dosePerKg: 0.002, side: "غثيان/قيء", treatment: "مضادات القيء" },
    { dosePerKg: 0.002, side: "حكة", treatment: "مضادات هستامين عند الضرورة" }
  ],
  "ketamine": [
    { dosePerKg: 1.5, side: "هلوسة/كوابيس نفسية", treatment: "استخدام بنزوديازيبين كمضاد (مثلاً midazolam) ومحيط هادئ" },
    { dosePerKg: 1.5, side: "ارتفاع ضغط الدم ومعدل ضربات القلب", treatment: "مراقبة الضغط، أدوية خافضة عند الحاجة" },
    { dosePerKg: 1.5, side: "زيادة إفراز اللعاب", treatment: "مُقَِلّات الإفراز (glycopyrrolate) عند الحاجة" }
  ]
};

// لاحقًا تقدر تضيف آلاف المدخلات بنفس الصيغة:
// sideEffectsData["اسم_دواء"] = [{dosePerKg: X, side: "...", treatment: "..."}, ...];
