
import React, { useEffect, useState } from 'react';

const CountDownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [targetTime]);

  return (
    <div className="text-center font-mono text-xl pt-2">
      ⏳ {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
};

export default CountDownTimer;
