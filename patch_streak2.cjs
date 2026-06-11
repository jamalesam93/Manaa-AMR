const fs = require('fs');
const content = fs.readFileSync('src/utils/streakTracker.js', 'utf8');
const search = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(streakData))
        return streakData
    } catch (error) {
        console.error('Error saving streak:', error)
        return streakData
    }`;

const replace = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(streakData))
        return streakData
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error saving streak:', error)
        }
        return streakData
    }`;

fs.writeFileSync('src/utils/streakTracker.js', content.replace(search, replace));
