import { useState } from 'react';
import { ThewaGoldPattern, GlassBasePlate } from '../../assets/svg-placeholders/page2-crafts';

const goldFragments = [
  { id: 1, x: 0, y: 0 },
  { id: 2, x: 1, y: 0 },
  { id: 3, x: 0, y: 1 },
  { id: 4, x: 1, y: 1 },
];

export default function ThewaGoldFusionGame() {
  const [placedFragments, setPlacedFragments] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleFragmentClick = (id: number) => {
    if (!placedFragments.includes(id)) {
      const newPlaced = [...placedFragments, id];
      setPlacedFragments(newPlaced);

      if (newPlaced.length === goldFragments.length) {
        setCompleted(true);
      }
    }
  };

  const reset = () => {
    setPlacedFragments([]);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-amber-900 mb-4">Thewa Gold-Fusion Game</h2>
      <p className="text-lg text-amber-800 mb-8 text-center max-w-2xl">
        Place the gold fragments onto the glass base to create traditional Thewa art
      </p>

      <div className="flex gap-12 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-amber-900 mb-4">Gold Fragments</h3>
          <div className="grid grid-cols-2 gap-4">
            {goldFragments.map((fragment) => (
              <button
                key={fragment.id}
                onClick={() => handleFragmentClick(fragment.id)}
                disabled={placedFragments.includes(fragment.id)}
                className={`transition-all ${placedFragments.includes(fragment.id)
                    ? 'opacity-30 cursor-not-allowed'
                    : 'cursor-pointer hover:scale-110'
                  }`}
              >
                <ThewaGoldPattern className="w-16 h-16" />
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">Glass Base</h3>
          <div className="relative">
            <GlassBasePlate />
            <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
              {goldFragments.map((fragment) => (
                <div key={fragment.id} className="flex items-center justify-center">
                  {placedFragments.includes(fragment.id) && (
                    <ThewaGoldPattern className="w-12 h-12 animate-fade-in" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {completed && (
        <div className="bg-amber-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in mb-4">
          <p className="text-sm">
            Magnificent! Thewa is a 400-year-old art form from Pratapgarh where intricate gold designs
            are fused onto colored glass. Each piece takes weeks to create and is a family heirloom.
          </p>
        </div>
      )}

      <button
        onClick={reset}
        className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
