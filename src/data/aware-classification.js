/**
 * WHO AWaRe (Access, Watch, Reserve) Classification 2025
 * Source: WHO Model List of Essential Medicines 2025 (24th EML / 10th EMLc)
 * Reference: B09489-eng.xlsx
 * 
 * Categories:
 * - ACCESS: First-line antibiotics, widely available, lower resistance potential
 * - WATCH: Higher resistance potential, limited to specific indications
 * - RESERVE: Last resort for MDR infections, preserve for critical situations
 */

export const AWARE_CATEGORIES = {
    ACCESS: {
        color: '#22c55e', // Green
        colorDark: '#16a34a',
        label: { en: 'Access', ar: 'الوصول' },
        description: {
            en: 'First-line antibiotics for common infections. Should be widely available, affordable, and quality-assured.',
            ar: 'مضادات حيوية الخط الأول للعدوى الشائعة. يجب أن تكون متاحة على نطاق واسع وبأسعار معقولة.'
        }
    },
    WATCH: {
        color: '#eab308', // Yellow
        colorDark: '#ca8a04',
        label: { en: 'Watch', ar: 'مراقبة' },
        description: {
            en: 'Higher resistance potential. Recommended only for specific, limited indications.',
            ar: 'احتمالية مقاومة أعلى. يوصى بها فقط لمؤشرات محددة ومحدودة.'
        }
    },
    RESERVE: {
        color: '#ef4444', // Red
        colorDark: '#dc2626',
        label: { en: 'Reserve', ar: 'احتياط' },
        description: {
            en: 'Last resort antibiotics for MDR infections. Use only when all alternatives have failed.',
            ar: 'مضادات حيوية الملاذ الأخير للعدوى المقاومة للأدوية المتعددة. تستخدم فقط عند فشل جميع البدائل.'
        }
    }
}

export const AWARE_ANTIBIOTICS = [
    // ===== ACCESS GROUP =====
    { name: 'Amikacin', class: 'Aminoglycosides', category: 'ACCESS', atc: 'J01GB06', eml2025: true },
    { name: 'Amoxicillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CA04', eml2025: true },
    { name: 'Amoxicillin/Clavulanic acid', class: 'Beta-lactam/Beta-lactamase inhibitor', category: 'ACCESS', atc: 'J01CR02', eml2025: true },
    { name: 'Ampicillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CA01', eml2025: true },
    { name: 'Benzylpenicillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CE01', eml2025: true },
    { name: 'Cefalexin', class: 'First-gen Cephalosporins', category: 'ACCESS', atc: 'J01DB01', eml2025: true },
    { name: 'Cefazolin', class: 'First-gen Cephalosporins', category: 'ACCESS', atc: 'J01DB04', eml2025: true },
    { name: 'Chloramphenicol', class: 'Amphenicols', category: 'ACCESS', atc: 'J01BA01', eml2025: true },
    { name: 'Clindamycin', class: 'Lincosamides', category: 'ACCESS', atc: 'J01FF01', eml2025: true },
    { name: 'Cloxacillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CF02', eml2025: true },
    { name: 'Doxycycline', class: 'Tetracyclines', category: 'ACCESS', atc: 'J01AA02', eml2025: true },
    { name: 'Flucloxacillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CF05', eml2025: true },
    { name: 'Gentamicin', class: 'Aminoglycosides', category: 'ACCESS', atc: 'J01GB03', eml2025: true },
    { name: 'Metronidazole', class: 'Nitroimidazoles', category: 'ACCESS', atc: 'J01XD01', eml2025: true },
    { name: 'Nitrofurantoin', class: 'Nitrofuran derivatives', category: 'ACCESS', atc: 'J01XE01', eml2025: true },
    { name: 'Phenoxymethylpenicillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CE02', eml2025: true },
    { name: 'Procaine benzylpenicillin', class: 'Penicillins', category: 'ACCESS', atc: 'J01CE09', eml2025: true },
    { name: 'Spectinomycin', class: 'Aminoglycosides', category: 'ACCESS', atc: 'J01XX04', eml2025: true },
    { name: 'Sulfamethoxazole/Trimethoprim', class: 'Sulfonamides/Trimethoprim', category: 'ACCESS', atc: 'J01EE01', eml2025: true },
    { name: 'Trimethoprim', class: 'Trimethoprim', category: 'ACCESS', atc: 'J01EA01', eml2025: true },

    // ===== WATCH GROUP =====
    { name: 'Azithromycin', class: 'Macrolides', category: 'WATCH', atc: 'J01FA10', eml2025: true },
    { name: 'Cefixime', class: 'Third-gen Cephalosporins', category: 'WATCH', atc: 'J01DD08', eml2025: true },
    { name: 'Cefotaxime', class: 'Third-gen Cephalosporins', category: 'WATCH', atc: 'J01DD01', eml2025: true },
    { name: 'Ceftazidime', class: 'Third-gen Cephalosporins', category: 'WATCH', atc: 'J01DD02', eml2025: true },
    { name: 'Ceftriaxone', class: 'Third-gen Cephalosporins', category: 'WATCH', atc: 'J01DD04', eml2025: true },
    { name: 'Cefuroxime', class: 'Second-gen Cephalosporins', category: 'WATCH', atc: 'J01DC02', eml2025: true },
    { name: 'Ciprofloxacin', class: 'Fluoroquinolones', category: 'WATCH', atc: 'J01MA02', eml2025: true },
    { name: 'Clarithromycin', class: 'Macrolides', category: 'WATCH', atc: 'J01FA09', eml2025: true },
    { name: 'Ertapenem', class: 'Carbapenems', category: 'WATCH', atc: 'J01DH03', eml2025: true },
    { name: 'Imipenem/Cilastatin', class: 'Carbapenems', category: 'WATCH', atc: 'J01DH51', eml2025: true },
    { name: 'Levofloxacin', class: 'Fluoroquinolones', category: 'WATCH', atc: 'J01MA12', eml2025: true },
    { name: 'Meropenem', class: 'Carbapenems', category: 'WATCH', atc: 'J01DH02', eml2025: true },
    { name: 'Moxifloxacin', class: 'Fluoroquinolones', category: 'WATCH', atc: 'J01MA14', eml2025: true },
    { name: 'Piperacillin/Tazobactam', class: 'Beta-lactam/Beta-lactamase inhibitor', category: 'WATCH', atc: 'J01CR05', eml2025: true },
    { name: 'Vancomycin (IV)', class: 'Glycopeptides', category: 'WATCH', atc: 'J01XA01', eml2025: true },
    { name: 'Teicoplanin', class: 'Glycopeptides', category: 'WATCH', atc: 'J01XA02', eml2025: true },

    // ===== RESERVE GROUP =====
    { name: 'Aztreonam', class: 'Monobactams', category: 'RESERVE', atc: 'J01DF01', eml2025: true },
    { name: 'Cefiderocol', class: 'Siderophore Cephalosporins', category: 'RESERVE', atc: 'J01DI04', eml2025: true },
    { name: 'Ceftazidime/Avibactam', class: 'Third-gen Ceph/Inhibitor', category: 'RESERVE', atc: 'J01DD52', eml2025: true },
    { name: 'Ceftolozane/Tazobactam', class: 'Cephalosporin/Inhibitor', category: 'RESERVE', atc: 'J01DI54', eml2025: true },
    { name: 'Colistin (IV)', class: 'Polymyxins', category: 'RESERVE', atc: 'J01XB01', eml2025: true },
    { name: 'Daptomycin', class: 'Lipopeptides', category: 'RESERVE', atc: 'J01XX09', eml2025: true },
    { name: 'Fosfomycin (IV)', class: 'Phosphonic acids', category: 'RESERVE', atc: 'J01XX01', eml2025: true },
    { name: 'Linezolid', class: 'Oxazolidinones', category: 'RESERVE', atc: 'J01XX08', eml2025: true },
    { name: 'Meropenem/Vaborbactam', class: 'Carbapenem/Inhibitor', category: 'RESERVE', atc: 'J01DH52', eml2025: true },
    { name: 'Plazomicin', class: 'Aminoglycosides', category: 'RESERVE', atc: 'J01GB14', eml2025: true },
    { name: 'Polymyxin B', class: 'Polymyxins', category: 'RESERVE', atc: 'J01XB02', eml2025: true },
    { name: 'Tedizolid', class: 'Oxazolidinones', category: 'RESERVE', atc: 'J01XX11', eml2025: true },
    { name: 'Tigecycline', class: 'Glycylcyclines', category: 'RESERVE', atc: 'J01AA12', eml2025: true },
]

// Fixed-dose combinations NOT RECOMMENDED by WHO
export const NOT_RECOMMENDED_COMBINATIONS = [
    { name: 'Amoxicillin/Cloxacillin', reason: 'No clinical advantage over single agents' },
    { name: 'Amoxicillin/Dicloxacillin', reason: 'No clinical advantage over single agents' },
    { name: 'Amoxicillin/Flucloxacillin', reason: 'No clinical advantage over single agents' },
    { name: 'Ciprofloxacin/Metronidazole', reason: 'Use separate agents when both indicated' },
    { name: 'Ciprofloxacin/Tinidazole', reason: 'Use separate agents when both indicated' },
    { name: 'Ciprofloxacin/Ornidazole', reason: 'Use separate agents when both indicated' },
    { name: 'Ofloxacin/Metronidazole', reason: 'Use separate agents when both indicated' },
    { name: 'Ofloxacin/Ornidazole', reason: 'Use separate agents when both indicated' },
    { name: 'Cefixime/Azithromycin', reason: 'No clinical advantage; promotes resistance' },
    { name: 'Cefixime/Ofloxacin', reason: 'No clinical advantage; promotes resistance' },
    { name: 'Cefpodoxime/Azithromycin', reason: 'No clinical advantage; promotes resistance' },
    { name: 'Azithromycin/Secnidazole', reason: 'No clinical advantage; promotes resistance' },
]

// Helper function to get AWaRe category for an antibiotic
export function getAWaReCategory(antibioticName) {
    const lower = antibioticName.toLowerCase()
    const found = AWARE_ANTIBIOTICS.find(a => a.name.toLowerCase().includes(lower) || lower.includes(a.name.toLowerCase()))
    return found ? found.category : null
}

// Helper function to check if combination is not recommended
export function isNotRecommendedCombination(combinationName) {
    const lower = combinationName.toLowerCase()
    return NOT_RECOMMENDED_COMBINATIONS.find(c => c.name.toLowerCase() === lower)
}
