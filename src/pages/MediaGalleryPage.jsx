import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import MediaPlayer from '../components/shared/MediaPlayer'
import ImageGallery from '../components/shared/ImageGallery'

// Infographics data with language-specific images
const INFOGRAPHICS_DATA = [
    {
        id: 'bacterial-bootcamp',
        srcEn: '/images/infographics/Bacterial Bootcamp.png',
        srcAr: '/images/infographics/معسكر تدريب البكتيريا.png',
        titleEn: 'Bacterial Bootcamp',
        titleAr: 'معسكر تدريب البكتيريا',
        descriptionEn: 'Learn how bacteria develop resistance through training',
        descriptionAr: 'تعلم كيف تطور البكتيريا المقاومة من خلال التدريب'
    },
    {
        id: 'mechanism-of-action',
        srcEn: '/images/infographics/Mechanism of Action of Antibiotics.png',
        srcAr: '/images/infographics/آلية عمل المضادات الحيوية.png',
        titleEn: 'Mechanism of Action of Antibiotics',
        titleAr: 'آلية عمل المضادات الحيوية',
        descriptionEn: 'Understand how antibiotics work to fight bacteria',
        descriptionAr: 'افهم كيف تعمل المضادات الحيوية لمحاربة البكتيريا'
    },
    {
        id: 'invisible-shield',
        srcEn: '/images/infographics/The Invisible Shield.png',
        srcAr: '/images/infographics/الدرع الخفي.png',
        titleEn: 'The Invisible Shield',
        titleAr: 'الدرع الخفي',
        descriptionEn: 'Discover your body\'s natural defense mechanisms',
        descriptionAr: 'اكتشف آليات الدفاع الطبيعية في جسمك'
    }
]

// Helper function to get language-specific infographics
const getInfographics = (language) => {
    return INFOGRAPHICS_DATA.map(item => ({
        id: item.id,
        src: language === 'ar' ? item.srcAr : item.srcEn,
        titleEn: item.titleEn,
        titleAr: item.titleAr,
        descriptionEn: item.descriptionEn,
        descriptionAr: item.descriptionAr
    }))
}

// Sample videos data - replace with actual content
// Video content with language-specific files
const VIDEO_DATA = [
    {
        id: 'amr-yemen-crisis',
        srcEn: '/videos/AMR in Yemen - A Crisis.mp4',
        srcAr: '/videos/AMR in Yemen - A Crisis AR.mp4',
        titleEn: 'AMR in Yemen - A Crisis',
        titleAr: 'مقاومة المضادات الحيوية في اليمن - الأزمة داخل الأزمة',
        descriptionEn: 'Explore the antimicrobial resistance crisis in Yemen and its impact on healthcare',
        descriptionAr: 'استكشف أزمة مقاومة مضادات الميكروبات في اليمن وتأثيرها على الرعاية الصحية'
    }
]

// Helper function to get language-specific videos
const getVideoContent = (language) => {
    return VIDEO_DATA.map(item => ({
        id: item.id,
        src: language === 'ar' ? item.srcAr : item.srcEn,
        titleEn: item.titleEn,
        titleAr: item.titleAr,
        descriptionEn: item.descriptionEn,
        descriptionAr: item.descriptionAr
    }))
}


// Audio content with language-specific files
const AUDIO_DATA = [
    {
        id: 'amr-podcast',
        srcEn: '/audio/AMR Podcast EN.mp3',
        srcAr: '/audio/AMR Podcast AR.mp3',
        titleEn: 'AMR Podcast',
        titleAr: 'بودكاست مقاومة مضادات الميكروبات',
        descriptionEn: 'Listen and learn about antimicrobial resistance',
        descriptionAr: 'استمع وتعلم عن مقاومة مضادات الميكروبات'
    }
]

// Helper function to get language-specific audio
const getAudioContent = (language) => {
    return AUDIO_DATA.map(item => ({
        id: item.id,
        src: language === 'ar' ? item.srcAr : item.srcEn,
        titleEn: item.titleEn,
        titleAr: item.titleAr,
        descriptionEn: item.descriptionEn,
        descriptionAr: item.descriptionAr
    }))
}

export default function MediaGalleryPage() {
    const { t, language } = useApp()
    const [activeTab, setActiveTab] = useState('infographics')

    const tabs = [
        { id: 'infographics', labelEn: 'Infographics', labelAr: 'رسوم توضيحية', icon: '🖼️' },
        { id: 'videos', labelEn: 'Videos', labelAr: 'فيديوهات', icon: '🎬' },
        { id: 'audio', labelEn: 'Audio', labelAr: 'صوتي', icon: '🎧' }
    ]

    return (
        <div className="page container animate-fadeIn">
            <header style={{ marginBottom: 'var(--space-6)' }}>
                <h1 style={{ color: 'var(--color-primary)' }}>
                    {language === 'ar' ? 'معرض الوسائط' : 'Media Gallery'}
                </h1>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                    {language === 'ar'
                        ? 'استكشف المحتوى التعليمي المرئي والصوتي'
                        : 'Explore visual and audio educational content'
                    }
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
                        <span style={{ marginInlineEnd: 'var(--space-2)' }}>{tab.icon}</span>
                        {language === 'ar' ? tab.labelAr : tab.labelEn}
                    </button>
                ))}
            </div>

            {/* Infographics Tab */}
            {activeTab === 'infographics' && (
                <div className="animate-slideUp">
                    <div className="media-section-header">
                        <h3>{language === 'ar' ? 'الرسوم التوضيحية التعليمية' : 'Educational Infographics'}</h3>
                        <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                            {language === 'ar'
                                ? 'اضغط على أي صورة لعرضها بالحجم الكامل'
                                : 'Tap any image to view full size'
                            }
                        </p>
                    </div>
                    <ImageGallery images={getInfographics(language)} />
                </div>
            )}

            {/* Videos Tab */}
            {activeTab === 'videos' && (
                <div className="animate-slideUp">
                    <div className="media-section-header">
                        <h3>{language === 'ar' ? 'فيديوهات تعليمية' : 'Educational Videos'}</h3>
                        <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                            {language === 'ar'
                                ? 'شاهد وتعلم عن مقاومة المضادات الحيوية'
                                : 'Watch and learn about antibiotic resistance'
                            }
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {getVideoContent(language).map((video) => (
                            <div key={video.id} className="card">
                                <MediaPlayer
                                    type="video"
                                    src={video.src}
                                    title={language === 'ar' ? video.titleAr : video.titleEn}
                                    description={language === 'ar' ? video.descriptionAr : video.descriptionEn}
                                    downloadable={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Audio Tab */}
            {activeTab === 'audio' && (
                <div className="animate-slideUp">
                    <div className="media-section-header">
                        <h3>{language === 'ar' ? 'محتوى صوتي' : 'Audio Content'}</h3>
                        <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                            {language === 'ar'
                                ? 'استمع وتعلم - مثالي للاستماع أثناء التنقل'
                                : 'Listen and learn - perfect for on-the-go'
                            }
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {getAudioContent(language).map((audio) => (
                            <div key={audio.id} className="card">
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 'var(--space-4)',
                                    marginBottom: 'var(--space-3)'
                                }}>
                                    <span style={{ fontSize: '2rem' }}>🎧</span>
                                    <div>
                                        <h4 style={{ marginBottom: 'var(--space-1)' }}>
                                            {language === 'ar' ? audio.titleAr : audio.titleEn}
                                        </h4>
                                        <p style={{
                                            margin: 0,
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-text-tertiary)'
                                        }}>
                                            {language === 'ar' ? audio.descriptionAr : audio.descriptionEn}
                                        </p>
                                    </div>
                                </div>
                                <MediaPlayer
                                    type="audio"
                                    src={audio.src}
                                    downloadable={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
