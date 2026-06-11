const fs = require('fs');
const content = fs.readFileSync('src/utils/achievements.js', 'utf8');

const search1 = `export function getUnlockedAchievements() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : []
    } catch (error) {
        console.error('Error loading achievements:', error)
        return []
    }
}`;

const replace1 = `export function getUnlockedAchievements() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return []
        const parsed = JSON.parse(stored)
        return Array.isArray(parsed) ? parsed : []
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error loading achievements:', error)
        }
        return []
    }
}`;

let newContent = content.replace(search1, replace1);

const search2 = `    if (newlyUnlocked.length > 0) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
        } catch (error) {
            console.error('Error saving achievements:', error)
        }
    }`;

const replace2 = `    if (newlyUnlocked.length > 0) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Error saving achievements:', error)
            }
        }
    }`;

newContent = newContent.replace(search2, replace2);

fs.writeFileSync('src/utils/achievements.js', newContent);
