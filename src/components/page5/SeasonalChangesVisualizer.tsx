import { useState } from 'react';
import { GrassField, HeatwaveOverlay, CloudOverlay } from '../../assets/svg-placeholders/page5-migration';

type Season = 'summer' | 'monsoon' | 'winter' | 'spring';

const seasonData = {
  summer: {
    name: 'Summer (April-June)',
    temp: '45°C',
    description: 'Scorching heat forces migration to cooler regions. Grass is scarce.',
    bgGradient: 'from-orange-300 to-orange-400',
    overlay: HeatwaveOverlay,
  },
  monsoon: {
    name: 'Monsoon (July-September)',
    temp: '30°C',
    description: 'Rain brings lush grasslands. Peak grazing season with abundant fodder.',
    bgGradient: 'from-blue-200 to-blue-300',
    overlay: CloudOverlay,
  },
  winter: {
    name: 'Winter (October-February)',
    temp: '15°C',
    description: 'Mild temperatures. Return migration begins as grass depletes.',
    bgGradient: 'from-gray-200 to-gray-300',
    overlay: null,
  },
  spring: {
    name: 'Spring (March)',
    temp: '25°C',
    description: 'Transition period with moderate weather and new grass growth.',
    bgGradient: 'from-green-200 to-green-300',
    overlay: null,
  },
};

export default function SeasonalChangesVisualizer() {
  const [season, setSeason] = useState<Season>('summer');

  const currentSeason = seasonData[season];
  const OverlayComponent = currentSeason.overlay;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${currentSeason.bgGradient} flex flex-col items-center justify-center p-8 transition-all duration-1000`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Seasonal Changes Visualizer</h2>
      <p className="text-lg text-gray-800 mb-8 text-center max-w-2xl">
        Experience how seasons affect the Rabari migration patterns
      </p>

      {/* Season selector */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {(Object.keys(seasonData) as Season[]).map((s) => (
          <button
            key={s}
            onClick={() => setSeason(s)}
            className={`px-6 py-3 rounded-lg transition-all font-semibold ${season === s
                ? 'bg-gray-900 text-white scale-110'
                : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Visualization area */}
      <div className="relative w-full max-w-4xl h-96 bg-white bg-opacity-50 rounded-lg overflow-hidden mb-8">
        {/* Grass field */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ${season === 'monsoon' ? 'opacity-100' : season === 'spring' ? 'opacity-70' : 'opacity-30'
          }`}>
          <GrassField />
        </div>

        {/* Weather overlay */}
        {OverlayComponent && (
          <div className="absolute inset-0 animate-fade-in">
            <OverlayComponent />
          </div>
        )}

        {/* Temperature display */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-lg">
          <p className="text-3xl font-bold text-gray-900">{currentSeason.temp}</p>
        </div>
      </div>

      {/* Season information */}
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-2xl animate-fade-in">
        <h3 className="text-xl font-bold mb-2">{currentSeason.name}</h3>
        <p className="text-sm">{currentSeason.description}</p>
      </div>

      {/* Migration pattern info */}
      <div className="mt-6 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-2xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Migration Pattern</h3>
        <p className="text-sm text-gray-700">
          {season === 'summer' && 'Rabari move towards highland areas and water sources, traveling up to 400km.'}
          {season === 'monsoon' && 'Families settle in monsoon grazing areas, letting livestock fatten on fresh grass.'}
          {season === 'winter' && 'Gradual return to desert regions begins as temperatures cool and grass depletes.'}
          {season === 'spring' && 'Final leg of return journey, planning for next summer migration cycle.'}
        </p>
      </div>

      {/* Educational note */}
      <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg max-w-2xl">
        <p className="text-xs">
          <strong>Cultural Note:</strong> The Rabari have practiced seasonal migration for over 1,000 years,
          adapting their routes based on rainfall patterns and traditional ecological knowledge passed through generations.
        </p>
      </div>
    </div>
  );
}
