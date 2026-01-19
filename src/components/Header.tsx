/** 01 */


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  title: string;
  url: string;
  isHighlighted?: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array de links do menu
  const navLinks: NavLink[] = [
    { title: "Início", url: "#home", isHighlighted: true },
    { title: "Serviços", url: "#services" },
    { title: "Benefícios", url: "#benefits" },
    { title: "Preços", url: "#pricing" },
    { title: "Integrações", url: "/integracoes" },
    { title: "Contato", url: "#contact" },
  ];

  const handleNavClick = (url: string, e: React.MouseEvent) => {
    // Se for uma âncora (#), faz scroll suave
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
    // Se for URL relativa ou absoluta, deixa o navegador lidar
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://www.vexiostudio.com.br/logo-laranja-preto.png"
              alt="Vexio Studio"
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                onClick={(e) => handleNavClick(link.url, e)}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : ""}
                className={`transition-colors ${link.isHighlighted
                  ? "text-gray-700 font-semibold hover:text-vexio-orange"
                  : "text-gray-700 hover:text-vexio-orange"
                  }`}
              >
                {link.title}
              </a>
            ))}
          </nav>

          <Button
            onClick={() => window.open('https://bot.vexio.app.br/demonstracao', '_blank')}
            className="hidden md:inline-flex bg-vexio-orange hover:bg-vexio-orange-dark text-white"
          >
            Testar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

