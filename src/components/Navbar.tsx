import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import acsLogo from "@/assets/acs-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(21) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contato@acstreinamentos.com.br</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            Rio de Janeiro • Belém • Atuação Offshore
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={acsLogo} alt="ACS Treinamentos" className="h-10 w-auto" />
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
            <div className="hidden md:flex items-center">
              <Button className="btn-gradient text-accent-foreground font-semibold">
                Solicitar Orçamento
              </Button>
            </div>

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
              <Button className="w-full btn-gradient text-accent-foreground font-semibold">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;