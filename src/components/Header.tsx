
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ee0db443-7bc1-4e8d-ae2a-95012420d1e6.png" 
              alt="Vexio Studio" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-vexio-orange transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-vexio-orange transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-vexio-orange transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-vexio-orange transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-vexio-orange transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button 
            onClick={() => window.open('https://wa.me/5583993536617', '_blank')}
            className="hidden md:inline-flex bg-vexio-orange hover:bg-vexio-orange-dark text-white"
          >
            Falar com IA
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-vexio-orange transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-vexio-orange transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-gray-700 hover:text-vexio-orange transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-gray-700 hover:text-vexio-orange transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-vexio-orange transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5583993536617', '_blank')}
                className="bg-vexio-orange hover:bg-vexio-orange-dark text-white w-full"
              >
                Falar com IA
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
