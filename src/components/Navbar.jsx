import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='sticky top-0 z-50'>
    {/* Навигация с мобильным меню */}
          <nav className="bg-gray-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link to="/"><img src="https://aqua-hotel.com/wp-content/uploads/2022/03/logo-130.png" alt="Logo" className="h-12" /> </Link>
                </div>
                
                {/* Десктоп меню */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-white hover:text-blue-600">Главная</Link>
                  <Link to="/booking" className="text-white hover:text-blue-600">Бронирование</Link>
                </div>
    
                {/* Мобильное меню кнопка */}
                <button 
                  className="md:hidden text-white p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
    
            {/* Мобильное меню */}
            {isMenuOpen && (
              <div className="md:hidden absolute w-full bg-white z-50">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Главная
                  </Link>
                  <Link 
                    to="/booking" 
                    className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Бронирование
                  </Link>
                </div>
              </div>
            )}
          </nav>
    </div>
  )
}

export default Navbar