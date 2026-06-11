const fs = require('fs');
const content = fs.readFileSync('src/utils/dailyChallenge.js', 'utf8');

const search1 = `    if (stored) {
        try {
            const data = JSON.parse(stored)
            // If we have today's challenge, return it
            if (data && typeof data === 'object' && data.date === today) {
                return data
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Error parsing daily challenge:', error)
            }
        }
    }`;

const replace1 = `    if (stored) {
        try {
            const data = JSON.parse(stored)
            // If we have today's challenge, return it
            if (data && typeof data === 'object' && !Array.isArray(data) && data.date === today) {
                return data
            }
        } catch (error) {
            if (import.meta.env.DEV) {
                console.error('Error parsing daily challenge:', error)
            }
        }
    }`;

let newContent = content.replace(search1, replace1);

const search2 = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(challengeData))
        return challengeData
    } catch (error) {
        console.error('Error saving daily challenge:', error)
        return null
    }`;

const replace2 = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(challengeData))
        return challengeData
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error saving daily challenge:', error)
        }
        return null
    }`;

newContent = newContent.replace(search2, replace2);

const search3 = `    try {
        const data = JSON.parse(stored)
        if (!data || typeof data !== 'object') {
            return defaultStats
        }

        const today = new Date().toISOString().split('T')[0]`;

const replace3 = `    try {
        const data = JSON.parse(stored)
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            return defaultStats
        }

        const today = new Date().toISOString().split('T')[0]`;

newContent = newContent.replace(search3, replace3);

fs.writeFileSync('src/utils/dailyChallenge.js', newContent);
