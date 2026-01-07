// Achievement Gallery - View all achievements

import { useState, useEffect } from 'react'
import { useApp } from '../contexts/AppContext'
import { ACHIEVEMENTS, getUnlockedAchievements } from '../utils/achievements'
import { getStatistics } from '../utils/progressTracker'
import { getStreakInfo } from '../utils/streakTracker'
import { getDailyChallengeStats } from '../utils/dailyChallenge'
import { shareAchievement } from '../utils/shareUtils'

export default function AchievementGalleryPage() {
    const { language, t } = useApp()
    const [unlocked, setUnlocked] = useState([])
    const [stats, setStats] = useState(null)
    const [streak, setStreak] = useState(null)
    const [dailyChallenge, setDailyChallenge] = useState(null)

    useEffect(() => {
        setUnlocked(getUnlockedAchievements())
        setStats(getStatistics())
        setStreak(getStreakInfo())
        setDailyChallenge(getDailyChallengeStats())
    }, [])

    const isUnlocked = (achievementId) => {
        return unlocked.includes(achievementId)
    }

    const checkCondition = (achievement) => {
        if (!stats || !streak) return false

        if (achievement.id.startsWith('streak') || achievement.id === 'consistent_learner') {
            return achievement.condition(streak)
        } else if (achievement.id.startsWith('daily_challenge')) {
            return dailyChallenge ? achievement.condition(dailyChallenge) : false
        } else {
            return achievement.condition(stats)
        }
    }

    const getProgress = (achievement) => {
        if (isUnlocked(achievement.id)) return 100

        if (!stats || !streak) return 0

        if (achievement.id.startsWith('streak') || achievement.id === 'consistent_learner') {
            const required = achievement.id === 'streak_3' ? 3 :
                           achievement.id === 'streak_7' ? 7 :
                           achievement.id === 'streak_30' ? 30 :
                           achievement.id === 'consistent_learner' ? 14 : 0
            return required > 0 ? Math.min(100, Math.round((streak.currentStreak / required) * 100)) : 0
        } else if (achievement.id.startsWith('daily_challenge')) {
            const required = achievement.id === 'daily_challenge_7' ? 7 : 30
            return dailyChallenge ? Math.min(100, Math.round((dailyChallenge.totalCompleted / required) * 100)) : 0
        } else if (achievement.id === 'quiz_10' || achievement.id === 'quiz_50' || achievement.id === 'quiz_100') {
            const required = achievement.id === 'quiz_10' ? 10 :
                           achievement.id === 'quiz_50' ? 50 : 100
            return Math.min(100, Math.round((stats.totalQuizzes / required) * 100))
        } else if (achievement.id === 'questions_100' || achievement.id === 'questions_500' || achievement.id === 'questions_1000') {
            const required = achievement.id === 'questions_100' ? 100 :
                           achievement.id === 'questions_500' ? 500 : 1000
            return Math.min(100, Math.round((stats.totalQuestions / required) * 100))
        } else if (achievement.id === 'accuracy_80' || achievement.id === 'accuracy_90') {
            const required = achievement.id === 'accuracy_80' ? 80 : 90
            return Math.min(100, Math.round((stats.accuracy / required) * 100))
        } else if (achievement.id === 'perfect_quiz_5') {
            return Math.min(100, Math.round(((stats.perfectQuizzes || 0) / 5) * 100))
        } else if (achievement.id === 'categories_5' || achievement.id === 'categories_all') {
            const required = achievement.id === 'categories_5' ? 5 : 16
            return Math.min(100, Math.round((stats.categoriesPlayed / required) * 100))
        }

        return checkCondition(achievement) ? 100 : 0
    }

    const allAchievements = Object.values(ACHIEVEMENTS)
    const unlockedCount = unlocked.length
    const totalCount = allAchievements.length

    return (
        <div className="page container animate-fadeIn">
            <header style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>
                    {language === 'ar' ? 'معرض الإنجازات' : 'Achievement Gallery'}
                </h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    {language === 'ar' 
                        ? `${unlockedCount} من ${totalCount} إنجاز مفتوح`
                        : `${unlockedCount} of ${totalCount} achievements unlocked`}
                </p>
            </header>

            {/* Progress Bar */}
            <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-2)'
                }}>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        {language === 'ar' ? 'التقدم الإجمالي' : 'Overall Progress'}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                        {Math.round((unlockedCount / totalCount) * 100)}%
                    </span>
                </div>
                <div style={{
                    height: '12px',
                    background: 'var(--color-surface-elevated)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        height: '100%',
                        width: `${(unlockedCount / totalCount) * 100}%`,
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                        borderRadius: 'var(--radius-full)',
                        transition: 'width 0.3s ease'
                    }} />
                </div>
            </div>

            {/* Achievements Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                gap: 'var(--space-4)'
            }}>
                {allAchievements.map(achievement => {
                    const unlocked = isUnlocked(achievement.id)
                    const progress = getProgress(achievement)
                    const name = language === 'ar' ? achievement.name.ar : achievement.name.en
                    const description = language === 'ar' ? achievement.description.ar : achievement.description.en

                    return (
                        <div
                            key={achievement.id}
                            className="card"
                            style={{
                                textAlign: 'center',
                                padding: 'var(--space-4)',
                                opacity: unlocked ? 1 : 0.6,
                                cursor: unlocked ? 'pointer' : 'default',
                                position: 'relative',
                                transition: 'all 0.2s ease',
                                border: unlocked ? '2px solid var(--color-primary)' : '2px solid transparent'
                            }}
                            onClick={() => {
                                if (unlocked) {
                                    shareAchievement({
                                        name,
                                        description
                                    }, language)
                                }
                            }}
                        >
                            {/* Lock overlay for locked achievements */}
                            {!unlocked && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: '2rem',
                                    opacity: 0.3
                                }}>
                                    🔒
                                </div>
                            )}

                            <div style={{
                                fontSize: '3rem',
                                marginBottom: 'var(--space-2)',
                                filter: unlocked ? 'none' : 'grayscale(100%)'
                            }}>
                                {achievement.icon}
                            </div>

                            <h4 style={{
                                fontSize: 'var(--font-size-sm)',
                                marginBottom: 'var(--space-1)',
                                color: unlocked ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'
                            }}>
                                {name}
                            </h4>

                            <p style={{
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-tertiary)',
                                margin: 0,
                                marginBottom: 'var(--space-2)',
                                minHeight: '32px'
                            }}>
                                {description}
                            </p>

                            {/* Progress bar for locked achievements */}
                            {!unlocked && progress > 0 && (
                                <div style={{
                                    height: '4px',
                                    background: 'var(--color-surface-elevated)',
                                    borderRadius: 'var(--radius-full)',
                                    overflow: 'hidden',
                                    marginTop: 'var(--space-2)'
                                }}>
                                    <div style={{
                                        height: '100%',
                                        width: `${progress}%`,
                                        background: 'var(--color-primary)',
                                        borderRadius: 'var(--radius-full)'
                                    }} />
                                </div>
                            )}

                            {unlocked && (
                                <div style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-success)',
                                    marginTop: 'var(--space-2)'
                                }}>
                                    ✓ {language === 'ar' ? 'مفتوح' : 'Unlocked'}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

