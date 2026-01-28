import { Coffee, Heart, Leaf } from 'lucide-react';
import cafeInterior from '@/assets/cafe-interior.jpg';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: 'Café de Especialidade',
      description: 'Grãos cuidadosamente selecionados e torrados artesanalmente',
    },
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Receitas caseiras preparadas diariamente com ingredientes frescos',
    },
    {
      icon: Leaf,
      title: 'Produtos Locais',
      description: 'Parcerias com produtores locais para garantir frescura e qualidade',
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative opacity-0 animate-fade-up">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={cafeInterior}
                alt="Interior do Armazém do Caffé"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-up stagger-1">
              <p className="font-sans text-secondary text-sm tracking-[0.2em] uppercase mb-3">
                A Nossa História
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
                Mais do que um café,<br />
                <span className="text-coffee-light italic font-normal">
                  um lugar para estar
                </span>
              </h2>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                O Armazém do Caffé nasceu do sonho de criar um espaço onde as pessoas 
                pudessem desacelerar e saborear os pequenos prazeres da vida. Num ambiente 
                rústico e acolhedor, servimos café de especialidade, brunches deliciosos 
                e doces caseiros que aquecem a alma.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6 opacity-0 animate-fade-up stagger-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
