// AMR Quiz Scenarios - Part 2 (35-70)
// Travel, Environment, Social, Myths, Workplace scenarios

export const QUIZ_SCENARIOS_PART2 = [
    // === TRAVEL & VACATION ===
    {
        id: 'traveler_diarrhea',
        icon: '✈️',
        category: 'travel',
        scenario: {
            en: 'You are backpacking in Southeast Asia. You get diarrhea. A local pharmacy sells antibiotics over the counter without a prescription.',
            ar: 'أنت في رحلة سياحية بدولة آسيوية. أصبت بإسهال. الصيدلية تبيع مضادات حيوية بدون وصفة.'
        },
        options: {
            en: ['Buy them and take them', 'Stick to hydration salts unless it becomes severe/bloody, then see a doctor'],
            ar: ['اشترها وتناولها', 'التزم بمحاليل الجفاف إلا إذا كان الإسهال شديداً أو دموياً، حينها زر طبيباً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Most traveler\'s diarrhea resolves on its own. Taking local unregulated antibiotics can give you a superbug that stays in your gut for months.',
            ar: 'معظم إسهال المسافرين يشفى وحده. تناول مضادات عشوائية قد يزرع في أمعائك "بكتيريا خارقة" تبقى معك لأشهر.'
        }
    },
    {
        id: 'brush_teeth_tap',
        icon: '🪥',
        category: 'travel',
        scenario: {
            en: 'You are traveling to a country with poor water sanitation. You brush your teeth with tap water.',
            ar: 'سافرت لبلد معروف بضعف نظافة المياه. غسلت أسنانك بماء الصنبور.'
        },
        options: {
            en: ['Safe', 'Unsafe; use bottled water'],
            ar: ['آمن', 'غير آمن؛ استخدم مياه معبأة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Even a small amount of tap water swallowed during brushing can introduce resistant bacteria to your system.',
            ar: 'حتى كمية صغيرة من ماء الصنبور تبتلعها أثناء الغسيل قد تدخِل بكتيريا مقاومة لجسمك.'
        }
    },
    {
        id: 'dirty_tattoo_shop',
        icon: '🎨',
        category: 'travel',
        scenario: {
            en: 'You get a tattoo while on vacation in a remote area. The shop looks a bit dirty.',
            ar: 'قررت الحصول على وشم (تاتو) أثناء إجازة في منطقة نائية. المحل يبدو غير نظيف تماماً.'
        },
        options: {
            en: ['It\'s a cool memory', 'It\'s a high risk for blood-borne resistant infections'],
            ar: ['إنها ذكرى جميلة', 'خطر كبير للإصابة بعدوى مقاومة تنتقل بالدم']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Unsterilized needles can transmit serious infections. If the infection is resistant, you might end up in a hospital far from home.',
            ar: 'الإبر غير المعقمة تنقل عدوى خطيرة. إذا كانت العدوى مقاومة، قد ينتهي بك الأمر في مستشفى بعيد عن وطنك.'
        }
    },
    {
        id: 'tell_doctor_travel',
        icon: '🏥',
        category: 'travel',
        scenario: {
            en: 'You return from a trip abroad and have to go to the hospital for a minor surgery.',
            ar: 'عدت من السفر واضطررت لدخول المستشفى لعملية بسيطة.'
        },
        options: {
            en: ['Don\'t mention the trip; it\'s irrelevant', 'Tell the doctor you recently traveled abroad'],
            ar: ['لا تذكر السفر للطبيب، لا علاقة له بالأمر', 'أخبر الطبيب أنك سافرت مؤخراً للخارج']
        },
        correctAnswer: 1,
        explanation: {
            en: 'You might be carrying "import" superbugs. The hospital needs to know so they can isolate you if necessary to protect other patients.',
            ar: 'قد تكون حاملاً لبكتيريا "مستوردة". المستشفى يحتاج لمعرفة ذلك لعزلك إذا لزم الأمر وحماية المرضى الآخرين.'
        }
    },
    {
        id: 'cruise_sanitizer',
        icon: '🚢',
        category: 'travel',
        scenario: {
            en: 'You are on a cruise ship. You see a hand sanitizer station at the entrance to the dining hall.',
            ar: 'أنت على متن سفينة سياحية (كروز). رأيت محطة تعقيم اليدين عند مدخل المطعم.'
        },
        options: {
            en: ['Walk past it; your hands look clean', 'Use it'],
            ar: ['تجاوزها؛ يداك نظيفتان', 'استخدمها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Cruise ships are closed environments where infections spread fast. Sanitizing breaks the chain of transmission.',
            ar: 'السفن بيئات مغلقة تنتشر فيها العدوى بسرعة. التعقيم يكسر سلسلة انتقال المرض.'
        }
    },
    // === ENVIRONMENT ===
    {
        id: 'bury_antibiotics',
        icon: '🌍',
        category: 'environment',
        scenario: {
            en: 'You have expired antibiotics. You think about throwing them in the trash, but you worry a stray dog might eat them. So you bury them in the backyard.',
            ar: 'لديك مضادات حيوية منتهية الصلاحية. خشيت رميها في القمامة حتى لا يأكلها كلب ضال، فدفنتها في الحديقة الخلفية.'
        },
        options: {
            en: ['Good solution', 'Bad solution'],
            ar: ['حل جيد', 'حل سيء']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Buried drugs leach into the groundwater and soil, affecting worms and plants, and eventually getting back into the food chain.',
            ar: 'الأدوية المدفونة تتسرب للمياه الجوفية والتربة، وتؤثر على النباتات وتعود في النهاية لسلسلة الغذاء.'
        }
    },
    {
        id: 'report_pollution',
        icon: '🏭',
        category: 'environment',
        scenario: {
            en: 'You live near a river. You see people dumping chemical waste into the water.',
            ar: 'تسكن قرب نهر ورأيت أشخاصاً يرمون مخلفات كيميائية فيه.'
        },
        options: {
            en: ['Ignore it', 'Report it to local authorities'],
            ar: ['تجاهل الأمر', 'أبلغ السلطات المحلية']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Pollution weakens bacteria just enough to teach them how to resist chemicals, creating superbugs in the wild.',
            ar: 'التلوث يضعف البكتيريا بما يكفي لتعلمها كيفية مقاومة المواد الكيميائية، مما يخلق بكتيريا خارقة في الطبيعة.'
        }
    },
    {
        id: 'gardening_manure',
        icon: '🌱',
        category: 'environment',
        scenario: {
            en: 'You are gardening and use manure from a local farm. You don\'t wear gloves.',
            ar: 'تعمل في الحديقة وتستخدم سماداً حيوانياً. لم تلبس قفازات.'
        },
        options: {
            en: ['Soil is natural; it\'s fine', 'You should wear gloves and wash hands after'],
            ar: ['التربة طبيعية؛ لا بأس', 'يجب لبس القفازات وغسل اليدين بعدها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Farm manure often contains resistant bacteria from the animals. Gardening with bare hands is a direct route for these bugs to your fingernails and mouth.',
            ar: 'السماد الحيواني غالباً يحتوي على بكتيريا مقاومة من الحيوانات. العمل بيدين عاريتين طريق مباشر لهذه الجراثيم إلى فمك.'
        }
    },
    {
        id: 'wash_dishes_lake',
        icon: '🏕️',
        category: 'environment',
        scenario: {
            en: 'You are camping. You wash your dishes with biodegradable soap directly in the lake.',
            ar: 'في رحلة تخييم، غسلت الصحون بصابون قابل للتحلل مباشرة في مياه البحيرة.'
        },
        options: {
            en: ['It\'s eco-friendly', 'You should wash dishes away from the water source'],
            ar: ['صديق للبيئة', 'يجب غسل الصحون بعيداً عن مصدر الماء']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Even biodegradable soap affects water chemistry. Plus, your food waste feeds bacteria in the lake. Wash at a distance and filter the water into the ground.',
            ar: 'حتى الصابون القابل للتحلل يؤثر على كيمياء الماء. كما أن بقايا طعامك تغذي البكتيريا في البحيرة. اغسل بعيداً وصفِّ الماء في التربة.'
        }
    },
    {
        id: 'hospital_outbreak',
        icon: '🏥',
        category: 'environment',
        scenario: {
            en: 'You see a news report about a "superbug outbreak" in a local hospital. You have an appointment there next week.',
            ar: 'سمعت في الأخبار عن "تفشي بكتيريا مقاومة" في المستشفى المحلي. ولديك موعد هناك الأسبوع القادم.'
        },
        options: {
            en: ['Cancel the appointment and stay home', 'Go, but follow strict hygiene (masks, hand washing)'],
            ar: ['ألغِ الموعد وابقَ في المنزل', 'اذهب، لكن التزم بإجراءات النظافة الصارمة (كمامة، غسل يدين)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Hospitals have infection control protocols. Delaying your own healthcare is risky. Just be vigilant about hygiene while there.',
            ar: 'المستشفيات لديها بروتوكولات لمكافحة العدوى. تأخير علاجك خطر. فقط كن حذراً جداً بشأن النظافة.'
        }
    },
    // === SOCIAL SITUATIONS ===
    {
        id: 'roommate_strep',
        icon: '🏠',
        category: 'social',
        scenario: {
            en: 'You are at a university dorm. Your roommate has "Strep Throat" and is on antibiotics. They feel fine and want to share a drink with you.',
            ar: 'في سكن الجامعة، زميلك مصاب بالتهاب حلق بكتيري ويتناول مضاداً حيوياً. يشعر بتحسن وأراد مشاركة مشروب معك.'
        },
        options: {
            en: ['Sure', 'No, wait until they finish the course'],
            ar: ['لا بأس', 'لا، انتظر حتى ينهي علاجه']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Even if they feel better, they might still be contagious. Plus, sharing saliva is the easiest way to catch their bug.',
            ar: 'حتى لو شعر بتحسن، قد لا يزال معدياً. مشاركة اللعاب أسهل طريقة لانتقال العدوى إليك.'
        }
    },
    {
        id: 'skip_condoms',
        icon: '🛡️',
        category: 'social',
        scenario: {
            en: 'You are sexually active with a new partner. You decide to skip condoms because "antibiotics can cure anything anyway."',
            ar: 'قررت ممارسة العلاقة الحميمة مع شريك جديد دون وقاية لأن "المضادات الحيوية تعالج أي شيء".'
        },
        options: {
            en: ['True', 'False and dangerous'],
            ar: ['صحيح', 'خطأ وخطير']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Gonorrhea is becoming untreatable (resistant to almost all antibiotics). Condoms are the only barrier to preventing these "super-STIs."',
            ar: 'مرض السيلان أصبح مقاوماً لكل المضادات الحيوية تقريباً ويصعب علاجه جداً. الوقاية هي الحل الوحيد.'
        }
    },
    {
        id: 'hospital_gown',
        icon: '🏥',
        category: 'social',
        scenario: {
            en: 'Your grandmother is in the hospital. The sign on her door says "Contact Precautions: Gown and Gloves Required." You only want to say hi for 5 minutes.',
            ar: 'جدتك في المستشفى. على باب غرفتها لافتة "احتياطات تلامس: يجب ارتداء الرداء والقفازات". تريد فقط السلام عليها لـ 5 دقائق.'
        },
        options: {
            en: ['Skip the gown; it takes too long', 'Put on the gown and gloves'],
            ar: ['تجاوز الرداء؛ يستغرق وقتاً طويلاً', 'ارتدِ الرداء والقفازات']
        },
        correctAnswer: 1,
        explanation: {
            en: 'The precautions aren\'t just for her; they are to stop YOU from carrying her superbug out to other patients or your family.',
            ar: 'الاحتياطات ليست لحمايتها فقط؛ بل لمنعك أنت من حمل البكتيريا المقاومة التي لديها ونقلها لمرضى آخرين أو لعائلتك.'
        }
    },
    {
        id: 'petting_zoo',
        icon: '🐑',
        category: 'social',
        scenario: {
            en: 'You visit a petting zoo with your kids. There is a hand washing station at the exit, but the line is long.',
            ar: 'زرت حديقة حيوانات أليفة مع أطفالك. يوجد مكان لغسل اليدين عند المخرج لكن الطابور طويل.'
        },
        options: {
            en: ['Use wet wipes from your bag instead', 'Wait in line and use soap and water'],
            ar: ['استخدم مناديل مبللة من حقيبتك بدلاً من الانتظار', 'انتظر في الطابور واستخدم الماء والصابون']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Wet wipes remove some dirt but don\'t kill all farm bacteria. Soap and running water are superior for removing fecal matter from animals.',
            ar: 'المناديل المبللة تزيل بعض الأوساخ لكنها لا تقتل كل بكتيريا المزارع. الصابون والماء الجاري أفضل بكثير لإزالة فضلات الحيوانات.'
        }
    },
    {
        id: 'child_one_pill',
        icon: '👶',
        category: 'social',
        scenario: {
            en: 'You are a teacher. A student comes to school with a contagious bacterial infection but says, "My mom gave me one antibiotic pill this morning, so I\'m not contagious."',
            ar: 'أنت معلم. جاء طالب للمدرسة مصاباً بعدوى بكتيرية معدية لكنه قال: "أمي أعطتني حبة مضاد حيوي واحدة هذا الصباح، لذا لست معدياً".'
        },
        options: {
            en: ['Allow them in class', 'Send them to the nurse; one pill is not enough'],
            ar: ['تسمح له بالدخول', 'ترسله للممرضة؛ حبة واحدة لا تكفي']
        },
        correctAnswer: 1,
        explanation: {
            en: 'It usually takes 24 hours of antibiotics to stop being contagious. One pill does not make them safe to be around.',
            ar: 'عادة يحتاج المريض لـ 24 ساعة من المضاد الحيوي ليتوقف عن كونه معدياً. حبة واحدة لا تجعله آمناً للاختلاط بالآخرين.'
        }
    },
    // === MYTHS ===
    {
        id: 'antimicrobial_soap',
        icon: '🧼',
        category: 'myths',
        scenario: {
            en: 'You buy a hand soap that claims to be "Antimicrobial" and "kills 99.9% of germs."',
            ar: 'اشتريت صابون يدين مكتوب عليه "مضاد للميكروبات" و"يقتل 99.9% من الجراثيم".'
        },
        options: {
            en: ['It\'s better than regular soap', 'It\'s unnecessary and might contribute to resistance'],
            ar: ['إنه أفضل من الصابون العادي', 'غير ضروري وقد يساهم في المقاومة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Regular soap physically removes germs, which is perfect. Chemical "killing" agents in soaps (like triclosan) can drive resistance and are banned in some places.',
            ar: 'الصابون العادي يزيل الجراثيم جسدياً وهذا ممتاز. المواد الكيميائية القاتلة في الصابون (مثل التريكلوسان) قد تدفع البكتيريا للمقاومة.'
        }
    },
    {
        id: 'vitamin_c',
        icon: '🍊',
        category: 'myths',
        scenario: {
            en: 'You get a cold. You start taking heavy doses of Vitamin C and Zinc.',
            ar: 'أصبت بنزلة برد. بدأت بتناول جرعات كبيرة من فيتامين سي والزنك.'
        },
        options: {
            en: ['This is AMR', 'This is not AMR'],
            ar: ['هذا يسبب مقاومة المضادات', 'هذا لا يسبب مقاومة المضادات']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Vitamins are not antibiotics. Taking vitamins does not cause bacterial resistance (though high doses can have other side effects).',
            ar: 'الفيتامينات ليست مضادات حيوية. تناولها لا يسبب مقاومة البكتيريا (رغم أن الجرعات العالية قد يكون لها آثار جانبية أخرى).'
        }
    },
    {
        id: 'vegetarian_safe',
        icon: '🥗',
        category: 'myths',
        scenario: {
            en: 'You believe that because you are a vegetarian, you cannot get antibiotic-resistant bacteria from food.',
            ar: 'تعتقد أنك لأنك نباتي، لا يمكن أن تصاب ببكتيريا مقاومة من الطعام.'
        },
        options: {
            en: ['True', 'False'],
            ar: ['صحيح', 'خطأ']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Vegetables can be contaminated by soil, water, or manure containing resistant bacteria. Everyone is at risk.',
            ar: 'الخضروات قد تكون ملوثة بتربة أو مياه أو سماد يحتوي على بكتيريا مقاومة. الجميع معرض للخطر.'
        }
    },
    {
        id: 'garlic_pneumonia',
        icon: '🧄',
        category: 'myths',
        scenario: {
            en: 'You are offered a "natural antibiotic" (like garlic pills) to cure your pneumonia instead of going to the hospital.',
            ar: 'عُرض عليك "مضاد حيوي طبيعي" (مثل حبوب الثوم) لعلاج الالتهاب الرئوي بدلاً من الذهاب للمستشفى.'
        },
        options: {
            en: ['Try the garlic first', 'Go to the hospital'],
            ar: ['جرب الثوم أولاً', 'اذهب للمستشفى']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Pneumonia is life-threatening. While garlic has mild properties, it cannot fight a deep lung infection. Relying on it can lead to sepsis and death.',
            ar: 'الالتهاب الرئوي يهدد الحياة. الثوم له فوائد لكنه لا يستطيع محاربة عدوى عميقة في الرئة. الاعتماد عليه قد يؤدي لتسمم الدم والوفاة.'
        }
    },
    {
        id: 'young_immune',
        icon: '💪',
        category: 'myths',
        scenario: {
            en: 'You think, "I\'m young and healthy, so if I get a resistant infection, my strong immune system will beat it easily."',
            ar: 'تفكر: "أنا شاب وبصحة جيدة، إذا أصبت بعدوى مقاومة، مناعتي القوية ستهزمها بسهولة".'
        },
        options: {
            en: ['Probably true', 'Dangerous misconception'],
            ar: ['غالباً صحيح', 'اعتقاد خاطئ وخطير']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Virulent superbugs (like Methicillin-resistant Staphylococcus aureus or MRSA) can overwhelm even the healthiest immune systems, leading to amputation or death.',
            ar: 'البكتيريا الخارقة الشرسة (مثل مكورات عنقودية ذهبية مقاومة للميثيسيلين MRSA) يمكنها التغلب حتى على أقوى الأجهزة المناعية، وقد تؤدي للبتر أو الوفاة.'
        }
    },
    // === WORKPLACE ===
    {
        id: 'sick_colleague',
        icon: '🏢',
        category: 'workplace',
        scenario: {
            en: 'You work in an open-plan office. A colleague is coughing constantly but refuses to go home, saying "I\'m on antibiotics, so I\'ll be fine."',
            ar: 'تعمل في مكتب مفتوح. زميلك يسعل باستمرار لكنه يرفض العودة للمنزل قائلاً: "أنا أتناول مضاداً حيوياً، لذا سأكون بخير".'
        },
        options: {
            en: ['Celebrate their dedication', 'Encourage them to work from home'],
            ar: ['تمدح تفانيه في العمل', 'تشجعه على العمل من المنزل']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Rest is essential for the antibiotics to work. Plus, coughing spreads droplets that might carry resistant bacteria to the whole office.',
            ar: 'الراحة ضرورية لعمل المضاد الحيوي. بالإضافة لذلك، السعال ينشر رذاذاً قد يحمل بكتيريا مقاومة لبقية المكتب.'
        }
    },
    {
        id: 'dilute_disinfectant',
        icon: '🧴',
        category: 'workplace',
        scenario: {
            en: 'You are a manager at a cleaning company. You want to save money, so you dilute the disinfectant more than the label says.',
            ar: 'أنت مدير في شركة تنظيف. تريد توفير المال، فقمت بتخفيف المعقم بالماء أكثر مما هو مكتوب على العبوة.'
        },
        options: {
            en: ['Smart savings', 'Dangerous'],
            ar: ['توفير ذكي', 'خطير']
        },
        correctAnswer: 1,
        explanation: {
            en: 'If the disinfectant is too weak, it doesn\'t kill the bacteria; it just injures them, teaching them how to survive the chemical next time.',
            ar: 'إذا كان المعقم ضعيفاً جداً، فلن يقتل البكتيريا؛ بل سيجرحها فقط، مما يعلمها كيف تنجو من المادة الكيميائية في المرة القادمة.'
        }
    },
    {
        id: 'daycare_pink_eye',
        icon: '👶',
        category: 'workplace',
        scenario: {
            en: 'You work at a daycare. A child has "pink eye" (conjunctivitis). The parents ask if they can bring the child back immediately after starting drops.',
            ar: 'تعمل في حضانة. طفل مصاب بالتهاب في العين (الرمد). الأهل يسألون إن كان بإمكانهم إحضاره فوراً بعد بدء قطرات العين.'
        },
        options: {
            en: ['Yes', 'No, check your policy (usually 24 hours)'],
            ar: ['نعم', 'لا، راجع سياسة الحضانة (عادة يمنع الحضور لمدة 24 ساعة)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Pink eye is highly contagious. Strict exclusion policies prevent the bug from sweeping through the whole daycare.',
            ar: 'التهاب العين معدٍ جداً. سياسات العزل تمنع انتشار العدوى لجميع الأطفال في الحضانة.'
        }
    },
    {
        id: 'farmer_mass_meds',
        icon: '🐷',
        category: 'workplace',
        scenario: {
            en: 'You are a farmer. You notice one pig is sick. You decide to put antibiotics in the water for all the pigs in that barn "just to be safe."',
            ar: 'أنت مزارع. لاحظت أن خروفاً واحداً مريض. قررت وضع المضاد الحيوي في الماء لكل الخراف في الحظيرة "للاحتياط".'
        },
        options: {
            en: ['Good prevention', 'This is mass medication and drives resistance'],
            ar: ['وقاية جيدة', 'هذا علاج جماعي يعزز المقاومة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'You should isolate and treat only the sick animal. Treating healthy animals blankets the environment with drugs, selecting for superbugs.',
            ar: 'يجب عزل وعلاج الحيوان المريض فقط. إعطاء الدواء للحيوانات السليمة يغمر البيئة بالأدوية ويخلق جراثيم خارقة.'
        }
    },
    {
        id: 'kitchen_cut',
        icon: '👨‍🍳',
        category: 'workplace',
        scenario: {
            en: 'You work in a restaurant kitchen. You have a small infected cut on your finger, but you don\'t want to wear a glove because it\'s hot.',
            ar: 'تعمل في مطعم. لديك جرح صغير ملتهب في إصبعك، لكنك لا تريد لبس قفاز لأن الجو حار.'
        },
        options: {
            en: ['Just be careful', 'You must wear a glove or not handle food'],
            ar: ['فقط كن حذراً', 'يجب ارتداء قفاز أو عدم لمس الطعام']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Staph bacteria from your infected cut can fall into the food. Since the food is ready-to-eat, the customer ingests your bacteria directly.',
            ar: 'بكتيريا "المكورات العنقودية" من جرحك قد تسقط في الطعام. وبما أن الطعام جاهز للأكل، سيبتلع الزبون البكتيريا مباشرة.'
        }
    }
];
