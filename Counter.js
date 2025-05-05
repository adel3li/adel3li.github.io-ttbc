import { useState, useEffect } from 'react';

export default function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const endValue = parseInt(value);
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(endValue * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{count}</>;
}
