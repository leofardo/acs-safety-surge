import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import acsLogo from "@/assets/acs-logo.avif";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block lg:block bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(21) 98362-0038</span>/<span>21 98362-0062</span>/<span>22 2330-0366</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contato@acstreinamentos.com.br</span>
            </div> */}
          </div>
          <div className="hidden md:block text-xs">
            Treinamentos In Company em Todo o Brasil, Inclusive Offshore
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={acsLogo} alt="ACS Treinamentos" className="h-9 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </a>
              <a
                href="#quem-somos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Quem Somos
              </a>
              <a
                href="#cursos"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Cursos
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </a>
            </div>

            {/* CTA Button */}
            <Button asChild className="hidden md:block lg:block btn-gradient text-white font-semibold">
              <a 
                href="https://api.whatsapp.com/send/?phone=5521983620038&text=Ol%C3%A1,%20vim%20pelo%20site%20da%20ACS%20Treinamentos%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20cursos%20dispon%C3%ADveis." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#inicio"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#quem-somos"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Quem Somos
              </a>
              <a
                href="#cursos"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Cursos
              </a>
              <a
                href="#contato"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <Button asChild className="w-full btn-gradient text-white font-semibold">
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
        )}
      </nav>
    </>
  );
};

export default Navbar;