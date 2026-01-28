import coffeeArt from '@/assets/coffee-art.jpg';
import brunchSpread from '@/assets/brunch-spread.jpg';
import pastries from '@/assets/pastries.jpg';
import cafeInterior from '@/assets/cafe-interior.jpg';
import heroImage from '@/assets/hero-cafe.jpg';

const Gallery = () => {
  const images = [
    { src: heroImage, alt: 'Interior acolhedor', span: 'col-span-2 row-span-2' },
    { src: coffeeArt, alt: 'Café artesanal', span: 'col-span-1 row-span-1' },
    { src: pastries, alt: 'Doces caseiros', span: 'col-span-1 row-span-1' },
    { src: brunchSpread, alt: 'Brunch delicioso', span: 'col-span-1 row-span-2' },
    { src: cafeInterior, alt: 'Ambiente cozy', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up">
          <p className="font-sans text-secondary text-sm tracking-[0.2em] uppercase mb-3">
            Galeria
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">
            Momentos{' '}
            <span className="text-coffee-light italic font-normal">especiais</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Espreita o ambiente e os pratos que te esperam
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 opacity-0 animate-fade-up stagger-1">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative group overflow-hidden rounded-xl md:rounded-2xl`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-serif text-primary-foreground text-lg md:text-xl">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 opacity-0 animate-fade-up stagger-2">
          <a
            href="https://www.instagram.com/armazemdocaffe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary font-sans font-medium rounded-full hover:bg-secondary/20 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Segue-nos no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
