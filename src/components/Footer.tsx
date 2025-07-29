
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
            <div>WhatsApp: (83) 98221-0377</div>
            <div>Instagram: @studiovexio</div>
            <div>E-mail: contato@vexiostudio.com.br</div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Feito com <Heart className="h-4 w-4 text-vexio-orange mx-1 fill-current" /> pela Vexio Studio • © 2024 Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;