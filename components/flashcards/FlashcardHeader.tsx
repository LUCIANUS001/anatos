interface FlashcardHeaderProps {
  currentCard: number;
  totalCards: number;
}

export default function FlashcardHeader({
  currentCard,
  totalCards,
}: FlashcardHeaderProps) {
  const progress = Math.round(
    (currentCard / totalCards) * 100
  );

  return (
    <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white shadow">

      <h2 className="text-3xl font-bold">
        Flashcard Revision
      </h2>

      <p className="mt-3 text-amber-100">
        Memorise key anatomy concepts one card at a time.
      </p>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm font-medium">

          <span>
            Card {currentCard} of {totalCards}
          </span>

          <span>
            {progress}%
          </span>

        </div>

        <div className="h-3 rounded-full bg-white/20">

          <div
            className="h-3 rounded-full bg-white transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}