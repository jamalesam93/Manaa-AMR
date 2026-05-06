// Daily Challenge - Question of the Day system

const STORAGE_KEY = 'manaa_dailyChallenge'

export function getDailyChallenge() {
    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD
    const stored = localStorage.getItem(STORAGE_KEY)
    
    if (stored) {
        try {
            const data = JSON.parse(stored)
            // Validate data type to prevent insecure deserialization
            if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
                // If we have today's challenge, return it
                if (data.date === today) {
                    return data
                }
            }
        } catch {
            // Fail securely if JSON is invalid
            if (import.meta.env.DEV) {
                console.error('Invalid JSON in daily challenge storage')
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
    const stored = localStorage.getItem(STORAGE_KEY)
    const defaultStats = {
        totalCompleted: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastCompletedDate: null,
        todayCompleted: false
    }

    if (!stored) {
        return { ...defaultStats, todayCompleted: undefined }
    }
    
    // For now, we'll track basic stats
    // In a full implementation, you'd store an array of all completed challenges
    try {
        const data = JSON.parse(stored)
        const today = new Date().toISOString().split('T')[0]

        if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
            return {
                totalCompleted: data.completed ? 1 : 0,
                currentStreak: data.date === today && data.completed ? 1 : 0,
                longestStreak: data.completed ? 1 : 0,
                lastCompletedDate: data.completed ? data.date : null,
                todayCompleted: data.date === today && data.completed
            }
        }
    } catch {
        // Fail securely
        if (import.meta.env.DEV) {
            console.error('Invalid JSON in daily challenge storage')
        }
    }

    return { ...defaultStats, todayCompleted: undefined }
}

export function isDailyChallengeCompleted() {
    const challenge = getDailyChallenge()
    return challenge && challenge.completed
}

