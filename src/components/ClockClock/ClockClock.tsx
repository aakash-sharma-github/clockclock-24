import { useState, useEffect } from 'react';
import DigitDisplay from './DigitDisplay';

interface ClockClockProps {
  clockSize?: number;
}

const ClockClock = ({ clockSize = 100 }: ClockClockProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');

  const digits = [hours[0], hours[1], minutes[0], minutes[1]];

  return (
    <div className="clock-container">
      <div className="flex items-center gap-6 md:gap-10">
        {digits.map((digit, index) => (
          <div key={index} className="relative">
            <DigitDisplay digit={digit} clockSize={clockSize} />
            {/* Colon separator after second digit */}
            {index === 1 && (
              <div className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 flex flex-col gap-8">
                {/* <div className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse-soft" />
                <div className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse-soft" /> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClockClock;
