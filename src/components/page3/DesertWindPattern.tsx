import { useState } from 'react';
import { HouseModel, WindArrow } from '../../assets/svg-placeholders/page3-survival';
const windDirections = [
  // Angles chosen so North = -90, East = 0 and angles progress clockwise
  { name: 'North', angle: -90, efficiency: 40 },
  { name: 'Northeast', angle: -45, efficiency: 55 },
  { name: 'East', angle: 0, efficiency: 80 },
  { name: 'Southeast', angle: 45, efficiency: 70 },
  { name: 'South', angle: 90, efficiency: 50 },
  { name: 'Southwest', angle: 135, efficiency: 65 },
  { name: 'West', angle: 180, efficiency: 75 },
  { name: 'Northwest', angle: -135, efficiency: 60 },
];

export default function DesertWindPattern() {
  const [windAngle, setWindAngle] = useState(0); // Default to East
  const [houseAngle, setHouseAngle] = useState(0); // Start at 0 degrees (which is 90° for the house image)

  const currentWind = windDirections.find(w => w.angle === windAngle) || windDirections[2];

  // Convert house angle to match wind coordinate system
  // House image's 0° = North (wind system's -90°)
  // So house 0° = wind -90°, house 90° = wind 0°, house 180° = wind 90°, etc.
  const houseWindAngle = houseAngle - 90;

  // Calculate cooling efficiency based on alignment
  // Best efficiency when house opening faces the wind direction
  let angleDiff = Math.abs(windAngle - houseWindAngle);
  // Normalize to handle wrap-around (e.g., -90 and 270 are the same)
  if (angleDiff > 180) angleDiff = 360 - angleDiff;

  const alignmentBonus = Math.max(0, 100 - angleDiff);
  const coolingEfficiency = Math.round((currentWind.efficiency + alignmentBonus) / 2);

  const rotateHouse = (direction: 'left' | 'right') => {
    setHouseAngle(prev => {
      const newAngle = direction === 'left' ? prev - 45 : prev + 45;
      return (newAngle + 360) % 360;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-orange-900 mb-4">Desert Wind Pattern Explorer</h2>
      <p className="text-lg text-orange-800 mb-8 text-center max-w-2xl">
        Adjust the wind direction and house orientation to maximize cooling efficiency
      </p>

      <div className="flex gap-12 items-center">
        {/* Wind direction selector */}
        <div>
          <h3 className="text-lg font-semibold text-orange-900 mb-4">Wind Direction</h3>
          <div className="grid grid-cols-3 gap-2 max-w-xs">
            {windDirections.map((wind) => (
              <button
                key={wind.angle}
                onClick={() => setWindAngle(wind.angle)}
                className={`px-4 py-2 rounded-lg transition-all ${windAngle === wind.angle
                  ? 'bg-orange-800 text-white'
                  : 'bg-white text-orange-900 hover:bg-orange-200'
                  }`}
              >
                {wind.name}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div
              className="transition-transform"
              style={{ transform: `rotate(${windAngle}deg)` }}
            >
              <WindArrow />
            </div>
          </div>
        </div>

        {/* House orientation */}
        <div>
          <h3 className="text-lg font-semibold text-orange-900 mb-4">House Orientation</h3>
          <div
            className="transition-transform mb-6"
            style={{ transform: `rotate(${houseAngle}deg)` }}
          >
            <HouseModel />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => rotateHouse('left')}
              className="bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              ↺ Rotate Left
            </button>
            <button
              onClick={() => rotateHouse('right')}
              className="bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              ↻ Rotate Right
            </button>
          </div>
        </div>
      </div>

      {/* Efficiency display */}
      <div className="mt-12">
        <div className="w-80 bg-white rounded-full h-6 overflow-hidden border-2 border-orange-800 mb-2">
          <div
            className={`h-full transition-all duration-500 ${coolingEfficiency > 70 ? 'bg-green-600' :
              coolingEfficiency > 40 ? 'bg-yellow-600' : 'bg-red-600'
              }`}
            style={{ width: `${coolingEfficiency}%` }}
          />
        </div>
        <p className="text-center text-orange-900 font-semibold">
          Cooling Efficiency: {coolingEfficiency}%
        </p>
        <p className="text-center text-orange-700 text-xs mt-1">
          Wind: {currentWind.name} ({windAngle}°) | House: {houseAngle}° | Alignment: {Math.round(alignmentBonus)}%
        </p>
      </div>

      {coolingEfficiency > 75 && (
        <div className="mt-8 bg-orange-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <p className="text-sm">
            Excellent alignment! Traditional Rajasthani architecture is designed to catch prevailing
            winds. Jharokhas (overhanging windows) and courtyards create natural air circulation,
            keeping homes cool in the scorching desert heat without modern cooling systems.
          </p>
        </div>
      )}
    </div>
  );
}
