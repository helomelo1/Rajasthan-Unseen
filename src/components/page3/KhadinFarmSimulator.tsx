import { useState, useRef } from 'react';
import { KhadinField, WaterFlow } from '../../assets/svg-placeholders/page3-survival';

export default function KhadinFarmSimulator() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [waterDistribution, setWaterDistribution] = useState(0);
  const [trenchPath, setTrenchPath] = useState<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTrenchPath([{ x, y }]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTrenchPath(prev => [...prev, { x, y }]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    // Calculate water distribution based on path length
    const distribution = Math.min(100, trenchPath.length * 2);
    setWaterDistribution(distribution);
  };

  const reset = () => {
    setTrenchPath([]);
    setWaterDistribution(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-green-900 mb-4">Khadin Farm Simulator</h2>
      <p className="text-lg text-green-800 mb-8 text-center max-w-2xl">
        Draw a trench path to divert rainwater to the agricultural field
      </p>

      <div className="relative mb-8">
        <div
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative cursor-crosshair"
        >
          <KhadinField />

          {/* Draw the trench */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {trenchPath.length > 1 && (
              <polyline
                points={trenchPath.map(p => `${p.x},${p.y}`).join(' ')}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>

        {waterDistribution > 0 && (
          <div className="absolute bottom-0 left-0 right-0">
            <WaterFlow className="animate-pulse" />
          </div>
        )}
      </div>

      <div className="w-64 bg-white rounded-full h-4 overflow-hidden border-2 border-green-800 mb-2">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${waterDistribution}%` }}
        />
      </div>
      <p className="text-sm text-green-800 mb-6">
        Water Distribution: {Math.round(waterDistribution)}%
      </p>

      <button
        onClick={reset}
        className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Reset Field
      </button>

      {waterDistribution > 70 && (
        <div className="mt-8 bg-green-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <p className="text-sm">
            Excellent! Khadin is an ancient rainwater harvesting system from western Rajasthan.
            It captures rainwater runoff and stores it in fields, enabling agriculture in arid regions.
            This 500-year-old technique is still used by communities today.
          </p>
        </div>
      )}
    </div>
  );
}
