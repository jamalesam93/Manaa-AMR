const fs = require('fs');
const content = fs.readFileSync('src/utils/progressTracker.js', 'utf8');

const search1 = `export function getProgressData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        return stored ? JSON.parse(stored) : {
            totalQuizzes: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            quizHistory: [],
            bestScore: 0,
            averageScore: 0,
            categoriesPlayed: {},
            lastQuizDate: null,
            perfectQuizzes: 0
        }
    } catch (error) {
        console.error('Error loading progress:', error)
        return {
            totalQuizzes: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            quizHistory: [],
            bestScore: 0,
            averageScore: 0,
            categoriesPlayed: {},
            lastQuizDate: null,
            perfectQuizzes: 0
        }
    }
}`;

const replace1 = `export function getProgressData() {
    const defaultData = {
        totalQuizzes: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        quizHistory: [],
        bestScore: 0,
        averageScore: 0,
        categoriesPlayed: {},
        lastQuizDate: null,
        perfectQuizzes: 0
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
            console.error('Error loading progress:', error)
        }
        return { ...defaultData }
    }
}`;

let newContent = content.replace(search1, replace1);

const search2 = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
        return progress
    } catch (error) {
        console.error('Error saving progress:', error)
        return progress
    }`;

const replace2 = `    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
        return progress
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error saving progress:', error)
        }
        return progress
    }`;

newContent = newContent.replace(search2, replace2);

const search3 = `    try {
        localStorage.removeItem(STORAGE_KEY)
        return true
    } catch (error) {
        console.error('Error clearing progress:', error)
        return false
    }`;

const replace3 = `    try {
        localStorage.removeItem(STORAGE_KEY)
        return true
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error clearing progress:', error)
        }
        return false
    }`;

newContent = newContent.replace(search3, replace3);

fs.writeFileSync('src/utils/progressTracker.js', newContent);
