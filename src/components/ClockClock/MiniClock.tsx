import { useRef, useEffect } from 'react';
import { animate } from 'animejs';

interface MiniClockProps {
  hourAngle: number;
  minuteAngle: number;
  size?: number;
}

const MiniClock = ({ hourAngle, minuteAngle, size = 60 }: MiniClockProps) => {
  const hourHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const prevAnglesRef = useRef({ hour: 0, minute: 0 });

  useEffect(() => {
    const animateHand = (
      element: HTMLDivElement | null,
      targetAngle: number,
      prevAngle: number,
      key: 'hour' | 'minute'
    ) => {
      if (!element) return;

      // Calculate shortest path
      let diff = targetAngle - prevAngle;
      
      // Normalize the difference to be between -180 and 180
      while (diff > 180) diff -= 360;
      while (diff < -180) diff += 360;

      const finalAngle = prevAngle + diff;

      animate(element, {
        rotate: [prevAngle, finalAngle],
        duration: 5000, // 5 seconds
        ease: 'inOutQuad',
        onComplete: () => {
          // Normalize the angle after animation
          prevAnglesRef.current[key] = ((finalAngle % 360) + 360) % 360;
        }
      });
    };

    animateHand(hourHandRef.current, hourAngle, prevAnglesRef.current.hour, 'hour');
    animateHand(minuteHandRef.current, minuteAngle, prevAnglesRef.current.minute, 'minute');
  }, [hourAngle, minuteAngle]);

  const handLength = size * 0.35;
  const handWidth = 8;

  return (
    <div 
      className="clock-face flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Hour hand */}
      <div
        ref={hourHandRef}
        className="clock-hand"
        style={{
          width: handWidth,
          height: handLength,
          bottom: '50%',
          left: `calc(50% - ${handWidth / 2}px)`,
        }}
      />
      {/* Minute hand */}
      <div
        ref={minuteHandRef}
        className="clock-hand"
        style={{
          width: handWidth,
          height: handLength,
          bottom: '50%',
          left: `calc(50% - ${handWidth / 2}px)`,
        }}
      />
      {/* Center dot */}
      <div 
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: 'hsl(var(--hand-color))',
        }}
      />
    </div>
  );
};

export default MiniClock;
