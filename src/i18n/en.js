// English translations
export const en = {
    // App
    appName: "Mana'a",
    appTagline: "Protecting our community from antibiotic resistance",

    // Welcome Page
    welcome: {
        enter: "Enter",
        selectLanguage: "Select Language"
    },
    // Medical Disclaimer
    disclaimer: {
        title: "Medical Disclaimer",
        welcome: "Welcome to the Mana'a app for antibiotic resistance awareness.",
        warning: "This app does not replace medical consultation",
        points: [
            "Information provided is for awareness only",
            "The app cannot diagnose or treat any disease",
            "Consult your doctor before taking any medication",
            "In case of emergency, call an ambulance immediately"
        ],
        checkbox: "I understand that this app does not replace a doctor",
        accept: "Agree and Continue"
    },

    // Navigation
    nav: {
        home: "Home",
        quiz: "Quiz",
        medications: "Medications",
        awareness: "Awareness",
        settings: "Settings",
    },

    // Home Page
    home: {
        welcomeTitle: "Welcome to Mana'a",
        welcomeMessage: "Help us protect our community from antibiotic resistance. Together we can preserve medicine effectiveness for future generations.",
        whatToDo: "What would you like to do?",

        quickActions: {
            quiz: { title: "Do I Need Antibiotics?", desc: "Test your knowledge!" },
            medications: { title: "Medication Guide", desc: "Track your daily doses" },
            awareness: { title: "Learn", desc: "Important antibiotic information" }
        },
        communityAchievements: "Community Achievements",
        coursesCompleted: "Courses completed",
        antibioticsAvoided: "Unnecessary antibiotics avoided"
    },



    // Quiz Page
    quiz: {
        title: "Do I Need Antibiotics?",
        subtitle: "Learn when antibiotics help - and when they don't",
        intro: {
            whyMatters: "Why This Matters",
            whyMattersDesc: "Taking antibiotics when you don't need them helps bacteria become resistant. This means antibiotics may not work when you really need them.",
            howItWorks: "How This Quiz Works",
            step1: "Read real-life health scenarios",
            step2: "Decide if antibiotics would help",
            step3: "Learn the correct answer and why"
        },
        start: "Start the Quiz",
        scenario: "Scenario",
        yes: "Yes, I need antibiotics",
        no: "No, antibiotics won't help",
        correct: "Correct!",
        incorrect: "Not quite...",
        next: "Next Question",
        seeResults: "See My Results",
        tryAgain: "Try Again",
        learnMore: "Learn More",
        results: {
            title: "Your Results",
            score: "questions answered correctly",
            keyTakeaways: "Key Takeaways",
            takeaway1: "Most colds, flu, and sore throats are viral - antibiotics don't help",
            takeaway2: "Always see a doctor before taking antibiotics",
            takeaway3: "Using antibiotics incorrectly creates resistant superbugs",
            yemenContext: "In Yemen",
            yemenStat: "73% of bacteria in Aden are resistant to common antibiotics. Every unnecessary dose makes this worse."
        }
    },

    // Medications Page
    medications: {
        title: "Medications",
        subtitle: "Drug information and tracking",
        tabs: {
            equivalence: "Alternatives",
            sideEffects: "Side Effects",
            report: "Report"
        },
        equivalence: {
            title: "Same Medicine, Different Names",
            subtitle: "Search for your medication to find available alternatives with the same active ingredient",
            searchPlaceholder: "Search by medication name...",
            brandsAvailable: "Available brand names:",
            noResults: "No results found. Try another name."
        },
        sideEffects: {
            title: "Common Side Effects",
            seekDoctor: "If you experience severe side effects, see your doctor immediately"
        },
        report: {
            title: "Report Side Effects",
            subtitle: "Help us improve medication safety by reporting any side effects",
            medicationName: "Medication name",
            medicationPlaceholder: "Example: Panadol, Amoxil...",
            effectsLabel: "Side effects",
            effectsPlaceholder: "Describe the symptoms you experienced...",
            severity: "Severity",
            mild: "Mild",
            moderate: "Moderate",
            severe: "Severe",
            submit: "Submit Report",
            anonymous: "Reports are anonymous and your data will not be shared",
            success: "Report submitted",
            successMessage: "Thank you for contributing to community safety"
        }
    },

    // Awareness Page
    awareness: {
        title: "Awareness",
        subtitle: "Learn about antibiotic resistance",
        tabs: {
            infographics: "Information",
            yemen: "Yemen Impact",
            audio: "Audio",
            facts: "Facts"
        },
        infographics: {
            whatIsAMR: {
                title: "What is Antibiotic Resistance?",
                content: "Antibiotic resistance occurs when bacteria change and become able to resist drugs designed to kill them.\n\nThis means antibiotics that were effective in the past may not work in the future."
            },
            howSpreads: {
                title: "How Does Resistance Spread?",
                content: "Resistance spreads in several ways:\n\n1. Overuse of antibiotics\n2. Not completing treatment courses\n3. Using antibiotics without prescription\n4. Transmission of resistant bacteria between people"
            },
            completeCourse: {
                title: "Importance of Completing Treatment",
                content: "When you don't complete the antibiotic course:\n\n• Stronger bacteria survive\n• They multiply and become more resistant\n• The disease may return stronger\n\nComplete all doses even if you feel better!"
            },
            whenAntibiotics: {
                title: "When Do You Need Antibiotics?",
                content: "Antibiotics only work against bacteria!\n\nDon't work against:\n❌ Colds and flu (viruses)\n❌ Most sore throats\n❌ Viral diarrhea\n\nWork against:\n✅ Confirmed bacterial infections\n✅ Some urinary tract infections\n✅ Bacterial wound infections"
            }
        },
        yemen: {
            title: "AMR in Yemen",
            subtitle: "The resistance crisis in our community",
            stats: {
                tmpSmx: { value: "73.1%", label: "Overall resistance to TMP-SMX", source: "Aden study, 2020" },
                amoxClav: { value: "65.2%", label: "Resistance to Amoxicillin-Clavulanate", source: "Aden study, 2020" },
                staph: { value: "41.7%", label: "of infections are Staphylococcus", source: "Aden study, 2020" },
                ecoli: { value: "39.8%", label: "of infections are E. coli", source: "Aden study, 2020" }
            },
            alarmingTitle: "Alarming Resistance",
            alarmingDesc: "A 2025 study in Al-Bayda found 'alarming' resistance to first-line antibiotics in wound infections.",
            choleraTitle: "Cholera Crisis",
            choleraDesc: "A multidrug-resistant cholera strain emerged in Yemen after 2018, making treatment more difficult.",
            sources: "Data sources: Badulla et al. 2020, Hussien et al. 2025, Lassalle et al. 2023"
        },
        audio: {
            title: "Listen and Learn",
            subtitle: "Audio content for awareness - available for download for offline listening",
            download: "Download for offline"
        },
        facts: {
            title: "Quick Facts to Share",
            tapToShare: "Tap to share"
        }
    },

    // Settings
    settings: {
        title: "Settings",
        language: "Language",
        theme: "Theme",
        lightMode: "Light",
        darkMode: "Dark",
        systemTheme: "System",
        familyProfiles: "Family Profiles",
        addProfile: "Add",
        noProfiles: "No family members added yet",
        active: "Active",
        about: "About the App",
        version: "Version",
        ramadanMode: "Ramadan Mode",
        ramadanDesc: "Adjust reminder times for fasting"
    },

    // Emergency
    emergency: {
        title: "Go to Emergency Immediately!",
        message: "These symptoms require immediate emergency medical care",
        callAmbulance: "Call Ambulance (191)",
        dismiss: "I'm fine, return to app"
    },



    // Common
    loading: "Loading...",
    error: "An error occurred",
    retry: "Retry",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    confirm: "Confirm",
    close: "Close"
}
