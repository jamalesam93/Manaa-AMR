import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import { showToast } from '../utils/toastUtils'

// Text-based educational content
const INFOGRAPHICS = [
    {
        id: 'what-is-amr',
        icon: '🦠',
        titleKey: 'awareness.infographics.whatIsAMR.title',
        contentKey: 'awareness.infographics.whatIsAMR.content'
    },
    {
        id: 'how-spreads',
        icon: '🔄',
        titleKey: 'awareness.infographics.howSpreads.title',
        contentKey: 'awareness.infographics.howSpreads.content'
    },
    {
        id: 'complete-course',
        icon: '✅',
        titleKey: 'awareness.infographics.completeCourse.title',
        contentKey: 'awareness.infographics.completeCourse.content'
    },
    {
        id: 'when-antibiotics',
        icon: '💊',
        titleKey: 'awareness.infographics.whenAntibiotics.title',
        contentKey: 'awareness.infographics.whenAntibiotics.content'
    }
]

// Quick facts (shareable)
const QUICK_FACTS = [
    {
        stat: '700,000',
        unit: { en: 'deaths per year', ar: 'وفاة سنوياً' },
        description: { en: 'From antibiotic-resistant infections worldwide', ar: 'بسبب العدوى المقاومة للمضادات الحيوية عالمياً' }
    },
    {
        stat: '10M',
        unit: { en: 'by 2050', ar: 'بحلول 2050' },
        description: { en: 'Projected annual deaths if we don\'t act now', ar: 'الوفيات المتوقعة سنوياً إذا لم نتحرك الآن' }
    },
    {
        stat: '50%',
        unit: { en: 'of antibiotics', ar: 'من المضادات الحيوية' },
        description: { en: 'Are prescribed unnecessarily worldwide', ar: 'توصف بدون ضرورة عالمياً' }
    },
    {
        stat: '30%',
        unit: { en: 'of infections', ar: 'من العدوى' },
        description: { en: 'Can be prevented by handwashing', ar: 'يمكن منعها بغسل اليدين' }
    }
]

export default function AwarenessPage() {
    const { t, language } = useApp()
    const [activeTab, setActiveTab] = useState('infographics')
    const [selectedInfo, setSelectedInfo] = useState(null)

    const handleShare = (fact) => {
        const text = language === 'ar'
            ? `${fact.stat} ${fact.unit.ar}\n${fact.description.ar}\n\n#مناعة #مقاومة_المضادات_الحيوية`
            : `${fact.stat} ${fact.unit.en}\n${fact.description.en}\n\n#Manaa #AntibioticResistance`

        if (navigator.share) {
            navigator.share({ text })
        } else {
            navigator.clipboard.writeText(text)
            showToast(language === 'ar' ? 'تم نسخ النص!' : 'Text copied!')
        }
    }

    const tabs = [
        { id: 'infographics', label: t('awareness.tabs.infographics') },
        { id: 'yemen', label: t('awareness.tabs.yemen') },
        { id: 'facts', label: t('awareness.tabs.facts') }
    ]

    return (
        <div className="page container animate-fadeIn">
            <header style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>{t('awareness.title')}</h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    {t('awareness.subtitle')}
                </p>
            </header>

            {/* Tabs */}
            <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-6)',
                overflowX: 'auto',
                paddingBottom: 'var(--space-2)'
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Infographics Tab */}
            {activeTab === 'infographics' && (
                <div className="animate-slideUp">
                    {selectedInfo ? (
                        <div className="card">
                            <button
                                className="btn btn-outline btn-sm"
                                onClick={() => setSelectedInfo(null)}
                                style={{ marginBottom: 'var(--space-4)' }}
                            >
                                ← {language === 'ar' ? 'العودة' : 'Back'}
                            </button>

                            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                                <span style={{ fontSize: '4rem' }}>{selectedInfo.icon}</span>
                            </div>

                            <h2 style={{ marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
                                {t(selectedInfo.titleKey)}
                            </h2>

                            <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                                {t(selectedInfo.contentKey)}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {INFOGRAPHICS.map((info) => (
                                <div
                                    key={info.id}
                                    className="card"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedInfo(info)}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                        <span style={{ fontSize: '2.5rem' }}>{info.icon}</span>
                                        <div style={{ flex: 1 }}>
                                            <h4>{t(info.titleKey)}</h4>
                                        </div>
                                        <span style={{ fontSize: '1.5rem' }}>◀</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Yemen Impact Tab */}
            {activeTab === 'yemen' && (
                <div className="animate-slideUp">
                    <h3 style={{ marginBottom: 'var(--space-2)' }}>{t('awareness.yemen.title')}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
                        {t('awareness.yemen.subtitle')}
                    </p>

                    {/* Statistics Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-danger)' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--color-danger)' }}>
                                73.1%
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 'var(--space-2) 0 0 0' }}>
                                {t('awareness.yemen.stats.tmpSmx.label')}
                            </p>
                            <span className="badge" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}>
                                {t('awareness.yemen.stats.tmpSmx.source')}
                            </span>
                        </div>

                        <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--color-warning)' }}>
                            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: 'var(--color-warning)' }}>
                                65.2%
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 'var(--space-2) 0 0 0' }}>
                                {t('awareness.yemen.stats.amoxClav.label')}
                            </p>
                            <span className="badge" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-xs)' }}>
                                {t('awareness.yemen.stats.amoxClav.source')}
                            </span>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                41.7%
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 'var(--space-2) 0 0 0' }}>
                                {t('awareness.yemen.stats.staph.label')}
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                                39.8%
                            </div>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 'var(--space-2) 0 0 0' }}>
                                {t('awareness.yemen.stats.ecoli.label')}
                            </p>
                        </div>
                    </div>

                    {/* Al-Bayda Alert */}
                    <div className="card" style={{
                        marginBottom: 'var(--space-4)',
                        borderInlineStart: '4px solid var(--color-warning)',
                        background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, transparent 100%)'
                    }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                            ⚠️ {t('awareness.yemen.alarmingTitle')}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                            {t('awareness.yemen.alarmingDesc')}
                        </p>
                    </div>

                    {/* Cholera Alert */}
                    <div className="card" style={{
                        marginBottom: 'var(--space-4)',
                        borderInlineStart: '4px solid var(--color-danger)',
                        background: 'linear-gradient(135deg, rgba(200, 100, 100, 0.1) 0%, transparent 100%)'
                    }}>
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                            🦠 {t('awareness.yemen.choleraTitle')}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>
                            {t('awareness.yemen.choleraDesc')}
                        </p>
                    </div>

                    {/* Sources */}
                    <p style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-tertiary)',
                        textAlign: 'center',
                        fontStyle: 'italic'
                    }}>
                        {t('awareness.yemen.sources')}
                    </p>
                </div>
            )}


            {/* Facts Tab */}
            {activeTab === 'facts' && (
                <div className="animate-slideUp">
                    <h3 style={{ marginBottom: 'var(--space-4)' }}>{t('awareness.facts.title')}</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
                        {QUICK_FACTS.map((fact, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ textAlign: 'center', cursor: 'pointer' }}
                                onClick={() => handleShare(fact)}
                            >
                                <div style={{
                                    fontSize: 'var(--font-size-3xl)',
                                    fontWeight: 'bold',
                                    color: 'var(--color-primary)',
                                    marginBottom: 'var(--space-1)'
                                }}>
                                    {fact.stat}
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-secondary-dark)',
                                    marginBottom: 'var(--space-2)'
                                }}>
                                    {language === 'ar' ? fact.unit.ar : fact.unit.en}
                                </div>
                                <p style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-text-tertiary)',
                                    margin: 0
                                }}>
                                    {language === 'ar' ? fact.description.ar : fact.description.en}
                                </p>
                                <div style={{
                                    marginTop: 'var(--space-3)',
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-primary)'
                                }}>
                                    📤 {t('awareness.facts.tapToShare')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
