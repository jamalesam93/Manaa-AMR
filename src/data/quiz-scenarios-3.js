// AMR Quiz Scenarios - Part 3 (56-100)
// Shopping, Medical, Hygiene, Travel, Lifestyle, Future, and Final scenarios

export const QUIZ_SCENARIOS_PART3 = [
    // === SHOPPING & CONSUMER ===
    {
        id: 'organic_milk',
        icon: '🥛',
        category: 'shopping',
        scenario: {
            en: 'You are buying milk. You see "Organic" and "Regular." You know Organic often restricts antibiotic use.',
            ar: 'تشتري الحليب. رأيت نوعاً "عضوياً" وآخر "عادياً". وتعرف أن العضوي يقيّد استخدام المضادات.'
        },
        options: {
            en: ['Organic is the only safe milk', 'Regular milk is tested for antibiotic residue too'],
            ar: ['العضوي هو الحليب الآمن الوحيد', 'الحليب العادي يتم فحصه للتأكد من خلوه من بقايا المضادات أيضاً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'In many countries, all milk is tested for antibiotics before it hits the shelf. If residues are found, the milk is dumped. However, Organic farming practices help reduce the creation of resistance on the farm.',
            ar: 'في معظم الدول، يتم فحص كل الحليب قبل بيعه. إذا وجدت بقايا مضادات، يتم إتلافه. ومع ذلك، الزراعة العضوية تساعد في تقليل خلق المقاومة في المزرعة نفسها.'
        }
    },
    {
        id: 'cough_syrup_antibiotic',
        icon: '🍯',
        category: 'shopping',
        scenario: {
            en: 'You are at a pharmacy buying cough syrup. You ask the pharmacist, "Which one has an antibiotic in it?"',
            ar: 'تشتري دواء للسعال من الصيدلية. سألت الصيدلي: "أي واحد من هؤلاء يحتوي على مضاد حيوي؟"'
        },
        options: {
            en: ['Valid question', 'Misguided question; cough syrups shouldn\'t contain antibiotics'],
            ar: ['سؤال وجيه', 'سؤال في غير محله؛ أدوية السعال لا يجب أن تحتوي على مضادات']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Over-the-counter cough syrups relieve symptoms. They do not (and should not) contain antibiotics.',
            ar: 'أدوية السعال المتاحة بدون وصفة تخفف الأعراض فقط ولا تحتوي (ولا يجب أن تحتوي) على مضادات حيوية.'
        }
    },
    {
        id: 'fish_farming',
        icon: '🐟',
        category: 'shopping',
        scenario: {
            en: 'You are buying fish. You check the origin label. One is from a country known for loose regulations on aquaculture (fish farming).',
            ar: 'تشتري سمكاً. تفحصت بلد المنشأ. وجدت أنه من دولة معروفة بضعف الرقابة على المزارع السمكية.'
        },
        options: {
            en: ['Buy it, it\'s cheaper', 'Avoid it if possible'],
            ar: ['اشتره، إنه أرخص', 'تجنبه إن أمكن']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Intense fish farming often dumps antibiotics into the water. Supporting sustainable fisheries helps global AMR efforts.',
            ar: 'المزارع السمكية المكثفة غالباً ما تفرغ المضادات الحيوية في الماء. دعم مصايد الأسماك المستدامة يساعد الجهود العالمية لمكافحة المقاومة.'
        }
    },
    {
        id: 'superbug_spray',
        icon: '🧴',
        category: 'shopping',
        scenario: {
            en: 'You see a cleaning spray that says "Kills Superbugs!"',
            ar: 'رأيت منظفاً منزلياً مكتوب عليه "يقتل البكتيريا الخارقة!"'
        },
        options: {
            en: ['Buy it for daily use', 'Use it only for high-risk messes (like vomit or blood)'],
            ar: ['اشتره للاستخدام اليومي', 'استخدمه فقط للحالات شديدة الخطورة (مثل تنظيف قيء مريض)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Using hospital-grade cleaners for daily dusting is overkill and can promote resistance. Soap and water are usually fine for daily cleaning.',
            ar: 'استخدام منظفات بدرجة المستشفيات للغبار اليومي مبالغة وقد يعزز المقاومة. الماء والصابون كافيان للتنظيف اليومي.'
        }
    },
    {
        id: 'probiotics_after',
        icon: '💊',
        category: 'shopping',
        scenario: {
            en: 'You are buying probiotics after a course of antibiotics.',
            ar: 'تشتري "بروبيوتيك" (بكتيريا نافعة) بعد كورس مضاد حيوي.'
        },
        options: {
            en: ['It\'s a waste of money', 'It might help restore your gut balance'],
            ar: ['إضاعة للمال', 'قد يساعد في استعادة توازن أمعائك']
        },
        correctAnswer: 1,
        explanation: {
            en: 'While research is ongoing, repopulating your gut with "good" bacteria can prevent "bad" resistant bacteria (like C. diff) from moving in.',
            ar: 'رغم أن الأبحاث مستمرة، إلا أن إعادة ملء أمعائك بالبكتيريا "الخيرة" قد يمنع البكتيريا "السيئة" المقاومة من السيطرة.'
        }
    },
    // === COMPLEX MEDICAL ===
    {
        id: 'asymptomatic_uti',
        icon: '👴',
        category: 'medical',
        scenario: {
            en: 'Your elderly father is in a nursing home. He has bacteria in his urine but no fever or pain (Asymptomatic Bacteriuria). The nurse wants to start antibiotics.',
            ar: 'والدك المسن في دار رعاية. وجدوا بكتيريا في بوله لكنه لا يعاني من حرارة أو ألم (بكتيريا بدون أعراض). الممرضة تريد بدء المضاد الحيوي.'
        },
        options: {
            en: ['Agree immediately', 'Ask the doctor if it\'s necessary to treat if he has no symptoms'],
            ar: ['وافق فوراً', 'اسأل الطبيب إن كان العلاج ضرورياً طالما لا توجد أعراض']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Elderly people often have bacteria in the bladder harmlessly. Treating "clean" patients triggers resistance and causes side effects without benefit.',
            ar: 'كبار السن غالباً ما يكون لديهم بكتيريا في المثانة بشكل غير ضار. علاج المرضى "النظيفين" يحفز المقاومة ويسبب آثاراً جانبية دون فائدة.'
        }
    },
    {
        id: 'pregnant_strep_b',
        icon: '🤰',
        category: 'medical',
        scenario: {
            en: 'You are pregnant. Your doctor tests you for "Group B Strep." You test positive. They want to give you antibiotics during labor.',
            ar: 'أنتِ حامل. فحصك الطبيب لبكتيريا "السبحية مجموعة ب". النتيجة إيجابية. يريدون إعطاءك مضاداً حيوياً أثناء الولادة.'
        },
        options: {
            en: ['Refuse; you don\'t want drugs in the baby', 'Accept'],
            ar: ['ارفضي؛ لا تريدين أدوية للطفل', 'وافقي']
        },
        correctAnswer: 1,
        explanation: {
            en: 'This is a specific, life-saving use of antibiotics. It prevents the baby from getting a serious infection during birth. It is evidence-based and safe.',
            ar: 'هذا استخدام محدد ومنقذ للحياة. يمنع الطفل من التقاط عدوى خطيرة أثناء الولادة. وهو إجراء آمن ومثبت علمياً.'
        }
    },
    {
        id: 'heart_valve_dental',
        icon: '🦷',
        category: 'medical',
        scenario: {
            en: 'You have a heart valve condition. Your dentist suggests taking a single dose of antibiotics before your teeth cleaning.',
            ar: 'لديك مشكلة في صمام القلب. اقترح طبيب الأسنان أخذ جرعة واحدة من المضاد الحيوي قبل تنظيف أسنانك.'
        },
        options: {
            en: ['Refuse; dentists shouldn\'t give drugs', 'Follow the advice (Endocarditis prophylaxis)'],
            ar: ['ارفض؛ أطباء الأسنان لا يجب أن يعطوا أدوية القلب', 'اتبع النصيحة (وقاية التهاب الشغاف)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'For specific high-risk heart patients, bacteria from gums can settle on the heart valve. This is a targeted, appropriate use of AMR.',
            ar: 'لمرضى القلب ذوي الخطورة العالية، البكتيريا من اللثة قد تستقر على صمام القلب. هذا استخدام مستهدف ومناسب للمضادات.'
        }
    },
    {
        id: 'chronic_bronchitis',
        icon: '🫁',
        category: 'medical',
        scenario: {
            en: 'You have chronic bronchitis. You want antibiotics every time you cough.',
            ar: 'لديك التهاب شعبي مزمن (كحة دائمة). تريد مضاداً حيوياً كلما سعلت.'
        },
        options: {
            en: ['It keeps the lungs clear', 'It creates highly resistant lung bacteria'],
            ar: ['هذا يبقي الرئة نظيفة', 'هذا يخلق بكتيريا رئة عالية المقاومة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Frequent use for chronic conditions leads to "colonization" with superbugs, meaning when you get a real pneumonia, the drugs won\'t work.',
            ar: 'الاستخدام المتكرر للحالات المزمنة يؤدي لـ "استعمار" الرئة ببكتيريا خارقة، مما يعني أنه عندما تصاب بالتهاب رئوي حقيقي، لن تعمل الأدوية.'
        }
    },
    {
        id: 'vancomycin',
        icon: '💉',
        category: 'medical',
        scenario: {
            en: 'You are prescribed "Vancomycin." The doctor tells you it is a "last-resort" drug.',
            ar: 'وصف لك الطبيب "فانكومايسين". وأخبرك أنه دواء "الملاذ الأخير".'
        },
        options: {
            en: ['Take it casually', 'Take it extremely seriously; if this fails, there are few options left'],
            ar: ['تعامل معه ببساطة', 'تعامل معه بجدية تامة؛ إذا فشل هذا، فالخيارات قليلة جداً']
        },
        correctAnswer: 1,
        explanation: {
            en: '"Last-resort" means the bacteria are already resistant to everything else. This is the final line of defense.',
            ar: '"الملاذ الأخير" يعني أن البكتيريا قاومت كل شيء آخر. هذا هو خط الدفاع الأخير.'
        }
    },
    // === MORE HYGIENE ===
    {
        id: 'dry_on_pants',
        icon: '👖',
        category: 'hygiene',
        scenario: {
            en: 'You wash your hands but dry them on your pants.',
            ar: 'غسلت يديك لكن جففتهما بمسحهما في بنطالك.'
        },
        options: {
            en: ['Clean', 'Dirty'],
            ar: ['نظيفة', 'متسخة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Your pants are covered in dust, dirt, and whatever you sat on. You just undid the washing.',
            ar: 'بنطالك مغطى بالغبار والأوساخ وكل ما جلست عليه. لقد ألغيت فائدة الغسيل للتو.'
        }
    },
    {
        id: 'phone_toilet',
        icon: '📱',
        category: 'hygiene',
        scenario: {
            en: 'You use your phone while on the toilet. Then you cook dinner while looking at a recipe on the phone.',
            ar: 'تستخدم هاتفك وأنت في المرحاض. ثم تطبخ العشاء وأنت تنظر لوصفة على الهاتف.'
        },
        options: {
            en: ['It\'s fine; I didn\'t touch anything dirty', 'Phones are "fecal vectors"'],
            ar: ['عادي؛ لم ألمس شيئاً قذراً', 'الهواتف "ناقلات للجراثيم"']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Phones carry massive amounts of bacteria. Sanitize your phone regularly, and never use it in the bathroom.',
            ar: 'الهواتف تحمل كميات هائلة من البكتيريا. عقم هاتفك بانتظام، ولا تستخدمه أبداً في الحمام.'
        }
    },
    {
        id: 'grocery_bags',
        icon: '🛒',
        category: 'hygiene',
        scenario: {
            en: 'You wash your reusable grocery bags once a year.',
            ar: 'تغسل أكياس البقالة القابلة لإعادة الاستخدام مرة واحدة في السنة.'
        },
        options: {
            en: ['That\'s enough', 'You should wash them more often, especially if you carry meat'],
            ar: ['هذا يكفي', 'يجب غسلها أكثر، خاصة إذا حملت فيها لحوماً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Meat juices can leak into the fabric. If you put fresh veggies in that bag next week, they pick up the bacteria.',
            ar: 'عصارة اللحوم قد تتسرب للقماش. إذا وضعت خضروات طازجة في الكيس الأسبوع القادم، ستلتقط البكتيريا.'
        }
    },
    {
        id: 'old_sponge',
        icon: '🧽',
        category: 'hygiene',
        scenario: {
            en: 'You clean the kitchen sponge by rinsing it in warm water. You use it for 2 months.',
            ar: 'تنظف إسفنجة المطبخ بشطفها بماء دافئ. وتستخدمها لمدة شهرين.'
        },
        options: {
            en: ['Economical', 'The sponge is a bacteria factory'],
            ar: ['توفير', 'الإسفنجة مصنع للبكتيريا']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Sponges are the dirtiest item in the house. Microwave them wet to kill bugs, or replace them weekly.',
            ar: 'الإسفنجة هي أقذر شيء في المنزل. ضعها في الميكروويف وهي مبللة لقتل الجراثيم، أو استبدلها أسبوعياً.'
        }
    },
    {
        id: 'shoes_inside',
        icon: '👟',
        category: 'hygiene',
        scenario: {
            en: 'You wear your shoes inside the house.',
            ar: 'ترتدي حذاءك داخل المنزل.'
        },
        options: {
            en: ['It\'s convenient', 'Shoes track in fecal bacteria and pesticides from the street'],
            ar: ['مريح', 'الأحذية تجلب بكتيريا الفضلات والمبيدات من الشارع']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Taking shoes off at the door reduces the load of resistant bacteria brought into your living space.',
            ar: 'خلع الحذاء عند الباب يقلل كمية البكتيريا المقاومة التي تدخل مساحة معيشتك.'
        }
    },
    // === TRAVEL COMPLICATIONS ===
    {
        id: 'plane_dehydration',
        icon: '✈️',
        category: 'travel',
        scenario: {
            en: 'You are on a plane. The air feels stale. You decide not to drink water to avoid using the airplane bathroom.',
            ar: 'أنت في الطائرة. الهواء يبدو مكتوماً. قررت عدم شرب الماء لتتجنب دخول حمام الطائرة.'
        },
        options: {
            en: ['Good strategy', 'Bad strategy; dehydration weakens immunity'],
            ar: ['استراتيجية جيدة', 'استراتيجية سيئة؛ الجفاف يضعف المناعة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Staying hydrated helps your body fight infections. Just use hand sanitizer after using the bathroom.',
            ar: 'البقاء رطباً يساعد جسمك على محاربة العدوى. فقط استخدم معقم اليدين بعد استخدام الحمام.'
        }
    },
    {
        id: 'leech_mud',
        icon: '🥾',
        category: 'travel',
        scenario: {
            en: 'You are hiking and get a leech bite. It bleeds a lot.',
            ar: 'كنت في نزهة برية وتعرضت للدغة علقة وتنزف.'
        },
        options: {
            en: ['Cover it with mud to stop bleeding', 'Wash with clean water and bandage'],
            ar: ['غطها بالطين لوقف النزيف', 'اغسلها بماء نظيف وضمدها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Soil (mud) is full of bacteria. Putting mud on an open wound is asking for an infection.',
            ar: 'التربة (الطين) مليئة بالبكتيريا. وضع الطين على جرح مفتوح هو دعوة للعدوى.'
        }
    },
    {
        id: 'malaria_antibiotics',
        icon: '🦟',
        category: 'travel',
        scenario: {
            en: 'You are in a malaria-prone area. You get a fever. You think, "I\'ll take antibiotics just in case it\'s typhoid."',
            ar: 'أنت في منطقة تنتشر فيها الملاريا. أصبت بحمى. فكرت: "سآخذ مضاداً حيوياً احتياطاً لربما تكون تيفود".'
        },
        options: {
            en: ['Self-diagnosis saves time', 'See a doctor to test for Malaria vs. Bacteria'],
            ar: ['التشخيص الذاتي يوفر الوقت', 'زر طبيباً للفحص (ملاريا أم بكتيريا)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Antibiotics do not kill Malaria (a parasite). Taking the wrong drug delays the right treatment and can be fatal.',
            ar: 'المضادات الحيوية لا تقتل الملاريا (طفيلي). تناول الدواء الخطأ يؤخر العلاج الصحيح وقد يكون قاتلاً.'
        }
    },
    {
        id: 'street_food_money',
        icon: '🍜',
        category: 'travel',
        scenario: {
            en: 'You buy street food. The vendor handles money and then handles your food with bare hands.',
            ar: 'تشتري طعاماً من عربة في الشارع. البائع يمسك النقود ثم يمسك طعامك بيديه العاريتين.'
        },
        options: {
            en: ['Eat it; it\'s hot', 'Avoid it'],
            ar: ['كله؛ إنه ساخن', 'تجنبه']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Money is very dirty. This is a classic cross-contamination route for resistant gut bacteria.',
            ar: 'النقود قذرة جداً. هذا طريق كلاسيكي لانتقال بكتيريا الأمعاء المقاومة.'
        }
    },
    {
        id: 'declare_food_customs',
        icon: '🛃',
        category: 'travel',
        scenario: {
            en: 'You bring cheese and sausage back from your holiday abroad. Customs asks if you have food.',
            ar: 'أحضرت معك جبناً ونقانق من إجازتك في الخارج. الجمارك سألتك إن كان معك طعام.'
        },
        options: {
            en: ['Say "No" to avoid hassle', 'Declare it'],
            ar: ['قل "لا" لتجنب المتاعب', 'صرح عما معك']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Meat products can carry animal diseases and resistant bacteria that can devastate local agriculture.',
            ar: 'منتجات اللحوم قد تحمل أمراضاً حيوانية وبكتيريا مقاومة يمكن أن تدمر الزراعة المحلية.'
        }
    },
    // === FUTURE & TECHNOLOGY ===
    {
        id: 'phage_therapy',
        icon: '🧬',
        category: 'future',
        scenario: {
            en: 'You read about "Phage Therapy" (using viruses to kill bacteria) as an alternative to antibiotics. You think:',
            ar: 'قرأت عن "العلاج بالعاثيات" (استخدام فيروسات لقتل البكتيريا) كبديل للمضادات. فكرت:'
        },
        options: {
            en: ['"That sounds like sci-fi nonsense"', '"That is a promising real science"'],
            ar: ['"هذا يبدو كخيال علمي"', '"هذا علم واعد وحقيقي"']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Phages are real viruses that hunt bacteria. They are currently being used to save patients when antibiotics fail.',
            ar: 'العاثيات (Phages) هي فيروسات حقيقية تصطاد البكتيريا. وتستخدم حالياً لإنقاذ مرضى فشلت معهم المضادات الحيوية.'
        }
    },
    {
        id: 'rapid_test',
        icon: '🔬',
        category: 'future',
        scenario: {
            en: 'Your doctor uses a "Rapid Test" that tells you in 15 minutes that you have a virus, not bacteria.',
            ar: 'استخدم طبيبك "فحصاً سريعاً" أخبرك في 15 دقيقة أنك مصاب بفيروس وليس بكتيريا.'
        },
        options: {
            en: ['Feel cheated out of medicine', 'Feel relieved you don\'t need drugs'],
            ar: ['تشعر بالغبن لأنك لم تأخذ دواء', 'تشعر بالراحة لأنك لا تحتاج لأدوية']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Rapid diagnostics are a huge tool in fighting AMR because they stop the "guessing game."',
            ar: 'التشخيص السريع أداة ضخمة في محاربة المقاومة لأنه يوقف "لعبة التخمين".'
        }
    },
    {
        id: 'pneumonia_vaccine',
        icon: '💉',
        category: 'future',
        scenario: {
            en: 'You hear about a new vaccine for a common bacteria (like Pneumonia).',
            ar: 'سمعت عن لقاح جديد لبكتيريا شائعة (مثل الالتهاب الرئوي).'
        },
        options: {
            en: ['Vaccines are only for viruses', 'Taking the vaccine prevents the bacterial infection, saving antibiotics'],
            ar: ['اللقاحات للفيروسات فقط', 'أخذ اللقاح يمنع العدوى البكتيرية، مما يوفر المضادات']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Vaccines are the ultimate AMR tool. If you don\'t get infected, you don\'t need treatment.',
            ar: 'اللقاحات هي الأداة القصوى. إذا لم تصب بالمرض، فلن تحتاج للعلاج.'
        }
    },
    {
        id: 'telehealth_prescribe',
        icon: '📱',
        category: 'future',
        scenario: {
            en: 'You use a "telehealth" app (video call doctor). The doctor prescribes antibiotics without seeing you or running a test.',
            ar: 'استخدمت تطبيق "طبيب عن بعد" (مكالمة فيديو). وصف الطبيب مضاداً حيوياً دون رؤيتك أو إجراء مسحة.'
        },
        options: {
            en: ['Convenient service!', 'Risky practice'],
            ar: ['خدمة مريحة!', 'ممارسة خطرة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Without a physical exam or swab, the doctor is guessing. Over-prescribing is common in telehealth settings.',
            ar: 'بدون فحص جسدي أو مسحة، الطبيب يخمن فقط. الإفراط في الوصف شائع في هذه التطبيقات.'
        }
    },
    {
        id: 'antarctica_amr',
        icon: '🐧',
        category: 'future',
        scenario: {
            en: 'You read that antibiotic resistance genes have been found in Antarctica.',
            ar: 'قرأت أنه تم العثور على جينات مقاومة للمضادات في القارة القطبية الجنوبية.'
        },
        options: {
            en: ['Impossible; nobody lives there', 'Scary proof that AMR spreads everywhere'],
            ar: ['مستحيل؛ لا أحد يعيش هناك', 'دليل مخيف على أن المقاومة تنتشر في كل مكان']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Birds, water currents, and human researchers spread these genes to the remotest corners of the Earth.',
            ar: 'الطيور وتيارات المياه والباحثون البشر ينشرون هذه الجينات لأبعد زوايا الأرض.'
        }
    },
    // === SPECIFIC ILLNESSES ===
    {
        id: 'sinus_5_days',
        icon: '👃',
        category: 'medical',
        scenario: {
            en: 'You have a "Sinus Infection" (Sinusitis). It has been 5 days.',
            ar: 'لديك "التهاب جيوب أنفية". مضت 5 أيام.'
        },
        options: {
            en: ['You need antibiotics', 'You can likely wait; 98% are viral and clear up in 10 days'],
            ar: ['تحتاج لمضاد حيوي', 'يمكنك الانتظار؛ 98% منها فيروسي ويشفى في 10 أيام']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Guidelines recommend waiting at least 7-10 days before considering antibiotics for sinuses.',
            ar: 'التوصيات تنصح بالانتظار 7-10 أيام على الأقل قبل التفكير في المضادات للجيوب الأنفية.'
        }
    },
    {
        id: 'cough_blood',
        icon: '🩸',
        category: 'medical',
        scenario: {
            en: 'You cough up blood.',
            ar: 'تسعل دماً.'
        },
        options: {
            en: ['Wait and see', 'See a doctor immediately'],
            ar: ['انتظر وراقب', 'اذهب للطبيب فوراً']
        },
        correctAnswer: 1,
        explanation: {
            en: 'This could be Tuberculosis (TB). TB requires a very specific, long course of antibiotics. Resistant TB is a major global killer.',
            ar: 'قد يكون هذا "سٌل" (درن). السل يتطلب كورس مضادات خاصاً وطويلاً جداً. السل المقاوم للأدوية قاتل عالمي.'
        }
    },
    {
        id: 'recurrent_boil',
        icon: '🔴',
        category: 'medical',
        scenario: {
            en: 'You have a small boil that keeps coming back after you pop it.',
            ar: 'لديك دمل صغير يعود للظهور بعد أن تفقأه.'
        },
        options: {
            en: ['Keep popping it', 'Go to the doctor; it might be MRSA'],
            ar: ['استمر في فقئه', 'اذهب للطبيب؛ قد يكون بكتيريا مكورات عنقودية ذهبية مقاومة للميثيسيلين (MRSA)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Recurrent boils are a hallmark of MRSA. You need professional drainage and possibly specific antibiotics, not squeezing.',
            ar: 'الدمامل المتكررة علامة مميزة لهذه البكتيريا. تحتاج لتنظيف طبي وربما مضادات خاصة، وليس العصر باليد.'
        }
    },
    {
        id: 'walking_pneumonia',
        icon: '🏃',
        category: 'lifestyle',
        scenario: {
            en: 'You have "Walking Pneumonia." You feel okay, but the doctor gave you pills. You want to go to soccer practice.',
            ar: 'لديك "التهاب رئوي ماشي" (خفيف). تشعر أنك بخير، لكن الطبيب أعطاك حبوباً. تريد الذهاب لتمرين كرة القدم.'
        },
        options: {
            en: ['Go play', 'Rest'],
            ar: ['اذهب للعب', 'ارتح']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Your body needs energy to fight the infection. Overexertion can cause a relapse.',
            ar: 'جسمك يحتاج للطاقة لمحاربة العدوى. الإجهاد قد يسبب انتكاسة.'
        }
    },
    {
        id: 'h_pylori_triple',
        icon: '🦠',
        category: 'medication',
        scenario: {
            en: 'You are treated for H. pylori (stomach bacteria causing ulcers). It requires 3 different pills a day for 2 weeks. It gives you a stomach ache.',
            ar: 'تتعالج من جرثومة المعدة (التي تسبب القرحة). تتطلب 3 أنواع حبوب يومياً لأسبوعين. سببت لك ألماً في البطن.'
        },
        options: {
            en: ['Stop one of the pills', 'Finish all of them exactly as directed'],
            ar: ['أوقف أحد الحبوب', 'أكملها كلها بالضبط كما وُصفت']
        },
        correctAnswer: 1,
        explanation: {
            en: 'H. pylori is very good at becoming resistant. You must hit it with the "triple therapy" to kill it, or your ulcer will return.',
            ar: 'جرثومة المعدة بارعة جداً في تطوير المقاومة. يجب ضربها بـ "العلاج الثلاثي" لقتلها، وإلا ستعود القرحة.'
        }
    },
    // === LIFESTYLE & HABITS ===
    {
        id: 'smoking_infections',
        icon: '🚬',
        category: 'lifestyle',
        scenario: {
            en: 'You vape or smoke. You get frequent chest infections.',
            ar: 'أنت تدخن (سجائر أو شيشة). وتصاب بالتهابات صدرية متكررة.'
        },
        options: {
            en: ['Antibiotics will fix my lungs', 'Smoking damages the lung\'s natural cleaning system, making infections harder to treat'],
            ar: ['المضادات الحيوية ستصلح رئتي', 'التدخين يدمر نظام التنظيف الطبيعي في الرئة، مما يصعب علاج العدوى']
        },
        correctAnswer: 1,
        explanation: {
            en: 'The best way to prevent resistant lung infections is to stop smoking, which allows your lungs to clean themselves again.',
            ar: 'أفضل طريقة لمنع التهابات الرئة المقاومة هي التوقف عن التدخين، للسماح للرئة بتنظيف نفسها مجدداً.'
        }
    },
    {
        id: 'skip_flu_shot',
        icon: '💉',
        category: 'lifestyle',
        scenario: {
            en: 'You never get the flu shot because "I never get the flu."',
            ar: 'لا تأخذ لقاح الإنفلونزا أبداً لأنك تقول "أنا لا أصاب بالإنفلونزا أبداً".'
        },
        options: {
            en: ['Good logic', 'Risky; flu often leads to secondary bacterial pneumonia'],
            ar: ['منطق سليم', 'مخاطرة؛ الإنفلونزا غالباً تؤدي لالتهاب رئوي بكتيري ثانوي']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Many people don\'t die of the flu virus; they die of the bacterial pneumonia that attacks their weakened lungs afterwards. The shot prevents this.',
            ar: 'الكثير من الناس لا يموتون من فيروس الإنفلونزا؛ بل يموتون من البكتيريا التي تهاجم رئتهم الضعيفة بعده. اللقاح يمنع ذلك.'
        }
    },
    {
        id: 'wash_before_bathroom',
        icon: '🚽',
        category: 'lifestyle',
        scenario: {
            en: 'You wash your hands before you use the bathroom.',
            ar: 'تغسل يديك قبل استخدام الحمام.'
        },
        options: {
            en: ['Weird', 'Actually smart'],
            ar: ['غريب', 'ذكي في الواقع']
        },
        correctAnswer: 1,
        explanation: {
            en: 'If your hands are dirty from the subway/world, touching your private parts can introduce bacteria causing a UTI. Wash before AND after.',
            ar: 'إذا كانت يداك متسختين من المواصلات/العالم، فلمس أعضائك الخاصة قد يدخل بكتيريا تسبب التهاب المسالك. اغسل قبل وبعد.'
        }
    },
    {
        id: 'bite_nails',
        icon: '💅',
        category: 'lifestyle',
        scenario: {
            en: 'You bite your nails.',
            ar: 'تقضم أظافرك.'
        },
        options: {
            en: ['Bad habit, but harmless', 'You are eating everything you touched today'],
            ar: ['عادة سيئة لكن غير ضارة', 'أنت تأكل كل شيء لمسته اليوم']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Under the fingernails is a sanctuary for bacteria (including E. coli). Biting nails is a direct oral injection of germs.',
            ar: 'تحت الأظافر هو ملجأ للبكتيريا (بما فيها الإيكولاي). قضم الأظافر هو حقن مباشر للجراثيم في فمك.'
        }
    },
    {
        id: 'sleep_makeup',
        icon: '💄',
        category: 'lifestyle',
        scenario: {
            en: 'You sleep with your makeup on.',
            ar: 'تنامين ومكياجك على وجهك.'
        },
        options: {
            en: ['Saves time', 'Risks eye infection'],
            ar: ['يوفر الوقت', 'يخاطر بعدوى في العين']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Mascara traps bacteria against the eye. Eye infections are painful and require antibiotic drops.',
            ar: 'الماسكارا تحبس البكتيريا ضد العين. التهابات العين مؤلمة وتتطلب قطرات مضاد حيوي.'
        }
    },
    // === FINAL REVIEW ===
    {
        id: 'cut_research_funding',
        icon: '💰',
        category: 'final',
        scenario: {
            en: 'A politician says "We need to cut funding for antibiotic research to save money."',
            ar: 'سياسي يقول "نحتاج لقطع التمويل عن أبحاث المضادات الحيوية لتوفير المال".'
        },
        options: {
            en: ['Agree', 'Disagree; we need new drugs desperately'],
            ar: ['توافق', 'تعترض؛ نحتاج لأدوية جديدة بشدة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'The pipeline for new drugs is dry. Government funding is essential to encourage companies to find the next Penicillin.',
            ar: 'خط إنتاج الأدوية الجديدة جاف. التمويل الحكومي ضروري لتشجيع الشركات على إيجاد "البنسلين" القادم.'
        }
    },
    {
        id: 'flushable_wipes',
        icon: '🧻',
        category: 'final',
        scenario: {
            en: 'You see a "Flushable Wipes" package.',
            ar: 'رأيت عبوة مناديل مبللة مكتوب عليها "قابلة للرمي في المرحاض" (Flushable).'
        },
        options: {
            en: ['Flush them', 'Trash them'],
            ar: ['ارمها في المرحاض', 'ارمها في القمامة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'They clog sewage systems, causing overflows that spill untreated sewage (and superbugs) into the environment.',
            ar: 'هذه المناديل تسد أنظمة الصرف الصحي، مما يسبب فيضانات تسرب مياه الصرف الصحي (والبكتيريا الخارقة) إلى البيئة.'
        }
    },
    {
        id: 'slimy_bar_soap',
        icon: '🧼',
        category: 'final',
        scenario: {
            en: 'You have a choice between liquid hand soap and a bar of soap in a public place. The bar looks cracked and slimy.',
            ar: 'لديك خيار بين صابون سائل وصابونة (قالب) في مكان عام. الصابونة تبدو مشققة ولزجة.'
        },
        options: {
            en: ['Use the bar', 'Use the liquid or your own sanitizer'],
            ar: ['استخدم الصابونة', 'استخدم السائل أو معقمك الخاص']
        },
        correctAnswer: 1,
        explanation: {
            en: 'While soap is generally self-cleaning, a slimy bar sitting in a pool of water can harbor bacteria on the surface.',
            ar: 'رغم أن الصابون ينظف نفسه عادة، إلا أن الصابونة اللزجة التي تجلس في بركة ماء قد تأوي بكتيريا على سطحها.'
        }
    },
    {
        id: 'pregnant_rare_steak',
        icon: '🥩',
        category: 'final',
        scenario: {
            en: 'You are cooking for a pregnant woman. You want to serve rare steak.',
            ar: 'تطبخ لامرأة حامل. تريد تقديم ستيك (شريحة لحم) غير مطبوخ جيداً (Rare).'
        },
        options: {
            en: ['Serve it rare', 'Cook it well-done'],
            ar: ['قدمه نيئاً قليلاً', 'اطبخه جيداً (Well-done)']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Pregnancy lowers the immune system. Listeria and Toxoplasmosis (found in undercooked meat) can cause miscarriage or severe damage to the fetus.',
            ar: 'الحمل يضعف المناعة. بكتيريا الليستيريا (الموجودة في اللحم غير المطهو) قد تسبب الإجهاض أو ضرراً شديداً للجنين.'
        }
    },
    {
        id: 'apply_cream_finger',
        icon: '🩹',
        category: 'final',
        scenario: {
            en: 'You are prescribed an antibiotic cream for a skin infection. You apply it with your finger.',
            ar: 'وصف لك كريم مضاد حيوي لعدوى جلدية. تضعه بإصبعك.'
        },
        options: {
            en: ['Fine', 'Use a cotton swab or wash hands immediately after'],
            ar: ['عادي', 'استخدم عود قطن أو اغسل يديك فوراً بعدها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Touching the infection contaminates your finger. If you then touch the tube tip, you contaminate the whole tube.',
            ar: 'لمس العدوى يلوث إصبعك. إذا لمست فوهة الأنبوب بعدها، ستلوث الأنبوب كاملاً.'
        }
    },
    {
        id: 'cold_sore',
        icon: '👄',
        category: 'final',
        scenario: {
            en: 'You have a cold sore (Herpes). You want antibiotics.',
            ar: 'لديك قرحة برد (هيربس) على شفتك. تريد مضاداً حيوياً.'
        },
        options: {
            en: ['Ask for them', 'Herpes is a virus; antibiotics won\'t work'],
            ar: ['اطلبه', 'الهيربس فيروس؛ المضادات لن تعمل']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Cold sores need antivirals, not antibiotics.',
            ar: 'قرح البرد تحتاج مضادات فيروسات، وليس مضادات حيوية.'
        }
    },
    {
        id: 'uti_drink_water',
        icon: '💧',
        category: 'final',
        scenario: {
            en: 'You are given antibiotics for a UTI. The label says "Drink plenty of water."',
            ar: 'أعطيت مضاداً حيوياً لالتهاب المسالك. الملصق يقول "اشرب الكثير من الماء".'
        },
        options: {
            en: ['Ignore it', 'Drink up'],
            ar: ['تجاهله', 'اشرب الماء بكثرة']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Water helps flush the bacteria out of your bladder, helping the antibiotic work faster.',
            ar: 'الماء يساعد في طرد البكتيريا من المثانة، ويساعد المضاد الحيوي على العمل بشكل أسرع.'
        }
    },
    {
        id: 'hospital_floor_pill',
        icon: '💊',
        category: 'final',
        scenario: {
            en: 'You accidentally drop a pill on the floor in a hospital waiting room.',
            ar: 'سقطت منك حبة دواء بالخطأ على أرضية غرفة انتظار المستشفى.'
        },
        options: {
            en: ['5-second rule!', 'Throw it away'],
            ar: ['قاعدة الـ 5 ثواني! (التقطها وكلها)', 'ارمها']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Hospital floors are perhaps the most contaminated surfaces on earth. Do not eat things off them.',
            ar: 'أرضيات المستشفيات ربما تكون أكثر الأسطح تلوثاً على الأرض. لا تأكل شيئاً سقط عليها.'
        }
    },
    {
        id: 'vre_surgery_delay',
        icon: '🏥',
        category: 'final',
        scenario: {
            en: 'You are told your surgery has been delayed because of a "Vancomycin-resistant Enterococcus outbreak" in the ward.',
            ar: 'قيل لك إن عمليتك تأجلت بسبب "تفشي بكتيريا معوية مقاومة للفانكوميسين" في الجناح.'
        },
        options: {
            en: ['Complain loudly', 'Be thankful they are protecting you'],
            ar: ['تذمر بصوت عالٍ', 'كن ممتناً لأنهم يحمونك']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Vancomycin-resistant Enterococcus or VRE is a serious superbug. If you went into that ward with an open surgical wound, you would likely get infected.',
            ar: 'لأن المعوية مقاومة للفانكوميسين (VRE) بكتيريا خطيرة جداً. لو دخلت ذلك الجناح بجرح عملية مفتوح، فمن المرجح أن تصاب بالعدوى.'
        }
    },
    {
        id: 'share_knowledge',
        icon: '🎓',
        category: 'final',
        scenario: {
            en: 'You successfully finished this quiz!',
            ar: 'لقد أنهيت هذا الاختبار بنجاح!'
        },
        options: {
            en: ['Forget everything', 'Share one fact with a friend'],
            ar: ['انس كل شيء', 'شارك معلومة واحدة مع صديق']
        },
        correctAnswer: 1,
        explanation: {
            en: 'Fighting AMR starts with awareness. Telling one person "don\'t share antibiotics" helps save the future of medicine.',
            ar: 'محاربة المقاومة تبدأ بالوعي. إخبار شخص واحد "لا تشارك المضادات الحيوية" يساعد في إنقاذ مستقبل الطب.'
        }
    }
];
