import { useState, useEffect } from 'react';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  // Todas las fotos de tu novia desde la carpeta fotos
  const photoNames = [
    'IMG-20240317-WA0004.jpg',
    'IMG-20240407-WA0115.jpg',
    'IMG-20240414-WA0140.jpg',
    'IMG-20240526-WA0087.jpg',
    'IMG-20240615-WA0096.jpg',
    'IMG-20240615-WA0116.jpg',
    'IMG-20240801-WA0370.jpg',
    'IMG-20240804-WA0004.jpg',
    'IMG-20240825-WA0151.jpg',
    'IMG-20240913-WA0132.jpg',
    'IMG-20241026-WA0093.jpg',
    'IMG-20241103-WA0027.jpg',
    'IMG-20241117-WA0067.jpg',
    'IMG-20241120-WA0129.jpg',
    'IMG-20241211-WA0071.jpg',
    'IMG-20250115-WA0018.jpg',
    'IMG-20250401-WA0166.jpg',
    'IMG-20250518-WA0026.jpg',
    'IMG-20250706-WA0005.jpg',
    'IMG_20240406_153846.jpg',
    'IMG_20240407_165617.jpg',
    'IMG_20240912_190710.jpg',
    'IMG_20240927_193729.jpg',
    'IMG_20241026_221036.jpg',
    'IMG_20241029_212406.jpg',
    'IMG_20250308_191311.jpg',
    'IMG_20250705_174930.jpg',
    'netify_20240912-190151.png',
    'netify_20240912-190206.png',
    'WhatsApp Image 2025-08-01 at 7.08.00 AM.jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.01 AM.jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.02 AM (1).jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.02 AM (2).jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.02 AM.jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.03 AM (1).jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.03 AM.jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.04 AM (1).jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.04 AM (2).jpeg',
    'WhatsApp Image 2025-08-01 at 7.08.04 AM.jpeg'
  ];

  // Codificar correctamente las URLs para evitar problemas con espacios
  const photos = photoNames.map(name => `/Fotos/${encodeURIComponent(name)}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos.length]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        prevPhoto();
      } else if (event.key === 'ArrowRight') {
        nextPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index) => {
    setCurrentPhoto(index);
  };

  const handleImageError = (e) => {
    console.log('Error loading image:', e.target.src);
    e.target.style.display = 'none';
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={prevPhoto}>
          ❮
        </button>
        
        <div className="carousel-photos">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Hermosa foto ${index + 1}`}
              className={`carousel-photo ${index === currentPhoto ? 'active' : ''}`}
              loading="lazy"
              onError={handleImageError}
            />
          ))}
          <div className="carousel-overlay">
            <h3>Nuestros recuerdos ❤️</h3>
            <p className="photo-counter">{currentPhoto + 1} de {photos.length}</p>
          </div>
        </div>
        
        <button className="carousel-btn next" onClick={nextPhoto}>
          ❯
        </button>
      </div>
      
      <div className="carousel-dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentPhoto ? 'active' : ''}`}
            onClick={() => goToPhoto(index)}
            aria-label={`Ir a la foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
