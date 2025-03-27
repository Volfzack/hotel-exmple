import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-top gap-2">
             <Link to="/"><img src="https://aqua-hotel.com/wp-content/uploads/2022/03/logo-130.png" alt="" /></Link>
             <div className="mt-4">
                <h3 className="text-xl font-bold mb-4">Aqua Hotel</h3>
                <p className="text-gray-400">Лучший отдых на побережье</p>
             </div>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 999-99-99</li>
                <li>example@aqua-hotel.com</li>
                <li>ул. Суровая 354, г. Симферополь, АР Крым, Россия, Побережье</li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">WhatsApp</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Telegram</a>
              </div>
            </div>
  
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <p className="text-gray-400">«Aqua Hotel» работает для вас круглый год, чтобы сделать отдых незабываемым и максимально комфортным!</p>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © Aqua Hotel 2024 Все права защищены
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;