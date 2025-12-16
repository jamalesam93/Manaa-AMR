import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || ''

let genAI = null
let model = null

if (apiKey) {
    genAI = new GoogleGenerativeAI(apiKey)
    model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
}

// Red flag symptoms that should trigger emergency screen
export const RED_FLAG_SYMPTOMS = [
    { ar: 'تصلب الرقبة مع حمى', en: 'stiff neck with fever', condition: 'meningitis' },
    { ar: 'صعوبة في التنفس', en: 'difficulty breathing', condition: 'respiratory emergency' },
    { ar: 'ألم في الصدر', en: 'chest pain', condition: 'cardiac emergency' },
    { ar: 'فقدان الوعي', en: 'loss of consciousness', condition: 'neurological emergency' },
    { ar: 'نزيف حاد', en: 'severe bleeding', condition: 'hemorrhage' },
    { ar: 'تشنجات', en: 'seizures', condition: 'neurological emergency' },
    { ar: 'حمى شديدة عند الرضع', en: 'high fever in infants', condition: 'pediatric emergency' },
    { ar: 'طفح جلدي مع حمى', en: 'rash with fever', condition: 'possible sepsis' },
]

// Check if symptoms contain red flags
export const checkRedFlags = (symptoms) => {
    const symptomsLower = symptoms.toLowerCase()

    for (const flag of RED_FLAG_SYMPTOMS) {
        if (symptomsLower.includes(flag.en.toLowerCase()) ||
            symptoms.includes(flag.ar)) {
            return {
                isEmergency: true,
                condition: flag.condition,
                message: flag.ar
            }
        }
    }

    return { isEmergency: false }
}

// System prompt that enforces safety rules
const SYSTEM_PROMPT = `أنت مساعد صحي ذكي في تطبيق "مناعة" للتوعية بمقاومة المضادات الحيوية في اليمن.

قواعد صارمة يجب اتباعها:
1. أنت لست طبيباً - دائماً أوصِ بزيارة الطبيب للتشخيص والعلاج
2. لا تذكر أي اسم مضاد حيوي محدد للمستخدمين العاديين أبداً
3. قدم معلومات عامة فقط عن أهمية إكمال الدورة العلاجية
4. إذا ذكر المستخدم أعراض خطيرة (صعوبة تنفس، ألم صدر، تصلب رقبة مع حمى)، أوصِ فوراً بالذهاب للطوارئ
5. تحدث باللهجة اليمنية عند الإمكان لتسهيل الفهم

You are a health assistant AI in the "Mana'a" app for AMR awareness in Yemen.

STRICT RULES:
1. You are NOT a doctor - always recommend visiting a doctor for diagnosis
2. NEVER mention specific antibiotic names to public users
3. Only provide general information about completing treatment courses
4. If user mentions emergency symptoms, immediately recommend ER
5. Respond in Arabic (Yemeni dialect when possible)`

export const isGeminiConfigured = () => {
    return !!apiKey
}

export const analyzeSymptoms = async (symptoms, isHCP = false) => {
    if (!model) {
        return {
            success: false,
            error: 'AI service not configured',
            message: 'يرجى استشارة طبيب للحصول على التشخيص المناسب'
        }
    }

    // First check for red flags
    const redFlagCheck = checkRedFlags(symptoms)
    if (redFlagCheck.isEmergency) {
        return {
            success: true,
            isEmergency: true,
            condition: redFlagCheck.condition,
            message: 'هذه الأعراض تتطلب رعاية طبية طارئة فوراً!'
        }
    }

    try {
        const prompt = isHCP
            ? `كطبيب، حلل الأعراض التالية وقدم توصيات سريرية: ${symptoms}`
            : `${SYSTEM_PROMPT}\n\nالمستخدم يصف الأعراض التالية: ${symptoms}\n\nقدم نصيحة عامة بدون ذكر أي مضاد حيوي محدد.`

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        return {
            success: true,
            isEmergency: false,
            message: text
        }
    } catch (error) {
        console.error('Gemini API error:', error)
        return {
            success: false,
            error: error.message,
            message: 'حدث خطأ. يرجى استشارة طبيب للحصول على المساعدة.'
        }
    }
}

export const askMedicineQuestion = async (question, isHCP = false) => {
    if (!model) {
        return {
            success: false,
            error: 'AI service not configured',
            message: 'يرجى استشارة الصيدلي أو الطبيب'
        }
    }

    try {
        const prompt = isHCP
            ? `كطبيب متخصص، أجب على السؤال التالي عن الأدوية: ${question}`
            : `${SYSTEM_PROMPT}\n\nالمستخدم يسأل: ${question}\n\nأجب بمعلومات عامة فقط. لا تذكر أسماء مضادات حيوية محددة.`

        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()

        return {
            success: true,
            message: text
        }
    } catch (error) {
        console.error('Gemini API error:', error)
        return {
            success: false,
            error: error.message,
            message: 'حدث خطأ. يرجى استشارة الصيدلي.'
        }
    }
}
