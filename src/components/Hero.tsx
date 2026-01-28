import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-cafe.jpg';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-primary-foreground/80 text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up stagger-1">
            Café & Brunch
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold leading-tight mb-6 opacity-0 animate-fade-up stagger-2">
            Armazém<br />
            <span className="italic font-normal">do Caffé</span>
          </h1>
          
          <p className="font-sans text-primary-foreground/90 text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-up stagger-3">
            Um refúgio acolhedor onde o aroma do café fresco se mistura com 
            o conforto de uma refeição caseira
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-sans font-medium rounded-lg hover:bg-secondary/90 transition-all duration-300 hover-lift"
            >
              Ver Menu
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-medium rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
