"use client";

import { useEffect, useMemo, useState } from "react";

import FlashcardHeader from "@/components/flashcards/FlashcardHeader";
import FlashcardCard from "@/components/flashcards/FlashcardCard";
import FlashcardNavigation from "@/components/flashcards/FlashcardNavigation";
import FlashcardResult from "@/components/flashcards/FlashcardResult";

import type { Flashcard } from "@/components/flashcards/types";

interface FlashcardsSectionProps {
  cards: Flashcard[];
}

interface FlashcardProgress {
  currentCard: number;
  mastered: number;
  reviewCount: number;
  reviewMode: boolean;
  finished: boolean;
  reviewCards: Flashcard[];
}

const STORAGE_KEY = "anatos-flashcard-progress";

export default function FlashcardsSection({
  cards,
}: FlashcardsSectionProps) {

  const [currentCard, setCurrentCard] = useState(0);

  const [mastered, setMastered] = useState(0);

  const [reviewCount, setReviewCount] = useState(0);

  const [reviewMode, setReviewMode] = useState(false);

  const [finished, setFinished] = useState(false);

  const [reviewCards, setReviewCards] =
    useState<Flashcard[]>([]);

  const [savedProgress, setSavedProgress] =
    useState<FlashcardProgress | null>(null);

  const [showResumePrompt, setShowResumePrompt] =
    useState(false);

  const currentDeck = useMemo(() => {

    return reviewMode ? reviewCards : cards;

  }, [
    reviewMode,
    reviewCards,
    cards,
  ]);

  useEffect(() => {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {

      const progress =
        JSON.parse(saved) as FlashcardProgress;

      setSavedProgress(progress);

      setShowResumePrompt(true);

    } catch {

      localStorage.removeItem(STORAGE_KEY);

    }

  }, []);
  useEffect(() => {

    if (showResumePrompt) return;

    if(
      currentCard === 0 &&
      mastered === 0 &&
      reviewCount === 0 &&
      !reviewMode &&
      reviewCards.length === 0 &&
      !finished
    ){
      return;
    }

    const progress: FlashcardProgress = {

      currentCard,

      mastered,

      reviewCount,

      reviewMode,

      finished,

      reviewCards,

    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

  }, [
    currentCard,
    mastered,
    reviewCount,
    reviewMode,
    finished,
    reviewCards,
    showResumePrompt,
  ]);

  function continueRevision() {

    if (!savedProgress) {

      setShowResumePrompt(false);

      return;

    }

    setCurrentCard(savedProgress.currentCard);

    setMastered(savedProgress.mastered);

    setReviewCount(savedProgress.reviewCount);

    setReviewMode(savedProgress.reviewMode);

    setFinished(savedProgress.finished);

    setReviewCards(savedProgress.reviewCards);

    setShowResumePrompt(false);

  }

  function restartSavedRevision() {

    localStorage.removeItem(STORAGE_KEY);

    setSavedProgress(null);

    setCurrentCard(0);

    setMastered(0);

    setReviewCount(0);

    setReviewMode(false);

    setFinished(false);

    setReviewCards([]);

    setShowResumePrompt(false);

  }

  function nextCard() {

    if (currentCard >= currentDeck.length - 1) {

      setFinished(true);

      return;

    }

    setCurrentCard((previous) => previous + 1);

  }

  function previousCard() {

    if (currentCard === 0) return;

    setCurrentCard((previous) => previous - 1);

  }
  function markMastered() {

    setMastered((previous) => previous + 1);

    if (reviewMode) {

      const completedCard = currentDeck[currentCard];

      const updatedCards = reviewCards.filter(
        (card) =>
          card.front !== completedCard.front ||
          card.back !== completedCard.back
      );

      setReviewCards(updatedCards);

      if (updatedCards.length === 0) {

        setFinished(true);

        localStorage.removeItem(STORAGE_KEY);

        return;

      }

      setCurrentCard(0);

      return;

    }

    nextCard();

  }

  function markReview() {

    setReviewCount((previous) => previous + 1);

    const current = currentDeck[currentCard];

    const exists = reviewCards.some(
      (card) =>
        card.front === current.front &&
        card.back === current.back
    );

    if (!exists) {

      setReviewCards((previous) => [
        ...previous,
        current,
      ]);

    }

    nextCard();

  }

  function startReviewCards() {

    if (reviewCards.length === 0) return;

    setReviewMode(true);

    setCurrentCard(0);

    setFinished(false);

  }

  function restartRevision() {

    localStorage.removeItem(STORAGE_KEY);

    setSavedProgress(null);

    setCurrentCard(0);

    setMastered(0);

    setReviewCount(0);

    setFinished(false);

    setReviewMode(false);

    setReviewCards([]);

  }

  if (!currentDeck.length) {

    return (

      <FlashcardResult
        mastered={mastered}
        review={reviewCount}
        total={cards.length}
        onRestart={restartRevision}
        onReviewCards={startReviewCards}
      />

    );

  }
  if (finished) {

    localStorage.removeItem(STORAGE_KEY);

    return (

      <FlashcardResult
        mastered={mastered}
        review={reviewCount}
        total={cards.length}
        onRestart={restartRevision}
        onReviewCards={startReviewCards}
      />

    );

  }

  if (showResumePrompt && savedProgress) {

    return (

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Continue Flashcard Revision?
        </h2>

        <p className="mt-3 text-slate-600">
          We found an unfinished flashcard session.
          Would you like to continue from where you stopped?
        </p>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">

          <div className="grid grid-cols-2 gap-4">

            <div>

              <p className="text-sm text-slate-500">
                Last Card
              </p>

              <p className="font-semibold text-slate-900">
                {savedProgress.currentCard + 1}
              </p>

            </div>

            <div>

              <p className="text-sm text-slate-500">
                Mastered
              </p>

              <p className="font-semibold text-green-700">
                {savedProgress.mastered}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={continueRevision}
            className="rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white"
          >
            Continue
          </button>

          <button
            onClick={restartSavedRevision}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700"
          >
            Restart
          </button>

        </div>

      </section>

    );

  }
  return (

    <section
      id="flashcards"
      className="scroll-mt-28 space-y-8"
    >

      <FlashcardHeader
        currentCard={currentCard + 1}
        totalCards={currentDeck.length}
      />

      <FlashcardCard
        card={currentDeck[currentCard]}
      />

      <FlashcardNavigation
        currentCard={currentCard + 1}
        totalCards={currentDeck.length}
        onPrevious={previousCard}
        onNext={nextCard}
        onMastered={markMastered}
        onReview={markReview}
      />

    </section>

  );

}