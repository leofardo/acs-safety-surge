import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="hero-content container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Capacitação Industrial
              <span className="block text-accent"> de Excelência</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Treinamentos especializados em Normas Regulamentadoras (NRs) para 
              profissionais da indústria, offshore e segurança no trabalho.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-gradient text-accent-foreground font-semibold text-lg px-8 py-4">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8 py-4"
              >
                Solicitar Orçamento
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              <div className="flex items-center space-x-3 text-white">
                <Shield className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Certificação Reconhecida</h3>
                  <p className="text-white/80 text-sm">Certificados válidos em todo território nacional</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Users className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Instrutores Especializados</h3>
                  <p className="text-white/80 text-sm">Profissionais com experiência prática</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Award className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Metodologia Prática</h3>
                  <p className="text-white/80 text-sm">Treinamentos teóricos e práticos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;