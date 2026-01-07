// Progress Page - View detailed progress and charts

import { useState, useEffect } from 'react'
import { useApp } from '../contexts/AppContext'
import { getStatistics, getProgressData } from '../utils/progressTracker'
import { getStreakInfo } from '../utils/streakTracker'
import ProgressChart from '../components/gamification/ProgressChart'

export default function ProgressPage() {
    const { language, t } = useApp()
    const [stats, setStats] = useState(null)
    const [streak, setStreak] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        setStats(getStatistics())
        setStreak(getStreakInfo())
        setProgress(getProgressData())
    }, [])

    if (!stats || !streak || !progress) {
        return (
            <div className="page container animate-fadeIn">
                <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>⏳</div>
                    <p>{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
                </div>
            </div>
        )
    }

    const categoryStats = Object.entries(progress.categoriesPlayed || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

    return (
        <div className="page container animate-fadeIn">
            <header style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>
                    {language === 'ar' ? 'التقدم والإحصائيات' : 'Progress & Statistics'}
                </h1>
            </header>

            {/* Overall Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)'
            }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'bold',
                        color: 'var(--color-primary)',
                        marginBottom: 'var(--space-1)'
                    }}>
                        {stats.totalQuizzes}
                    </div>
                    <div style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {language === 'ar' ? 'اختبارات مكتملة' : 'Quizzes Completed'}
                    </div>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'bold',
                        color: 'var(--color-success)',
                        marginBottom: 'var(--space-1)'
                    }}>
                        {stats.accuracy}%
                    </div>
                    <div style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {language === 'ar' ? 'الدقة الإجمالية' : 'Overall Accuracy'}
                    </div>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'bold',
                        color: 'var(--color-warning)',
                        marginBottom: 'var(--space-1)'
                    }}>
                        {stats.bestScore}%
                    </div>
                    <div style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {language === 'ar' ? 'أفضل نتيجة' : 'Best Score'}
                    </div>
                </div>

                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'bold',
                        color: streak.currentStreak > 0 ? 'var(--color-danger)' : 'var(--color-text-tertiary)',
                        marginBottom: 'var(--space-1)'
                    }}>
                        {streak.currentStreak} 🔥
                    </div>
                    <div style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)'
                    }}>
                        {language === 'ar' ? 'سلسلة أيام' : 'Day Streak'}
                    </div>
                </div>
            </div>

            {/* Progress Chart */}
            <ProgressChart type="score" />

            {/* Category Breakdown */}
            {categoryStats.length > 0 && (
                <div className="card" style={{ marginTop: 'var(--space-6)' }}>
                    <h3 style={{ marginBottom: 'var(--space-4)' }}>
                        {language === 'ar' ? 'الفئات الأكثر لعباً' : 'Most Played Categories'}
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)'
                    }}>
                        {categoryStats.map(([category, count]) => {
                            const maxCount = Math.max(...categoryStats.map(c => c[1]))
                            const percentage = (count / maxCount) * 100

                            return (
                                <div key={category}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: 'var(--space-1)'
                                    }}>
                                        <span style={{
                                            fontSize: 'var(--font-size-sm)',
                                            fontWeight: '500',
                                            textTransform: 'capitalize'
                                        }}>
                                            {category}
                                        </span>
                                        <span style={{
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-secondary)'
                                        }}>
                                            {count} {language === 'ar' ? 'مرة' : 'times'}
                                        </span>
                                    </div>
                                    <div style={{
                                        height: '8px',
                                        background: 'var(--color-surface-elevated)',
                                        borderRadius: 'var(--radius-full)',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${percentage}%`,
                                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))',
                                            borderRadius: 'var(--radius-full)',
                                            transition: 'width 0.3s ease'
                                        }} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Additional Stats */}
            <div className="card" style={{ marginTop: 'var(--space-6)' }}>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>
                    {language === 'ar' ? 'إحصائيات إضافية' : 'Additional Statistics'}
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-4)'
                }}>
                    <div>
                        <div style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--space-1)'
                        }}>
                            {stats.totalQuestions}
                        </div>
                        <div style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            {language === 'ar' ? 'إجمالي الأسئلة' : 'Total Questions'}
                        </div>
                    </div>
                    <div>
                        <div style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--space-1)'
                        }}>
                            {stats.averageScore}%
                        </div>
                        <div style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            {language === 'ar' ? 'متوسط النتيجة' : 'Average Score'}
                        </div>
                    </div>
                    <div>
                        <div style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--space-1)'
                        }}>
                            {streak.longestStreak}
                        </div>
                        <div style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            {language === 'ar' ? 'أطول سلسلة' : 'Longest Streak'}
                        </div>
                    </div>
                    <div>
                        <div style={{
                            fontSize: 'var(--font-size-lg)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--space-1)'
                        }}>
                            {stats.categoriesPlayed}
                        </div>
                        <div style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-secondary)'
                        }}>
                            {language === 'ar' ? 'فئات مختلفة' : 'Different Categories'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

