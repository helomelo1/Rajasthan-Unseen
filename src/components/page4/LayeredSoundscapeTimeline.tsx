import { useState } from 'react';
import { TimelineNode, TimelinePath } from '../../assets/svg-placeholders/page4-soundscapes';

const soundscapes = [
  {
    name: 'Dawn',
    description: 'Morning sounds of desert awakening - birds chirping, distant temple bells',
    time: '5:00 AM'
  },
  {
    name: 'Market',
    description: 'Bustling bazaar with vendor calls, camel bells, and chatter',
    time: '10:00 AM'
  },
  {
    name: 'Afternoon',
    description: 'The quiet heat - only wind whistling through dunes and distant music',
    time: '2:00 PM'
  },
  {
    name: 'Evening',
    description: 'Sunset prayers, folk songs, and gathering sounds',
    time: '7:00 PM'
  },
];

export default function LayeredSoundscapeTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [volume, setVolume] = useState(70);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-purple-900 mb-4">Soundscape Timeline</h2>
      <p className="text-lg text-purple-800 mb-8 text-center max-w-2xl">
        Journey through a day in Rajasthan through sound. Each segment reveals different audio layers.
      </p>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mb-12">
        <TimelinePath />

        <div className="flex justify-between items-center py-8">
          {soundscapes.map((soundscape, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex flex-col items-center group"
            >
              <div className={`transition-all ${activeIndex === index ? 'scale-125' : 'scale-100 opacity-50'
                }`}>
                <TimelineNode />
              </div>
              <p className={`mt-2 text-sm font-semibold ${activeIndex === index ? 'text-purple-900' : 'text-purple-600'
                }`}>
                {soundscape.time}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Active soundscape info */}
      <div className="bg-purple-800 text-white p-8 rounded-lg shadow-lg max-w-2xl mb-8 animate-fade-in">
        <h3 className="text-2xl font-bold mb-2">{soundscapes[activeIndex].name}</h3>
        <p className="text-sm mb-4">{soundscapes[activeIndex].description}</p>
        <p className="text-xs italic">🔊 Audio layer would fade in here using Web Audio API gainNode</p>
      </div>

      {/* Volume control */}
      <div className="w-80">
        <label className="block text-purple-900 font-semibold mb-2">Volume Control</label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full h-2 bg-purple-300 rounded-lg appearance-none cursor-pointer"
        />
        <p className="text-sm text-purple-800 text-center mt-2">{volume}%</p>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <button
          onClick={() => setActiveIndex(Math.min(soundscapes.length - 1, activeIndex + 1))}
          disabled={activeIndex === soundscapes.length - 1}
          className="bg-purple-800 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
