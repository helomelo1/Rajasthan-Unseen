import { useState } from 'react';
import { PotteryBowl, PaintDroplet, SpinningPot } from '../../assets/svg-placeholders/page2-crafts';

const colors = [
  { name: 'Blue', value: 'blue', ratio: 3 },
  { name: 'Green', value: 'green', ratio: 2 },
  { name: 'White', value: 'white', ratio: 1 },
];

export default function BluePotteryColorMixer() {
  const [droppedColors, setDroppedColors] = useState<string[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDragStart = (e: React.DragEvent, color: string) => {
    e.dataTransfer.setData('color', color);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    const newColors = [...droppedColors, color];
    setDroppedColors(newColors);

    // Check if ratio is correct (3 blue, 2 green, 1 white)
    const blueCount = newColors.filter(c => c === 'blue').length;
    const greenCount = newColors.filter(c => c === 'green').length;
    const whiteCount = newColors.filter(c => c === 'white').length;

    if (blueCount === 3 && greenCount === 2 && whiteCount === 1) {
      setIsSpinning(true);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setDroppedColors([]);
        setIsSpinning(false);
      }, 3000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const resetMixer = () => {
    setDroppedColors([]);
    setIsSpinning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">Blue Pottery Color Mixer</h2>
      <p className="text-lg text-blue-800 mb-8 text-center max-w-2xl">
        Drag color droplets into the bowl to create the perfect Jaipur blue pottery glaze.
        <br />Correct ratio: 3 Blue, 2 Green, 1 White
      </p>

      <div className="flex gap-8 mb-8">
        {colors.map((color) => (
          <div key={color.value} className="text-center">
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, color.value)}
              className="cursor-grab active:cursor-grabbing select-none"
              style={{ WebkitUserDrag: 'element' } as React.CSSProperties}
            >
              <PaintDroplet color={color.value} className="pointer-events-none" />
            </div>
            <p className="text-sm mt-2 text-blue-800">
              {color.name} (need {color.ratio})
            </p>
          </div>
        ))}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative mb-8"
      >
        {isSpinning ? (
          <div className="animate-spin">
            <SpinningPot />
          </div>
        ) : (
          <PotteryBowl />
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-blue-900">{droppedColors.length} colors added</p>
        </div>
      </div>

      <button
        onClick={resetMixer}
        className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Reset Mixer
      </button>

      {showSuccess && (
        <div className="mt-8 bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <p className="text-sm">
            Perfect! Jaipur Blue Pottery is famous for its vibrant blue dye derived from Persian art.
            The technique was brought to Jaipur in the 14th century and remains a prized craft today.
          </p>
        </div>
      )}
    </div>
  );
}
