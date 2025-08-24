import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";
import acsLogo from "@/assets/acs-logo.avif";


const Hero = () => {
  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="hero-content container mx-auto px-4 py-20 relative z-10">
        <div className="animate-fade-in">
          {/* Container principal com flex para dividir em duas colunas */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-9">
            
            {/* Lado Esquerdo - Conteúdo (60%) */}
            <div className="w-full lg:w-[60%]">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Capacitação Industrial
                <span className="block text-secondary"> de Excelência</span>
              </h1>
              
              <p className="text-xl md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                Treinamentos especializados em Normas Regulamentadoras (NRs) para 
                profissionais da indústria, offshore e segurança no trabalho, com atendimento em todo o Brasil, no próprio ambiente do contratante.
              </p>

              <div className="flex flex-col sm:flex-row gap-10 mb-12">
                <Button 
                  asChild 
                  size="lg" 
                  className="btn-gradient text-white font-semibold text-lg px-8 py-4"
                >
                  <a href="#cursos">
                    Ver Todos os Cursos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8 py-4"
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

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 text-white">
                  <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Certificação Reconhecida</h3>
                    <p className="text-white/80 text-sm">Certificados válidos em todo território nacional</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-white">
                  <Users className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Instrutores Especializados</h3>
                    <p className="text-white/80 text-sm">Profissionais com experiência prática</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-white">
                  <Award className="h-8 w-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Metodologia Prática</h3>
                    <p className="text-white/80 text-sm">Treinamentos teóricos e práticos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Logo (40%) */}
            <div className="hidden lg:flex w-[30%] h-[90%] bg-white flex justify-center items-center order-first lg:order-last absolute right-0 inset-y-0 z-10 rounded-2xl" style={{boxShadow: '-15px 0 30px -10px rgba(0, 0, 0, 0.3)'}}>
              <img 
                src={acsLogo} 
                alt="ACS Treinamentos Logo" 
                className="w-80 h-64 object-contain"
              />
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