import { useState } from 'react';
import { StoneBlock, StepwellStructure } from '../../assets/svg-placeholders/page3-survival';

interface Block {
  id: number;
  x: number;
  y: number;
}

export default function StepwellBuilder() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [stability, setStability] = useState(0);
  const [showStructure, setShowStructure] = useState(false);

  const addBlock = () => {
    const newBlock: Block = {
      id: blocks.length,
      x: Math.floor(Math.random() * 3),
      y: blocks.length,
    };

    const newBlocks = [...blocks, newBlock];
    setBlocks(newBlocks);

    // Simple stability calculation
    const newStability = Math.min(100, (newBlocks.length / 10) * 100);
    setStability(newStability);

    if (newStability >= 100) {
      setShowStructure(true);
    }
  };

  const reset = () => {
    setBlocks([]);
    setStability(0);
    setShowStructure(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-stone-900 mb-4">Stepwell Builder</h2>
      <p className="text-lg text-stone-800 mb-8 text-center max-w-2xl">
        Stack stones to build a traditional Rajasthani stepwell. Align them well for maximum stability!
      </p>

      <div className="flex gap-12">
        <div>
          <div className="relative w-64 h-96 bg-stone-300 border-4 border-stone-400 rounded-lg overflow-hidden">
            {blocks.map((block) => (
              <div
                key={block.id}
                className="absolute animate-fade-in"
                style={{
                  bottom: `${block.y * 40}px`,
                  left: `${block.x * 30 + 20}%`,
                }}
              >
                <StoneBlock />
              </div>
            ))}
          </div>

          <div className="mt-4 w-64 bg-white rounded-full h-4 overflow-hidden border-2 border-stone-800">
            <div
              className="bg-green-600 h-full transition-all duration-300"
              style={{ width: `${stability}%` }}
            />
          </div>
          <p className="text-sm text-stone-800 mt-2 text-center">
            Stability: {Math.round(stability)}%
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={addBlock}
              disabled={showStructure}
              className="bg-stone-800 text-white px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Stone Block
            </button>

            <button
              onClick={reset}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {showStructure && (
          <div className="animate-fade-in">
            <StepwellStructure />
            <div className="mt-4 bg-stone-800 text-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-sm">
                Magnificent! Stepwells (baoris) are architectural marvels unique to Rajasthan and Gujarat.
                Built as early as the 3rd century, they provided water year-round and served as cool
                gathering places during hot summers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
