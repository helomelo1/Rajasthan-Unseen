import { Link } from 'react-router-dom';

const pages = [
  { path: '/daily-life', name: 'Daily Life', color: 'bg-amber-600 hover:bg-amber-700' },
  { path: '/endangered-crafts', name: 'Endangered Crafts', color: 'bg-blue-600 hover:bg-blue-700' },
  { path: '/desert-survival', name: 'Desert Survival', color: 'bg-green-600 hover:bg-green-700' },
  { path: '/rabari-migration', name: 'Rabari Migration', color: 'bg-yellow-600 hover:bg-yellow-700' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
          Rajasthan
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Unseen, Unheard, Unlived
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          An interactive journey through the lesser-known cultural, ecological, and artisanal
          practices of Rajasthan. Experience the hidden stories of the desert state.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`${page.color} text-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-center`}
          >
            <h3 className="text-xl font-bold">{page.name}</h3>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 text-sm max-w-2xl">
        <p className="mb-2">
          This project showcases four interactive experiences exploring Rajasthan's under-represented culture:
        </p>
        <ul className="text-left inline-block">
          <li>• Everyday life interactions and traditions</li>
          <li>• Endangered crafts and artisan mini-games</li>
          <li>• Desert survival systems and water engineering</li>
          <li>• Pastoral migration patterns of the Rabari people</li>
        </ul>
      </div>

      <div className="mt-8 text-xs text-gray-500">
        <p>Built with React, TailwindCSS, and Web Animations</p>
      </div>
    </div>
  );
}
