/** 07 */


import { useRef } from "react";
import { MessageCircle, Instagram, Mail, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGsapFadeIn, useGsapStaggerFadeIn } from "@/hooks/useGsapAnimations";

const ContactSection = () => {
  // Refs para animação
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const ctaRef = useRef<HTMLDivElement>(null);

  // Fade-in na section
  useGsapFadeIn(sectionRef, { duration: 1, delay: 0.1 });
  // Fade-in no título e parágrafo
  useGsapFadeIn(titleRef, { duration: 1, delay: 0.3 });
  // Stagger nos cards de contato
  useGsapStaggerFadeIn(cardRefs, { duration: 0.7, delay: 0.5 });
  // Fade-in no CTA final
  useGsapFadeIn(ctaRef, { duration: 1, delay: 0.8 });

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-vexio-orange to-vexio-orange-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título e parágrafo animados */}
          <div ref={titleRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar sua clínica?
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              Fale agora com nossa IA e descubra como podemos transformar seu atendimento em apenas 24 horas
            </p>
          </div>

          {/* Cards de contato com animação stagger */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div ref={cardRefs[0]} className="text-center">
                <div className="w-16 h-16 bg-vexio-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">(83) 98622-2218</p>
                <Button 
                  onClick={() => window.open('https://wa.me/5583986222218?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20gostaria%20de%20automatizar%20minha%20cl%C3%ADnica%21', '_blank')}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Chamar agora
                </Button>
              </div>

              <div ref={cardRefs[1]} className="text-center">
                <div className="w-16 h-16 bg-vexio-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600 mb-4">@studiovexio</p>
                <Button 
                  onClick={() => window.open('https://instagram.com/studiovexio', '_blank')}
                  variant="outline"
                  className="border-vexio-orange text-vexio-orange hover:bg-vexio-orange hover:text-white"
                >
                  Seguir
                </Button>
              </div>

              <div ref={cardRefs[2]} className="text-center">
                <div className="w-16 h-16 bg-vexio-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
                <p className="text-gray-600 mb-4">contato@vexiostudio.com.br</p>
                <Button 
                  onClick={() => window.location.href = 'mailto:contato@vexiostudio.com.br'}
                  variant="outline"
                  className="border-vexio-orange text-vexio-orange hover:bg-vexio-orange hover:text-white"
                >
                  Enviar e-mail
                </Button>
              </div>
            </div>
          </div>

          {/* CTA final com fade-in */}
          <div ref={ctaRef} className="text-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://bot.vexio.app.br/demonstracao', '_blank')}
              className="bg-white text-vexio-orange hover:bg-gray-50 px-12 py-4 text-xl font-bold shadow-xl"
            >
              <Bot className="mr-3 h-6 w-6" />
              Falar com nossa IA agora
            </Button>
            <p className="text-orange-100 mt-4">
              Resposta em menos de 1 minuto • Orçamento 100% gratuito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
