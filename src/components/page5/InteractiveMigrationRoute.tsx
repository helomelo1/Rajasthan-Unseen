import { useState } from 'react';
import { MigrationPath, RabariCaravan, VillageIcon } from '../../assets/svg-placeholders/page5-migration';

const migrationStops = [
  {
    id: 0,
    name: 'Summer Pasture - Thar Desert',
    position: 10,
    info: 'The Rabari begin their journey from the heart of the Thar Desert where they spend winters.'
  },
  {
    id: 1,
    name: 'Jodhpur Region',
    position: 30,
    info: 'A major trading stop where they sell wool and buy supplies for the journey ahead.'
  },
  {
    id: 2,
    name: 'Aravalli Hills',
    position: 50,
    info: 'The hills provide temporary grazing grounds and water sources during transition periods.'
  },
  {
    id: 3,
    name: 'Udaipur Lakes',
    position: 70,
    info: 'Rich grasslands near the lakes offer excellent grazing during monsoon season.'
  },
  {
    id: 4,
    name: 'Monsoon Destination',
    position: 90,
    info: 'The final destination where lush grass grows during the rainy season, sustaining the livestock.'
  },
];

export default function InteractiveMigrationRoute() {
  const [caravanPosition, setCaravanPosition] = useState(10);
  const [currentStop, setCurrentStop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setCaravanPosition(Math.max(10, Math.min(90, newPosition)));

    // Find closest stop
    const closest = migrationStops.reduce((prev, curr) =>
      Math.abs(curr.position - newPosition) < Math.abs(prev.position - newPosition) ? curr : prev
    );
    setCurrentStop(closest.id);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  }; const moveToStop = (stopId: number) => {
    const stop = migrationStops[stopId];
    setCaravanPosition(stop.position);
    setCurrentStop(stopId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-yellow-900 mb-4">Rabari Migration Route</h2>
      <p className="text-lg text-yellow-800 mb-8 text-center max-w-2xl">
        Drag the caravan along the dotted path to explore the Rabari pastoral migration journey
      </p>

      <div className="relative w-full max-w-4xl mb-12">
        <MigrationPath />

        {/* Village stops */}
        {migrationStops.map((stop) => (
          <button
            key={stop.id}
            onClick={() => moveToStop(stop.id)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
            style={{
              left: `${stop.position}%`,
              top: '50%',
            }}
          >
            <VillageIcon className={currentStop === stop.id ? 'opacity-100' : 'opacity-50'} />
          </button>
        ))}

        {/* Draggable caravan */}
        <div
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <div
            onMouseDown={handleMouseDown}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
            style={{
              left: `${caravanPosition}%`,
              top: '50%',
            }}
          >
            <RabariCaravan />
          </div>
        </div>
      </div>

      {/* Current stop info */}
      <div className="bg-yellow-800 text-white p-6 rounded-lg shadow-lg max-w-2xl animate-fade-in">
        <h3 className="text-xl font-bold mb-2">{migrationStops[currentStop].name}</h3>
        <p className="text-sm mb-2">{migrationStops[currentStop].info}</p>
        <p className="text-xs italic mt-4">
          Progress: {Math.round((currentStop / (migrationStops.length - 1)) * 100)}% of migration route completed
        </p>
      </div>

      {/* Quick navigation buttons */}
      <div className="flex gap-2 mt-6 flex-wrap justify-center">
        {migrationStops.map((stop) => (
          <button
            key={stop.id}
            onClick={() => moveToStop(stop.id)}
            className={`px-4 py-2 rounded-lg transition-all ${currentStop === stop.id
              ? 'bg-yellow-800 text-white'
              : 'bg-white text-yellow-900 hover:bg-yellow-200'
              }`}
          >
            Stop {stop.id + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
