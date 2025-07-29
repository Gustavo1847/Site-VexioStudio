
import { Check, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "300",
      description: "Automação prática e Econômica.",
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
      features: [
        "Tudo do plano Starter",
        "Até 10.000 mensagens/mês",
        "Integração com Google Agenda e outros sistemas via API",
        "Site institucional",
        "Relatórios mensais*",
        "Automação de Instagram*",
        "Consultoria mensal para otimização",
        "Backup de mensagens",
        "Suporte prioritário com especialista dedicado"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      description: "Solução completa e personalizada",
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
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu orçamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua clínica e comece a automatizar hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.isPopular ? 'border-vexio-orange border-2 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-vexio-orange text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
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
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-vexio-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => window.open('https://wa.me/5583982210377', '_blank')}
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
            ✅ Setup gratuito • ✅ Suporte completo • ✅ Sem fidelidade
          </p>
          <p className="text-sm text-gray-500">
            **Todos os planos incluem implementação e treinamento inicial para sua equipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
