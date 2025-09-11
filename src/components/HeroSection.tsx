/** 02 */


import { useRef } from "react";
import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapFadeIn, useGsapStaggerFadeIn, useGsapParallax } from "@/hooks/useGsapAnimations";


// HeroSection com animações GSAP modernas
const HeroSection = () => {
  // Refs para animação
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRefs = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];
  const infoRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const cardRef = useRef<HTMLDivElement>(null);

  // Fade-in na section principal
  useGsapFadeIn(sectionRef, { duration: 1.2, delay: 0.1 }); // animação de entrada suave
  // Fade-in no texto principal
  useGsapFadeIn(textRef, { duration: 1, delay: 0.3 });
  // Stagger nos botões
  useGsapStaggerFadeIn(buttonRefs, { duration: 0.8, delay: 0.5 });
  // Stagger nos itens de info
  useGsapStaggerFadeIn(infoRefs, { duration: 0.7, delay: 0.7 });
  // Parallax no card de chat
  useGsapParallax(cardRef, 0.3);

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-orange-50 to-white pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto principal animado */}
            <div ref={textRef} className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automatize sua clínica com{" "}
                <span className="text-vexio-orange">Inteligência Artificial</span>
              </h1>
              {/* Fade-in do parágrafo */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transforme seu atendimento no WhatsApp com nossa IA especializada em clínicas médicas e odontológicas. 
                Agendamentos automáticos, confirmações e respostas inteligentes 24/7.
              </p>

              {/* Stagger nos botões */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  ref={buttonRefs[0]}
                  size="lg"
                  onClick={() => window.open('https://wa.me/5583982210377?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20e%20quero%20testar%20agora%21', '_blank')}
                  className="bg-vexio-orange hover:bg-vexio-orange-dark text-white px-8 py-4 text-lg font-semibold group"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Testar Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  ref={buttonRefs[1]}
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-vexio-orange text-vexio-orange hover:bg-vexio-orange hover:text-white px-8 py-4 text-lg"
                >
                  Ver como funciona
                </Button>
              </div>

              {/* Stagger nos itens de info */}
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
                <div ref={infoRefs[0]} className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Disponível 24/7
                </div>
                <div ref={infoRefs[1]} className="flex items-center">
                  <div className="w-2 h-2 bg-vexio-orange rounded-full mr-2"></div>
                  Setup em 24h
                </div>
                <div ref={infoRefs[2]} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Suporte completo
                </div>
              </div>
            </div>

            {/* Card de chat com parallax */}
            <div className="relative lg:ml-12">
              <div ref={cardRef} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-vexio-orange to-vexio-orange-light rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-vexio-orange rounded-full flex items-center justify-center mr-4">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">IA da Vexio Studio</h3>
                      <p className="text-sm text-green-500">● Online agora</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-700">Olá! Gostaria de agendar uma consulta?</p>
                      <span className="text-xs text-gray-500">Agora</span>
                    </div>
                    <div className="bg-vexio-orange text-white rounded-2xl p-4 ml-8">
                      <p>Sim, preciso de uma avaliação</p>
                      <span className="text-xs text-orange-100">Agora</span>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-gray-700">Perfeito! Temos horários disponíveis hoje às 14h e 16h. Qual prefere?</p>
                      <span className="text-xs text-gray-500">Agora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
