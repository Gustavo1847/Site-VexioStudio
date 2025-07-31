/** 04 */

import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize 80% do tempo",
      description: "Automatização completa do atendimento inicial e agendamentos"
    },
    {
      icon: TrendingUp,
      title: "Aumente em 150% as conversões",
      description: "Respostas imediatas aumentam significativamente as confirmações"
    },
    {
      icon: Users,
      title: "Atendimento 24/7",
      description: "Sua clínica nunca para de atender, mesmo fora do horário comercial"
    },
    {
      icon: Shield,
      title: "Reduza faltas em 60%",
      description: "Confirmações automáticas e lembretes diminuem drasticamente as faltas"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossa IA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados comprovados que transformam a gestão da sua clínica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-vexio-orange to-vexio-orange-light rounded-2xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-vexio-orange to-vexio-orange-light rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Veja sua clínica crescer com IA
            </h3>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de clínicas que já automatizaram seu atendimento e aumentaram sua receita
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5583982210377', '_blank')}
              className="bg-white text-vexio-orange px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Começar agora
              <TrendingUp className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
