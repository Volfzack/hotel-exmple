import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';
import {apartmentsData} from '../rooms.js';


const HomePage = () => {

  const advantages = [
    { title: 'Бесплатный WiFi', icon: '📶', description: 'Высокоскоростной интернет' },
    { title: 'Ресторан', icon: '🍴', description: 'Шведский стол и à la carte' },
    { title: 'Спа', icon: '💆', description: 'SPA-центр с бассейном' },
  ];

  const reviews = [
    { author: 'Иван Петров', text: 'Лучший отель на побережье! Обслуживание на высоте.' },
    { author: 'Мария Сидорова', text: 'Потрясающие виды и уютные номера.' },
  ];

  const galleryImages = [
    "https://aqua-hotel.com/wp-content/uploads/2022/10/1.jpg",
    "https://aqua-hotel.com/wp-content/uploads/2022/10/2.jpg",
    "https://aqua-hotel.com/wp-content/uploads/2022/10/3.jpg",
    "https://aqua-hotel.com/wp-content/uploads/2022/10/6.jpg",
    "https://aqua-hotel.com/wp-content/uploads/2022/10/7.jpg",
    "https://aqua-hotel.com/wp-content/uploads/2022/10/9.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
    <Navbar />
      {/* Герой секция с анимацией */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen flex items-center justify-center"
      >
        <img 
          src="https://aqua-hotel.com/wp-content/uploads/2022/10/55.jpg" 
          alt="Hero Image" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent font-bold mb-6">Отдых вашей мечты</h1>
          <Link 
            to="/booking" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Забронировать
          </Link>
        </div>
      </motion.div>

      {/* Секция о нас */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl text-white font-bold mb-12">О нас</h2>
        <p className="text-gray-300">
        Город-курорт Судак расположен на юго-востоке Крымского полуострова, жемчужины нашей страны. Красоты одноименной Судакской бухты не оставят равнодушным ни одного туриста, в особенности ценителей живописной природы Южного Берега Крыма. Здесь обязательно стоит побывать, а посетив Судак однажды, вы обязательно захотите вернуться сюда снова. Для максимально комфортного размещения на любой срок для вас открывает свои двери отель в Судаке «Акватель»! Обеспечим идеальные условия, предложим питание и трансфер, чтобы ничто не отвлекало от увлекательных экскурсий, пляжного отдыха, посещения достопримечательностей и оздоровления.

А отдых в Судаке очень полезный для всей семьи благодаря прекрасному климату, соседству с ботаническими садами и прекрасным пляжам, где так приятно нежиться на солнце, чередуя солнечные ванны с водными процедурами и плаванием в Черном Море. Стоит отметить, что вода в бухте Судака прогревается достаточно быстро в начале сезона и не остывает вплоть до середины осени. За долгие столетия своей истории Судак имел статус центра торговли и морской логистики. Если вам по душе размеренное посещение исторических мест и архитектурных памятников Крыма в более прохладный сезон, то наилучшей идеей будет отправиться сюда с ноября по апрель. Благо есть отель в Судаке, готовый принять вас в любое время года по лучшей цене, — это «Акватель». На страницах нашего сайта вы можете ознакомиться с фотогалереей интерьера и основными преимуществами отдыха у нас.
        </p>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Секция номеров */}
      <section id="rooms" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Наши номера</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {apartmentsData.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={room.image} 
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-600">${room.price}</span>
                  <Link 
                    to="/booking" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Забронировать
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция отзывов */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-right">— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Секция галереи фотографий */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl text-white font-bold text-center mb-12">Галерея</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt="Hotel gallery"
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;