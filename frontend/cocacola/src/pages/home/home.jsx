import { FaProductHunt, FaUsers, FaUserTie, FaArrowRight, FaAddressBook, FaBars, FaWarehouse } from 'react-icons/fa';
import { GiSodaCan } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './home.css';  
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Carousel Section */}
      <section className="carousel">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="swiper"
        >
          <SwiperSlide>
            <img
              src={banner3}
              alt="Promoción 1"
              className="carousel-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner2}
              alt="Promoción 2"
              className="carousel-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner1}
              alt="Promoción 3"
              className="carousel-image"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <h2>Explora nuestro mundo</h2>
        <div className="cards-container">
          {/* Productos Card */}
          <div className="card">
            <div className="card-icon">
              <FaProductHunt />
            </div>
            <h3>Productos</h3>
            <p>Descubre nuestra amplia gama de bebidas y sabores.</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/productos')}
            >
              Ver productos <FaArrowRight className="button-icon"/>
            </button>
          </div>

          {/* Empleados Card */}
          <div className="card">
            <div className="card-icon">
              <FaUserTie />
            </div>
            <h3>Empleados</h3>
            <p>Conoce al equipo que hace posible la magia de Coca-Cola.</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/empleados')}
            >
              Ver empleados <FaArrowRight className="button-icon" />
            </button>
          </div>

          {/* Clientes Card */}
          <div className="card">
            <div className="card-icon">
              <FaWarehouse />
            </div>
            <h3>Sucursales</h3>
            <p>Encuentras nuestras mejores sucurasales</p>
            <button 
              className="card-button"
              onClick={() => handleNavigation('/sucursales')}
            >
              Ver sucursales <FaArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;