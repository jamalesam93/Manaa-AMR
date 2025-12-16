import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import { ALL_QUIZ_SCENARIOS, shuffleArray, QUESTIONS_PER_QUIZ } from '../data/quiz-scenarios'

export default function SymptomsPage() {
    const { language, t } = useApp()
    const [currentStep, setCurrentStep] = useState('intro')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [quizScenarios, setQuizScenarios] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const getText = (textObj) => language === 'ar' ? textObj.ar : textObj.en

    const handleStartQuiz = () => {
        // Select random subset of questions each time
        const shuffled = shuffleArray(ALL_QUIZ_SCENARIOS)
        const selected = shuffled.slice(0, QUESTIONS_PER_QUIZ)
        setQuizScenarios(selected)
        setCurrentStep('quiz')
        setCurrentQuestion(0)
        setUserAnswers([])
        setShowResult(false)
        setSelectedAnswer(null)
    }

    const handleSelectAnswer = (answerIndex) => {
        setSelectedAnswer(answerIndex)
    }

    const handleConfirmAnswer = () => {
        if (selectedAnswer === null) return

        const scenario = quizScenarios[currentQuestion]
        const isCorrect = selectedAnswer === scenario.correctAnswer

        setUserAnswers([...userAnswers, {
            scenarioId: scenario.id,
            userAnswer: selectedAnswer,
            correct: isCorrect
        }])
        setShowResult(true)
    }

    const handleNext = () => {
        if (currentQuestion < quizScenarios.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setShowResult(false)
            setSelectedAnswer(null)
        } else {
            setCurrentStep('summary')
        }
    }

    const handleRestart = () => {
        setCurrentStep('intro')
        setCurrentQuestion(0)
        setUserAnswers([])
        setShowResult(false)
        setQuizScenarios([])
        setSelectedAnswer(null)
    }

    const correctCount = userAnswers.filter(a => a.correct).length

    // Intro screen
    if (currentStep === 'intro') {
        return (
            <div className="page container animate-fadeIn">
                <header style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                    <span style={{ fontSize: '4rem' }}>❓</span>
                    <h1 style={{ color: 'var(--color-primary)', marginTop: 'var(--space-4)' }}>
                        {t('quiz.title')}
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        {t('quiz.subtitle')}
                    </p>
                </header>

                <div className="card" style={{
                    background: 'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%)',
                    color: 'white',
                    marginBottom: 'var(--space-6)'
                }}>
                    <h3 style={{ color: 'white', marginBottom: 'var(--space-3)' }}>
                        {t('quiz.intro.whyMatters')}
                    </h3>
                    <p style={{ opacity: 0.95, margin: 0 }}>
                        {t('quiz.intro.whyMattersDesc')}
                    </p>
                </div>

                <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <h4 style={{ marginBottom: 'var(--space-3)' }}>
                        {t('quiz.intro.howItWorks')}
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)'
                    }}>
                        <li>📋 {t('quiz.intro.step1')}</li>
                        <li>🤔 {t('quiz.intro.step2')}</li>
                        <li>📚 {t('quiz.intro.step3')}</li>
                    </ul>
                </div>

                <div className="card" style={{
                    marginBottom: 'var(--space-6)',
                    background: 'var(--color-surface-elevated)',
                    textAlign: 'center'
                }}>
                    <span style={{ fontSize: '2rem' }}>📚</span>
                    <p style={{ margin: 'var(--space-2) 0 0 0', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        {language === 'ar'
                            ? `${ALL_QUIZ_SCENARIOS.length} سيناريو متاح - ${QUESTIONS_PER_QUIZ} أسئلة عشوائية في كل مرة`
                            : `${ALL_QUIZ_SCENARIOS.length} scenarios available - ${QUESTIONS_PER_QUIZ} random questions each time`
                        }
                    </p>
                </div>

                <button
                    className="btn btn-primary btn-lg"
                    onClick={handleStartQuiz}
                    style={{ width: '100%' }}
                >
                    {t('quiz.start')}
                </button>
            </div>
        )
    }

    // Quiz in progress
    if (currentStep === 'quiz' && quizScenarios.length > 0) {
        const scenario = quizScenarios[currentQuestion]
        const options = getText(scenario.options)

        return (
            <div className="page container animate-fadeIn">
                {/* Progress */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 'var(--space-4)'
                }}>
                    <span className="badge badge-primary">
                        {currentQuestion + 1} / {quizScenarios.length}
                    </span>
                    <div style={{
                        flex: 1,
                        height: '8px',
                        background: 'var(--color-surface-elevated)',
                        borderRadius: 'var(--radius-full)',
                        marginInlineStart: 'var(--space-3)'
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${((currentQuestion + 1) / quizScenarios.length) * 100}%`,
                            background: 'var(--color-primary)',
                            borderRadius: 'var(--radius-full)',
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                </div>

                {/* Scenario Card */}
                <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-3)' }}>
                        <span style={{ fontSize: '2.5rem' }}>{scenario.icon}</span>
                    </div>

                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.7,
                        margin: 0
                    }}>
                        {getText(scenario.scenario)}
                    </p>
                </div>

                {!showResult ? (
                    /* Options */
                    <div className="animate-slideUp">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)',
                            marginBottom: 'var(--space-4)'
                        }}>
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`card ${selectedAnswer === index ? 'selected' : ''}`}
                                    onClick={() => handleSelectAnswer(index)}
                                    style={{
                                        cursor: 'pointer',
                                        textAlign: language === 'ar' ? 'right' : 'left',
                                        padding: 'var(--space-4)',
                                        border: selectedAnswer === index
                                            ? '2px solid var(--color-primary)'
                                            : '2px solid transparent',
                                        background: selectedAnswer === index
                                            ? 'var(--color-primary-light)'
                                            : 'var(--color-surface)',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: selectedAnswer === index
                                            ? 'var(--color-primary)'
                                            : 'var(--color-surface-elevated)',
                                        color: selectedAnswer === index ? 'white' : 'var(--color-text-secondary)',
                                        marginInlineEnd: 'var(--space-3)',
                                        fontWeight: 'bold',
                                        fontSize: 'var(--font-size-sm)'
                                    }}>
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    {option}
                                </button>
                            ))}
                        </div>

                        <button
                            className="btn btn-primary btn-lg"
                            onClick={handleConfirmAnswer}
                            disabled={selectedAnswer === null}
                            style={{
                                width: '100%',
                                opacity: selectedAnswer === null ? 0.5 : 1
                            }}
                        >
                            {language === 'ar' ? 'تأكيد الإجابة' : 'Confirm Answer'}
                        </button>
                    </div>
                ) : (
                    /* Result and Explanation */
                    <div className="animate-slideUp">
                        <div className="card" style={{
                            borderColor: userAnswers[currentQuestion]?.correct
                                ? 'var(--color-success)'
                                : 'var(--color-danger)',
                            borderWidth: '2px',
                            borderStyle: 'solid'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-3)',
                                marginBottom: 'var(--space-3)'
                            }}>
                                <span style={{ fontSize: '2rem' }}>
                                    {userAnswers[currentQuestion]?.correct ? '🎉' : '💡'}
                                </span>
                                <h3 style={{
                                    margin: 0,
                                    color: userAnswers[currentQuestion]?.correct
                                        ? 'var(--color-success)'
                                        : 'var(--color-danger)'
                                }}>
                                    {userAnswers[currentQuestion]?.correct
                                        ? t('quiz.correct')
                                        : t('quiz.incorrect')}
                                </h3>
                            </div>

                            {!userAnswers[currentQuestion]?.correct && (
                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--space-3)',
                                    fontSize: 'var(--font-size-sm)'
                                }}>
                                    {language === 'ar' ? 'الإجابة الصحيحة: ' : 'Correct answer: '}
                                    <strong>{options[scenario.correctAnswer]}</strong>
                                </p>
                            )}

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: 0
                            }}>
                                {getText(scenario.explanation)}
                            </p>
                        </div>

                        <button
                            className="btn btn-primary btn-lg"
                            onClick={handleNext}
                            style={{ width: '100%', marginTop: 'var(--space-4)' }}
                        >
                            {currentQuestion < quizScenarios.length - 1
                                ? t('quiz.next')
                                : t('quiz.seeResults')}
                        </button>
                    </div>
                )}
            </div>
        )
    }

    // Summary screen
    if (currentStep === 'summary') {
        const percentage = Math.round((correctCount / quizScenarios.length) * 100)

        return (
            <div className="page container animate-fadeIn">
                <header style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                    <span style={{ fontSize: '4rem' }}>
                        {percentage >= 80 ? '🏆' : percentage >= 50 ? '👍' : '📚'}
                    </span>
                    <h1 style={{ color: 'var(--color-primary)', marginTop: 'var(--space-4)' }}>
                        {t('quiz.results.title')}
                    </h1>
                </header>

                <div className="card" style={{
                    textAlign: 'center',
                    marginBottom: 'var(--space-6)'
                }}>
                    <div style={{
                        fontSize: 'var(--font-size-4xl)',
                        fontWeight: 'bold',
                        color: percentage >= 80 ? 'var(--color-success)' :
                            percentage >= 50 ? 'var(--color-warning)' :
                                'var(--color-danger)'
                    }}>
                        {correctCount}/{quizScenarios.length}
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                        {t('quiz.results.score')}
                    </p>
                </div>

                {/* Key Takeaways */}
                <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
                    <h3 style={{ marginBottom: 'var(--space-4)' }}>
                        {t('quiz.results.keyTakeaways')}
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)'
                    }}>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <span>🦠</span>
                            <span>{t('quiz.results.takeaway1')}</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <span>🏥</span>
                            <span>{t('quiz.results.takeaway2')}</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                            <span>⚠️</span>
                            <span>{t('quiz.results.takeaway3')}</span>
                        </li>
                    </ul>
                </div>

                {/* Yemen Context */}
                <div className="card disclaimer-banner" style={{ marginBottom: 'var(--space-6)' }}>
                    <strong>🇾🇪 {t('quiz.results.yemenContext')}</strong>
                    <p style={{ margin: 'var(--space-2) 0 0 0', fontSize: 'var(--font-size-sm)' }}>
                        {t('quiz.results.yemenStat')}
                    </p>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                    <button
                        className="btn btn-outline btn-lg"
                        onClick={handleRestart}
                        style={{ flex: 1 }}
                    >
                        {t('quiz.tryAgain')}
                    </button>
                    <a
                        href="/awareness"
                        className="btn btn-primary btn-lg"
                        style={{ flex: 1, textDecoration: 'none', textAlign: 'center' }}
                    >
                        {t('quiz.learnMore')}
                    </a>
                </div>
            </div>
        )
    }

    return null
}
