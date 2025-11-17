import { useState } from 'react';
import { PulperDrum, MeshScreen, PaperSheet } from '../../assets/svg-placeholders/page2-crafts';

export default function KagziPaperPulper() {
  const [isRotating, setIsRotating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [paperReady, setPaperReady] = useState(false);
  const [showTiming, setShowTiming] = useState(false);

  const startPulping = () => {
    setIsRotating(true);
    setProgress(0);
    setPaperReady(false);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRotating(false);
          setShowTiming(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const liftMesh = () => {
    if (progress >= 80 && progress <= 100) {
      // Perfect timing!
      setPaperReady(true);
      setShowTiming(false);
    } else {
      // Too early
      setProgress(0);
      setShowTiming(false);
      alert('Too early! Wait for the drum to finish pulping.');
    }
  };

  const reset = () => {
    setIsRotating(false);
    setProgress(0);
    setPaperReady(false);
    setShowTiming(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-yellow-900 mb-4">Kagzi Paper Pulper</h2>
      <p className="text-lg text-yellow-800 mb-8 text-center max-w-2xl">
        Tap to run the drum, then lift the mesh at the perfect moment to create handmade paper
      </p>

      <div className="flex flex-col items-center gap-8">
        <div className={`transition-transform ${isRotating ? 'animate-spin-slow' : ''}`}>
          <PulperDrum />
        </div>

        <div className="w-64 bg-white rounded-full h-4 overflow-hidden border-2 border-yellow-800">
          <div
            className="bg-yellow-600 h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-yellow-800">Pulping Progress: {Math.round(progress)}%</p>

        <div className="flex gap-4">
          <button
            onClick={startPulping}
            disabled={isRotating}
            className="bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRotating ? 'Pulping...' : 'Start Pulping'}
          </button>

          {showTiming && (
            <button
              onClick={liftMesh}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors animate-pulse"
            >
              Lift Mesh Now!
            </button>
          )}

          <button
            onClick={reset}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
        </div>

        {showTiming && (
          <MeshScreen />
        )}

        {paperReady && (
          <div className="animate-fade-in">
            <PaperSheet />
            <div className="mt-4 bg-yellow-800 text-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-sm">
                Perfect timing! Kagzi is a traditional handmade paper from Sanganer, Jaipur.
                Made from cotton rags, each sheet is unique. The art has been practiced for over 400 years.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
