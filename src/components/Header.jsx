import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <header className="romantic-header">
      <div className="header-content">
        <div className="title-container">
          <h1 className="main-title">
            Día de la mejor novia del universo💕
          </h1>
          <p className="subtitle">
            Celebrando nuestro amor y los momentos especiales juntos
          </p>
        </div>
        
        <div className="date-time-container">
          <div className="current-date">
            {formatDate(currentTime)}
          </div>
          <div className="current-time">
            {formatTime(currentTime)}
          </div>
        </div>
      </div>
      
      <div className="header-decoration">
        <div className="decoration-line">
          <span>❤️</span>
          <span>💕</span>
          <span>💖</span>
          <span>💗</span>
          <span>💕</span>
          <span>❤️</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
