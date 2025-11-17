import { useState } from 'react';
import { HeadSilhouette, TurbanJodhpuri, TurbanJaipur, TurbanUdaipur, TurbanShekhawati, TurbanMarwar, TurbanMewar } from '../../assets/svg-placeholders/page1-daily-life';

const turbans = [
  { name: 'Jodhpuri Safa', component: TurbanJodhpuri, info: 'The Jodhpuri safa is characterized by its distinctive fan-shaped pleats and is worn during formal occasions.' },
  { name: 'Jaipur Pagdi', component: TurbanJaipur, info: 'Jaipur pagdi features vibrant colors and is traditionally worn by the royal families of Jaipur.' },
  { name: 'Udaipur Wedding Pagdi', component: TurbanUdaipur, info: 'This elaborate turban is worn during weddings and special ceremonies in the Mewar region.' },
  { name: 'Shekhawati Safa', component: TurbanShekhawati, info: 'Known for its unique wrapping style, this turban is popular in the Shekhawati region.' },
  { name: 'Marwar Safa', component: TurbanMarwar, info: 'The Marwar safa is traditionally tied in a specific manner that signifies the wearer\'s community.' },
  { name: 'Mewar Pagdi', component: TurbanMewar, info: 'This turban style is associated with the warriors of Mewar and symbolizes valor and pride.' },
];

export default function TurbanTypology() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTurban = () => {
    setCurrentIndex((prev) => (prev + 1) % turbans.length);
  };

  const prevTurban = () => {
    setCurrentIndex((prev) => (prev - 1 + turbans.length) % turbans.length);
  };

  const CurrentTurban = turbans[currentIndex].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-red-900 mb-4">Turban Typology of Rajasthan</h2>
      <p className="text-lg text-red-800 mb-8 text-center max-w-2xl">
        Explore the diverse turban styles across Rajasthan's regions
      </p>

      <div className="relative flex items-center justify-center mb-8">
        <HeadSilhouette />
        <div className="absolute -top-2">
          <CurrentTurban />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={prevTurban}
          className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={nextTurban}
          className="bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          Next →
        </button>
      </div>

      <div className="bg-red-800 text-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h3 className="text-xl font-bold mb-2">{turbans[currentIndex].name}</h3>
        <p className="text-sm">{turbans[currentIndex].info}</p>
      </div>

      <div className="mt-6 flex gap-2">
        {turbans.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-red-800' : 'bg-red-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
