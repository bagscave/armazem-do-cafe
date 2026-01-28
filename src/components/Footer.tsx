import { Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="font-serif text-xl text-primary-foreground font-bold">
            Armazém do Caffé
          </a>

          {/* Copyright */}
          <p className="font-sans text-sm text-primary-foreground/60 flex items-center gap-1">
            © {currentYear} Armazém do Caffé. Feito com{' '}
            <Heart className="w-4 h-4 text-secondary fill-secondary" /> em Lisboa
          </p>

          {/* Social */}
          <a
            href="https://www.instagram.com/armazemdocaffe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-sans text-sm">@armazemdocaffe</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
