// Social sharing utilities

export function shareQuizResult(score, total, percentage, language) {
    const messages = {
        en: {
            excellent: `🎉 I scored ${score}/${total} (${percentage}%) on the AMR Awareness Quiz! Test your knowledge about antibiotic resistance with Mana'a! 🦠💊`,
            good: `👍 I scored ${score}/${total} (${percentage}%) on the AMR Awareness Quiz! Learning about antibiotic resistance is important! 🦠💊`,
            okay: `📚 I scored ${score}/${total} (${percentage}%) on the AMR Awareness Quiz. There's always more to learn about antibiotic resistance! 🦠💊`
        },
        ar: {
            excellent: `🎉 حصلت على ${score}/${total} (${percentage}%) في اختبار الوعي بمقاومة المضادات الحيوية! اختبر معرفتك مع مناعة! 🦠💊`,
            good: `👍 حصلت على ${score}/${total} (${percentage}%) في اختبار الوعي بمقاومة المضادات الحيوية! التعلم عن مقاومة المضادات مهم! 🦠💊`,
            okay: `📚 حصلت على ${score}/${total} (${percentage}%) في اختبار الوعي بمقاومة المضادات الحيوية. هناك دائماً المزيد للتعلم! 🦠💊`
        }
    }

    const lang = language === 'ar' ? 'ar' : 'en'
    let message
    
    if (percentage >= 80) {
        message = messages[lang].excellent
    } else if (percentage >= 50) {
        message = messages[lang].good
    } else {
        message = messages[lang].okay
    }

    const hashtags = language === 'ar' 
        ? '#مناعة #مقاومة_المضادات_الحيوية #الوعي_الصحي'
        : '#Manaa #AntibioticResistance #HealthAwareness'

    const fullMessage = `${message}\n\n${hashtags}`

    // Try Web Share API first
    if (navigator.share) {
        navigator.share({
            text: fullMessage,
            title: language === 'ar' ? 'نتيجة اختبار مناعة' : 'Mana\'a Quiz Result'
        }).catch(err => {
            // Fallback to clipboard if share fails
            if (err.name !== 'AbortError') {
                copyToClipboard(fullMessage, language)
            }
        })
    } else {
        // Fallback to clipboard
        copyToClipboard(fullMessage, language)
    }
}

function copyToClipboard(text, language) {
    navigator.clipboard.writeText(text).then(() => {
        const message = language === 'ar' ? 'تم نسخ النص!' : 'Text copied to clipboard!'
        // You could show a toast notification here
        alert(message)
    }).catch(err => {
        if (import.meta.env.DEV) console.error('Failed to copy:', err)
        alert(language === 'ar' ? 'فشل النسخ' : 'Failed to copy')
    })
}

export function shareAchievement(achievement, language) {
    const messages = {
        en: `🏆 I just unlocked the "${achievement.name}" achievement in Mana'a! ${achievement.description} #Manaa #AntibioticResistance`,
        ar: `🏆 لقد فتحت إنجاز "${achievement.name}" في مناعة! ${achievement.description} #مناعة #مقاومة_المضادات_الحيوية`
    }

    const message = messages[language === 'ar' ? 'ar' : 'en']

    if (navigator.share) {
        navigator.share({
            text: message,
            title: language === 'ar' ? 'إنجاز جديد!' : 'New Achievement!'
        }).catch(() => {
            copyToClipboard(message, language)
        })
    } else {
        copyToClipboard(message, language)
    }
}

