// Combined AMR Quiz Scenarios
// 100 comprehensive scenarios covering all aspects of antibiotic resistance awareness

import { QUIZ_SCENARIOS_PART1 } from './quiz-scenarios-1';
import { QUIZ_SCENARIOS_PART2 } from './quiz-scenarios-2';
import { QUIZ_SCENARIOS_PART3 } from './quiz-scenarios-3';

// Combine all scenarios
export const ALL_QUIZ_SCENARIOS = [
    ...QUIZ_SCENARIOS_PART1,
    ...QUIZ_SCENARIOS_PART2,
    ...QUIZ_SCENARIOS_PART3
];

// Default number of questions per quiz session
export const QUESTIONS_PER_QUIZ = 5;

// Helper function to shuffle array (Fisher-Yates)
export function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random subset of questions
export function getRandomQuiz(count = QUESTIONS_PER_QUIZ) {
    const shuffled = shuffleArray(ALL_QUIZ_SCENARIOS);
    return shuffled.slice(0, count);
}

// Get scenarios by category
export function getScenariosByCategory(category) {
    return ALL_QUIZ_SCENARIOS.filter(s => s.category === category);
}

// Available categories
export const QUIZ_CATEGORIES = [
    'doctor', 'medication', 'children', 'food', 'pets',
    'hygiene', 'travel', 'environment', 'social', 'myths',
    'workplace', 'shopping', 'medical', 'lifestyle', 'final', 'future'
];
