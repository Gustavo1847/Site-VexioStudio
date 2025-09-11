/** 03 */


import { useRef } from "react";
import { Bot, Calendar, Activity, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGsapFadeIn, useGsapStaggerFadeIn } from "@/hooks/useGsapAnimations";

const ServicesSection = () => {
  // Refs para animação
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Fade-in na section
  useGsapFadeIn(sectionRef, { duration: 1, delay: 0.1 });
  // Fade-in no título e parágrafo
  useGsapFadeIn(titleRef, { duration: 1, delay: 0.3 });
  // Stagger nos cards de serviço
  useGsapStaggerFadeIn(cardRefs, { duration: 0.7, delay: 0.5 });

  const services = [
    {
      icon: Bot,
      title: "Automação com IA no WhatsApp",
      description: "Respostas inteligentes, agendamento automático e confirmação de consultas 24/7",
      features: ["Agendamento automático", "Confirmação de consultas", "Respostas personalizadas", "Integração total"]
    },
    {
      icon: Activity,
      title: "Consultoria em Automação",
      description: "Ajuda especializada para clínicas otimizarem seus processos com IA e integrações",
      features: ["Mapeamento de processos", "Planejamento de fluxos automatizados", "Configuração de ferramentas existentes"]
    },
    {
      icon: Globe,
      title: "Sites e Landing Pages",
      description: "Sites institucionais e páginas otimizadas para converter mais pacientes",
      features: ["Design responsivo", "SEO otimizado", "Carregamento rápido", "Integração com WhatsApp"]
    },
    {
      icon: Calendar,
      title: "Integrações Avançadas",
      description: "Conectamos seu sistema com Google Agenda, Instagram, CRMs e APIs externas",
      features: ["Google Agenda", "Instagram", "CRMs populares", "APIs personalizadas"]
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Título e parágrafo animados */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que fazemos pela sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de automação e tecnologia para clínicas médicas e odontológicas
          </p>
        </div>

        {/* Cards de serviço com animação stagger */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                ref={cardRefs[index]}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-2 hover:bg-orange-50"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-vexio-orange rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-vexio-orange rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
