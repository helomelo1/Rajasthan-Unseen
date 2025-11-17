import { Link, useLocation } from 'react-router-dom';

const pages = [
  { path: '/', name: 'Home', short: 'Home' },
  { path: '/daily-life', name: 'Daily Life', short: 'Daily' },
  { path: '/endangered-crafts', name: 'Crafts', short: 'Crafts' },
  { path: '/desert-survival', name: 'Survival', short: 'Survival' },
  { path: '/rabari-migration', name: 'Migration', short: 'Migration' },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            Rajasthan: Unseen, Unheard
          </Link>

          <div className="flex gap-2 md:gap-4">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`px-3 py-2 rounded-lg transition-all text-sm md:text-base ${location.pathname === page.path
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {page.short}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
