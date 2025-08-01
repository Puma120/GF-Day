import './MessageSection.css';

const MessageSection = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        <div className="message-card">
          <div className="card-header">
            <h2>Una pequeña cita que me recuerda a nosotros</h2>
          </div>
          
          <div className="card-content">
            <div className="love-quote">
              <blockquote>
                "Amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección."
                -Antoine de Saint-Exupéry
              </blockquote>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};



export default MessageSection;
