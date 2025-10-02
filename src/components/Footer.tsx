/** 08 */


import { useRef } from "react";
import { Heart } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";

const Footer = () => {
  // Ref para animação
  const footerRef = useRef<HTMLElement>(null);
  // Fade-in lento no footer
  useGsapFadeIn(footerRef, { duration: 2, delay: 0.5 });

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://www.vexiostudio.com.br/logo-laranja-preto.png" 
              alt="Vexio Studio" 
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Simplificando e automatizando processos com inteligência artificial para clínicas médicas e odontológicas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 mb-8">
            <div>WhatsApp: <a href="https://wa.me/5583987146549?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20gostaria%20de%20saber%20mais%21">(83) 98221-0377</a></div>
            <div>Instagram: <a href="https://instagram.com/studiovexio">@studiovexio</a></div>
            <div>E-mail: <a href="mailto:contato@vexiostudio.com.br">contato@vexiostudio.com.br</a></div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Desenvolvido por Vexio Studio • © 2024 Todos os direitos reservados
              <br />
              Cnpj: 61.322.556/0001-99
            </p>
          </div>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;