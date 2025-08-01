import './MessageSection.css';

const MessageSection = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        <div className="message-card">
          <div className="card-header">
            <h2>💝 Un Mensaje Especial Para Ti 💝</h2>
          </div>
          
          <div className="card-content">
            <div className="love-quote">
              <blockquote>
                "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección."
                -Antoine de Saint-Exupéry
              </blockquote>
            </div>
            
            <div className="special-reasons">
              <h3>Nuestro Viaje de Amor 💕</h3>
              <div className="reasons-grid">
                <div className="reason-item">
                  <span className="reason-icon">🌅</span>
                  <p>Cada amanecer contigo es una nueva aventura</p>
                </div>
                <div className="reason-item">
                  <span className="reason-icon">☕</span>
                  <p>Nuestros desayunos llenos de risas y planes</p>
                </div>
                <div className="reason-item">
                  <span className="reason-icon">🎵</span>
                  <p>Las canciones que ahora tienen otro significado</p>
                </div>
                <div className="reason-item">
                  <span className="reason-icon">🌙</span>
                  <p>Las noches hablando hasta que sale el sol</p>
                </div>
                <div className="reason-item">
                  <span className="reason-icon">🎭</span>
                  <p>Nuestras locuras que nadie más entiende</p>
                </div>
                <div className="reason-item">
                  <span className="reason-icon">💌</span>
                  <p>Los mensajes que me roban sonrisas todo el día</p>
                </div>
              </div>
            </div>
            
            <div className="final-message">
              <div className="love-timeline">
                <h3>✨ Nuestros Superpoderes Juntos ✨</h3>
                <div className="timeline-items">
                  <div className="timeline-item">
                    <span className="timeline-icon">🦸‍♀️</span>
                    <p>Tú tienes el poder de hacer que cualquier día malo se vuelva perfecto</p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-icon">🦸‍♂️</span>
                    <p>Yo tengo el poder de amarte más cada día que pasa</p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-icon">💫</span>
                    <p>Juntos tenemos el poder de crear magia en lo ordinario</p>
                  </div>
                </div>
              </div>
              
              <p className="closing-message">
                Cada día contigo es un regalo, y no puedo imaginar mi vida sin ti. 
                Gracias por ser mi compañera, mi amor, mi todo.
              </p>
              <div className="signature-heart">
                <span>Con amor infinito</span>
                <div className="animated-hearts">
                  <span>💖</span>
                  <span>💕</span>
                  <span>💗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
