import './FloatingHearts.css';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => i);
  
  const heartEmojis = ['💕', '💖', '💗', '💝', '💓', '💘', '🤍', '🩷', '💌'];

  return (
    <div className="floating-hearts">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
            fontSize: `${1.5 + Math.random() * 1}rem`,
          }}
        >
          {heartEmojis[Math.floor(Math.random() * heartEmojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
