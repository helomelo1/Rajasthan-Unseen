import { useState } from 'react';
import { NightSky, MoonIcon, DesertDunes } from '../../assets/svg-placeholders/page1-daily-life';

const soundLayers = [
  { name: 'Wind', description: 'The gentle desert wind sweeping across sand dunes' },
  { name: 'Bells', description: 'Distant camel bells from a passing caravan' },
  { name: 'Insects', description: 'Chirping of desert crickets and night creatures' },
];

// Pre-generated star positions
const stars = [
  { top: 10, left: 20, delay: 0.5, duration: 3 },
  { top: 25, left: 70, delay: 1.2, duration: 2.5 },
  { top: 40, left: 15, delay: 0.8, duration: 4 },
  { top: 55, left: 85, delay: 1.5, duration: 3.5 },
  { top: 70, left: 40, delay: 0.3, duration: 2 },
  { top: 15, left: 90, delay: 2, duration: 4.5 },
  { top: 35, left: 50, delay: 1, duration: 3 },
  { top: 60, left: 25, delay: 1.8, duration: 2.8 },
  { top: 80, left: 60, delay: 0.6, duration: 3.2 },
  { top: 20, left: 35, delay: 1.3, duration: 4.2 },
  { top: 45, left: 80, delay: 0.9, duration: 2.3 },
  { top: 65, left: 10, delay: 1.7, duration: 3.8 },
  { top: 30, left: 45, delay: 0.4, duration: 2.6 },
  { top: 50, left: 95, delay: 2.2, duration: 4.8 },
  { top: 75, left: 30, delay: 0.7, duration: 3.4 },
  { top: 12, left: 55, delay: 1.4, duration: 2.9 },
  { top: 42, left: 75, delay: 1.1, duration: 3.7 },
  { top: 62, left: 5, delay: 1.9, duration: 4.3 },
  { top: 85, left: 50, delay: 0.2, duration: 2.4 },
  { top: 28, left: 65, delay: 1.6, duration: 3.9 },
];

export default function DesertNightSoundscape() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated stars */}
      <div className="absolute inset-0 opacity-50">
        <NightSky />
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-10 right-10">
        <MoonIcon />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Desert Night Soundscape</h2>
        <p className="text-lg text-purple-200 mb-8 text-center max-w-2xl">
          Hover over each layer to reveal the sounds of the Rajasthan desert night
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {soundLayers.map((layer, idx) => (
            <div
              key={idx}
              className="bg-purple-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg cursor-pointer hover:bg-opacity-70 transition-all transform hover:scale-105"
              onMouseEnter={() => setActiveLayer(idx)}
              onMouseLeave={() => setActiveLayer(null)}
            >
              <h3 className="text-xl font-bold text-white mb-2">{layer.name}</h3>
              {activeLayer === idx && (
                <p className="text-sm text-purple-200 animate-fade-in">
                  {layer.description}
                  <br />
                  <span className="text-xs italic">🔊 Audio would play here with Web Audio API</span>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <DesertDunes className="opacity-30" />
        </div>
      </div>
    </div>
  );
}
