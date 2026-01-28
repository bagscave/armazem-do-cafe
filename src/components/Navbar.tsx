import { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-warm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className={`font-serif text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-primary' : 'text-primary-foreground'
          }`}
        >
          Armazém do Caffé
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/armazemdocaffe/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 hover:text-secondary ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? 'text-foreground' : 'text-primary-foreground'}
            />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? 'text-foreground' : 'text-primary-foreground'}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-warm transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-foreground font-medium py-2 hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.instagram.com/armazemdocaffe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors py-2"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
