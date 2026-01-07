// Category selection component for quiz

import { QUIZ_CATEGORIES } from '../../data/quiz-scenarios'

const CATEGORY_LABELS = {
    en: {
        all: 'All Categories',
        doctor: 'At the Doctor',
        medication: 'Medication Use',
        children: 'Children & Kids',
        food: 'Food & Safety',
        pets: 'Pets & Animals',
        hygiene: 'Hygiene',
        travel: 'Travel',
        environment: 'Environment',
        social: 'Social Situations',
        myths: 'Myths & Facts',
        workplace: 'Workplace',
        shopping: 'Shopping',
        medical: 'Medical Conditions',
        lifestyle: 'Lifestyle',
        final: 'Final Thoughts',
        future: 'Future'
    },
    ar: {
        all: 'جميع الفئات',
        doctor: 'عند الطبيب',
        medication: 'استخدام الأدوية',
        children: 'الأطفال',
        food: 'الطعام والسلامة',
        pets: 'الحيوانات الأليفة',
        hygiene: 'النظافة',
        travel: 'السفر',
        environment: 'البيئة',
        social: 'المواقف الاجتماعية',
        myths: 'الأساطير والحقائق',
        workplace: 'مكان العمل',
        shopping: 'التسوق',
        medical: 'الحالات الطبية',
        lifestyle: 'نمط الحياة',
        final: 'أفكار نهائية',
        future: 'المستقبل'
    }
}

export default function CategorySelector({ selectedCategory, onSelect, language }) {
    const labels = CATEGORY_LABELS[language] || CATEGORY_LABELS.en

    return (
        <div style={{
            marginBottom: 'var(--space-6)'
        }}>
            <h4 style={{ marginBottom: 'var(--space-3)' }}>
                {language === 'ar' ? 'اختر الفئة:' : 'Select Category:'}
            </h4>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-2)'
            }}>
                <button
                    className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'}`
                    onClick={() => onSelect('all')}
                    style={{ fontSize: 'var(--font-size-sm)' }}
                >
                    {labels.all}
                </button>
                {QUIZ_CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => onSelect(cat)}
                        style={{ fontSize: 'var(--font-size-sm)' }}
                    >
                        {labels[cat] || cat}
                    </button>
                ))}
            </div>
        </div>
    )
}

