// Each digit is represented by a 2x3 grid of clocks (6 clocks total)
// Each clock has two hands with angles [hand1Angle, hand2Angle]
// Angles: 0 = up, 90 = right, 180 = down, 270 = left

type ClockAngles = [number, number]; // [hand1Angle, hand2Angle]
type DigitPattern = ClockAngles[][]; // 3 rows, 2 columns

// Hand positions for creating thick line segments
const TL: ClockAngles = [90, 180];   // Top-left corner: ┌
const TR: ClockAngles = [180, 270];  // Top-right corner: ┐
const BL: ClockAngles = [0, 90];     // Bottom-left corner: └
const BR: ClockAngles = [0, 270];    // Bottom-right corner: ┘
const V: ClockAngles = [0, 180];     // Vertical line: │
const H: ClockAngles = [90, 270];    // Horizontal line: ─
const HT: ClockAngles = [90, 90];    // Horizontal top only: ─ (both right)
const HB: ClockAngles = [270, 270];  // Horizontal bottom only: ─ (both left)
const VT: ClockAngles = [0, 0];      // Vertical top only: | (both up)
const VB: ClockAngles = [180, 180];  // Vertical bottom only: | (both down)
const X: ClockAngles = [225, 225];   // Hidden/neutral position

// T-junctions and crosses
const TL_H: ClockAngles = [90, 180]; // ┌ with horizontal
const TR_H: ClockAngles = [180, 270];// ┐ with horizontal  
const ML: ClockAngles = [0, 90];     // ├ left middle (bottom-left style)
const MR: ClockAngles = [0, 270];    // ┤ right middle (bottom-right style)
const TML: ClockAngles = [90, 180];  // ├ top-left join
const TMR: ClockAngles = [180, 270]; // ┤ top-right join

export const digitPatterns: Record<string, DigitPattern> = {
  '0': [
    [TL, TR],   // ┌ ┐
    [V, V],     // │ │
    [BL, BR],   // └ ┘
  ],
  '1': [
    [X, VB],    //   │
    [X, V],     //   │
    [X, VT],    //   │
  ],
  '2': [
    [HT, TR],   // ─ ┐
    [TL, BR],   // ┌ ┘
    [BL, HB],   // └ ─
  ],
  '3': [
    [HT, TR],   // ─ ┐
    [HT, MR],   // ─ ┤
    [HB, BR],   // ─ ┘
  ],
  '4': [
    [VB, VB],   // │ │
    [BL, V],    // └ │
    [X, VT],    //   │
  ],
  '5': [
    [TL, HB],   // ┌ ─
    [BL, TR],   // └ ┐
    [HT, BR],   // ─ ┘
  ],
  '6': [
    [TL, HB],   // ┌ ─
    [V, TR],    // ├ ┐
    [BL, BR],   // └ ┘
  ],
  '7': [
    [HT, TR],   // ─ ┐
    [X, V],     //   │
    [X, VT],    //   │
  ],
  '8': [
    [TL, TR],   // ┌ ┐
    [ML, MR],   // ├ ┤
    [BL, BR],   // └ ┘
  ],
  '9': [
    [TL, TR],   // ┌ ┐
    [BL, V],    // └ │
    [HT, BR],   // ─ ┘
  ],
};

export const getDigitPattern = (digit: string): DigitPattern => {
  return digitPatterns[digit] || digitPatterns['0'];
};
