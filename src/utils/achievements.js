// Achievement/Badge system

const STORAGE_KEY = 'manaa_achievements'

export const ACHIEVEMENTS = {
    FIRST_QUIZ: {
        id: 'first_quiz',
        name: { en: 'First Steps', ar: 'الخطوات الأولى' },
        description: { en: 'Complete your first quiz', ar: 'أكمل أول اختبار لك' },
        icon: '🏅',
        condition: (progress) => progress.totalQuizzes >= 1
    },
    PERFECT_SCORE: {
        id: 'perfect_score',
        name: { en: 'Perfect Score', ar: 'نتيجة مثالية' },
        description: { en: 'Score 100% on a quiz', ar: 'احصل على 100% في اختبار' },
        icon: '🎯',
        condition: (progress) => progress.bestScore >= 100
    },
    STREAK_3: {
        id: 'streak_3',
        name: { en: 'On Fire', ar: 'في النار' },
        description: { en: 'Maintain a 3-day streak', ar: 'حافظ على سلسلة 3 أيام' },
        icon: '🔥',
        condition: (streak) => streak.currentStreak >= 3
    },
    STREAK_7: {
        id: 'streak_7',
        name: { en: 'Week Warrior', ar: 'محارب الأسبوع' },
        description: { en: 'Maintain a 7-day streak', ar: 'حافظ على سلسلة 7 أيام' },
        icon: '⚡',
        condition: (streak) => streak.currentStreak >= 7
    },
    QUIZ_10: {
        id: 'quiz_10',
        name: { en: 'Dedicated Learner', ar: 'متعلم مخلص' },
        description: { en: 'Complete 10 quizzes', ar: 'أكمل 10 اختبارات' },
        icon: '📚',
        condition: (progress) => progress.totalQuizzes >= 10
    },
    QUIZ_50: {
        id: 'quiz_50',
        name: { en: 'Scholar', ar: 'عالم' },
        description: { en: 'Complete 50 quizzes', ar: 'أكمل 50 اختبار' },
        icon: '🎓',
        condition: (progress) => progress.totalQuizzes >= 50
    },
    QUESTIONS_100: {
        id: 'questions_100',
        name: { en: 'Century Club', ar: 'نادي المئة' },
        description: { en: 'Answer 100 questions', ar: 'أجب على 100 سؤال' },
        icon: '💯',
        condition: (progress) => progress.totalQuestions >= 100
    },
    QUESTIONS_500: {
        id: 'questions_500',
        name: { en: 'AMR Champion', ar: 'بطل مقاومة المضادات' },
        description: { en: 'Answer 500 questions', ar: 'أجب على 500 سؤال' },
        icon: '🌟',
        condition: (progress) => progress.totalQuestions >= 500
    },
    ACCURACY_80: {
        id: 'accuracy_80',
        name: { en: 'Expert', ar: 'خبير' },
        description: { en: 'Maintain 80%+ accuracy', ar: 'حافظ على دقة 80%+' },
        icon: '⭐',
        condition: (progress) => progress.accuracy >= 80 && progress.totalQuestions >= 20
    },
    CATEGORIES_5: {
        id: 'categories_5',
        name: { en: 'Explorer', ar: 'مستكشف' },
        description: { en: 'Play quizzes from 5 categories', ar: 'العب اختبارات من 5 فئات' },
        icon: '🗺️',
        condition: (progress) => progress.categoriesPlayed >= 5
    },
    STREAK_30: {
        id: 'streak_30',
        name: { en: 'Month Master', ar: 'سيد الشهر' },
        description: { en: 'Maintain a 30-day streak', ar: 'حافظ على سلسلة 30 يوماً' },
        icon: '👑',
        condition: (streak) => streak.currentStreak >= 30
    },
    QUIZ_100: {
        id: 'quiz_100',
        name: { en: 'Centurion', ar: 'قائد المئة' },
        description: { en: 'Complete 100 quizzes', ar: 'أكمل 100 اختبار' },
        icon: '🏛️',
        condition: (progress) => progress.totalQuizzes >= 100
    },
    QUESTIONS_1000: {
        id: 'questions_1000',
        name: { en: 'Master Scholar', ar: 'عالم متقن' },
        description: { en: 'Answer 1000 questions', ar: 'أجب على 1000 سؤال' },
        icon: '🎖️',
        condition: (progress) => progress.totalQuestions >= 1000
    },
    ACCURACY_90: {
        id: 'accuracy_90',
        name: { en: 'Mastermind', ar: 'عبقري' },
        description: { en: 'Maintain 90%+ accuracy with 50+ questions', ar: 'حافظ على دقة 90%+ مع 50+ سؤال' },
        icon: '🧠',
        condition: (progress) => progress.accuracy >= 90 && progress.totalQuestions >= 50
    },
    DAILY_CHALLENGE_7: {
        id: 'daily_challenge_7',
        name: { en: 'Daily Dedication', ar: 'التفاني اليومي' },
        description: { en: 'Complete 7 daily challenges', ar: 'أكمل 7 تحديات يومية' },
        icon: '📅',
        condition: (dailyChallenge) => dailyChallenge.totalCompleted >= 7
    },
    DAILY_CHALLENGE_30: {
        id: 'daily_challenge_30',
        name: { en: 'Daily Champion', ar: 'بطل اليومي' },
        description: { en: 'Complete 30 daily challenges', ar: 'أكمل 30 تحدياً يومياً' },
        icon: '📆',
        condition: (dailyChallenge) => dailyChallenge.totalCompleted >= 30
    },
    PERFECT_QUIZ_5: {
        id: 'perfect_quiz_5',
        name: { en: 'Perfectionist', ar: 'الكمالي' },
        description: { en: 'Score 100% on 5 quizzes', ar: 'احصل على 100% في 5 اختبارات' },
        icon: '💎',
        condition: (progress) => progress.perfectQuizzes >= 5
    },
    CATEGORIES_ALL: {
        id: 'categories_all',
        name: { en: 'Category Master', ar: 'سيد الفئات' },
        description: { en: 'Play quizzes from all categories', ar: 'العب اختبارات من جميع الفئات' },
        icon: '🌐',
        condition: (progress) => progress.categoriesPlayed >= 16
    },
    CONSISTENT_LEARNER: {
        id: 'consistent_learner',
        name: { en: 'Consistent Learner', ar: 'متعلم منتظم' },
        description: { en: 'Complete quizzes for 14 consecutive days', ar: 'أكمل اختبارات لمدة 14 يوماً متتالية' },
        icon: '📊',
        condition: (streak) => streak.currentStreak >= 14
    }
}

export function getUnlockedAchievements() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error loading achievements:', error)
        }
        return []
    }
}

export function checkAchievements(progress, streak, language = 'en', dailyChallenge = null) {
    const unlocked = getUnlockedAchievements()
    const newlyUnlocked = []

    Object.values(ACHIEVEMENTS).forEach(achievement => {
        // Skip if already unlocked
        if (unlocked.includes(achievement.id)) {
            return
        }

        // Check condition
        let conditionMet = false
        if (achievement.id.startsWith('streak') || achievement.id === 'consistent_learner') {
            // Streak achievement
            conditionMet = achievement.condition(streak)
        } else if (achievement.id.startsWith('daily_challenge')) {
            // Daily challenge achievement
            conditionMet = dailyChallenge ? achievement.condition(dailyChallenge) : false
        } else {
            // Progress achievement
            conditionMet = achievement.condition(progress)
        }

        if (conditionMet) {
            unlocked.push(achievement.id)
            newlyUnlocked.push({
                ...achievement,
                unlockedAt: new Date().toISOString()
            })
        }
    })

    if (newlyUnlocked.length > 0) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Error saving achievements:', error)
            }
        }
    }

    return {
        unlocked,
        newlyUnlocked: newlyUnlocked.map(ach => ({
            id: ach.id,
            name: ach.name[language] || ach.name.en,
            description: ach.description[language] || ach.description.en,
            icon: ach.icon,
            unlockedAt: ach.unlockedAt
        }))
    }
}

export function getAchievementById(id) {
    return ACHIEVEMENTS[id] || null
}

