// Progress tracking utilities for quiz history and statistics

const STORAGE_KEY = 'manaa_quizProgress'

export function getProgressData() {
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
        if (import.meta.env.DEV) {
            console.error('Error loading progress:', error)
        }
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
}

export function saveQuizResult(quizData) {
    const progress = getProgressData()
    const { score, total, correct, scenarios, date } = quizData
    
    const quizResult = {
        id: Date.now().toString(),
        date: date || new Date().toISOString(),
        score,
        total,
        correct,
        percentage: Math.round((correct / total) * 100),
        categories: [...new Set(scenarios.map(s => s.category))],
        scenarios: scenarios.map(s => ({ id: s.id, category: s.category }))
    }

    // Update progress
    progress.totalQuizzes += 1
    progress.totalQuestions += total
    progress.correctAnswers += correct
    progress.quizHistory.push(quizResult)
    
    // Keep only last 100 quizzes
    if (progress.quizHistory.length > 100) {
        progress.quizHistory = progress.quizHistory.slice(-100)
    }

    // Update best score
    if (quizResult.percentage > progress.bestScore) {
        progress.bestScore = quizResult.percentage
    }

    // Track perfect quizzes
    if (quizResult.percentage === 100) {
        progress.perfectQuizzes = (progress.perfectQuizzes || 0) + 1
    }

    // Update average score
    const totalPercentage = progress.quizHistory.reduce((sum, q) => sum + q.percentage, 0)
    progress.averageScore = Math.round(totalPercentage / progress.quizHistory.length)

    // Update categories played
    quizResult.categories.forEach(cat => {
        progress.categoriesPlayed[cat] = (progress.categoriesPlayed[cat] || 0) + 1
    })

    progress.lastQuizDate = quizResult.date

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
        return progress
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error saving progress:', error)
        }
        return progress
    }
}

export function getStatistics() {
    const progress = getProgressData()
    
    return {
        totalQuizzes: progress.totalQuizzes,
        totalQuestions: progress.totalQuestions,
        correctAnswers: progress.correctAnswers,
        accuracy: progress.totalQuestions > 0 
            ? Math.round((progress.correctAnswers / progress.totalQuestions) * 100) 
            : 0,
        bestScore: progress.bestScore,
        averageScore: progress.averageScore,
        categoriesPlayed: Object.keys(progress.categoriesPlayed).length,
        quizHistory: progress.quizHistory.slice(-10), // Last 10 quizzes
        lastQuizDate: progress.lastQuizDate,
        perfectQuizzes: progress.perfectQuizzes || 0
    }
}

export function clearProgress() {
    try {
        localStorage.removeItem(STORAGE_KEY)
        return true
    } catch (error) {
        if (import.meta.env.DEV) {
            console.error('Error clearing progress:', error)
        }
        return false
    }
}

