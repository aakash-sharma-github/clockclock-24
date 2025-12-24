import MiniClock from './MiniClock';
import { getDigitPattern } from './digitPatterns';

interface DigitDisplayProps {
  digit: string;
  clockSize?: number;
}

const DigitDisplay = ({ digit, clockSize = 70 }: DigitDisplayProps) => {
  const pattern = getDigitPattern(digit);
  const gap = 30;

  return (
    <div 
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(2, ${clockSize}px)`,
        gridTemplateRows: `repeat(3, ${clockSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {pattern.map((row, rowIndex) =>
        row.map((clockAngles, colIndex) => (
          <MiniClock
            key={`${rowIndex}-${colIndex}`}
            hourAngle={clockAngles[0]}
            minuteAngle={clockAngles[1]}
            size={clockSize}
          />
        ))
      )}
    </div>
  );
};

export default DigitDisplay;
