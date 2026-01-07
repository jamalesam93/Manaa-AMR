// Streak tracking for daily engagement

const STORAGE_KEY = 'manaa_streakData'

export function getStreakData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            totalDaysActive: 0
        }
    } catch (error) {
        console.error('Error loading streak data:', error)
        return {
            currentStreak: 0,
            longestStreak: 0,
            lastActivityDate: null,
            totalDaysActive: 0
        }
    }
}

function isSameDay(date1, date2) {
    if (!date1 || !date2) return false
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate()
}

function isConsecutiveDay(date1, date2) {
    if (!date1 || !date2) return false
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diffTime = Math.abs(d2 - d1)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays === 1
}

export function updateStreak() {
    const streakData = getStreakData()
    const today = new Date().toISOString().split('T')[0]
    
    // If already active today, don't update
    if (isSameDay(streakData.lastActivityDate, today)) {
        return streakData
    }

    // Check if consecutive day
    if (streakData.lastActivityDate && isConsecutiveDay(streakData.lastActivityDate, today)) {
        streakData.currentStreak += 1
    } else {
        // Reset streak if not consecutive
        streakData.currentStreak = 1
    }

    // Update longest streak
    if (streakData.currentStreak > streakData.longestStreak) {
        streakData.longestStreak = streakData.currentStreak
    }

    // Update total days active
    if (!isSameDay(streakData.lastActivityDate, today)) {
        streakData.totalDaysActive += 1
    }

    streakData.lastActivityDate = today

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(streakData))
        return streakData
    } catch (error) {
        console.error('Error saving streak:', error)
        return streakData
    }
}

export function getStreakInfo() {
    const streakData = getStreakData()
    const today = new Date().toISOString().split('T')[0]
    const isActiveToday = isSameDay(streakData.lastActivityDate, today)
    
    return {
        currentStreak: streakData.currentStreak,
        longestStreak: streakData.longestStreak,
        totalDaysActive: streakData.totalDaysActive,
        isActiveToday,
        lastActivityDate: streakData.lastActivityDate
    }
}

