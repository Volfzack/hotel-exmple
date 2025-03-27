import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';
import {apartmentsData} from '../rooms.js';

const BookingPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([apartmentsData.reduce((min, apartment) => Math.min(min, apartment.price), Infinity), apartmentsData.reduce((max, apartment) => Math.max(max, apartment.price), -Infinity)]);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [bookingDates, setBookingDates] = useState([null, null]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const filteredApartments = apartmentsData.filter(apartment => {
    const typeMatch = selectedType === 'all' || apartment.type === selectedType;
    const priceMatch = apartment.price >= priceRange[0] && apartment.price <= priceRange[1];
    return typeMatch && priceMatch;
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      apartment: selectedApartment,
      dates: bookingDates
    };
    console.log('Booking Data:', bookingData);
    alert('Бронирование успешно отправлено!');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Тип номера:</label>
              <select 
                className="w-full p-2 border rounded"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">Все</option>
                <option value="standard">Стандарт</option>
                <option value="luxe">Люкс</option>
              </select>
            </div>
            
            <div>
              <label className="block mb-2">Ценовой диапазон:</label>
              <input 
                type="range"
                className="w-full"
                min={apartmentsData.reduce((min, apartment) => Math.min(min, apartment.price), Infinity)}
                max={apartmentsData.reduce((max, apartment) => Math.max(max, apartment.price), 0)}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <div>До {priceRange[1]} руб.</div>
            </div>
          </div>
        </div>

        {/* Список апартаментов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApartments.map(apartment => (
            <motion.div 
              key={apartment.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={apartment.image} 
                alt={apartment.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{apartment.title}</h3>
                <p className="text-gray-600 mb-4">{apartment.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{apartment.price} руб/ночь</span>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => setSelectedApartment(apartment)}
                  >
                    Выбрать
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Модальное окно бронирования */}
        {selectedApartment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-6 rounded-lg w-full max-w-md"
            >
              <h3 className="text-2xl font-bold mb-4">Бронирование {selectedApartment.title}</h3>
              <form onSubmit={handleBookingSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Даты:</label>
                  <DatePicker
                    selectsRange
                    startDate={bookingDates[0]}
                    endDate={bookingDates[1]}
                    onChange={(update) => setBookingDates(update)}
                    className="w-full p-2 border rounded"
                    placeholderText="Выберите даты"
                    minDate={new Date()}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Имя:</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Email:</label>
                  <input
                    type="email"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Телефон:</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2 border rounded"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setSelectedApartment(null)}
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Подтвердить
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;