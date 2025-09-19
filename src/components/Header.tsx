/** 01 */


import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapFadeIn, useGsapStaggerFadeIn } from "@/hooks/useGsapAnimations";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Detecta se está em mobile
  const isMobile = useIsMobile();
  // Ref para animação do header
  const headerRef = useRef<HTMLElement>(null);
  // Refs para animação dos itens do menu principal
  const menuItemRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null)
  ];
  // Fade-in no header
  useGsapFadeIn(headerRef, {
    duration: isMobile ? 0.7 : 1.2,
    delay: isMobile ? 0.1 : 0.3,
    y: 0
  });
  // Stagger nos itens do menu principal
  useGsapStaggerFadeIn(menuItemRefs, { duration: 0.7, delay: 0.4 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://www.vexiostudio.com.br/logo-laranja-preto.png" 
              alt="Vexio Studio" 
              className="h-8 w-auto"
            />
          </div>
          {/* ...existing code... */}
          <nav className="hidden md:flex items-center space-x-8">
            <button ref={menuItemRefs[0]} onClick={() => scrollToSection('home')} className="text-gray-700 font-semibold hover:text-vexio-orange transition-colors">Início</button>
            <button ref={menuItemRefs[1]} onClick={() => window.open("https://chatvexio.vexiostudio.com.br", "_blank")} className="text-vexio-orange font-semibold hover:text-gray-700 transition-colors">ChatVexio</button>
            <button ref={menuItemRefs[2]} onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-vexio-orange transition-colors">Serviços</button>
            <button ref={menuItemRefs[3]} onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-vexio-orange transition-colors">Benefícios</button>
            <button ref={menuItemRefs[4]} onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-vexio-orange transition-colors">Preços</button>
            <button ref={menuItemRefs[5]} onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-vexio-orange transition-colors">Contato</button>
          </nav>
          <Button 
            onClick={() => window.open('https://bot.vexio.app.br/demonstracao', '_blank')}
            className="hidden md:inline-flex bg-vexio-orange hover:bg-vexio-orange-dark text-white"
          >
            Testar Agora
          </Button>
          {/* ...existing code... */}
        </div>
        {/* ...existing code... */}
      </div>
    </header>
  );
};

export default Header;
