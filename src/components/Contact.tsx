import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Morada',
      content: 'Rua do Café, 123',
      subtitle: '1200-000 Lisboa, Portugal',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 8h - 18h',
      subtitle: 'Sáb - Dom: 9h - 19h',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+351 912 345 678',
      subtitle: 'Reservas e informações',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'ola@armazemdocaffe.pt',
      subtitle: 'Resposta em 24h',
    },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="space-y-10">
            <div className="opacity-0 animate-fade-up">
              <p className="font-sans text-secondary text-sm tracking-[0.2em] uppercase mb-3">
                Contacto
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Vem tomar um{' '}
                <span className="italic font-normal">café</span>
              </h2>
              <p className="font-sans text-primary-foreground/80 text-lg">
                Estamos à tua espera para partilhar momentos especiais
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 opacity-0 animate-fade-up stagger-1">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-sans text-sm text-primary-foreground/60 uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="font-serif text-lg text-primary-foreground font-medium">
                    {item.content}
                  </p>
                  <p className="font-sans text-sm text-primary-foreground/70">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 opacity-0 animate-fade-up stagger-2">
              <a
                href="https://www.instagram.com/armazemdocaffe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Map Placeholder */}
          <div className="opacity-0 animate-fade-up stagger-3">
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden bg-primary-foreground/10 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                <p className="font-serif text-xl text-primary-foreground mb-2">
                  Lisboa, Portugal
                </p>
                <p className="font-sans text-primary-foreground/70 text-sm">
                  Junto ao Bairro Alto, num recanto acolhedor
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 bg-secondary text-secondary-foreground font-sans font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
