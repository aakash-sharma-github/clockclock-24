import { ClockClock } from '@/components/ClockClock';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 transition-colors duration-500">
      <h1 className="sr-only">ClockClock - Kinetic Time Display</h1>
      
      <ThemeToggle />
      
      <div className="relative">
        {/* Decorative glow effect */}
        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-muted-foreground/20 to-transparent rounded-full scale-150" />
        
        <ClockClock clockSize={100} />
      </div>
      
      <footer className="mt-12 text-muted-foreground text-sm tracking-widest uppercase">
        Aakash Sharma
      </footer>
    </main>
  );
};

export default Index;
