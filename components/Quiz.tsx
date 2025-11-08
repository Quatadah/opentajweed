import React, { useState, useContext, useEffect } from 'react';
import { Exercise } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { RefreshIcon } from './Icons';

interface QuizProps {
  exercises: Exercise[];
  onQuizComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ exercises, onQuizComplete }) => {
  const { t, language } = useContext(LanguageContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Reset state when exercises change (e.g., chapter change)
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  }, [exercises]);

  const currentExercise = exercises[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent changing answer

    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === currentExercise.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < exercises.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
        if (score + (isCorrect ? 1 : 0) === exercises.length) {
            onQuizComplete();
        }
      }
    }, 1500); // Wait 1.5 seconds before next question or finishing
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  if (isFinished) {
    const isPerfectScore = score === exercises.length;
    return (
      <div className="mt-12 pt-8 border-t-2 border-dashed border-border">
        <h3 className="text-2xl font-semibold text-primary mb-4">{t('quizComplete')}</h3>
        <div className="bg-primary/10 text-primary p-6 rounded-lg text-center">
          <p className="text-xl font-medium">{t('yourScore')}:</p>
          <p className="text-4xl font-bold my-2">{score} / {exercises.length}</p>
           {isPerfectScore && (
            <p className="font-semibold text-primary/90 mt-2">{t('chapterUnlocked')}</p>
          )}
          <button
            onClick={restartQuiz}
            className="mt-4 inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors"
          >
            <RefreshIcon className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
            {t('restartQuiz')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 pt-8 border-t-2 border-dashed border-border">
      <h3 className="text-2xl font-semibold text-primary mb-6">{t('practiceExercises')}</h3>
      <div className="bg-secondary p-6 rounded-lg border border-border">
        <p className="text-lg font-medium text-foreground mb-1">
          {t('question')} {currentQuestionIndex + 1}/{exercises.length}
        </p>
        <p className={`text-xl text-foreground mb-6 ${language === 'ar' ? 'text-right' : ''}`}>{currentExercise.question}</p>
        <div className="space-y-3">
          {currentExercise.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = currentExercise.correctAnswer === index;
            
            let buttonClass = 'bg-background hover:bg-accent border-border text-foreground';
            if (isSelected) {
              buttonClass = isCorrect ? 'bg-primary/20 border-primary/40 text-primary' : 'bg-destructive/20 border-destructive/40 text-destructive-foreground';
            } else if (selectedAnswer !== null && isCorrect) {
              buttonClass = 'bg-primary/20 border-primary/40 text-primary';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-md border text-lg transition-colors duration-200 disabled:cursor-not-allowed ${buttonClass} ${language === 'ar' ? 'text-right' : ''}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};