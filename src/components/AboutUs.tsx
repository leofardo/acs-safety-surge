import { Shield, Users,Factory, Award, Clock, MapPin, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ACS Treinamentos: Excelência em 
            <span className="block text-secondary"> Treinamentos Industriais e Offshore</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Desde 2017, a ACS Treinamentos se destaca no mercado industrial e offshore, oferecendo soluções 
            personalizadas que atendem às necessidades específicas de cada cliente. Nossa equipe técnica altamente 
            qualificada garante o melhor custo-benefício em todos os serviços prestados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Atendimento 24 horas sob contrato
                </h3>
                <p className="text-muted-foreground">
                  Atuamos nos mais altos padrões de qualidade, com atendimento 24 horas por dia, 7 dias por semana, 365 dias por ano (8x24x365). 
                  Nossos treinamentos industriais são baseados e certificados pelas Normas Regulamentadoras (NRs).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Profissionais Bilíngues
                </h3>
                <p className="text-muted-foreground">
                  Contamos com profissionais bilíngues (inglês/português) para atender às demandas da 
                  Indústria do Petróleo e Gás (setor Offshore) em todo o território nacional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-success/10 p-3 rounded-lg">
                <Award className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Inovação e Qualidade
                </h3>
                <p className="text-muted-foreground">
                  Inovação é um dos nossos pilares. A ACS Treinamentos oferece alguns cursos na modalidade de Ensino a Distância (EAD), permitindo que seus empregados se qualifiquem no conforto de sua casa ou trabalho.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Paixão Pelo Que Fazemos
                </h3>
                <p className="text-muted-foreground">
                  Na ACS Treinamentos, paixão por treinamento industrial é o que nos move. Nosso DNA é a busca constante pela qualidade, garantindo que nossos clientes sempre tenham a melhor experiência e resultados eficazes.
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-card p-6 rounded-lg border card-elevated">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossos Serviços Adicionais
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Elaboração e implementação de Programas de Gerenciamento de Riscos Ocupacionais (PGRO) e GRO
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Equipe qualificada para atendimento do Serviço Especializado em Engenharia de Segurança e Medicina do 
                    Trabalho (SESMT) da sua empresa
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Consultoria especializada em segurança no trabalho
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Treinamentos personalizados conforme necessidade da empresa
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Localizações Estratégicas
                </h3>
              </div>
              <p className="text-muted-foreground mb-3">
                <strong>Rio de Janeiro • Belém • Atuação Offshore</strong>
              </p>
              <p className="text-muted-foreground text-sm">
                Na ACS Treinamentos, paixão por treinamento industrial é o que nos move. Nosso DNA é a busca constante 
                pela qualidade, garantindo que nossos clientes sempre tenham a melhor experiência e resultados eficazes.
              </p>
            </div> */}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-secondary/5 to-primary/5 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Confie na ACS Treinamentos para impulsionar o sucesso da sua equipe e da sua empresa!
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Experiência, qualidade e inovação em cada treinamento que oferecemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="btn-gradient px-8 py-3 rounded-lg text-secondary-foreground font-semibold hover:shadow-lg transition-all"
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=5521983620038&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20ACS%20Treinamentos%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20cursos%20dispon%C3%ADveis." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;