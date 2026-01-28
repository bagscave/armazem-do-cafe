import coffeeArt from '@/assets/coffee-art.jpg';
import brunchSpread from '@/assets/brunch-spread.jpg';
import pastries from '@/assets/pastries.jpg';

const Menu = () => {
  const categories = [
    {
      title: 'Cafés',
      image: coffeeArt,
      items: [
        { name: 'Espresso', price: '1.20€' },
        { name: 'Cappuccino', price: '2.50€' },
        { name: 'Latte', price: '2.80€' },
        { name: 'Mocha', price: '3.20€' },
        { name: 'Cold Brew', price: '3.50€' },
      ],
    },
    {
      title: 'Brunch',
      image: brunchSpread,
      items: [
        { name: 'Avocado Toast', price: '8.50€' },
        { name: 'Eggs Benedict', price: '10.00€' },
        { name: 'Açaí Bowl', price: '9.00€' },
        { name: 'Pancakes', price: '8.00€' },
        { name: 'Brunch Completo', price: '14.50€' },
      ],
    },
    {
      title: 'Doces',
      image: pastries,
      items: [
        { name: 'Cinnamon Roll', price: '3.50€' },
        { name: 'Croissant', price: '2.50€' },
        { name: 'Bolo de Cenoura', price: '4.00€' },
        { name: 'Cheesecake', price: '5.00€' },
        { name: 'Brownie', price: '3.50€' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-up">
          <p className="font-sans text-secondary text-sm tracking-[0.2em] uppercase mb-3">
            O Nosso Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-4">
            Sabores que{' '}
            <span className="text-coffee-light italic font-normal">aquecem</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Cada prato é preparado com ingredientes frescos e muito carinho
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`card-warm rounded-2xl overflow-hidden hover-lift opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              {/* Category Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Category Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl text-foreground font-bold mb-6 text-center">
                  {category.title}
                </h3>

                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-sans text-foreground">{item.name}</span>
                      <span className="font-sans text-secondary font-semibold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-12 opacity-0 animate-fade-up stagger-4">
          * Preços sujeitos a alteração. Informe-nos sobre alergias alimentares.
        </p>
      </div>
    </section>
  );
};

export default Menu;
