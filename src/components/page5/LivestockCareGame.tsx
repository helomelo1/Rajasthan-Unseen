import { useState, useEffect } from 'react';
import { GoatIcon, CamelIcon, WaterContainer } from '../../assets/svg-placeholders/page5-migration';

interface Livestock {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  hunger: number;
  maxHunger: number;
}

export default function LivestockCareGame() {
  const [livestock, setLivestock] = useState<Livestock[]>([
    { id: 'camel1', name: 'Camel', icon: CamelIcon, hunger: 50, maxHunger: 100 },
    { id: 'goat1', name: 'Goat 1', icon: GoatIcon, hunger: 30, maxHunger: 100 },
    { id: 'goat2', name: 'Goat 2', icon: GoatIcon, hunger: 40, maxHunger: 100 },
  ]);
  const [migrationSpeed, setMigrationSpeed] = useState(100);
  const [waterLevel, setWaterLevel] = useState(100);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setLivestock(prev => {
        const updated = prev.map(animal => ({
          ...animal,
          hunger: Math.min(animal.maxHunger, animal.hunger + 5),
        }));

        // Check if any animal is starving
        const starving = updated.some(animal => animal.hunger >= animal.maxHunger);
        if (starving) {
          setGameOver(true);
          setMigrationSpeed(0);
        }

        // Calculate migration speed based on average hunger
        const avgHunger = updated.reduce((sum, a) => sum + a.hunger, 0) / updated.length;
        setMigrationSpeed(Math.max(0, 100 - avgHunger));

        return updated;
      });

      // Decrease water level
      setWaterLevel(prev => Math.max(0, prev - 2));
    }, 2000);

    return () => clearInterval(interval);
  }, [gameOver]);

  const feedAnimal = (id: string) => {
    if (gameOver) return;

    setLivestock(prev =>
      prev.map(animal =>
        animal.id === id
          ? { ...animal, hunger: Math.max(0, animal.hunger - 30) }
          : animal
      )
    );
  };

  const giveWater = () => {
    if (waterLevel < 20) {
      alert('Not enough water! Find a water source.');
      return;
    }
    setWaterLevel(prev => Math.max(0, prev - 20));
    setLivestock(prev =>
      prev.map(animal => ({ ...animal, hunger: Math.max(0, animal.hunger - 15) }))
    );
  };

  const refillWater = () => {
    setWaterLevel(100);
  };

  const resetGame = () => {
    setLivestock([
      { id: 'camel1', name: 'Camel', icon: CamelIcon, hunger: 50, maxHunger: 100 },
      { id: 'goat1', name: 'Goat 1', icon: GoatIcon, hunger: 30, maxHunger: 100 },
      { id: 'goat2', name: 'Goat 2', icon: GoatIcon, hunger: 40, maxHunger: 100 },
    ]);
    setMigrationSpeed(100);
    setWaterLevel(100);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-teal-900 mb-4">Livestock Care Game</h2>
      <p className="text-lg text-teal-800 mb-8 text-center max-w-2xl">
        Feed your animals on schedule to keep the migration moving!
      </p>

      {/* Migration speed indicator */}
      <div className="w-80 mb-8">
        <h3 className="text-lg font-semibold text-teal-900 mb-2">Migration Speed</h3>
        <div className="w-full bg-white rounded-full h-6 overflow-hidden border-2 border-teal-800">
          <div
            className={`h-full transition-all duration-500 ${migrationSpeed > 60 ? 'bg-green-600' :
                migrationSpeed > 30 ? 'bg-yellow-600' : 'bg-red-600'
              }`}
            style={{ width: `${migrationSpeed}%` }}
          />
        </div>
        <p className="text-sm text-teal-800 text-center mt-1">{Math.round(migrationSpeed)}%</p>
      </div>

      {/* Livestock grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {livestock.map((animal) => {
          const IconComponent = animal.icon;
          return (
            <div key={animal.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg font-semibold text-teal-900 mb-2 text-center">
                {animal.name}
              </h3>

              {/* Hunger meter */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
                <div
                  className={`h-full transition-all ${animal.hunger < 50 ? 'bg-green-600' :
                      animal.hunger < 80 ? 'bg-yellow-600' : 'bg-red-600'
                    }`}
                  style={{ width: `${animal.hunger}%` }}
                />
              </div>
              <p className="text-xs text-teal-800 mb-4 text-center">
                Hunger: {Math.round(animal.hunger)}%
              </p>

              <button
                onClick={() => feedAnimal(animal.id)}
                disabled={gameOver}
                className="w-full bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Feed
              </button>
            </div>
          );
        })}
      </div>

      {/* Water management */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-80">
        <div className="flex justify-center mb-4">
          <WaterContainer />
        </div>
        <h3 className="text-lg font-semibold text-teal-900 mb-2 text-center">Water Supply</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
          <div
            className="bg-blue-600 h-full transition-all"
            style={{ width: `${waterLevel}%` }}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={giveWater}
            disabled={gameOver || waterLevel < 20}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Give Water
          </button>
          <button
            onClick={refillWater}
            disabled={gameOver}
            className="flex-1 bg-teal-800 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Refill
          </button>
        </div>
      </div>

      {gameOver && (
        <div className="bg-red-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in mb-4">
          <h3 className="text-xl font-bold mb-2">Migration Halted!</h3>
          <p className="text-sm mb-4">
            The livestock are too hungry to continue. The Rabari must carefully manage their animals'
            needs during the long migration journey.
          </p>
          <button
            onClick={resetGame}
            className="bg-white text-red-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {!gameOver && migrationSpeed > 70 && (
        <div className="bg-teal-800 text-white p-6 rounded-lg shadow-lg max-w-md">
          <p className="text-sm">
            Well done! The Rabari are expert pastoralists who have migrated seasonally for centuries,
            carefully managing their livestock's needs across hundreds of kilometers.
          </p>
        </div>
      )}
    </div>
  );
}
