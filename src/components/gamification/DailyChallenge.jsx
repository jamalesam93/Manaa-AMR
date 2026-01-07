// Daily Challenge Component - Question of the Day

import { useState, useEffect } from 'react'
import { useApp } from '../../contexts/AppContext'
import { ALL_QUIZ_SCENARIOS } from '../../data/quiz-scenarios'
import { getDailyChallenge, setDailyChallenge, isDailyChallengeCompleted, getDailyChallengeStats } from '../../utils/dailyChallenge'
import { updateStreak } from '../../utils/streakTracker'
import { checkAchievements } from '../../utils/achievements'
import { getStatistics } from '../../utils/progressTracker'
import { getStreakInfo } from '../../utils/streakTracker'
import AchievementToast from './AchievementToast'

export default function DailyChallenge() {
    const { language, t } = useApp()
    const [challenge, setChallenge] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [newAchievement, setNewAchievement] = useState(null)
    const [stats, setStats] = useState(null)

    useEffect(() => {
        // Check if already completed today
        const completedToday = isDailyChallengeCompleted()
        if (completedToday) {
            setCompleted(true)
            const challengeData = getDailyChallenge()
            if (challengeData) {
                // Find the scenario by ID
                const scenario = ALL_QUIZ_SCENARIOS.find(s => s.id === challengeData.scenarioId)
                if (scenario) {
                    setChallenge(scenario)
                    setShowResult(true)
                    setIsCorrect(challengeData.isCorrect)
                }
            }
            return
        }

        // Get today's challenge scenario
        // Use date as seed for consistent daily question
        const today = new Date()
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
        
        // Simple seeded random to get same question each day
        const scenarios = [...ALL_QUIZ_SCENARIOS]
        const index = seed % scenarios.length
        const dailyScenario = scenarios[index]
        
        setChallenge(dailyScenario)
        setStats(getDailyChallengeStats())
    }, [])

    const getText = (textObj) => language === 'ar' ? textObj.ar : textObj.en

    const handleSelectAnswer = (answerIndex) => {
        if (completed) return
        setSelectedAnswer(answerIndex)
    }

    const handleSubmit = () => {
        if (selectedAnswer === null || !challenge) return

        const correct = selectedAnswer === challenge.correctAnswer
        setIsCorrect(correct)
        setShowResult(true)
        setCompleted(true)

        // Save challenge completion
        setDailyChallenge(challenge, selectedAnswer, correct)

        // Update streak
        updateStreak()

        // Check for achievements
        const progress = getStatistics()
        const streak = getStreakInfo()
        const dailyStats = getDailyChallengeStats()
        const achievements = checkAchievements(progress, streak, language, dailyStats)

        if (achievements.newlyUnlocked.length > 0) {
            setNewAchievement(achievements.newlyUnlocked[0])
        }
    }

    if (!challenge) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>⏳</div>
                <p>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
            </div>
        )
    }

    const options = getText(challenge.options)

    return (
        <>
            {newAchievement && (
                <AchievementToast
                    achievement={newAchievement}
                    onClose={() => setNewAchievement(null)}
                    language={language}
                />
            )}
            
            <div className="card" style={{
                background: completed 
                    ? 'linear-gradient(135deg, var(--color-success) 0%, var(--color-success-dark) 100%)'
                    : 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                color: 'white',
                marginBottom: 'var(--space-4)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                    <span style={{ fontSize: '2rem' }}>📅</span>
                    <div>
                        <h3 style={{ color: 'white', margin: 0 }}>
                            {language === 'ar' ? 'تحدي اليوم' : 'Daily Challenge'}
                        </h3>
                        <p style={{ fontSize: 'var(--font-size-sm)', opacity: 0.9, margin: 0 }}>
                            {language === 'ar' 
                                ? completed 
                                    ? 'تم إكمال التحدي اليوم!' 
                                    : 'سؤال واحد كل يوم'
                                : completed 
                                    ? 'Challenge completed!' 
                                    : 'One question per day'}
                        </p>
                    </div>
                </div>
                {stats && stats.totalCompleted > 0 && (
                    <div style={{
                        fontSize: 'var(--font-size-sm)',
                        opacity: 0.9,
                        paddingTop: 'var(--space-2)',
                        borderTop: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        {language === 'ar' 
                            ? `✅ ${stats.totalCompleted} ${stats.totalCompleted === 1 ? 'تحدي مكتمل' : 'تحديات مكتملة'}`
                            : `✅ ${stats.totalCompleted} ${stats.totalCompleted === 1 ? 'challenge completed' : 'challenges completed'}`}
                    </div>
                )}
            </div>

            {!showResult ? (
                <div className="card">
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                        <span style={{ fontSize: '3rem' }}>{challenge.icon}</span>
                    </div>

                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.7,
                        marginBottom: 'var(--space-4)'
                    }}>
                        {getText(challenge.scenario)}
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-4)'
                    }}>
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className="card"
                                onClick={() => handleSelectAnswer(index)}
                                disabled={completed}
                                style={{
                                    cursor: completed ? 'not-allowed' : 'pointer',
                                    textAlign: language === 'ar' ? 'right' : 'left',
                                    padding: 'var(--space-4)',
                                    border: selectedAnswer === index
                                        ? '2px solid var(--color-primary)'
                                        : '2px solid transparent',
                                    background: selectedAnswer === index
                                        ? 'var(--color-primary-light)'
                                        : 'var(--color-surface)',
                                    transition: 'all 0.2s ease',
                                    opacity: completed ? 0.6 : 1
                                }}
                            >
                                <span style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    background: selectedAnswer === index
                                        ? 'var(--color-primary)'
                                        : 'var(--color-surface-elevated)',
                                    color: selectedAnswer === index ? 'white' : 'var(--color-text-secondary)',
                                    marginInlineEnd: 'var(--space-3)',
                                    fontWeight: 'bold',
                                    fontSize: 'var(--font-size-sm)'
                                }}>
                                    {String.fromCharCode(65 + index)}
                                </span>
                                {option}
                            </button>
                        ))}
                    </div>

                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleSubmit}
                        disabled={selectedAnswer === null || completed}
                        style={{
                            width: '100%',
                            opacity: selectedAnswer === null || completed ? 0.5 : 1
                        }}
                    >
                        {language === 'ar' ? 'إرسال الإجابة' : 'Submit Answer'}
                    </button>
                </div>
            ) : (
                <div className="card" style={{
                    borderColor: isCorrect ? 'var(--color-success)' : 'var(--color-danger)',
                    borderWidth: '2px',
                    borderStyle: 'solid'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        marginBottom: 'var(--space-3)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>
                            {isCorrect ? '🎉' : '💡'}
                        </span>
                        <h3 style={{
                            margin: 0,
                            color: isCorrect ? 'var(--color-success)' : 'var(--color-danger)'
                        }}>
                            {isCorrect
                                ? (language === 'ar' ? 'صحيح!' : 'Correct!')
                                : (language === 'ar' ? 'ليس تماماً...' : 'Not quite...')}
                        </h3>
                    </div>

                    {!isCorrect && (
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--space-3)',
                            fontSize: 'var(--font-size-sm)'
                        }}>
                            {language === 'ar' ? 'الإجابة الصحيحة: ' : 'Correct answer: '}
                            <strong>{options[challenge.correctAnswer]}</strong>
                        </p>
                    )}

                    <p style={{
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.7,
                        marginBottom: 0
                    }}>
                        {getText(challenge.explanation)}
                    </p>
                </div>
            )}
        </>
    )
}

