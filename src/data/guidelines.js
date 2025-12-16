/**
 * MANA'A CLINICAL GUIDELINES DATA - UPDATED WITH LATEST EVIDENCE
 * Sources: IDSA/ATS 2019, IDSA 2025, Surviving Sepsis 2024, WHO 2024
 */

export const GUIDELINES = [
    // ===== RESPIRATORY =====
    {
        id: 'cap',
        icon: '🫁',
        title: { en: 'Community-Acquired Pneumonia', ar: 'الالتهاب الرئوي المكتسب من المجتمع' },
        category: { en: 'Respiratory', ar: 'عدوى تنفسية' },
        evidenceLevel: 'A',
        summary: { en: 'IDSA/ATS 2019 CAP guidelines for adults', ar: 'إرشادات IDSA/ATS 2019 للالتهاب الرئوي' },
        contentEn: `
## Community-Acquired Pneumonia (CAP) - IDSA/ATS 2019

### Severity Assessment (CURB-65)
- **C**: Confusion (new onset)
- **U**: Urea > 7 mmol/L (BUN > 20 mg/dL)
- **R**: Respiratory rate ≥ 30/min
- **B**: Blood pressure (SBP <90 or DBP ≤60 mmHg)
- **65**: Age ≥ 65 years

**Score 0-1**: Outpatient | **Score 2**: Consider admission | **Score 3-5**: Hospital/ICU

---

### OUTPATIENT Treatment

**Healthy adults (no comorbidities):**
- Amoxicillin 1g TDS x 5 days (FIRST-LINE)
- OR Doxycycline 100mg BD x 5 days
- OR Macrolide (Azithromycin 500mg day 1, then 250mg x 4 days) - ONLY if local resistance <25%

**Adults WITH comorbidities** (heart, lung, liver, renal disease, diabetes, alcoholism, cancer):
- Amoxicillin-Clavulanate 875/125mg BD + Macrolide
- OR Cefuroxime 500mg BD + Doxycycline 100mg BD
- OR Respiratory fluoroquinolone alone (Levofloxacin 750mg OD or Moxifloxacin 400mg OD)

---

### INPATIENT Treatment (Non-ICU)

**Standard regimen:**
- Ceftriaxone 1-2g IV OD + Azithromycin 500mg IV/PO OD
- OR Ampicillin-Sulbactam 1.5-3g IV q6h + Macrolide
- OR Respiratory fluoroquinolone alone

**Duration:** Minimum 5 days; extend if not afebrile >48h or clinically unstable

---

### SEVERE CAP / ICU

- Ceftriaxone 2g IV OD + Azithromycin 500mg IV OD
- OR Ceftriaxone + Respiratory fluoroquinolone

**If Pseudomonas risk factors** (structural lung disease, recent hospitalization, recent IV antibiotics):
- Piperacillin-Tazobactam 4.5g IV q6h + Ciprofloxacin 400mg IV q8h
- OR Meropenem 1g IV q8h + Levofloxacin 750mg IV OD

**If MRSA risk factors:** Add Vancomycin 15-20mg/kg IV q8-12h

---

### Key Points
- Blood cultures recommended for inpatients (especially severe CAP)
- Procalcitonin NOT required to decide on starting antibiotics
- Steroids NOT routinely recommended
- Treat influenza if positive (Oseltamivir) alongside antibiotics
    `,
        contentAr: `
## الالتهاب الرئوي المكتسب من المجتمع - IDSA/ATS 2019

### تقييم الشدة (CURB-65)
- **C**: تشوش ذهني جديد
- **U**: يوريا > 7 مليمول/لتر
- **R**: معدل التنفس ≥ 30/دقيقة
- **B**: ضغط الدم (انقباضي <90 أو انبساطي ≤60)
- **65**: العمر ≥ 65 سنة

---

### العلاج الخارجي

**بالغين أصحاء (بدون أمراض مصاحبة):**
- أموكسيسيلين 1غ ثلاث مرات يومياً لمدة 5 أيام (الخط الأول)
- أو دوكسيسيكلين 100 ملغ مرتين يومياً
- أو ماكروليد (أزيثرومايسين) - فقط إذا المقاومة المحلية <25%

**بالغين مع أمراض مصاحبة:**
- أموكسيسيلين-كلافولانات + ماكروليد
- أو سيفوروكسيم + دوكسيسيكلين
- أو فلوروكينولون تنفسي وحده

---

### العلاج بالتنويم (غير العناية المركزة)

- سيفترياكسون 1-2غ وريدي يومياً + أزيثرومايسين 500 ملغ
- أو أمبيسيلين-سلباكتام + ماكروليد

**المدة:** 5 أيام كحد أدنى

---

### الحالات الشديدة / العناية المركزة

- سيفترياكسون 2غ وريدي + أزيثرومايسين وريدي
- إذا خطر Pseudomonas: بيبيراسيلين-تازوباكتام + سيبروفلوكساسين
- إذا خطر MRSA: أضف فانكومايسين
    `,
        references: [
            { title: 'IDSA/ATS Guidelines for CAP in Adults', year: 2019, doi: '10.1164/rccm.201908-1581ST', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 134', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'pharyngitis',
        icon: '🗣️',
        title: { en: 'Acute Pharyngitis / Tonsillitis', ar: 'التهاب البلعوم / اللوزتين الحاد' },
        category: { en: 'Respiratory', ar: 'عدوى تنفسية' },
        evidenceLevel: 'A',
        summary: { en: 'Centor criteria and GAS pharyngitis treatment', ar: 'معايير Centor وعلاج التهاب الحلق العقدي' },
        contentEn: `
## Acute Pharyngitis / Tonsillitis

### Modified Centor (McIsaac) Criteria
| Criterion | Points |
|-----------|--------|
| Temperature >38°C (100.4°F) | +1 |
| Absence of cough | +1 |
| Tender anterior cervical lymphadenopathy | +1 |
| Tonsillar swelling or exudates | +1 |
| Age 3-14 years | +1 |
| Age 15-44 years | 0 |
| Age ≥45 years | -1 |

---

### Management by Score

**Score 0-1:** Viral likely → Symptomatic treatment only (NO antibiotics)
**Score 2-3:** Consider rapid antigen detection test (RADT)
**Score 4-5:** High probability GAS → Treat empirically OR confirm with RADT

---

### Treatment for Group A Streptococcal (GAS) Pharyngitis

**First-line:**
- Penicillin V 500mg BD or TDS x 10 days
- OR Amoxicillin 500mg BD x 10 days (better taste for children)
- OR Amoxicillin 1g OD x 10 days

**Penicillin allergy (non-anaphylactic):**
- Cephalexin 500mg BD x 10 days

**Penicillin allergy (anaphylactic):**
- Azithromycin 500mg day 1, then 250mg x 4 days
- OR Clarithromycin 250mg BD x 10 days

---

### Red Flags (Seek Emergency Care)
- Drooling / inability to swallow (peritonsillar abscess)
- Trismus (lockjaw)
- "Hot potato" voice
- Neck swelling (Ludwig's angina)
- Respiratory distress (epiglottitis)
- Bilateral tonsillar enlargement with airway compromise
    `,
        contentAr: `
## التهاب البلعوم / اللوزتين الحاد

### معايير Centor المعدلة (McIsaac)
- حرارة > 38 درجة (+1)
- غياب السعال (+1)
- تورم العقد الليمفاوية الأمامية المؤلم (+1)
- تورم أو إفرازات على اللوزتين (+1)
- العمر 3-14: +1 / العمر ≥45: -1

---

### العلاج حسب النتيجة

**0-1:** فيروسي غالباً → علاج عرضي فقط (بدون مضادات حيوية)
**2-3:** فكر في اختبار العقديات السريع
**4-5:** احتمالية عالية للعقديات → ابدأ العلاج

---

### علاج التهاب الحلق العقدي

**الخط الأول:**
- بنسلين V 500 ملغ مرتين أو ثلاث مرات يومياً لمدة 10 أيام
- أو أموكسيسيلين 500 ملغ مرتين يومياً لمدة 10 أيام

**حساسية البنسلين:**
- سيفاليكسين 500 ملغ مرتين لمدة 10 أيام
- أو أزيثرومايسين 500 ملغ اليوم الأول ثم 250 ملغ لمدة 4 أيام

---

### علامات الخطر
- سيلان اللعاب / عدم القدرة على البلع
- تورم الرقبة
- ضيق التنفس
    `,
        references: [
            { title: 'IDSA Clinical Practice Guideline for GAS Pharyngitis', year: 2012, doi: '10.1093/cid/cis629', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 135', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== URINARY =====
    {
        id: 'uti-uncomplicated',
        icon: '💧',
        title: { en: 'Uncomplicated UTI (Cystitis)', ar: 'التهاب المسالك البولية غير المعقد' },
        category: { en: 'Urinary', ar: 'مسالك بولية' },
        evidenceLevel: 'A',
        summary: { en: 'First-line treatment for uncomplicated cystitis', ar: 'علاج الخط الأول لالتهاب المثانة' },
        contentEn: `
## Uncomplicated UTI (Cystitis) - IDSA Guidelines

### Definition (Updated 2025)
Uncomplicated UTI = Infection confined to the bladder in:
- Otherwise healthy women OR men
- No structural/functional abnormalities
- No catheter
- Non-pregnant

---

### First-Line Treatment Options

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Nitrofurantoin** | 100mg BD (or 50mg QDS) | Women: 3 days, Men: 7 days |
| **Trimethoprim** | 200mg BD | Women: 3 days, Men: 7 days |
| **Fosfomycin** | 3g single dose | 1 dose (women only) |

**Notes:**
- Nitrofurantoin: Avoid if CrCl <30 mL/min
- Trimethoprim: Use only if local resistance <20%
- Fosfomycin: Less effective but convenient (not for men)

---

### Second-Line Options

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Ciprofloxacin** | 250mg BD | 3 days |
| **Levofloxacin** | 250mg OD | 3 days |

**Avoid fluoroquinolones as first-line** - Reserve for complicated UTI

---

### When to Get Urine Culture
- Treatment failure after 48-72 hours
- Recurrent UTI (≥3 episodes/year)
- Pregnancy
- Male patients
- Recent antibiotic use
- Atypical symptoms

---

### What NOT to Use
- Amoxicillin alone (high resistance >40%)
- Ampicillin alone
- First-generation cephalosporins alone
    `,
        contentAr: `
## التهاب المسالك البولية غير المعقد

### التعريف (محدث 2025)
التهاب غير معقد = عدوى محصورة في المثانة في:
- نساء أو رجال أصحاء
- لا توجد تشوهات هيكلية أو وظيفية
- لا قسطرة
- غير حامل

---

### العلاج الأول

| المضاد الحيوي | الجرعة | المدة |
|---------------|--------|-------|
| **نيتروفورانتوين** | 100 ملغ مرتين | 5 أيام |
| **تريميثوبريم-سلفاميثوكسازول** | 160/800 ملغ مرتين | 3 أيام |
| **فوسفومايسين** | 3 غ جرعة واحدة | جرعة واحدة |

---

### الخط الثاني

- سيبروفلوكساسين 250 ملغ مرتين لمدة 3 أيام
- ليفوفلوكساسين 250 ملغ يومياً لمدة 3 أيام

**تجنب الفلوروكينولونات كخط أول**

---

### متى نطلب مزرعة بول
- فشل العلاج بعد 48-72 ساعة
- التهاب متكرر (≥3 مرات/سنة)
- الحمل
- الرجال
    `,
        references: [
            { title: 'IDSA Guidelines for Acute Uncomplicated Cystitis and Pyelonephritis', year: 2011, doi: '10.1093/cid/ciq257', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 144', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'pyelonephritis',
        icon: '🫘',
        title: { en: 'Acute Pyelonephritis', ar: 'التهاب الحويضة والكلية الحاد' },
        category: { en: 'Urinary', ar: 'مسالك بولية' },
        evidenceLevel: 'A',
        summary: { en: 'Upper UTI treatment guidelines', ar: 'علاج التهاب المسالك البولية العلوية' },
        contentEn: `
## Acute Pyelonephritis

### Clinical Features
- Fever, chills, rigors
- Flank pain (unilateral or bilateral)
- Costovertebral angle tenderness
- May have lower UTI symptoms (dysuria, frequency)
- Nausea, vomiting

---

### Outpatient Treatment (Mild Cases)

**Criteria for outpatient management:**
- No vomiting
- Able to tolerate oral medications
- No hemodynamic instability
- No immunocompromise

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Ciprofloxacin** | 500mg BD | 7 days |
| **Levofloxacin** | 750mg OD | 5 days |
| **TMP-SMX** | 160/800mg BD | 14 days |

---

### Inpatient Treatment

| Antibiotic | Dose | Notes |
|------------|------|-------|
| **Ceftriaxone** | 1g IV OD | First-line |
| **Ciprofloxacin** | 400mg IV q12h | Alternative |
| **Pip-Tazo** | 3.375g IV q6h | If severe |

**Switch to oral:** When afebrile for 24-48 hours + improving clinically
**Total duration:** 7-14 days

---

### Admission Criteria
- High fever >39°C
- Severe sepsis signs
- Unable to maintain hydration
- Pregnancy
- Obstruction suspected (kidney stone)
- Immunocompromise
- Failed outpatient therapy
    `,
        contentAr: `
## التهاب الحويضة والكلية الحاد

### السمات السريرية
- حمى، قشعريرة، رعشة
- ألم الخاصرة (أحادي أو ثنائي)
- إيلام زاوية الكلية
- قد توجد أعراض المسالك السفلية

---

### العلاج الخارجي (الحالات الخفيفة)

| المضاد الحيوي | الجرعة | المدة |
|---------------|--------|-------|
| **سيبروفلوكساسين** | 500 ملغ مرتين | 7 أيام |
| **ليفوفلوكساسين** | 750 ملغ يومياً | 5 أيام |

---

### العلاج بالتنويم

- سيفترياكسون 1 غ وريدي يومياً (الخط الأول)
- التحويل للفموي: عند انخفاض الحرارة لمدة 24-48 ساعة

**المدة الكلية:** 7-14 يوم

---

### معايير التنويم
- حمى عالية > 39 درجة
- علامات إنتان شديد
- عدم القدرة على شرب السوائل
- الحمل
- اشتباه انسداد
    `,
        references: [
            { title: 'IDSA Complicated UTI Guidelines', year: 2025, type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 144', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== SKIN =====
    {
        id: 'cellulitis',
        icon: '🩹',
        title: { en: 'Cellulitis & Erysipelas', ar: 'التهاب النسيج الخلوي والحمرة' },
        category: { en: 'Skin', ar: 'جلدية' },
        evidenceLevel: 'A',
        summary: { en: 'IDSA 2014 SSTI guidelines with 2024 updates', ar: 'إرشادات IDSA للتهابات الجلد' },
        contentEn: `
## Cellulitis & Erysipelas - IDSA 2014

### Classification
- **Erysipelas:** Superficial dermis, sharply demarcated, raised borders
- **Cellulitis:** Deeper dermis/subcutaneous, spreading margins

Most common organisms: Streptococcus pyogenes, Staphylococcus aureus

---

### Mild Cellulitis (Outpatient)

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Cephalexin** | 500mg TDS-QDS | 5 days |
| **Dicloxacillin** | 500mg QDS | 5 days |
| **Clindamycin** | 300-450mg TDS | 5 days |

**Note:** Clindamycin resistance increasing (>25% in some areas) - check local antibiogram

---

### Moderate Cellulitis (Systemic Signs)

Systemic signs: Fever >38°C, HR >90, WBC >12K, immunocompromised

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Cefazolin** | 1-2g IV q8h | 5 days |
| **Clindamycin IV** | 600mg IV q8h | 5 days |

---

### MRSA Coverage - When to Add

**Risk factors:**
- Prior MRSA infection or colonization
- IV drug use
- Recent hospitalization
- Hemodialysis
- Recent antibiotic use

**Oral options:**
- TMP-SMX 160/800mg BD
- Doxycycline 100mg BD

**IV options:**
- Vancomycin 15-20mg/kg q8-12h
- Daptomycin 4-6mg/kg OD

---

### Severe / Necrotizing Concern

If suspect necrotizing fasciitis:
- Vancomycin + Piperacillin-Tazobactam + Clindamycin
- URGENT surgical evaluation
- Clindamycin added for toxin suppression
    `,
        contentAr: `
## التهاب النسيج الخلوي والحمرة

### التصنيف
- **الحمرة:** سطحي، حدود واضحة ومرتفعة
- **التهاب النسيج الخلوي:** أعمق، حدود منتشرة

---

### التهاب خفيف (خارجي)

| المضاد الحيوي | الجرعة | المدة |
|---------------|--------|-------|
| **سيفاليكسين** | 500 ملغ 3-4 مرات | 5 أيام |
| **كليندامايسين** | 300-450 ملغ 3 مرات | 5 أيام |

---

### التهاب متوسط (علامات جهازية)

- سيفازولين 1-2 غ وريدي كل 8 ساعات

---

### تغطية MRSA - متى نضيف

- تاريخ MRSA سابق
- تعاطي مخدرات وريدية
- دخول مستشفى حديث
- غسيل كلوي

**خيارات فموية:**
- تريميثوبريم-سلفاميثوكسازول
- دوكسيسيكلين 100 ملغ مرتين

**خيارات وريدية:**
- فانكومايسين
    `,
        references: [
            { title: 'IDSA Practice Guidelines for SSTI', year: 2014, doi: '10.1093/cid/ciu296', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== GI =====
    {
        id: 'gastroenteritis',
        icon: '🦠',
        title: { en: 'Acute Gastroenteritis', ar: 'التهاب المعدة والأمعاء الحاد' },
        category: { en: 'Gastrointestinal', ar: 'جهاز هضمي' },
        evidenceLevel: 'A',
        summary: { en: 'When to use antibiotics for acute diarrhea', ar: 'متى نستخدم المضادات الحيوية للإسهال الحاد' },
        contentEn: `
## Acute Gastroenteritis

### Key Principle
**MOST cases are VIRAL → Antibiotics NOT indicated**
Antibiotics may prolong carriage in Salmonella and increase HUS risk in EHEC

---

### When to Consider Antibiotics

- Bloody diarrhea (dysentery)
- Fever >38.5°C
- Duration >7 days
- Immunocompromised
- Recent travel to high-risk endemic area
- Suspected cholera outbreak

---

### Empirical Treatment (When Indicated)

| Condition | Antibiotic | Dose | Duration |
|-----------|------------|------|----------|
| **Traveler's diarrhea** | Azithromycin | 1g single dose | 1 day |
| **Dysentery** | Ciprofloxacin | 500mg BD | 3-5 days |
| **Shigella** | Azithromycin | 500mg OD | 3 days |

---

### Specific Pathogens

**Cholera:**
- Doxycycline 300mg single dose
- OR Azithromycin 1g single dose

**Giardia lamblia:**
- Metronidazole 500mg TDS x 5-7 days
- OR Tinidazole 2g single dose

**Amoebic dysentery (Entamoeba histolytica):**
- Metronidazole 750mg TDS x 10 days
- THEN Paromomycin 500mg TDS x 7 days (to clear luminal cysts)

**Clostridioides difficile:**
- Vancomycin 125mg PO QDS x 10 days
- OR Fidaxomicin 200mg BD x 10 days

---

### Supportive Care (ALL cases)
- Oral Rehydration Solution (ORS)
- Zinc supplementation (children)
- Avoid anti-motility agents in bloody diarrhea
    `,
        contentAr: `
## التهاب المعدة والأمعاء الحاد

### المبدأ الأساسي
**معظم الحالات فيروسية → المضادات الحيوية غير مطلوبة**

---

### متى نفكر في المضادات الحيوية

- إسهال دموي (زحار)
- حمى > 38.5 درجة
- مدة > 7 أيام
- نقص المناعة
- سفر حديث لمنطقة وبائية

---

### العلاج التجريبي

| الحالة | المضاد الحيوي | الجرعة |
|--------|---------------|--------|
| **إسهال المسافرين** | أزيثرومايسين | 1 غ جرعة واحدة |
| **الزحار** | سيبروفلوكساسين | 500 ملغ مرتين 3-5 أيام |

---

### مسببات محددة

**الكوليرا:**
- دوكسيسيكلين 300 ملغ جرعة واحدة
- أو أزيثرومايسين 1 غ جرعة واحدة

**الجيارديا:**
- ميترونيدازول 500 ملغ 3 مرات لمدة 5-7 أيام

**الزحار الأميبي:**
- ميترونيدازول 750 ملغ 3 مرات لمدة 10 أيام
- ثم باروموميسين 500 ملغ 3 مرات لمدة 7 أيام

---

### العلاج الداعم (جميع الحالات)
- محلول الإرواء الفموي (ORS)
- مكملات الزنك للأطفال
    `,
        references: [
            { title: 'IDSA Infectious Diarrhea Guidelines', year: 2017, doi: '10.1093/cid/cix959', type: 'guideline' },
            { title: 'WHO Guidelines for Diarrhea Treatment', year: 2024, type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 141', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== CRITICAL CARE =====
    {
        id: 'sepsis',
        icon: '🚨',
        title: { en: 'Sepsis & Septic Shock', ar: 'الإنتان والصدمة الإنتانية' },
        category: { en: 'Critical Care', ar: 'عناية حرجة' },
        evidenceLevel: 'A',
        summary: { en: 'Surviving Sepsis Campaign 2024 updates', ar: 'تحديثات حملة النجاة من الإنتان 2024' },
        contentEn: `
## Sepsis & Septic Shock - Surviving Sepsis 2024

### qSOFA (Quick Assessment)
≥2 points = High risk for poor outcome
- Respiratory rate ≥ 22/min (+1)
- Altered mental status (+1)
- Systolic BP ≤ 100 mmHg (+1)

---

### Antibiotic Timing (2024 UPDATE)

**Septic Shock or High Likelihood of Sepsis:**
→ Antimicrobials IMMEDIATELY (within 1 hour)

**Possible Sepsis WITHOUT Shock:**
→ Rapid assessment of infection likelihood
→ If infection likely: within 3 hours
→ If infection unlikely: may defer and monitor closely

---

### Hour-1 Bundle

1. **Measure lactate** (repeat if initial >2 mmol/L)
2. **Blood cultures BEFORE antibiotics** (do not delay if collecting is not immediate)
3. **Administer broad-spectrum antibiotics**
4. **30 mL/kg crystalloid** for hypotension OR lactate ≥4 mmol/L
5. **Vasopressors** (norepinephrine first-line) if MAP <65 despite fluids

---

### Empirical Antibiotic Selection

**Community-acquired (no MDR risk):**
- Piperacillin-Tazobactam 4.5g IV q6h
- OR Ceftriaxone 2g IV OD + Metronidazole 500mg IV q8h (if abdominal source)

**Healthcare-associated or MDR risk:**
- Meropenem 1g IV q8h
- + Vancomycin 15-20mg/kg IV q8-12h (if MRSA risk)

---

### Source-Specific Additions

| Source | Add |
|--------|-----|
| Abdominal | Metronidazole |
| Meningitis | Ceftriaxone 2g q12h + Vancomycin + Dexamethasone |
| Necrotizing fasciitis | Clindamycin (toxin suppression) |
| Catheter-related | Consider catheter removal |

---

### De-escalation
- Narrow antibiotics within 24-48h based on cultures
- Procalcitonin can guide discontinuation (NOT initiation)
- Duration: 7-10 days for most sources
    `,
        contentAr: `
## الإنتان والصدمة الإنتانية - 2024

### qSOFA (التقييم السريع)
≥2 نقاط = خطورة عالية
- معدل التنفس ≥ 22/دقيقة (+1)
- تغير الحالة العقلية (+1)
- ضغط الدم الانقباضي ≤ 100 (+1)

---

### توقيت المضادات الحيوية (تحديث 2024)

**صدمة إنتانية أو احتمالية عالية للإنتان:**
→ المضادات فوراً (خلال ساعة)

**إنتان محتمل بدون صدمة:**
→ تقييم سريع لاحتمالية العدوى
→ إذا العدوى محتملة: خلال 3 ساعات
→ إذا غير محتملة: يمكن التأخير مع المراقبة

---

### حزمة الساعة الأولى

1. قياس اللاكتات
2. مزارع الدم قبل المضادات
3. مضادات حيوية واسعة الطيف
4. 30 مل/كغ سوائل للهبوط أو لاكتات ≥4
5. رافعات الضغط (نورإبينفرين الخط الأول)

---

### اختيار المضادات الحيوية التجريبية

**مكتسب من المجتمع:**
- بيبيراسيلين-تازوباكتام 4.5 غ وريدي كل 6 ساعات

**مكتسب من المستشفى أو خطر مقاومة:**
- ميروبينيم 1 غ وريدي كل 8 ساعات
- + فانكومايسين (إذا خطر MRSA)

---

### تضييق العلاج
- خلال 24-48 ساعة بناءً على المزارع
- المدة: 7-10 أيام لمعظم المصادر
    `,
        references: [
            { title: 'Surviving Sepsis Campaign Guidelines', year: 2024, doi: '10.1007/s00134-024-07373-5', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 147', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== CNS =====
    {
        id: 'meningitis',
        icon: '🧠',
        title: { en: 'Bacterial Meningitis', ar: 'التهاب السحايا البكتيري' },
        category: { en: 'Central Nervous System', ar: 'جهاز عصبي' },
        evidenceLevel: 'A',
        summary: { en: 'Emergency empiric therapy for suspected meningitis', ar: 'العلاج التجريبي الطارئ لالتهاب السحايا' },
        contentEn: `
## Bacterial Meningitis - Emergency Management

### Classic Triad (Present in <50% of cases)
- Headache
- Fever
- Neck stiffness

**Also consider:** Photophobia, altered consciousness, petechial rash (meningococcemia)

---

### CRITICAL: Do NOT Delay Antibiotics

**If meningitis suspected:**
→ Start antibiotics IMMEDIATELY
→ Do not wait for LP or CT scan
→ LP can be done after antibiotics (cultures still positive for hours)

---

### Empirical Antibiotic Therapy

**Adults <50 years:**
- Ceftriaxone 2g IV q12h
- + Vancomycin 15-20mg/kg IV q8-12h

**Adults ≥50 years or Immunocompromised:**
- Ceftriaxone 2g IV q12h
- + Vancomycin 15-20mg/kg IV q8-12h
- + Ampicillin 2g IV q4h (for Listeria coverage)

**Penicillin allergy:**
- Meropenem 2g IV q8h + Vancomycin

---

### Adjunctive Dexamethasone

- Dexamethasone 0.15 mg/kg IV q6h x 4 days
- Give BEFORE or WITH first antibiotic dose
- Most beneficial in pneumococcal meningitis
- Reduces hearing loss and neurological sequelae

---

### Duration of Therapy

| Organism | Duration |
|----------|----------|
| N. meningitidis | 7 days |
| H. influenzae | 7 days |
| S. pneumoniae | 10-14 days |
| Listeria | 21+ days |
| Gram-negative bacilli | 21 days |

---

### Chemoprophylaxis for Close Contacts

**N. meningitidis exposure:**
- Ciprofloxacin 500mg single dose (adults)
- OR Rifampicin 600mg BD x 2 days
- OR Ceftriaxone 250mg IM single dose
    `,
        contentAr: `
## التهاب السحايا البكتيري - علاج الطوارئ

### الثالوث الكلاسيكي (موجود في <50% من الحالات)
- صداع
- حمى
- تصلب الرقبة

---

### مهم جداً: لا تؤخر المضادات الحيوية

**إذا اشتبه التهاب السحايا:**
→ ابدأ المضادات فوراً
→ لا تنتظر البزل القطني أو الأشعة المقطعية

---

### العلاج التجريبي

**البالغين <50 سنة:**
- سيفترياكسون 2 غ وريدي كل 12 ساعة
- + فانكومايسين 15-20 ملغ/كغ وريدي كل 8-12 ساعة

**البالغين ≥50 سنة أو ناقصي المناعة:**
- سيفترياكسون + فانكومايسين
- + أمبيسيلين 2 غ وريدي كل 4 ساعات (لتغطية Listeria)

---

### ديكساميثازون المساعد

- ديكساميثازون 0.15 ملغ/كغ وريدي كل 6 ساعات لمدة 4 أيام
- أعطِ قبل أو مع الجرعة الأولى من المضاد الحيوي
- يقلل فقدان السمع والمضاعفات العصبية

---

### مدة العلاج

| الكائن | المدة |
|--------|-------|
| N. meningitidis | 7 أيام |
| S. pneumoniae | 10-14 يوم |
| Listeria | 21+ يوم |

---

### الوقاية للمخالطين (N. meningitidis)

- سيبروفلوكساسين 500 ملغ جرعة واحدة (البالغين)
- أو ريفامبيسين 600 ملغ مرتين لمدة يومين
    `,
        references: [
            { title: 'IDSA Healthcare-Associated Ventriculitis and Meningitis Guidelines', year: 2017, doi: '10.1093/cid/ciw861', type: 'guideline' },
            { title: 'WHO Meningitis Guidelines', year: 2024, type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 133', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== CARDIOVASCULAR =====
    {
        id: 'endocarditis',
        icon: '❤️',
        title: { en: 'Infective Endocarditis', ar: 'التهاب الشغاف المعدي' },
        category: { en: 'Cardiovascular', ar: 'قلب وأوعية' },
        evidenceLevel: 'A',
        summary: { en: 'Duke criteria and empirical treatment', ar: 'معايير Duke والعلاج التجريبي' },
        contentEn: `
## Infective Endocarditis (IE)

### Modified Duke Criteria

**MAJOR Criteria:**
1. Blood cultures positive for typical IE organisms (S. aureus, Viridans streptococci, Enterococcus, HACEK) from ≥2 separate cultures
2. Echocardiographic evidence of endocardial involvement (vegetation, abscess, new valve regurgitation)

**MINOR Criteria:**
- Predisposing heart condition or IV drug use
- Fever ≥38°C
- Vascular phenomena (septic emboli, mycotic aneurysm, Janeway lesions)
- Immunologic phenomena (Osler nodes, Roth spots, glomerulonephritis)
- Microbiological evidence (positive cultures not meeting major criteria)

**Diagnosis:** 2 major OR 1 major + 3 minor OR 5 minor

---

### Empirical Treatment

**Native Valve (Community-acquired):**
- Ampicillin-Sulbactam 3g IV q6h + Gentamicin 3mg/kg/day IV (divided q8h)
- OR Vancomycin 15-20mg/kg IV q8-12h + Gentamicin (if MRSA risk)

**Native Valve (Healthcare-associated):**
- Vancomycin 15-20mg/kg IV q8-12h + Gentamicin

**Prosthetic Valve:**
- Vancomycin 15-20mg/kg IV q12h
- + Gentamicin 3mg/kg/day IV
- + Rifampicin 300mg PO q8h

---

### Duration of Therapy

| Setting | Duration |
|---------|----------|
| Native valve - Streptococcus | 4 weeks |
| Native valve - Staphylococcus | 6 weeks |
| Prosthetic valve | ≥6 weeks |

---

### Surgical Indications

- Heart failure refractory to medical therapy
- Persistent bacteremia despite appropriate antibiotics (>5-7 days)
- Large vegetations (>10mm) with embolic events
- Perivalvular abscess or fistula
- Prosthetic valve endocarditis with Staphylococcus
    `,
        contentAr: `
## التهاب الشغاف المعدي

### معايير Duke المعدلة

**المعايير الرئيسية:**
1. مزارع دم إيجابية لكائنات نموذجية من ≥2 مزرعة منفصلة
2. دليل إيكو على إصابة الشغاف (نباتات، خراج، قصور صمام جديد)

**المعايير الثانوية:**
- مرض قلبي مؤهل أو تعاطي مخدرات وريدية
- حمى ≥38 درجة
- ظواهر وعائية
- ظواهر مناعية

**التشخيص:** 2 رئيسية أو 1 رئيسية + 3 ثانوية أو 5 ثانوية

---

### العلاج التجريبي

**صمام طبيعي:**
- أمبيسيلين-سلباكتام 3 غ وريدي كل 6 ساعات + جنتامايسين
- أو فانكومايسين + جنتامايسين (إذا خطر MRSA)

**صمام صناعي:**
- فانكومايسين + جنتامايسين + ريفامبيسين

---

### مدة العلاج

| الحالة | المدة |
|--------|-------|
| صمام طبيعي - عقديات | 4 أسابيع |
| صمام طبيعي - عنقوديات | 6 أسابيع |
| صمام صناعي | ≥6 أسابيع |

---

### دواعي الجراحة

- فشل قلبي لا يستجيب للعلاج
- تجرثم دم مستمر رغم المضادات (>5-7 أيام)
- نباتات كبيرة (>10 مم) مع صمات
    `,
        references: [
            { title: 'AHA/ACC Infective Endocarditis Guidelines', year: 2015, doi: '10.1161/CIR.0000000000000296', type: 'guideline' },
            { title: 'ESC Guidelines for Infective Endocarditis', year: 2023, doi: '10.1093/eurheartj/ehad193', type: 'guideline' },
            { title: 'DiPiro Pharmacotherapy 13th Ed - Chapter 139', year: 2024, type: 'textbook' }
        ],
        lastUpdated: '2024-12'
    },

    // ===== NEW FROM NHS GGC NOV 2024 =====

    {
        id: 'copd-exacerbation',
        icon: '💨',
        title: { en: 'COPD Exacerbation', ar: 'نوبة احتدام مرض الانسداد الرئوي المزمن' },
        category: { en: 'Respiratory', ar: 'عدوى تنفسية' },
        evidenceLevel: 'A',
        summary: { en: 'When to use antibiotics for acute COPD exacerbation', ar: 'متى نستخدم المضادات الحيوية لنوبات COPD' },
        contentEn: `
## Infective Exacerbation of COPD - NHS GGC 2024

### Key Principle
**Antibiotics ONLY if purulent sputum is present**

Without purulent sputum → NO antibiotics needed

---

### When to Treat

Antibiotics recommended if:
- Purulent (green/yellow) sputum
- Increased sputum volume
- Increased dyspnea

---

### Treatment Options (Duration: 5 days)

| Antibiotic | Dose | Notes |
|------------|------|-------|
| **Doxycycline** | 200mg stat, then 100mg OD | First-line |
| **Amoxicillin** | 500mg TDS | Alternative |
| **Clarithromycin** | 500mg BD | Penicillin allergy |

### Important Notes
- Dual antibiotic therapy is NOT recommended
- Steroids (Prednisolone 30-40mg x 5 days) often indicated alongside
- Consider sputum culture if hospitalized or treatment failure
    `,
        contentAr: `
## نوبة احتدام مرض الانسداد الرئوي المزمن

### المبدأ الأساسي
**المضادات الحيوية فقط إذا كان البلغم صديدي**

---

### متى نعالج

المضادات موصى بها إذا:
- بلغم صديدي (أخضر/أصفر)
- زيادة حجم البلغم
- زيادة ضيق التنفس

---

### خيارات العلاج (المدة: 5 أيام)

| المضاد الحيوي | الجرعة |
|---------------|--------|
| **دوكسيسيكلين** | 200 ملغ جرعة أولى ثم 100 ملغ يومياً |
| **أموكسيسيلين** | 500 ملغ ثلاث مرات |
| **كلاريثرومايسين** | 500 ملغ مرتين |

### ملاحظات
- العلاج المزدوج غير موصى به
- الستيرويدات غالباً مطلوبة أيضاً
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' },
            { title: 'GOLD COPD Guidelines', year: 2024, type: 'guideline' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'hap',
        icon: '🏥',
        title: { en: 'Hospital-Acquired Pneumonia (HAP)', ar: 'الالتهاب الرئوي المكتسب من المستشفى' },
        category: { en: 'Respiratory', ar: 'عدوى تنفسية' },
        evidenceLevel: 'A',
        summary: { en: 'Management of pneumonia developing >48h after admission', ar: 'علاج الالتهاب الرئوي الذي يتطور بعد >48 ساعة من الدخول' },
        contentEn: `
## Hospital-Acquired Pneumonia (HAP) - NHS GGC 2024

### Definition
Pneumonia developing ≥48 hours after hospital admission
(or within 90 days post-discharge)

---

### Early-Onset HAP (<5 days)

Treat as Community-Acquired Pneumonia (CAP)
→ See CAP guidelines

---

### Late-Onset HAP (≥5 days)

**Non-severe (Oral therapy):**
- Doxycycline 100mg BD x 5 days
- OR Co-trimoxazole 960mg BD x 5 days (monitor K+ and renal function)

**Severe HAP (Sepsis or rapid deterioration):**
- Co-amoxiclav 1.2g IV TDS + Gentamicin IV (max 4 days)
- Duration: 5 days

**Penicillin Allergy:**
- Levofloxacin 500mg BD (oral or IV) monotherapy

---

### Key Organisms
- Gram-negatives: E. coli, Klebsiella, Pseudomonas
- S. aureus (including MRSA in some settings)
- Anaerobes (if aspiration component)

### When to Suspect MDR Pathogens
- Prior IV antibiotics in 90 days
- Prolonged hospitalization (>7 days)
- ICU admission
- Known colonization with MDR organisms
    `,
        contentAr: `
## الالتهاب الرئوي المكتسب من المستشفى

### التعريف
التهاب رئوي يتطور بعد ≥48 ساعة من دخول المستشفى

---

### HAP مبكر (<5 أيام)

يعالج كالالتهاب الرئوي المكتسب من المجتمع (CAP)

---

### HAP متأخر (≥5 أيام)

**غير شديد (علاج فموي):**
- دوكسيسيكلين 100 ملغ مرتين لمدة 5 أيام
- أو كو-تريموكسازول 960 ملغ مرتين لمدة 5 أيام

**شديد (إنتان أو تدهور سريع):**
- كو-أموكسيكلاف 1.2 غ وريدي + جنتامايسين (أقصى 4 أيام)
- المدة: 5 أيام

**حساسية البنسلين:**
- ليفوفلوكساسين 500 ملغ مرتين وحده
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' },
            { title: 'IDSA/ATS HAP/VAP Guidelines', year: 2016, type: 'guideline' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'aspiration-pneumonia',
        icon: '🫁',
        title: { en: 'Aspiration Pneumonia', ar: 'الالتهاب الرئوي الاستنشاقي' },
        category: { en: 'Respiratory', ar: 'عدوى تنفسية' },
        evidenceLevel: 'B',
        summary: { en: 'Management of pneumonia from aspiration of gastric/oral contents', ar: 'علاج الالتهاب الرئوي من استنشاق محتويات المعدة/الفم' },
        contentEn: `
## Aspiration Pneumonia - NHS GGC 2024

### Key Principle
**Not all aspiration requires antibiotics**

Chemical pneumonitis (sterile gastric contents) often does NOT need antibiotics
Reserve antibiotics for failure to improve after 48 hours

---

### When to Treat with Antibiotics

- Witnessed aspiration with subsequent pneumonia signs
- Failure to improve after 48 hours of supportive care
- Underlying poor dentition/oral hygiene (oral flora aspiration)
- ICU admission

---

### Standard Treatment (Duration: 5 days)

| Route | Regimen |
|-------|---------|
| **IV** | Amoxicillin 1g TDS + Metronidazole 500mg TDS |
| **Oral step-down** | Amoxicillin 500mg TDS + Metronidazole 400mg TDS |

### Penicillin Allergy
- Clarithromycin 500mg IV/PO BD + Metronidazole 500mg IV TDS

---

### Important Considerations
- Anaerobic coverage (Metronidazole) is essential
- Position patient upright/semi-recumbent
- Consider swallowing assessment
- Oral hygiene is crucial for prevention
    `,
        contentAr: `
## الالتهاب الرئوي الاستنشاقي

### المبدأ الأساسي
**ليس كل استنشاق يحتاج مضادات حيوية**

الالتهاب الكيميائي غالباً لا يحتاج مضادات حيوية
احتفظ بالمضادات لعدم التحسن بعد 48 ساعة

---

### متى نعالج بالمضادات الحيوية

- استنشاق مشاهد مع علامات التهاب رئوي لاحقة
- عدم التحسن بعد 48 ساعة من العلاج الداعم
- سوء صحة الأسنان/الفم

---

### العلاج القياسي (المدة: 5 أيام)

| الطريق | النظام |
|--------|--------|
| **وريدي** | أموكسيسيلين 1 غ + ميترونيدازول 500 ملغ ثلاث مرات |

### حساسية البنسلين
- كلاريثرومايسين 500 ملغ + ميترونيدازول 500 ملغ
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'intra-abdominal-sepsis',
        icon: '🩺',
        title: { en: 'Intra-abdominal Sepsis', ar: 'الإنتان داخل البطن' },
        category: { en: 'Gastrointestinal', ar: 'جهاز هضمي' },
        evidenceLevel: 'A',
        summary: { en: 'Empirical treatment for peritonitis and abdominal infections', ar: 'العلاج التجريبي لالتهاب الصفاق والتهابات البطن' },
        contentEn: `
## Intra-abdominal Sepsis - NHS GGC 2024

### Includes
- Secondary peritonitis (perforated viscus)
- Appendicitis with perforation
- Cholecystitis with perforation
- Diverticulitis with abscess/perforation
- Post-operative intra-abdominal infection

---

### Standard Treatment (Duration: 5 days, assuming source control)

| Antibiotic | Dose | Route |
|------------|------|-------|
| **Amoxicillin** | 1g TDS | IV |
| **Metronidazole** | 400-500mg TDS | Oral/IV |
| **Gentamicin** | Per protocol (max 4 days) | IV |

---

### Penicillin Allergy Options

Option 1:
- Vancomycin IV + Metronidazole + Gentamicin

Option 2:
- Ciprofloxacin 400mg IV BD + Metronidazole

---

### Critical Points

- **Source control is essential** (surgery/drainage)
- 5-day duration is adequate IF source controlled
- Longer courses if source NOT controlled
- Blood cultures before antibiotics
- Consider fungal coverage if severely ill/prolonged ICU stay
    `,
        contentAr: `
## الإنتان داخل البطن

### يشمل
- التهاب الصفاق الثانوي (انثقاب الأحشاء)
- التهاب الزائدة الدودية مع انثقاب
- التهاب المرارة مع انثقاب
- التهاب الرتوج مع خراج/انثقاب

---

### العلاج القياسي (المدة: 5 أيام، بافتراض السيطرة على المصدر)

| المضاد الحيوي | الجرعة | الطريق |
|---------------|--------|--------|
| **أموكسيسيلين** | 1 غ ثلاث مرات | وريدي |
| **ميترونيدازول** | 400-500 ملغ ثلاث مرات | فموي/وريدي |
| **جنتامايسين** | حسب البروتوكول (أقصى 4 أيام) | وريدي |

---

### خيارات حساسية البنسلين

- فانكومايسين + ميترونيدازول + جنتامايسين
- أو سيبروفلوكساسين 400 ملغ وريدي + ميترونيدازول

---

### نقاط حرجة

- **السيطرة على المصدر ضرورية** (جراحة/تصريف)
- 5 أيام كافية إذا تم السيطرة على المصدر
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' },
            { title: 'SIS/IDSA Intra-abdominal Infection Guidelines', year: 2017, type: 'guideline' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'animal-human-bites',
        icon: '🐕',
        title: { en: 'Animal & Human Bites', ar: 'عضات الحيوانات والبشر' },
        category: { en: 'Skin', ar: 'جلدية' },
        evidenceLevel: 'A',
        summary: { en: 'Antibiotic treatment and prophylaxis for bite wounds', ar: 'العلاج والوقاية بالمضادات الحيوية لجروح العض' },
        contentEn: `
## Animal & Human Bite Wounds - NHS GGC 2024

### General Principles
- Thorough wound cleaning is essential
- Consider tetanus status
- Consider rabies prophylaxis if indicated
- Most bites become infected (especially human and cat bites)

---

### Non-Severe / Prophylaxis

| Setting | Treatment | Duration |
|---------|-----------|----------|
| **Prophylaxis** | Co-amoxiclav 625mg TDS | 3 days |
| **Treatment (mild)** | Co-amoxiclav 625mg TDS | 5 days |

### Penicillin Allergy (Non-severe)
- Doxycycline 100mg BD + Metronidazole 400mg TDS

---

### Severe / Septic Bites

**Requires:**
- IV therapy
- Surgical review (debridement may be needed)
- Blood cultures

| Antibiotic | Dose | Duration |
|------------|------|----------|
| **Co-amoxiclav** | 1.2g IV TDS | 7 days |

### Penicillin Allergy (Severe)
- Vancomycin IV + Metronidazole PO + Ciprofloxacin PO

---

### Key Pathogens
- **Dog/Cat bites:** Pasteurella multocida, Capnocytophaga
- **Human bites:** Eikenella corrodens, oral anaerobes
- **All bites:** Streptococcus, Staphylococcus, anaerobes
    `,
        contentAr: `
## عضات الحيوانات والبشر

### مبادئ عامة
- تنظيف الجرح الشامل ضروري
- فكر في حالة التيتانوس
- فكر في الوقاية من داء الكلب إذا لزم الأمر

---

### غير شديد / وقائي

| الحالة | العلاج | المدة |
|--------|--------|-------|
| **وقائي** | كو-أموكسيكلاف 625 ملغ ثلاث مرات | 3 أيام |
| **علاجي (خفيف)** | كو-أموكسيكلاف 625 ملغ ثلاث مرات | 5 أيام |

### حساسية البنسلين
- دوكسيسيكلين 100 ملغ مرتين + ميترونيدازول 400 ملغ ثلاث مرات

---

### عضات شديدة / إنتانية

- يتطلب علاج وريدي ومراجعة جراحية

| المضاد الحيوي | الجرعة | المدة |
|---------------|--------|-------|
| **كو-أموكسيكلاف** | 1.2 غ وريدي ثلاث مرات | 7 أيام |

### حساسية البنسلين (شديد)
- فانكومايسين وريدي + ميترونيدازول + سيبروفلوكساسين
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'necrotizing-fasciitis',
        icon: '⚠️',
        title: { en: 'Necrotizing Fasciitis', ar: 'التهاب اللفافة الناخر' },
        category: { en: 'Skin', ar: 'جلدية' },
        evidenceLevel: 'A',
        summary: { en: 'Life-threatening soft tissue infection requiring urgent surgery', ar: 'عدوى الأنسجة الرخوة المهددة للحياة التي تتطلب جراحة عاجلة' },
        contentEn: `
## Necrotizing Fasciitis - NHS GGC 2024

⚠️ **SURGICAL EMERGENCY**

### Clinical Features (High Index of Suspicion)
- Pain out of proportion to examination
- Rapidly spreading erythema
- Crepitus (gas in tissues)
- Systemic toxicity (fever, tachycardia, hypotension)
- Skin necrosis, bullae, or ecchymosis
- Failure to respond to standard cellulitis treatment

---

### Immediate Actions
1. **URGENT Surgical/Orthopaedic review**
2. Surgical debridement is definitive treatment
3. Start IV antibiotics immediately
4. Resuscitation (fluids, vasopressors if needed)
5. ICU admission

---

### Antibiotic Regimen (All IV)

| Antibiotic | Dose | Notes |
|------------|------|-------|
| **Flucloxacillin** | 2g QDS | Staphylococcal cover |
| **Benzylpenicillin** | 2.4g QDS | Streptococcal cover |
| **Metronidazole** | 500mg TDS | Anaerobic cover |
| **Clindamycin** | 1.2g QDS | Toxin suppression |
| **Gentamicin** | Per protocol (max 4 days) | Gram-negative cover |

---

### Penicillin Allergy / MRSA Risk
- Replace Flucloxacillin + Benzylpenicillin with **Vancomycin**
- Continue Metronidazole, Clindamycin, Gentamicin

---

### Critical Points
- Delay in surgery = increased mortality
- May need repeated debridements
- Clindamycin inhibits toxin production (essential)
- Hyperbaric oxygen NOT recommended routinely
    `,
        contentAr: `
## التهاب اللفافة الناخر

⚠️ **حالة جراحية طارئة**

### السمات السريرية
- ألم غير متناسب مع الفحص
- احمرار سريع الانتشار
- فرقعة (غاز في الأنسجة)
- سمية جهازية (حمى، تسرع القلب، هبوط الضغط)
- نخر الجلد، فقاعات

---

### الإجراءات الفورية
1. **مراجعة جراحية/عظمية عاجلة**
2. التنضير الجراحي هو العلاج النهائي
3. ابدأ المضادات الحيوية الوريدية فوراً
4. الإنعاش (سوائل، رافعات ضغط إذا لزم)
5. دخول العناية المركزة

---

### نظام المضادات الحيوية (كلها وريدية)

| المضاد الحيوي | الجرعة |
|---------------|--------|
| **فلوكلوكساسيلين** | 2 غ أربع مرات |
| **بنزيل بنسلين** | 2.4 غ أربع مرات |
| **ميترونيدازول** | 500 ملغ ثلاث مرات |
| **كليندامايسين** | 1.2 غ أربع مرات |
| **جنتامايسين** | حسب البروتوكول |

---

### حساسية البنسلين / خطر MRSA
- استبدل فلوكلوكساسيلين + بنسلين بـ **فانكومايسين**

---

### نقاط حرجة
- تأخير الجراحة = زيادة الوفيات
- كليندامايسين ضروري لتثبيط السموم
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' },
            { title: 'WSES Guidelines for Necrotizing Soft Tissue Infections', year: 2018, type: 'guideline' }
        ],
        lastUpdated: '2024-12'
    },

    {
        id: 'sbp',
        icon: '💧',
        title: { en: 'Spontaneous Bacterial Peritonitis (SBP)', ar: 'التهاب الصفاق البكتيري التلقائي' },
        category: { en: 'Gastrointestinal', ar: 'جهاز هضمي' },
        evidenceLevel: 'A',
        summary: { en: 'Infection of ascitic fluid in cirrhotic patients', ar: 'عدوى السائل الاستسقائي في مرضى تليف الكبد' },
        contentEn: `
## Spontaneous Bacterial Peritonitis (SBP) - NHS GGC 2024

### Definition
Infection of ascitic fluid in the absence of an intra-abdominal surgical source
Common in cirrhotic patients with ascites

### Diagnosis
- Ascitic fluid PMN count ≥250 cells/mm³
- Abdominal pain, fever, altered mental status in cirrhotic patient

---

### Treatment (Duration: 7 days)

**Not on Co-trimoxazole prophylaxis:**
- Co-trimoxazole 960mg BD (oral)

**Already on Co-trimoxazole prophylaxis:**
- Piperacillin-Tazobactam 4.5g IV TDS

**Penicillin Allergy:**
- Levofloxacin 500mg BD (oral)

---

### Albumin Replacement
- IV Albumin 1.5g/kg on day 1
- IV Albumin 1g/kg on day 3
- Reduces renal failure and mortality

### Secondary Prophylaxis
After first episode: Co-trimoxazole 960mg OD long-term
    `,
        contentAr: `
## التهاب الصفاق البكتيري التلقائي

### التعريف
عدوى السائل الاستسقائي في غياب مصدر جراحي داخل البطن
شائع في مرضى تليف الكبد مع استسقاء

### التشخيص
- عدد الخلايا المتعددة النوى في السائل ≥250 خلية/مم³
- ألم بطني، حمى، تغير الحالة العقلية

---

### العلاج (المدة: 7 أيام)

**بدون وقاية كو-تريموكسازول:**
- كو-تريموكسازول 960 ملغ مرتين (فموي)

**على وقاية كو-تريموكسازول:**
- بيبيراسيلين-تازوباكتام 4.5 غ وريدي ثلاث مرات

**حساسية البنسلين:**
- ليفوفلوكساسين 500 ملغ مرتين (فموي)

---

### تعويض الألبومين
- ألبومين وريدي 1.5 غ/كغ في اليوم الأول
- ألبومين وريدي 1 غ/كغ في اليوم الثالث
    `,
        references: [
            { title: 'NHS GGC Hospital Infection Management Guidelines', year: 2024, type: 'local' },
            { title: 'EASL Clinical Practice Guidelines on Management of Ascites', year: 2018, type: 'guideline' }
        ],
        lastUpdated: '2024-12'
    }
]
