/** 06 */


import { useRef } from "react";
import { Check, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGsapFadeIn, useGsapStaggerFadeIn } from "@/hooks/useGsapAnimations";

const PricingSection = () => {
  // Refs para animação
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Fade-in na section
  useGsapFadeIn(sectionRef, { duration: 1, delay: 0.1 });
  // Fade-in no título e parágrafo
  useGsapFadeIn(titleRef, { duration: 1, delay: 0.3 });
  // Stagger nos cards de plano
  useGsapStaggerFadeIn(cardRefs, { duration: 0.7, delay: 0.5 });

  const plans = [
    {
      name: "Básico",
      price: "300",
      description: "Automação prática e Econômica.",
      link: "https://wa.me/5583982210377?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20B%C3%A1sico.",
      features: [
        "Ideal até 2 profissionais",
        "IA no WhatsApp 24/7",
        "Até 3.000 mensagens/mês",
        "Integração com Google Agenda",
        "Agendamento automático",
        "Fluxo personalizado",
        "Suporte por mensagem"
      ],
      isPopular: false
    },
    {
      name: "Profissional",
      price: "600",
      description: "Integrações avançadas e Atendimento otimizado.",
      link: "https://wa.me/5583982210377?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Profissional.",
      features: [
        "Tudo do plano Starter",
        "Site institucional",
        "Até 8.000 mensagens/mês",
        "Integração com qualquer sistema via API",
        "Consultoria mensal para otimização",
        "Backup de mensagens"
      ],
      bonus: [
        "Acesso ao sistema exclusivo ChatVexio®"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      description: "Solução completa e personalizada",
      link: "https://wa.me/5583982210377?text=Ol%C3%A1%2C%20tudo%20bom%3F%0AVim%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Enterprise.",
      features: [
        "Mensagens ilimitadas",
        "ERP completo para clínicas*",
        "Integrações personalizadas",
        "Múltiplas unidades",
        "Suporte dedicado 24/7"
      ],
      isPopular: false
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Título e parágrafo animados */}
        <div ref={titleRef} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu orçamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua clínica e comece a automatizar hoje mesmo
          </p>
        </div>

        {/* Cards de plano com animação stagger */}
        <div className="grid px-6 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              ref={cardRefs[index]}
              className={`relative ${plan.isPopular ? 'border-vexio-orange border-2 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vexio-orange text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="hidden xl:inline">Mais Popular</span>
                    <span className="inline xl:hidden">Popular</span>
                  </div>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  {typeof plan.price === 'string' && plan.price !== 'Sob consulta' ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">R${plan.price}</span>
                      <span className="text-gray-600">/mês</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-vexio-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {/* Renderizar os bônus separados */}
                  {plan.bonus && plan.bonus.length > 0 && (
                    <>
                      <li className="border-t border-gray-200 my-2 position-absolute"></li>
                      {plan.bonus.map((bonusItem, bonusIndex) => (
                        <li key={`bonus-${bonusIndex}`} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">
                            Acesso ao sistema exclusivo{" "}
                            <a 
                              href="https://chatvexio.vexiostudio.com.br"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer hover:text-vexio-orange"
                            >
                              ChatVexio®
                            </a>
                          </span>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
                <Button 
                  onClick={() => window.open(plan.link, '_blank')}
                  className={`w-full py-3 ${plan.isPopular 
                    ? 'bg-vexio-orange hover:bg-vexio-orange-dark text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.price === 'Sob consulta' ? 'Solicitar Orçamento' : 'Começar Agora'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ✅ Setup personalizado • ✅ Suporte completo • ✅ Sem fidelidade
          </p>
          <p className="text-sm text-gray-500">
            **Todos os planos incluem implementação personalizada e treinamento inicial completo para sua equipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
