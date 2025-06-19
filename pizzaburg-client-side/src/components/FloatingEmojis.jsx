import { useEffect, useState } from "react";

const emojis = ["🍕", "🍔", "🍟", "🌭", "🍗", "🥤", "🧀", "🍩", "🍦", "🥪"];

const getRandomStyle = () => {
  const top = Math.random() * 80; // less than 100 to avoid overflow
  const left = Math.random() * 90;
  const delay = Math.random() * 5;
  const duration = 5 + Math.random() * 10;
  const size = 24 + Math.random() * 20;

  return {
    top: `${top}%`,
    left: `${left}%`,
    fontSize: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};


const FloatingEmojis = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const newStyles = Array(emojis.length)
      .fill()
      .map(() => getRandomStyle());
    setStyles(newStyles);
  }, []);

  return (
    <>
      {emojis.map((emoji, i) => (
        <span
          key={i}
          className="floating-emoji absolute pointer-events-none"
          style={styles[i]}
        >
          {emoji}
        </span>
      ))}
    </>
  );
};

export default FloatingEmojis;

