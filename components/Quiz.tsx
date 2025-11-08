import React, { useState, useContext, useEffect } from 'react';
import { Exercise } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';
import { RefreshIcon, ArrowRightIcon, ArrowLeftIcon } from './Icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface QuizProps {
  exercises: Exercise[];
  onQuizComplete: () => void;
  hasNextChapter?: boolean;
  onNextChapter?: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ exercises, onQuizComplete, hasNextChapter = false, onNextChapter }) => {
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
      <div className={cn(
        "mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-8 shadow-inner",
        language === 'ar' ? 'text-right' : 'text-center'
      )}>
        <h3 className={cn(
          "text-2xl font-semibold text-primary",
          language === 'ar' ? 'text-right' : 'text-center'
        )}>{t('quizComplete')}</h3>
        <p className={cn(
          "mt-3 text-lg text-primary/80",
          language === 'ar' ? 'text-right' : 'text-center'
        )}>
          {t('yourScore')}:
        </p>
        <p className={cn(
          "my-4 text-4xl font-bold text-primary",
          language === 'ar' ? 'text-right' : 'text-center'
        )}>
          {score} / {exercises.length}
        </p>
        {isPerfectScore && (
          <p className={cn(
            "text-sm font-semibold uppercase tracking-widest text-primary/90",
            language === 'ar' ? 'text-right' : 'text-center'
          )}>
            {t('chapterUnlocked')}
          </p>
        )}
        <div className={cn(
          "mt-6 flex gap-3",
          language === 'ar' ? 'justify-start flex-row-reverse' : 'justify-center'
        )}>
          {isPerfectScore && hasNextChapter && onNextChapter && (
            <Button
              onClick={onNextChapter}
              className="inline-flex items-center gap-2"
            >
              {language === 'ar' ? (
                <>
                  <span>{t('nextChapter')}</span>
                  <ArrowLeftIcon className="h-5 w-5" />
                </>
              ) : (
                <>
                  <span>{t('nextChapter')}</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </>
              )}
            </Button>
          )}
          <Button
            onClick={restartQuiz}
            variant={isPerfectScore && hasNextChapter ? "outline" : "default"}
            className="inline-flex items-center gap-2"
          >
            <RefreshIcon className="h-5 w-5" />
            {t('restartQuiz')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm">
      <div className={`flex items-center justify-between gap-3 ${language === 'ar' ? 'flex-row-reverse text-right' : ''}`}>
        <h3 className="text-xl font-semibold text-foreground">
          {t('practiceExercises')}
        </h3>
        <Badge variant="outline" className="text-xs font-medium">
          {t('question')} {currentQuestionIndex + 1}/{exercises.length}
        </Badge>
      </div>
      <p
        className={cn(
          'mt-4 text-lg font-medium text-foreground',
          language === 'ar' ? 'text-right' : ''
        )}
      >
        {currentExercise.question}
      </p>
      <div className="mt-6 grid gap-3">
        {currentExercise.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = currentExercise.correctAnswer === index;

          return (
            <Button
              key={index}
              variant="outline"
              disabled={selectedAnswer !== null}
              onClick={() => handleAnswerSelect(index)}
              className={cn(
                'justify-start border-2 px-4 py-5 text-left text-base transition-all',
                language === 'ar' ? 'text-right' : '',
                isSelected && isCorrect && 'border-primary bg-primary/10 text-primary',
                isSelected && !isCorrect && 'border-destructive bg-destructive/10 text-destructive',
                !isSelected && selectedAnswer !== null && isCorrect && 'border-primary bg-primary/10 text-primary',
                selectedAnswer !== null ? 'cursor-not-allowed opacity-100' : ''
              )}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </div>
  );
};