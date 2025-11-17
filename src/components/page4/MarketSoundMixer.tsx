import { useState } from 'react';
import { CamelBell, BlacksmithHammer, VendorIcon } from '../../assets/svg-placeholders/page4-soundscapes';

const soundTracks = [
  { id: 'camel', name: 'Camel Bells', icon: CamelBell, defaultVolume: 50 },
  { id: 'hammer', name: 'Blacksmith Hammer', icon: BlacksmithHammer, defaultVolume: 30 },
  { id: 'vendor', name: 'Vendor Chatter', icon: VendorIcon, defaultVolume: 40 },
];

export default function MarketSoundMixer() {
  const [volumes, setVolumes] = useState<Record<string, number>>({
    camel: 50,
    hammer: 30,
    vendor: 40,
  });

  const handleVolumeChange = (id: string, value: number) => {
    setVolumes(prev => ({ ...prev, [id]: value }));
  };

  const resetMixer = () => {
    setVolumes({
      camel: 50,
      hammer: 30,
      vendor: 40,
    });
  };

  const totalVolume = Object.values(volumes).reduce((sum, vol) => sum + vol, 0) / soundTracks.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-orange-900 mb-4">Market Sound Mixer</h2>
      <p className="text-lg text-orange-800 mb-8 text-center max-w-2xl">
        Create your own Rajasthan market soundscape by adjusting the volume of different elements
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {soundTracks.map((track) => {
          const IconComponent = track.icon;
          return (
            <div key={track.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg font-semibold text-orange-900 mb-4 text-center">
                {track.name}
              </h3>

              <input
                type="range"
                min="0"
                max="100"
                value={volumes[track.id]}
                onChange={(e) => handleVolumeChange(track.id, Number(e.target.value))}
                className="w-full h-2 bg-orange-300 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-orange-800 text-center mt-2">
                {volumes[track.id]}%
              </p>
            </div>
          );
        })}
      </div>

      {/* Master volume indicator */}
      <div className="w-80 mb-8">
        <h3 className="text-lg font-semibold text-orange-900 mb-2 text-center">
          Master Mix Level
        </h3>
        <div className="w-full bg-white rounded-full h-6 overflow-hidden border-2 border-orange-800">
          <div
            className="bg-orange-600 h-full transition-all duration-300"
            style={{ width: `${totalVolume}%` }}
          />
        </div>
        <p className="text-sm text-orange-800 text-center mt-2">
          {Math.round(totalVolume)}%
        </p>
      </div>

      <button
        onClick={resetMixer}
        className="bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
      >
        Reset to Default
      </button>

      <div className="mt-8 bg-orange-800 text-white p-6 rounded-lg shadow-lg max-w-md">
        <p className="text-sm">
          <strong>Sound Implementation Note:</strong> Each slider would control a Web Audio API
          gainNode for its respective audio track, allowing real-time mixing of the market ambience.
          The distinctive sounds of Rajasthani markets create an immersive cultural experience.
        </p>
      </div>
    </div>
  );
}
