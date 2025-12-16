// AMR Quiz Scenarios - Part 1 (1-34)
// Comprehensive educational scenarios for antibiotic resistance awareness

export const QUIZ_SCENARIOS_PART1 = [
    // === AT THE DOCTOR'S OFFICE ===
    {
        id: 'doctor_sore_throat',
        icon: '🏥',
        category: 'doctor',
        scenario: {
            en: 'You have a sore throat and a runny nose. You visit your doctor, but she says you don\'t need antibiotics, just rest and fluids. You are annoyed because you took time off work to come here. What do you do?',
            ar: 'تعاني من التهاب في الحلق وسيلان في الأنف. زرت الطبيبة، لكنها قالت إنك لا تحتاج لمضاد حيوي، بل للراحة والسوائل فقط. شعرت بالانزعاج لأنك أخذت إجازة من العمل للمجيء. ماذا تفعل؟'
        },
        options: {
            en: ['Demand a prescription "just in case"', 'Go to a different doctor who will give you what you want', 'Trust the doctor; it\'s likely a virus, and antibiotics won\'t help'],
            ar: ['تصر على طلب وصفة طبية "للاحتياط"', 'تذهب لطبيب آخر سيعطيك ما تريد', 'تثق في كلام الطبيبة؛ فالأرجح أنه فيروس والمضاد الحيوي لن يفيدك']
        },
        correctAnswer: 2,
        explanation: {
            en: 'Colds and most sore throats are viral. Taking antibiotics for a virus kills your good bacteria and does nothing for your illness.',
            ar: 'نزلات البرد ومعظم التهابات الحلق سببها فيروسات. تناول المضاد الحيوي للفيروس يقتل البكتيريا النافعة في جسمك ولا يعالج مرضك.'
        }
    },
    {
        id: 'finish_course',
        icon: '💊',
        category: 'medication',
        scenario: {
            en: 'Your doctor prescribes antibiotics for a bacterial infection. She gives you a 7-day course. By day 4, you feel 100% better. What is your next move?',
            ar: 'وصف لك الطبيب مضاداً حيوياً لعدوى بكتيرية لمدة 7 أيام. في اليوم الرابع، شعرت بتحسن تام (100%). ماذا تفعل؟'
        },
        options: {
            en: ['Stop taking them and save the rest for later', 'Continue taking them until the bottle is empty (Day 7)', 'Give the rest to your spouse who is starting to cough'],
            ar: ['تتوقف عن تناول الدواء وتحتفظ بالباقي للمستقبل', 'تكمل تناول الدواء حتى تفرغ الزجاجة أو الشريط (اليوم السابع)', 'تعطي الباقي لزوجتك التي بدأت تسعل']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Feeling better means you killed the weak bacteria. The strong ones are still alive. If you stop early, the strong ones multiply and create a harder-to-treat infection.',
            ar: 'شعورك بالتحسن يعني أن البكتيريا الضعيفة قد ماتت، لكن البكتيريا القوية لا تزال حية. إذا توقفت مبكراً، ستتكاثر هذه البكتيريا القوية وتسبب عدوى أصعب في العلاج.'
        }
    },
    {
        id: 'dentist_pain',
        icon: '🦷',
        category: 'doctor',
        scenario: {
            en: 'You are at the dentist for a toothache. The dentist says you have a cavity but no sign of an abscess (infection). You ask for antibiotics to stop the pain.',
            ar: 'أنت عند طبيب الأسنان بسبب ألم في الضرس. قال الطبيب إن لديك تسوساً لكن لا يوجد خراج (التهاب). طلبت منه مضاداً حيوياً ليوقف الألم.'
        },
        options: {
            en: ['The dentist should give them to you for pain relief', 'The dentist should refuse; antibiotics are not painkillers'],
            ar: ['يجب أن يعطيك الطبيب الدواء لتسكين الألم', 'يجب أن يرفض الطبيب؛ المضادات الحيوية ليست مسكنات للألم']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Antibiotics kill bacteria; they do not numb pain. The only way to fix the pain is to treat the tooth (filling or root canal).',
            ar: 'المضادات الحيوية تقتل البكتيريا ولا تسكن الألم. الطريقة الوحيدة لوقف الألم هي علاج السن (حشو أو علاج عصب).'
        }
    },
    {
        id: 'surgery_prophylaxis',
        icon: '🏥',
        category: 'doctor',
        scenario: {
            en: 'You are undergoing a scheduled surgery (like a knee replacement). The surgeon mentions giving you antibiotics before the operation starts.',
            ar: 'ستخضع لعملية جراحية مجدولة (مثل استبدال مفصل الركبة). ذكر الجراح أنه سيعطيك مضاداً حيوياً قبل بدء العملية.'
        },
        options: {
            en: ['You should refuse; you aren\'t sick yet', 'You accept; this is standard prevention (prophylaxis)'],
            ar: ['ترفض، لأنك لست مريضاً بعد', 'توافق، فهذا إجراء وقائي قياسي']
        },
        correctAnswer: 1,
        explanation: {
            en: 'In surgery, preventative antibiotics are crucial to stop skin bacteria from entering the deep wound.',
            ar: 'في الجراحة، المضادات الوقائية ضرورية جداً لمنع بكتيريا الجلد من الدخول إلى الجرح العميق.'
        }
    },
    {
        id: 'green_mucus',
        icon: '🤧',
        category: 'myths',
        scenario: {
            en: 'You have a fever and green mucus coming from your nose. You tell your friend, "It\'s green, so I definitely need antibiotics." Is this true?',
            ar: 'لديك حمى ومخاط أخضر يخرج من أنفك. قلت لصديقك: "لونه أخضر، إذن أنا أحتاج بالتأكيد لمضاد حيوي". هل هذا صحيح؟'
        },
        options: {
            en: ['Yes, green always means bacteria', 'No, green mucus can happen with viruses too'],
            ar: ['نعم، اللون الأخضر يعني دائماً بكتيريا', 'لا، المخاط الأخضر قد يحدث مع الفيروسات أيضاً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Green mucus just means your immune system is fighting hard. It is not a diagnosis of bacterial infection.',
            ar: 'اللون الأخضر يعني فقط أن جهازك المناعي يقاتل بشدة، ولا يعتبر دليلاً قاطعاً على وجود عدوى بكتيرية.'
        }
    },
    // === MEDICATION AT HOME ===
    {
        id: 'old_antibiotics',
        icon: '🗑️',
        category: 'medication',
        scenario: {
            en: 'You are cleaning your medicine cabinet and find a half-full bottle of liquid antibiotics from three years ago.',
            ar: 'كنت تنظف خزانة الأدوية ووجدت زجاجة مضاد حيوي (شراب) نصف ممتلئة من قبل ثلاث سنوات.'
        },
        options: {
            en: ['Keep it; it might come in handy', 'Flush it down the toilet', 'Take it to a pharmacy take-back bin'],
            ar: ['تحتفظ بها، قد تحتاجها', 'تسكبها في المرحاض', 'تتخلص منها بطريقة آمنة (مثل تسليمها للصيدلية إذا كان متاحاً، أو خلطها بمادة غير قابلة للأكل ورميها في القمامة)']
        },
        correctAnswer: 2,
        explanation: {
            en: 'Never flush drugs (it pollutes water). Never keep old liquid meds (they expire and become toxic or ineffective).',
            ar: 'لا تسكب الأدوية في المرحاض (لأنها تلوث المياه). ولا تحتفظ بأدوية سائلة قديمة لأنها تنتهي صلاحيتها وتصبح سامة أو غير فعالة.'
        }
    },
    {
        id: 'share_uti_pills',
        icon: '💊',
        category: 'medication',
        scenario: {
            en: 'Your husband has a urinary tract infection (UTI). You had one last year and have leftover pills. You offer them to him.',
            ar: 'زوجك يعاني من التهاب في المسالك البولية. كان لديك نفس المرض العام الماضي ولديك بقايا حبوب. عرضتِ عليه أخذها.'
        },
        options: {
            en: ['Good idea, it saves money', 'Bad idea, do not share'],
            ar: ['فكرة جيدة لتوفير المال', 'فكرة سيئة، لا تشاركي الدواء']
        },
        correctAnswer: 1,
        explanation: {
            en: 'His infection might be a different bacteria, or he might need a different dose. Sharing promotes resistance and can be dangerous.',
            ar: 'قد تكون عدواه بسبب نوع مختلف من البكتيريا، أو قد يحتاج لجرعة مختلفة. مشاركة الدواء تعزز المقاومة وقد تكون خطيرة.'
        }
    },
    {
        id: 'missed_dose',
        icon: '⏰',
        category: 'medication',
        scenario: {
            en: 'You miss your morning dose of antibiotics. It is now lunchtime.',
            ar: 'نسيت تناول جرعة الصباح من المضاد الحيوي. والآن وقت الغداء.'
        },
        options: {
            en: ['Skip it and wait for the evening dose', 'Take it immediately, then adjust the timing of the next dose slightly', 'Take double the dose in the evening'],
            ar: ['تتركها وتنتظر جرعة المساء', 'تتناولها فور تذكرها، ثم تضبط توقيت الجرعة التالية قليلاً', 'تأخذ جرعة مضاعفة في المساء']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Consistency is key. Never double up doses unless the label says so. Take it as soon as you remember to keep the drug levels high enough to kill the bugs.',
            ar: 'الانتظام هو المفتاح. لا تضاعف الجرعة أبداً إلا بأمر الطبيب. خذها فور تذكرها لتبقى كمية الدواء في دمك كافية لقتل الجراثيم.'
        }
    },
    {
        id: 'take_with_food',
        icon: '🍞',
        category: 'medication',
        scenario: {
            en: 'The label on your antibiotic says "Take with food." You are not hungry.',
            ar: 'الملصق على المضاد الحيوي يقول "يؤخذ مع الطعام". وأنت لست جائعاً.'
        },
        options: {
            en: ['Take it on an empty stomach anyway', 'Eat a few crackers or a slice of bread, then take it'],
            ar: ['تأخذه على معدة فارغة', 'تأكل بضع قطع من البسكويت أو الخبز ثم تأخذه']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Some antibiotics are very harsh on the stomach lining. Eating prevents nausea and vomiting.',
            ar: 'بعض المضادات قوية جداً على جدار المعدة. الأكل يمنع الغثيان والقيء.'
        }
    },
    {
        id: 'alcohol_metronidazole',
        icon: '🍷',
        category: 'medication',
        scenario: {
            en: 'The pharmacist tells you to avoid alcohol while on this antibiotic (Metronidazole). You have a wedding to attend.',
            ar: 'أخبرك الصيدلي بضرورة تجنب الكحول تماماً مع هذا المضاد الحيوي (فلاجيل/ميترونيدازول). لديك مناسبة اجتماعية.'
        },
        options: {
            en: ['One glass of wine won\'t hurt', 'Drink water or soda at the wedding'],
            ar: ['كأس واحد لن يضر', 'تلتزم بشرب الماء أو العصير فقط']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Mixing alcohol with certain antibiotics causes severe vomiting, rapid heart rate, and headache. It\'s a chemical reaction, not just a suggestion.',
            ar: 'خلط الكحول مع بعض المضادات يسبب تفاعلاً كيميائياً شديداً يؤدي للقيء وتسارع دقات القلب، وليس مجرد نصيحة عابرة.'
        }
    },
    // === PARENTS & CHILDREN ===
    {
        id: 'child_ear_watch',
        icon: '👶',
        category: 'children',
        scenario: {
            en: 'Your toddler has an ear infection. The pediatrician says, "Let\'s wait 2 days before starting antibiotics."',
            ar: 'طفلك الصغير يعاني من ألم في الأذن. قال طبيب الأطفال: "لننتظر يومين قبل البدء بالمضاد الحيوي".'
        },
        options: {
            en: ['You get angry; you want treatment now', 'You agree to "watchful waiting"'],
            ar: ['تغضب وتطلب العلاج فوراً', 'توافق على "الانتظار والمراقبة"']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Many ear infections in kids are viral or heal on their own. Avoiding drugs when possible spares the child\'s gut health and future resistance.',
            ar: 'العديد من التهابات الأذن عند الأطفال تكون فيروسية أو تشفى وحدها. تجنب الأدوية حين لا تكون ضرورية يحمي صحة أمعاء طفلك ومناعته مستقبلاً.'
        }
    },
    {
        id: 'online_antibiotics',
        icon: '💻',
        category: 'children',
        scenario: {
            en: 'Another parent at the playground tells you, "I buy antibiotics online from overseas so I don\'t have to pay for doctor visits."',
            ar: 'أم أخرى في الحديقة تخبرك: "أنا أشتري المضادات الحيوية من الإنترنت من الخارج لأوفر ثمن كشف الطبيب".'
        },
        options: {
            en: ['Ask for the website', 'Warn them that this is dangerous and unregulated'],
            ar: ['تطلبين منها اسم الموقع', 'تحذرينها من أن هذا خطير وغير مضمون']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Unregulated drugs may be fake, contain the wrong chemicals, or lead to misdiagnosis.',
            ar: 'الأدوية غير المراقبة قد تكون مغشوشة، أو تحتوي على مواد خاطئة، أو تؤدي لتشخيص خاطئ للمرض.'
        }
    },
    {
        id: 'teen_acne',
        icon: '😊',
        category: 'children',
        scenario: {
            en: 'Your teenager has acne. The dermatologist prescribes a long-term antibiotic lotion. Your teen stops using it because "it\'s not working fast enough."',
            ar: 'ابنك المراهق يعاني من حب الشباب. وصف له طبيب الجلدية غسولاً يحتوي على مضاد حيوي لفترة طويلة. توقف ابنك عن استخدامه لأنه "لا يعمل بسرعة".'
        },
        options: {
            en: ['Tell them to stop', 'Encourage them to finish the course as prescribed'],
            ar: ['تخبره أن يتوقف', 'تشجعه على إكمال الكورس كما وصف الطبيب']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Acne treatment takes time. Stopping and starting creates resistant skin bacteria that are much harder to clear up later.',
            ar: 'علاج حب الشباب يحتاج وقتاً. التوقف والبدء من جديد يخلق بكتيريا جلدية مقاومة يصعب علاجها لاحقاً.'
        }
    },
    {
        id: 'child_spit_medicine',
        icon: '👶',
        category: 'children',
        scenario: {
            en: 'Your child is prescribed a liquid antibiotic that tastes bad. They spit half of it out.',
            ar: 'طفلك يرفض طعم المضاد الحيوي السائل وبصق نصفه.'
        },
        options: {
            en: ['Assume they got enough', 'Call the pharmacist or doctor for advice on re-dosing'],
            ar: ['تفترض أنه حصل على كفايته', 'تتصل بالصيدلي أو الطبيب للنصيحة حول إعادة الجرعة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Under-dosing helps bacteria survive. You need professional advice on whether to give another spoon.',
            ar: 'أخذ جرعة أقل من المطلوب يساعد البكتيريا على النجاة. تحتاج لرأي مختص لتعرف هل تعيد إعطاءه ملعقة أخرى أم لا.'
        }
    },
    {
        id: 'save_strep_pills',
        icon: '💊',
        category: 'children',
        scenario: {
            en: 'Your child recovers from Strep Throat. You have 3 days of pills left. You think, "I\'ll keep these for when his sister gets it."',
            ar: 'شفي طفلك من التهاب الحلق، وبقي لديك دواء يكفي لـ 3 أيام. فكرت: "سأحتفظ به لأخته إذا أصيبت بالعدوى".'
        },
        options: {
            en: ['Smart planning', 'Dangerous practice'],
            ar: ['تخطيط ذكي', 'تصرف خطير']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Never share. You must finish the course to ensure your child\'s infection doesn\'t relapse.',
            ar: 'لا تشارك الدواء أبداً. يجب إنهاء الكورس كاملاً للتأكد من عدم عودة العدوى لطفلك الأول، والجرعة قد لا تناسب الأخت.'
        }
    },
    // === IN THE KITCHEN ===
    {
        id: 'rinse_chicken',
        icon: '🍗',
        category: 'food',
        scenario: {
            en: 'You are making a chicken stir-fry. You take the raw chicken out of the package and rinse it under the tap.',
            ar: 'تقوم بتحضير دجاج مقلي. أخرجت الدجاج النيء من الكيس وغسلته تحت الصنبور بالماء.'
        },
        options: {
            en: ['Correct, this cleans the chicken', 'Incorrect, this spreads bacteria'],
            ar: ['صحيح، هذا ينظف الدجاج', 'خطأ، هذا ينشر البكتيريا']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Rinsing splashes microscopic drops of Salmonella/Campylobacter onto your sink, faucet, and clothes. Cooking kills the bugs; washing just spreads them.',
            ar: 'غسل الدجاج ينشر رذاذاً غير مرئي محملاً ببكتيريا السالمونيلا على الحوض والصنبور وملابسك. الطبخ يقتل الجراثيم؛ الغسيل ينشرها فقط.'
        }
    },
    {
        id: 'cutting_board',
        icon: '🥬',
        category: 'food',
        scenario: {
            en: 'You use a cutting board to chop raw meat. You then give it a quick wipe with a paper towel and use it to chop lettuce for a salad.',
            ar: 'استخدمت لوح التقطيع لتقطيع اللحم النيء. مسحته بمنديل ورقي سريعاً ثم استخدمته لتقطيع الخس للسلطة.'
        },
        options: {
            en: ['Safe', 'Unsafe (Cross-contamination)'],
            ar: ['آمن', 'غير آمن (تلوث متبادل)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'The raw meat bacteria are now on the lettuce, which you will eat raw. You must wash the board with hot soapy water or use a separate board.',
            ar: 'بكتيريا اللحم النيء انتقلت الآن للخس الذي ستأكله نيئاً. يجب غسل اللوح بالماء الساخن والصابون أو استخدام لوح منفصل.'
        }
    },
    {
        id: 'burger_color',
        icon: '🍔',
        category: 'food',
        scenario: {
            en: 'You are cooking burgers. They look brown on the outside, so you serve them.',
            ar: 'تطهو البرجر. يبدو لونه بنياً من الخارج، لذا قدمته للأكل.'
        },
        options: {
            en: ['Safe', 'Use a meat thermometer to check the inside temperature'],
            ar: ['آمن', 'استخدم ميزان حرارة اللحوم للتأكد من نضجه من الداخل']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Color is not a reliable indicator. Only heat (usually 160°F/71°C for ground meat) kills resistant bacteria inside.',
            ar: 'اللون ليس مقياساً موثوقاً. الحرارة فقط (عادة 71 درجة مئوية للحم المفروم) هي التي تقتل البكتيريا المقاومة في الداخل.'
        }
    },
    {
        id: 'leftovers_counter',
        icon: '🍲',
        category: 'food',
        scenario: {
            en: 'You leave leftovers from dinner on the counter to cool down. You forget about them for 4 hours.',
            ar: 'تركت بقايا العشاء على الطاولة لتبرد، ونسيتها لمدة 4 ساعات.'
        },
        options: {
            en: ['Put them in the fridge now', 'Throw them away'],
            ar: ['ضعها في الثلاجة الآن', 'ارمها في القمامة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Bacteria multiply rapidly at room temperature. After 2 hours, the risk of food poisoning (from resistant bugs like Salmonella) increases effectively.',
            ar: 'البكتيريا تتكاثر بسرعة في درجة حرارة الغرفة. بعد ساعتين، يزداد خطر التسمم الغذائي بشكل كبير.'
        }
    },
    {
        id: 'antibiotic_free_meat',
        icon: '🦃',
        category: 'food',
        scenario: {
            en: 'You see a label "Raised without Antibiotics" on a package of turkey. It costs $1 more.',
            ar: 'رأيت ملصقاً على الدجاج يقول "ربي بدون مضادات حيوية". وسعره أغلى قليلاً.'
        },
        options: {
            en: ['It\'s a marketing scam', 'Buying it supports farming practices that reduce AMR'],
            ar: ['هذه خدعة تسويقية', 'شراؤه يدعم ممارسات زراعية تقلل من مقاومة البكتيريا']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Consumer demand drives change. Buying antibiotic-free meat discourages the overuse of drugs in agriculture.',
            ar: 'طلب المستهلكين يغير السوق. شراء لحوم خالية من المضادات يشجع المزارع على تقليل استخدام الأدوية.'
        }
    },
    // === PET CARE ===
    {
        id: 'cat_wound_human_meds',
        icon: '🐱',
        category: 'pets',
        scenario: {
            en: 'Your cat has a wound. You have some Neosporin (human antibiotic ointment) and some leftover Amoxicillin pills.',
            ar: 'قطتك مصابة بجرح. لديك مرهم مضاد حيوي بشري وبعض حبوب الأموكسيسيلين المتبقية لديك.'
        },
        options: {
            en: ['Use the human meds', 'Take the cat to the vet'],
            ar: ['استخدم الأدوية البشرية', 'خذ القطة للطبيب البيطري']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Human doses can be toxic to pets. Plus, pets can carry MRSA, which needs specific veterinary treatment.',
            ar: 'الجرعات البشرية قد تكون سامة للحيوانات. كما أن الحيوانات قد تحمل بكتيريا تحتاج لعلاج بيطري خاص.'
        }
    },
    {
        id: 'dog_pills_struggle',
        icon: '🐕',
        category: 'pets',
        scenario: {
            en: 'The vet prescribes antibiotics for your dog\'s skin infection. It\'s a struggle to get the dog to eat the pills. You miss 3 days in a row.',
            ar: 'وصف البيطري مضاداً حيوياً لكلبك لعلاج التهاب جلدي. من الصعب جعل الكلب يبتلع الحبوب، لذا فوتّ 3 أيام متتالية.'
        },
        options: {
            en: ['Give up; it\'s too hard', 'Call the vet for an alternative (like an injection)'],
            ar: ['استسلم، الأمر صعب جداً', 'اتصل بالبيطري لطلب بديل (مثل حقنة)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Partial treatment is the perfect recipe for creating a resistant skin infection that will never heal.',
            ar: 'العلاج الجزئي هو الوصفة المثالية لخلق التهاب جلدي مقاوم لن يشفى أبداً.'
        }
    },
    {
        id: 'reptile_cage',
        icon: '🦎',
        category: 'pets',
        scenario: {
            en: 'You are cleaning your lizard\'s cage or your turtle tank. You don\'t wear gloves.',
            ar: 'تقوم بتنظيف قفص السلحفاة أو السحلية الخاصة بك. لم تلبس قفازات.'
        },
        options: {
            en: ['Wash your hands immediately afterwards with soap', 'Wipe hands on your jeans'],
            ar: ['اغسل يديك فوراً بالصابون بعد الانتهاء', 'امسح يديك في بنطالك']
        },
        correctAnswer: 0,
        explanation: {
            en: 'Reptiles commonly carry Salmonella, which can be multi-drug resistant. Hand hygiene is non-negotiable here.',
            ar: 'الزواحف غالباً ما تحمل السالمونيلا، والتي قد تكون مقاومة للأدوية. غسل اليدين ضروري جداً.'
        }
    },
    {
        id: 'dog_licks_face',
        icon: '🐕',
        category: 'pets',
        scenario: {
            en: 'Your dog licks your face right on the mouth.',
            ar: 'كلبك يلعق وجهك مباشرة على فمك.'
        },
        options: {
            en: ['It\'s cute; dog mouths are cleaner than humans', 'It\'s risky; dogs carry different bacteria (including resistant ones from poop)'],
            ar: ['لطيف، فم الكلاب أنظف من البشر', 'خطر، الكلاب تحمل بكتيريا مختلفة (بما فيها بكتيريا من الفضلات)']
        },
        correctAnswer: 1,
        explanation: {
            en: '"Dog mouths are cleaner" is a myth. They lick everything. Transferring fecal bacteria to your mouth is a risk for transferring resistance genes.',
            ar: 'مقولة "فم الكلب أنظف" خرافة. الكلاب تلعق كل شيء. انتقال البكتيريا لفمك قد ينقل جينات مقاومة للمضادات.'
        }
    },
    {
        id: 'raw_meat_diet',
        icon: '🥩',
        category: 'pets',
        scenario: {
            en: 'You feed your dog a "raw meat" diet.',
            ar: 'تطعم كلبك "لحماً نيئاً".'
        },
        options: {
            en: ['It\'s natural and safe', 'You need to be extra careful with their poop'],
            ar: ['إنه طبيعي وآمن', 'يجب أن تكون حذراً جداً مع فضلات الكلب']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Raw meat diets often contain resistant E. coli and Salmonella. Your dog sheds these in their waste, which can infect you when you pick it up.',
            ar: 'اللحوم النيئة غالباً تحتوي على بكتيريا مقاومة مثل الإيكولاي. الكلب يخرج هذه البكتيريا في فضلاته، مما قد يصيبك بالعدوى عند تنظيفها.'
        }
    },
    // === HYGIENE ===
    {
        id: 'bathroom_faucet',
        icon: '🚿',
        category: 'hygiene',
        scenario: {
            en: 'You are in a public bathroom. You wash your hands but then use your wet hand to turn off the faucet and open the door.',
            ar: 'أنت في حمام عام. غسلت يديك ثم استخدمت يدك المبللة لإغلاق الصنبور وفتح الباب.'
        },
        options: {
            en: ['Good enough', 'You just re-contaminated your hands'],
            ar: ['جيد بما فيه الكفاية', 'لقد لوثت يديك مرة أخرى']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Faucets and handles are covered in germs. Use a paper towel to turn off the tap and open the door.',
            ar: 'الصنابير ومقابض الأبواب مليئة بالجراثيم. استخدم منديلاً ورقياً لإغلاق الصنبور وفتح الباب.'
        }
    },
    {
        id: 'toothbrush_floor',
        icon: '🪥',
        category: 'hygiene',
        scenario: {
            en: 'You drop your toothbrush on the bathroom floor.',
            ar: 'سقطت فرشاة أسنانك على أرضية الحمام.'
        },
        options: {
            en: ['Rinse it off for 2 seconds and use it', 'Throw it away or boil it/soak in antiseptic'],
            ar: ['اغسلها بالماء لثانيتين واستخدمها', 'ارمها أو عقمها جيداً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Bathroom floors (especially near toilets) are hotspots for fecal bacteria. Using it puts those bugs directly into your gums/bloodstream.',
            ar: 'أرضيات الحمام (خاصة قرب المرحاض) بؤرة لبكتيريا الفضلات. استخدام الفرشاة يضع تلك الجراثيم مباشرة في لثتك ودمك.'
        }
    },
    {
        id: 'gym_cut',
        icon: '💪',
        category: 'hygiene',
        scenario: {
            en: 'You have a small cut on your finger. You go to the gym.',
            ar: 'لديك جرح صغير في إصبعك. ذهبت للنادي الرياضي (الجيم).'
        },
        options: {
            en: ['Leave it uncovered to "air out"', 'Cover it with a waterproof bandage'],
            ar: ['اترك الجرح مكشوفاً "ليتهوى"', 'غطه بضمادة مقاومة للماء']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Gym equipment is shared by hundreds. Open wounds are entry points for MRSA (Staph) often found on gym mats and weights.',
            ar: 'الأجهزة الرياضية يلمسها المئات. الجروح المفتوحة مدخل لبكتيريا "المكورات العنقودية" (MRSA) الموجودة بكثرة في النوادي.'
        }
    },
    {
        id: 'musty_towel',
        icon: '🧺',
        category: 'hygiene',
        scenario: {
            en: 'You have been using the same bath towel for 2 weeks. It smells a little musty.',
            ar: 'تستخدم نفس منشفة الاستحمام منذ أسبوعين. رائحتها بدأت تتغير (كمكمة).'
        },
        options: {
            en: ['It\'s fine, I\'m clean when I use it', 'Wash it'],
            ar: ['عادي، أنا نظيف عندما أستخدمها', 'اغسلها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'A musty smell means bacteria and mold are growing. Rubbing that on your body spreads them.',
            ar: 'الرائحة تعني أن البكتيريا والعفن ينموان عليها. مسح جسمك بها ينشر تلك الجراثيم.'
        }
    },
    {
        id: 'share_razor',
        icon: '🪒',
        category: 'hygiene',
        scenario: {
            en: 'Your roommate has a boil on their skin that looks red and angry. They ask to borrow your razor.',
            ar: 'صديقك في السكن لديه دمل جلدي يبدو ملتهباً وأحمر اللون. طلب استعارة شفرة الحلاقة الخاصة بك.'
        },
        options: {
            en: ['Sure, just rinse it after', 'No way'],
            ar: ['بالتأكيد، فقط اغسلها بعد الاستخدام', 'مستحيل']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Sharing razors transfers blood and skin cells. This is a primary way MRSA spreads in households.',
            ar: 'مشاركة شفرات الحلاقة تنقل الدم وخلايا الجلد. هذه طريقة رئيسية لانتشار العدوى الجلدية الخطيرة.'
        }
    }
];
