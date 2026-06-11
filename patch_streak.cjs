const fs = require('fs');
const content = fs.readFileSync('src/utils/streakTracker.js', 'utf8');
const search = `export function getStreakData() {
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
}`;

const replace = `export function getStreakData() {
    const defaultData = {
        currentStreak: 0,
        longestStreak: 0,
        lastActivityDate: null,
        totalDaysActive: 0
    };

    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return { ...defaultData }

        const parsed = JSON.parse(stored)
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
            return { ...defaultData }
        }

        return { ...defaultData, ...parsed }
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error loading streak data:', error)
        }
        return { ...defaultData }
    }
}`;

fs.writeFileSync('src/utils/streakTracker.js', content.replace(search, replace));
