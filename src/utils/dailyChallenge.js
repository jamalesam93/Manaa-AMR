// Daily Challenge - Question of the Day system

const STORAGE_KEY = 'manaa_dailyChallenge'

export function getDailyChallenge() {
    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
    const stored = localStorage.getItem(STORAGE_KEY)
    
    if (stored) {
        try {
            // Security: Prevent app crashes from unhandled JSON syntax errors
            const data = JSON.parse(stored)
            // Security: Validate schema to prevent prototype pollution or unexpected type usage
            // If we have today's challenge, return it
            if (data && typeof data === 'object' && !Array.isArray(data) && data.date === today) {
                return data
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Error parsing daily challenge:', error)
            }
        }
    }
    
    // No challenge for today, return null
    return null
}

export function setDailyChallenge(scenario, userAnswer, isCorrect) {
    const today = new Date().toISOString().split('T')[0]
    
    const challengeData = {
        date: today,
        scenarioId: scenario.id,
        userAnswer,
        isCorrect,
        completed: true,
        completedAt: new Date().toISOString()
    }
    
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(challengeData))
        return challengeData
    } catch (error) {
        console.error('Error saving daily challenge:', error)
        return null
    }
}

export function getDailyChallengeStats() {
    const defaultStats = {
        totalCompleted: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastCompletedDate: null,
        todayCompleted: false
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
        return { ...defaultStats }
    }
    
    // For now, we'll track basic stats
    // In a full implementation, you'd store an array of all completed challenges
    try {
        // Security: Prevent app crashes from unhandled JSON syntax errors
        const data = JSON.parse(stored)
        // Security: Validate schema to prevent unexpected type usage
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            const today = new Date().toISOString().split('T')[0]

            return {
                totalCompleted: data.completed ? 1 : 0,
                currentStreak: data.date === today && data.completed ? 1 : 0,
                longestStreak: data.completed ? 1 : 0,
                lastCompletedDate: data.completed ? data.date : null,
                todayCompleted: data.date === today && data.completed
            }
        }
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error parsing daily challenge stats:', error)
        }
    }

    return { ...defaultStats }
}

export function isDailyChallengeCompleted() {
    const challenge = getDailyChallenge()
    return challenge && challenge.completed
}

