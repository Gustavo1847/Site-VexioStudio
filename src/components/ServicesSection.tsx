
import { Bot, Calendar, Monitor, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Automação com IA no WhatsApp",
      description: "Respostas inteligentes, agendamento automático e confirmação de consultas 24/7",
      features: ["Agendamento automático", "Confirmação de consultas", "Respostas personalizadas", "Integração total"]
    },
    {
      icon: Monitor,
      title: "Sistemas Personalizados",
      description: "ERP completo para clínicas com gestão de pacientes, financeiro e agenda",
      features: ["Gestão de pacientes", "Controle financeiro", "Relatórios detalhados", "Interface intuitiva"]
    },
    {
      icon: Zap,
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que fazemos pela sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de automação e tecnologia para clínicas médicas e odontológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
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
