import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              ACS Treinamentos
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Especialistas em capacitação industrial e segurança no trabalho, 
              oferecendo treinamentos de excelência para profissionais e empresas.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80">(21) 98362-0038</p>
                  <p className="text-primary-foreground/80">(21) 98362-0062</p>
                  <p className="text-primary-foreground/80">(22) 2330-0366</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <p className="text-primary-foreground/80">confirmaremail@acstreinamentos.com.br</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground/80"><strong>Escritório Central:</strong> Av. Rio Branco nº 31 – 1913 Centro, Rio de Janeiro – RJ</p> <br></br>
                  <p className="text-primary-foreground/80"><strong>Base de Operações:</strong> Rua Açaí, Lt 07- Qd 09 Recanto dos Paratis Barra de São João/ 2 Distrito Casemiro de Abreu - RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} ACS Treinamentos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;