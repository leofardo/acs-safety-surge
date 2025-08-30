import { Shield, Users, Award, MapPin, Clock, ThumbsUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Certificação Reconhecida",
      description: "Certificados válidos em todo território nacional, atendendo às exigências do Ministério do Trabalho. Neles constam o Auto de Responsabilidade Técnica (A.R.T.) dos nossos instrutores facilitando a rastreabilidade e conformidade com a legislação."
    },
    {
      icon: Users,
      title: "Instrutores Especializados",
      description: "Equipe de profissionais com vasta experiência prática nas áreas de segurança e indústria offshore. Exigimos dos nossos instrutores especialização na área e pelo menos 10 anos de prática, para compor nosso time."
    },
    {
      icon: Award,
      title: "Metodologia Prática",
      description: "Treinamentos que combinam teoria e prática, proporcionando aprendizado efetivo e aplicável. Sempre que possível levamos os treinamentos ao ambiente da contratante, para que a prática seja a mais realista possível e com os recursos que os empregados estão habituados a usarem."
    },
    {
      icon: MapPin,
      title: "Atuação Nacional",
      description: "Com sede no Rio de Janeiro e base em Barra de São João (distrito de Casimiro de Abreu), atendemos empresas em todo o Brasil, inclusive em plataformas offshore. Também oferecemos aulas na modalidade EAD (“on line” ou vídeo aulas)."
    },
    {
      icon: Clock,
      title: "Flexibilidade de Horários",
      description: "Turmas adaptadas às necessidades das empresas, incluindo fins de semana e feriados."
    },
    {
      icon: ThumbsUp,
      title: "Experiência Comprovada",
      description: "Mais de 10 anos capacitando profissionais para as principais empresas do setor industrial."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Por Que Escolher a ACS Treinamentos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em capacitação industrial, oferecendo soluções completas para empresas que buscam excelência em segurança e compliance. 
            Todos nossos treinamentos são customizados de acordo com as necessidades das nossas contratantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                10+
              </div>
              <div className="text-lg font-semibold">Anos de Experiência</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                30.000+
              </div>
              <div className="text-lg font-semibold">Profissionais Capacitados</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-lg font-semibold">Empresas Atendidas</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-lg font-semibold">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;