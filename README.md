# ClockClock24

A beautiful, kinetic time display built with React and TypeScript. ClockClock24 showcases time in a unique way with animated digit displays powered by individual clocks, creating an elegant and modern approach to telling time.

## Features

✨ **Kinetic Digit Animation** - Each digit is rendered using multiple mini-clocks creating smooth, continuous motion  
🎨 **Dark & Light Modes** - Seamless theme switching with next-themes integration  
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
⚡ **Fast & Performant** - Built with Vite for instant development experience  
🎭 **Modern UI** - Built with Radix UI components and Tailwind CSS  
🌗 **Smooth Transitions** - CSS transitions and anime.js for fluid animations

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Theme Management**: next-themes
- **Animations**: anime.js
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router
- **Form Handling**: React Hook Form

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aakash-sharma-github/clockclock-24.git
cd ClockClock24
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── ClockClock/          # Main clock display component
│   │   ├── ClockClock.tsx
│   │   ├── DigitDisplay.tsx
│   │   ├── MiniClock.tsx
│   │   └── digitPatterns.tsx
│   ├── ui/                  # Radix UI component library
│   ├── NavLink.tsx
│   └── ThemeToggle.tsx
├── pages/
│   ├── index.tsx            # Main page
│   └── NotFound.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── App.tsx                  # Main app component
└── main.tsx                 # Entry point
```

## Core Components

### ClockClock
The main component that displays the current time using kinetic animations. Accepts a `clockSize` prop to control the size of individual mini-clocks.

### DigitDisplay
Renders individual digits (0-9) by arranging mini-clocks in patterns that form the shape of each number.

### MiniClock
Individual clock components that serve as building blocks for creating digit patterns.

## Customization

### Changing Clock Size
```tsx
<ClockClock clockSize={150} />
```

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme.

## Performance Considerations

- The clock updates every 1 second
- Animations use CSS transforms for optimal performance
- React Query enables efficient data fetching if needed
- Vite provides fast HMR during development

## Browser Support

Works on all modern browsers that support:
- ES2020+
- CSS Grid & Flexbox
- CSS Custom Properties

## License

Created by Aakash Sharma

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
