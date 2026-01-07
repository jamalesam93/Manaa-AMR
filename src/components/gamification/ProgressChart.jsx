// Progress Charts Component - Visualize progress over time

import { useApp } from '../../contexts/AppContext'
import { getProgressData } from '../../utils/progressTracker'

export default function ProgressChart({ type = 'score' }) {
    const { language } = useApp()
    const progress = getProgressData()
    
    // Get last 10 quizzes for chart
    const recentQuizzes = progress.quizHistory.slice(-10)
    
    if (recentQuizzes.length === 0) {
        return (
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--space-4)' }}>📊</div>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    {language === 'ar' 
                        ? 'لا توجد بيانات كافية لعرض الرسم البياني'
                        : 'Not enough data to display chart'}
                </p>
            </div>
        )
    }

    const maxValue = Math.max(...recentQuizzes.map(q => q.percentage), 100)
    const minValue = 0

    return (
        <div className="card">
            <h4 style={{ marginBottom: 'var(--space-4)' }}>
                {language === 'ar' 
                    ? type === 'score' ? 'النتائج الأخيرة' : 'التقدم بمرور الوقت'
                    : type === 'score' ? 'Recent Scores' : 'Progress Over Time'}
            </h4>
            
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '200px',
                gap: 'var(--space-1)',
                padding: 'var(--space-4)',
                background: 'var(--color-surface-elevated)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--space-4)'
            }}>
                {recentQuizzes.map((quiz, index) => {
                    const height = ((quiz.percentage - minValue) / (maxValue - minValue)) * 100
                    const isBest = quiz.percentage === progress.bestScore
                    
                    return (
                        <div
                            key={quiz.id}
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 'var(--space-1)',
                                height: '100%'
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: `${height}%`,
                                    background: isBest
                                        ? 'linear-gradient(180deg, var(--color-success), var(--color-success-dark))'
                                        : quiz.percentage >= 80
                                        ? 'linear-gradient(180deg, var(--color-primary), var(--color-primary-dark))'
                                        : quiz.percentage >= 50
                                        ? 'linear-gradient(180deg, var(--color-warning), var(--color-warning-dark))'
                                        : 'linear-gradient(180deg, var(--color-danger), var(--color-danger-dark))',
                                    borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                                    minHeight: '4px',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                title={`${quiz.percentage}% - ${new Date(quiz.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', { month: 'short', day: 'numeric' })}`}
                            >
                                {isBest && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: 'var(--font-size-xs)'
                                    }}>
                                        ⭐
                                    </div>
                                )}
                            </div>
                            <div style={{
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-tertiary)',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                transform: 'rotate(180deg)',
                                height: '20px'
                            }}>
                                {index + 1}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Legend */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-secondary)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        background: 'var(--color-success)',
                        borderRadius: 'var(--radius-sm)'
                    }} />
                    <span>{language === 'ar' ? 'أفضل' : 'Best'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        background: 'var(--color-primary)',
                        borderRadius: 'var(--radius-sm)'
                    }} />
                    <span>80%+</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        background: 'var(--color-warning)',
                        borderRadius: 'var(--radius-sm)'
                    }} />
                    <span>50-79%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        background: 'var(--color-danger)',
                        borderRadius: 'var(--radius-sm)'
                    }} />
                    <span>&lt;50%</span>
                </div>
            </div>
        </div>
    )
}

