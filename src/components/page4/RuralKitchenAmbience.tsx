import { useState } from 'react';
import { Tawa, Silbatta, Ladle } from '../../assets/svg-placeholders/page4-soundscapes';

const kitchenTools = [
  {
    id: 'tawa',
    name: 'Tawa',
    icon: Tawa,
    sound: 'Sizzling sound of roti cooking',
    info: 'The tawa is a flat griddle used to cook rotis and parathas. The rhythmic flipping creates a distinct sound in every Rajasthani kitchen.',
  },
  {
    id: 'silbatta',
    name: 'Silbatta',
    icon: Silbatta,
    sound: 'Grinding stone scraping',
    info: 'The silbatta (grinding stone) is used to make fresh masala pastes. The circular grinding motion produces a meditative, rhythmic sound.',
  },
  {
    id: 'ladle',
    name: 'Ladle',
    icon: Ladle,
    sound: 'Stirring in metal pot',
    info: 'The metal ladle stirring dal or curry in a brass pot creates melodious metallic sounds that echo through the kitchen.',
  },
];

export default function RuralKitchenAmbience() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleHover = (toolId: string) => {
    setActiveTool(toolId);
    // In a real implementation, this would trigger audio playback
  };

  const handleLeave = () => {
    setActiveTool(null);
  };

  const activeToolData = kitchenTools.find(t => t.id === activeTool);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-amber-900 mb-4">Rural Kitchen Ambience</h2>
      <p className="text-lg text-amber-800 mb-8 text-center max-w-2xl">
        Hover over kitchen tools to hear the sounds of a traditional Rajasthani kitchen
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {kitchenTools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <div
              key={tool.id}
              onMouseEnter={() => handleHover(tool.id)}
              onMouseLeave={handleLeave}
              className={`bg-white p-8 rounded-lg shadow-lg cursor-pointer transition-all transform ${activeTool === tool.id ? 'scale-110 shadow-2xl' : 'hover:scale-105'
                }`}
            >
              <div className="flex justify-center mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg font-semibold text-amber-900 text-center">
                {tool.name}
              </h3>
              {activeTool === tool.id && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-amber-700 italic">🔊 {tool.sound}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeToolData && (
        <div className="bg-amber-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <h3 className="text-xl font-bold mb-2">{activeToolData.name}</h3>
          <p className="text-sm">{activeToolData.info}</p>
        </div>
      )}

      {!activeTool && (
        <div className="bg-amber-800 text-white p-6 rounded-lg shadow-lg max-w-md">
          <p className="text-sm">
            The sounds of a rural Rajasthani kitchen tell stories of tradition, patience, and artistry.
            Each tool has been used for centuries, and their sounds are as much a part of the culture
            as the food itself.
          </p>
        </div>
      )}
    </div>
  );
}
