import { useState } from 'react';
import { TerrainGrid, JohadPit, WaterFlow } from '../../assets/svg-placeholders/page3-survival';

interface JohadPosition {
  id: number;
  x: number;
  y: number;
}

export default function JohadWaterRecharge() {
  const [johads, setJohads] = useState<JohadPosition[]>([]);
  const [waterLevel, setWaterLevel] = useState(0);

  const handleTerrainClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newJohad: JohadPosition = {
      id: johads.length,
      x,
      y,
    };

    const newJohads = [...johads, newJohad];
    setJohads(newJohads);

    // Calculate water recharge
    const newWaterLevel = Math.min(100, newJohads.length * 20);
    setWaterLevel(newWaterLevel);
  };

  const reset = () => {
    setJohads([]);
    setWaterLevel(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-cyan-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-cyan-900 mb-4">Johad Water Recharge Puzzle</h2>
      <p className="text-lg text-cyan-800 mb-8 text-center max-w-2xl">
        Click on the terrain to place johads (water pits) and recharge the groundwater
      </p>

      <div
        className="relative cursor-pointer mb-8"
        onClick={handleTerrainClick}
      >
        <TerrainGrid />

        {/* Place johads */}
        {johads.map((johad) => (
          <div
            key={johad.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
            style={{
              left: `${johad.x}%`,
              top: `${johad.y}%`,
            }}
          >
            <JohadPit />
          </div>
        ))}

        {/* Water spread effect */}
        {waterLevel > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-blue-400 opacity-30 transition-all duration-1000"
            style={{ height: `${waterLevel}%` }}
          >
            <WaterFlow className="opacity-50" />
          </div>
        )}
      </div>

      <div className="w-64 bg-white rounded-full h-4 overflow-hidden border-2 border-cyan-800 mb-2">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${waterLevel}%` }}
        />
      </div>
      <p className="text-sm text-cyan-800 mb-6">
        Groundwater Level: {Math.round(waterLevel)}% | Johads: {johads.length}
      </p>

      <button
        onClick={reset}
        className="bg-cyan-800 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Reset Terrain
      </button>

      {waterLevel >= 100 && (
        <div className="mt-8 bg-cyan-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <p className="text-sm">
            Perfect! Johads are earthen check dams used for rainwater harvesting in Rajasthan.
            Built by environmentalist Rajendra Singh, johads have revived rivers and transformed
            barren lands into fertile fields across the state.
          </p>
        </div>
      )}
    </div>
  );
}
