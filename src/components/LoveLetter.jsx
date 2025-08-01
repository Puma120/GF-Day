import { useState } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="letter-container">
      <div className={`letter-envelope ${isOpen ? 'open' : ''}`} onClick={toggleLetter}>
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className="heart-seal">💕</div>
        </div>
        {!isOpen && (
          <div className="envelope-text">
            <p>Una carta especial para ti </p>
            <small>Haz clic para abrir</small>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="letter-content">
          <div className="letter-paper">
            <div className="letter-header">
              <h2>Para Fati</h2>
              <div className="date">Día de la Novia 2025</div>
            </div>
            
            <div className="letter-body">
              <p>Mi querida Fati,</p>
              
              <p>
                Hoy se celebra algo que quizás crees que no es muy especial o importante ya que es algo 
                que no inauguramos nosotros o algo por el estilo, pero es un día que ayuda a recordar 
                todo lo que haces por mí y por nosotros, y quiero aprovecharlo para decirte cuánto te amo
                y cuánto significas para mí.
                
              </p>
              
              <p>
                Eres mi motivo a despertarme y dar el paso fuera de la cama, mas cuando no tengo ganas ni 
                de abrir los ojos, eres mi motivación para seguir adelante y ser mejor cada día. Ya que solo imaginar
                nuestro futuro que tenemos por delante me hace sentir que todo lo que hago vale la pena.
              </p>
              
              <p>
                Gracias por ser mi compañera, mi mejor amiga, mi confidente y mi amor. 
                Gracias por elegirme cada día y por permitirme ser parte de tu vida.
              </p>
              
              <p>
                Te amo más de lo que las palabras pueden expresar, y espero poder 
                demostrártelo cada día por el resto de nuestras vidas.
              </p>
              
              <div className="letter-signature">
                <p>Con todo mi amor,</p>
                <p className="signature">Camo </p>
              </div>
            </div>
            
            <button className="close-letter" onClick={toggleLetter}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
