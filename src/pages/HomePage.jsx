import { useState, useEffect } from 'react'
import { useApp } from '../contexts/AppContext'
import { getStatistics } from '../utils/progressTracker'
import { getStreakInfo } from '../utils/streakTracker'
import { getUnlockedAchievements, getAchievementById } from '../utils/achievements'
import DailyChallenge from '../components/gamification/DailyChallenge'

// AMR Awareness Facts - bilingual
const AMR_FACTS = [
    {
        en: "Antibiotics don't work against viruses like colds and flu.",
        ar: "المضادات الحيوية لا تعمل ضد الفيروسات مثل الزكام والإنفلونزا."
    },
    {
        en: "Taking antibiotics when you don't need them helps create superbugs.",
        ar: "تناول المضادات عندما لا تحتاجها يساعد في خلق جراثيم خارقة."
    },
    {
        en: "Always complete your antibiotic course, even if you feel better.",
        ar: "أكمل دائماً دورة المضادات الحيوية، حتى لو شعرت بتحسن."
    },
    {
        en: "Never share antibiotics with others or use leftover prescriptions.",
        ar: "لا تشارك المضادات مع الآخرين أو تستخدم وصفات متبقية."
    },
    {
        en: "By 2050, resistant infections may kill 10 million people yearly.",
        ar: "بحلول 2050، قد تقتل العدوى المقاومة 10 ملايين شخص سنوياً."
    },
    {
        en: "Hand washing prevents infections and reduces the need for antibiotics.",
        ar: "غسل اليدين يمنع العدوى ويقلل الحاجة للمضادات الحيوية."
    },
    {
        en: "Vaccines prevent bacterial infections, reducing antibiotic use.",
        ar: "اللقاحات تمنع العدوى البكتيرية، مما يقلل استخدام المضادات."
    },
    {
        en: "Green mucus doesn't always mean you need antibiotics.",
        ar: "المخاط الأخضر لا يعني دائماً أنك تحتاج مضادات حيوية."
    }
]

export default function HomePage() {
    const { t, language } = useApp()
    const [currentFactIndex, setCurrentFactIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [stats, setStats] = useState(null)
    const [streak, setStreak] = useState(null)
    const [unlockedAchievements, setUnlockedAchievements] = useState([])
    
    // Load progress data
    useEffect(() => {
        setStats(getStatistics())
        setStreak(getStreakInfo())
        setUnlockedAchievements(getUnlockedAchievements())
    }, [])

    // Rotate facts every 10 seconds with fade effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setCurrentFactIndex((prev) => (prev + 1) % AMR_FACTS.length)
                setIsVisible(true)
            }, 300) // Wait for fade out before changing
        }, 10000)

        return () => clearInterval(interval)
    }, [])

    const currentFact = AMR_FACTS[currentFactIndex]

    const quickActions = [
        {
            icon: '❓',
            titleKey: 'home.quickActions.quiz.title',
            descKey: 'home.quickActions.quiz.desc',
            to: '/quiz',
            color: 'var(--color-primary)'
        },
        {
            icon: '📚',
            titleKey: 'home.quickActions.awareness.title',
            descKey: 'home.quickActions.awareness.desc',
            to: '/awareness',
            color: 'var(--color-accent)'
        }
    ]

    return (
        <div className="page container animate-fadeIn">
            {/* Header */}
            <header style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <h1 style={{
                    fontSize: 'var(--font-size-4xl)',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-2)'
                }}>
                    {t('appName')}
                </h1>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)' }}>
                    {t('appTagline')}
                </p>
            </header>

            <div className="flex flex-col gap-4">
                {/* Welcome Card */}
                <div className="card" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', color: 'white' }}>
                    <h2 style={{ color: 'white', marginBottom: 'var(--space-2)' }}>{t('home.welcomeTitle')}</h2>
                    <p style={{ opacity: 0.9, margin: 0 }}>
                        {t('home.welcomeMessage')}
                    </p>
                </div>

                {/* Daily Challenge */}
                <DailyChallenge />

                {/* Progress Dashboard */}
                {stats && stats.totalQuizzes > 0 && (
                    <div className="card" style={{ marginTop: 'var(--space-4)' }}>
                        <h3 style={{ marginBottom: 'var(--space-4)' }}>
                            {language === 'ar' ? 'تقدمك' : 'Your Progress'}
                        </h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 'var(--space-4)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            <div style={{ textAlign: 'center' }}>
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
                                    {language === 'ar' ? 'اختبارات مكتملة' : 'Quizzes'}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
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
                                    {language === 'ar' ? 'دقة' : 'Accuracy'}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
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
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    fontWeight: 'bold',
                                    color: streak?.currentStreak > 0 ? 'var(--color-danger)' : 'var(--color-text-tertiary)',
                                    marginBottom: 'var(--space-1)'
                                }}>
                                    {streak?.currentStreak || 0} 🔥
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    {language === 'ar' ? 'سلسلة أيام' : 'Day Streak'}
                                </div>
                            </div>
                        </div>
                        {unlockedAchievements.length > 0 && (
                            <div style={{
                                paddingTop: 'var(--space-4)',
                                borderTop: '1px solid var(--color-border-light)'
                            }}>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--space-2)'
                                }}>
                                    {language === 'ar' ? 'الإنجازات:' : 'Achievements:'}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    gap: 'var(--space-2)',
                                    flexWrap: 'wrap'
                                }}>
                                    {unlockedAchievements.slice(0, 5).map(achId => {
                                        const ach = getAchievementById(achId)
                                        if (!ach) return null
                                        return (
                                            <div
                                                key={achId}
                                                style={{
                                                    fontSize: '1.5rem',
                                                    title: language === 'ar' ? ach.name.ar : ach.name.en
                                                }}
                                            >
                                                {ach.icon}
                                            </div>
                                        )
                                    })}
                                    {unlockedAchievements.length > 5 && (
                                        <div style={{
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-tertiary)',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            +{unlockedAchievements.length - 5}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Quick Links */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-4)',
                    marginTop: 'var(--space-4)'
                }}>
                    <a
                        href="/achievements"
                        className="card animate-slideUp"
                        style={{
                            textDecoration: 'none',
                            borderInlineStart: '4px solid var(--color-warning)',
                            textAlign: 'center'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>🏆</span>
                        <h4 style={{ marginTop: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                            {language === 'ar' ? 'الإنجازات' : 'Achievements'}
                        </h4>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-tertiary)',
                            margin: 0
                        }}>
                            {language === 'ar' ? 'عرض جميع الإنجازات' : 'View all achievements'}
                        </p>
                    </a>
                    <a
                        href="/progress"
                        className="card animate-slideUp"
                        style={{
                            textDecoration: 'none',
                            borderInlineStart: '4px solid var(--color-accent)',
                            textAlign: 'center'
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>📊</span>
                        <h4 style={{ marginTop: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                            {language === 'ar' ? 'التقدم' : 'Progress'}
                        </h4>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-tertiary)',
                            margin: 0
                        }}>
                            {language === 'ar' ? 'عرض الإحصائيات' : 'View statistics'}
                        </p>
                    </a>
                </div>

                {/* Quick Actions Grid */}
                <h3 style={{ marginTop: 'var(--space-4)' }}>{t('home.whatToDo')}</h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-4)'
                }}>
                    {quickActions.map((action, index) => (
                        <a
                            key={index}
                            href={action.to}
                            className="card animate-slideUp"
                            style={{
                                textDecoration: 'none',
                                animationDelay: `${index * 100}ms`,
                                borderInlineStart: `4px solid ${action.color}`
                            }}
                        >
                            <span style={{ fontSize: '2rem' }}>{action.icon}</span>
                            <h4 style={{ marginTop: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                                {t(action.titleKey)}
                            </h4>
                            <p style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-tertiary)',
                                margin: 0
                            }}>
                                {t(action.descKey)}
                            </p>
                        </a>
                    ))}
                </div>

                {/* AMR Awareness Facts - Rotating */}
                <div className="card" style={{
                    marginTop: 'var(--space-4)',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--color-warning-light) 0%, var(--color-warning) 100%)',
                    minHeight: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2)',
                        marginBottom: 'var(--space-3)'
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>💡</span>
                        <h3 style={{ color: 'var(--color-text-primary)', margin: 0 }}>
                            {language === 'ar' ? 'هل تعلم؟' : 'Did You Know?'}
                        </h3>
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-primary)',
                        margin: 0,
                        fontWeight: '500',
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                        lineHeight: 1.6
                    }}>
                        {language === 'ar' ? currentFact.ar : currentFact.en}
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--space-1)',
                        marginTop: 'var(--space-3)'
                    }}>
                        {AMR_FACTS.map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: index === currentFactIndex
                                        ? 'var(--color-primary)'
                                        : 'rgba(0,0,0,0.2)',
                                    transition: 'background 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

