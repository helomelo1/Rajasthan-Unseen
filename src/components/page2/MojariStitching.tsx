import { useState } from 'react';
import { MojariOutline } from '../../assets/svg-placeholders/page2-crafts';

const stitchPoints = [
  { x: 20, y: 40 },
  { x: 35, y: 35 },
  { x: 50, y: 30 },
  { x: 65, y: 35 },
  { x: 80, y: 40 },
  { x: 90, y: 50 },
  { x: 95, y: 60 },
  { x: 90, y: 70 },
  { x: 80, y: 75 },
];

export default function MojariStitching() {
  const [stitchedPoints, setStitchedPoints] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleStitch = (index: number) => {
    if (index === stitchedPoints.length) {
      const newStitched = [...stitchedPoints, index];
      setStitchedPoints(newStitched);

      if (newStitched.length === stitchPoints.length) {
        setCompleted(true);
      }
    }
  };

  const reset = () => {
    setStitchedPoints([]);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-rose-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-rose-900 mb-4">Mojari Stitching</h2>
      <p className="text-lg text-rose-800 mb-8 text-center max-w-2xl">
        Click the dots in sequence to stitch the traditional Rajasthani mojari pattern
      </p>

      <div className="relative mb-8">
        <MojariOutline />

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Draw stitched lines */}
          {stitchedPoints.map((pointIndex, idx) => {
            if (idx === 0) return null;
            const prevPoint = stitchPoints[stitchedPoints[idx - 1]];
            const currentPoint = stitchPoints[pointIndex];
            return (
              <line
                key={idx}
                x1={`${prevPoint.x}%`}
                y1={`${prevPoint.y}%`}
                x2={`${currentPoint.x}%`}
                y2={`${currentPoint.y}%`}
                stroke="#9f1239"
                strokeWidth="2"
                className="animate-fade-in"
              />
            );
          })}
        </svg>

        {/* Stitch points */}
        {stitchPoints.map((point, index) => (
          <button
            key={index}
            onClick={() => handleStitch(index)}
            disabled={stitchedPoints.includes(index) || index !== stitchedPoints.length}
            className={`absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 transition-all ${stitchedPoints.includes(index)
                ? 'bg-rose-800 border-rose-900 cursor-default'
                : index === stitchedPoints.length
                  ? 'bg-white border-rose-600 cursor-pointer hover:scale-125 animate-pulse'
                  : 'bg-gray-300 border-gray-400 cursor-not-allowed opacity-50'
              }`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
          />
        ))}
      </div>

      <p className="text-sm text-rose-800 mb-4">
        Stitched: {stitchedPoints.length} / {stitchPoints.length}
      </p>

      {completed && (
        <div className="bg-rose-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in mb-4">
          <p className="text-sm">
            Beautiful work! Mojari (also called jutti) are traditional handcrafted shoes from Rajasthan.
            Each pair is intricately embroidered with silk, zari, or beads. The craft has been passed down
            through generations of cobblers.
          </p>
        </div>
      )}

      <button
        onClick={reset}
        className="bg-rose-800 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
