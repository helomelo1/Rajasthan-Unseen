import { useState } from 'react';
import { DoughRaw, DoughFlattened, DoughPuffed } from '../../assets/svg-placeholders/page1-daily-life';

type DoughState = 'raw' | 'flattened' | 'puffed';

export default function BajraRotiMaker() {
  const [state, setState] = useState<DoughState>('raw');
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    if (state === 'raw') {
      setState('flattened');
      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 3000);
    } else if (state === 'flattened') {
      setState('puffed');
      setShowInfo(true);
      setTimeout(() => setShowInfo(false), 3000);
    } else {
      setState('raw');
    }
  };

  const getInfo = () => {
    switch (state) {
      case 'raw':
        return 'Bajra (pearl millet) is a staple grain in Rajasthan, rich in nutrients and drought-resistant.';
      case 'flattened':
        return 'The dough is hand-rolled into a thin, circular roti. This requires skill passed down through generations.';
      case 'puffed':
        return 'When heated on an open flame, the roti puffs up beautifully. The puffing indicates perfect cooking!';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-orange-900 mb-4">Bajra Roti Maker</h2>
      <p className="text-lg text-orange-800 mb-8 text-center max-w-2xl">
        Click the dough to transform it through the traditional roti-making process
      </p>

      <div
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={handleClick}
      >
        {state === 'raw' && <DoughRaw />}
        {state === 'flattened' && <DoughFlattened />}
        {state === 'puffed' && <DoughPuffed />}
      </div>

      <div className="mt-8 flex gap-4">
        <div className={`w-4 h-4 rounded-full ${state === 'raw' ? 'bg-orange-600' : 'bg-orange-300'}`} />
        <div className={`w-4 h-4 rounded-full ${state === 'flattened' ? 'bg-orange-600' : 'bg-orange-300'}`} />
        <div className={`w-4 h-4 rounded-full ${state === 'puffed' ? 'bg-orange-600' : 'bg-orange-300'}`} />
      </div>

      {showInfo && (
        <div className="mt-8 bg-orange-800 text-white p-6 rounded-lg shadow-lg max-w-md animate-fade-in">
          <p className="text-sm">{getInfo()}</p>
        </div>
      )}
    </div>
  );
}
