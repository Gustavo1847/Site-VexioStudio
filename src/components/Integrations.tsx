import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

type IntegrationCategory = 'CRM' | 'Integracoes' | 'Software Médico' | 'Software Odontológico' | 'Software de Estética' | 'Todos';

interface Integration {
  name: string;
  logo: string;
  category: IntegrationCategory[];
}

const integrations: Integration[] = [
  // CRM
  { name: 'Agendor', logo: '/integrations/CRM/agendor.svg', category: ['CRM'] },
  { name: 'Cal.com', logo: '/integrations/CRM/calcom.png', category: ['CRM'] },
  { name: 'Calendly', logo: '/integrations/CRM/calendly.png', category: ['CRM'] },
  { name: 'Google Calendar', logo: '/integrations/CRM/google_calendar.png', category: ['CRM'] },
  { name: 'HubSpot', logo: '/integrations/CRM/hubspot.png', category: ['CRM'] },
  { name: 'Pipedrive', logo: '/integrations/CRM/pipedrive.webp', category: ['CRM'] },
  { name: 'RD Station', logo: '/integrations/CRM/rd_station.svg', category: ['CRM'] },
  { name: 'Salesforce', logo: '/integrations/CRM/salesforce.png', category: ['CRM'] },
  { name: 'Zoho CRM', logo: '/integrations/CRM/zoho_crm.png', category: ['CRM'] },

  // Integracoes
  { name: 'ActiveCampaign', logo: '/integrations/Integracoes/active_campaign.png', category: ['Integracoes'] },
  { name: 'Integrately', logo: '/integrations/Integracoes/integrately.png', category: ['Integracoes'] },
  { name: 'Jira', logo: '/integrations/Integracoes/jira.png', category: ['Integracoes'] },
  { name: 'Make', logo: '/integrations/Integracoes/make.svg', category: ['Integracoes'] },
  { name: 'Pluga', logo: '/integrations/Integracoes/pluga.png', category: ['Integracoes'] },
  { name: 'Slack', logo: '/integrations/Integracoes/slack.png', category: ['Integracoes'] },
  { name: 'Trello', logo: '/integrations/Integracoes/trello.png', category: ['Integracoes'] },
  { name: 'Webhooks', logo: '/integrations/Integracoes/webhooks.webp', category: ['Integracoes'] },
  { name: 'WhatsApp', logo: '/integrations/Integracoes/whatsapp.png', category: ['Integracoes'] },
  { name: 'Zapier', logo: '/integrations/Integracoes/zapier.svg', category: ['Integracoes'] },


  // Software Médico
  { name: 'Amplimed', logo: '/integrations/Medico/amplimed.webp', category: ['Software Médico'] },
  { name: 'Clínica Experts', logo: '/integrations/Medico/clinica_experts.png', category: ['Software Médico'] },
  { name: 'Clinica nas Nuvens', logo: '/integrations/Medico/clinica_nas_nuvens.webp', category: ['Software Médico'] },
  { name: 'Clínica Total', logo: '/integrations/Medico/clinica_total.png', category: ['Software Médico'] },
  { name: 'iMedicina', logo: '/integrations/Medico/imedicina.png', category: ['Software Médico'] },
  { name: 'Klingo', logo: '/integrations/Medico/klingo.png', category: ['Software Médico'] },
  { name: 'MDMed', logo: '/integrations/Medico/mdmed.png', category: ['Software Médico'] },
  { name: 'Medware', logo: '/integrations/Medico/medware.png', category: ['Software Médico'] },
  { name: 'Ti-Saúde', logo: '/integrations/Medico/tisaude.webp', category: ['Software Médico'] },

  // Software Odontológico
  { name: 'Clinicorp', logo: '/integrations/Odonto/clinicorp.svg', category: ['Software Odontológico'] },
  { name: 'Controle Odonto', logo: '/integrations/Odonto/controle_odonto.png', category: ['Software Odontológico'] },
  { name: 'Dental Office', logo: '/integrations/Odonto/dental_office.svg', category: ['Software Odontológico'] },
  { name: 'Dontus', logo: '/integrations/Odonto/dontus.png', category: ['Software Odontológico'] },
  { name: 'Serodonto', logo: '/integrations/Odonto/serodonto.png', category: ['Software Odontológico'] },

  // Software de Estética
  { name: 'Belle Software', logo: '/integrations/Estetica/belle.jpg', category: ['Software de Estética'] },
  { name: 'Trinks', logo: '/integrations/Estetica/trinks.png', category: ['Software de Estética'] },
];

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState<IntegrationCategory>('Integracoes');

  const categories: IntegrationCategory[] = [
    'Todos',
    'CRM',
    'Integracoes',
    'Software Médico',
    'Software Odontológico',
    'Software de Estética'
  ];

  const filteredIntegrations = activeCategory === 'Todos'
    ? integrations
    : integrations.filter(integration => integration.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="mb-16">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encontre a solução que você precisa integrada à{' '}
            <br />
            <span className="text-vexio-orange">Vexio Studio</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Vexio Studio se integra a qualquer sistema moderno que possua API e também disponibiliza seus Webhooks para integração com
            + de 26 softwares via serviços de integração como Zapier, Integrately, Pluga ou similar.
          </p>
          <p className="text-sm font-light text-gray-500 max-w-3xl mx-auto mt-1 leading-relaxed">
            <strong>MUITO IMPORTANTE:</strong> Não significa que essas integrações estão prontas para apenas plugar, mas significa apenas que são
            possíveis de serem feitas e precisamos entender o seu caso em específico antes de iniciarmos o projeto de integração.
          </p>
          <p className="text-sm font-light text-gray-500 max-w-3xl mx-auto mt-1 leading-relaxed">
            <strong>*O prazo para conclusão pode variar entre 30 a 120 dias, dependendo da complexidade do projeto e das especificações
              solicitadas.</strong> Consulte nossa equipe para saber mais sobre os valores e condições dessa integração.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-vexio-orange text-white shadow-lg shadow-vexio-orange/30 scale-105'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-vexio-orange hover:text-vexio-orange'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-vexio-orange hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                <div className="w-full h-20 flex items-center justify-center">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="max-w-full max-h-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback para texto se a imagem não carregar
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const text = document.createElement('div');
                        text.className = 'text-gray-700 font-semibold text-center';
                        text.textContent = integration.name;
                        parent.appendChild(text);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nenhuma integração encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Não achou seu software na lista?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Indique para nós qual sistema não encontrou e garanta que tenha integração com a Vexio Studio.
          </p>
          <Button
            size="lg"
            className="bg-vexio-orange hover:bg-vexio-orange-dark text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-vexio-orange/30 hover:shadow-2xl hover:shadow-vexio-orange/40 transition-all duration-300"
            onClick={() => window.open('https://wa.me/5583987146549?text=Olá!%20Gostaria%20de%20solicitar%20uma%20integração%20com%20outro%20software', '_blank')}
          >
            Quero integrar!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-vexio-navy to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <img src="/logo-branco.png" alt="Vexio Studio" className="h-10 mb-4 brightness-0 invert" />
              <p className="text-blue-200 text-sm leading-relaxed">
                É a Secretária Virtual com IA para a Área da Saúde que automatiza o atendimento de clínicas, consultórios e hospitais. O que significa que ela responde pacientes 24/7, agenda/reagenda/cancela consultas e muito mais!
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/#solucoes" className="hover:text-vexio-orange transition-colors">Soluções</a></li>
                <li><a href="/#funcionalidades" className="hover:text-vexio-orange transition-colors">Funcionalidades</a></li>
                <li><a href="/#casos" className="hover:text-vexio-orange transition-colors">Casos de Sucesso</a></li>
                <li><a href="/integracoes" className="hover:text-vexio-orange transition-colors">Integrações</a></li>
                <li><a href="/#contato" className="hover:text-vexio-orange transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Top 3 Posts */}
            <div>
              <h3 className="font-bold text-lg mb-4">Top 3 Posts</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li><a href="#" className="hover:text-vexio-orange transition-colors">Automação de IA: o que é e como criar uma estratégia com IA virtual</a></li>
                <li><a href="#" className="hover:text-vexio-orange transition-colors">8 dicas de como usar a Inteligência para médicos</a></li>
                <li><a href="#" className="hover:text-vexio-orange transition-colors">Por que usar o agendamento automático na clínica médica?</a></li>
              </ul>
            </div>

            {/* Siga-nos */}
            <div>
              <h3 className="font-bold text-lg mb-4">Siga-nos</h3>
              <div className="flex gap-4 mb-6">
                <a href="https://www.facebook.com/people/Vexio-Studio/61578704048363/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vexio-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="https://www.instagram.com/studiovexio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vexio-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/vexiostudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vexio-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.youtube.com/@vexiostudio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vexio-orange transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
              <div className="text-sm text-blue-200">
                <p className="font-semibold mb-2">Startup apoiada por</p>
                <div className="flex gap-4 items-center">
                  <img src="/partners/artemisia.svg" alt="Google - Artemisia" className="h-6 brightness-0 invert opacity-70" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <img src="/partners/logos-rodape-2.png" alt="Cubo - Meta Business Partners" className="h-6 brightness-0 invert opacity-80" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
            <p>© 2024 Vexio Studio - Todos os direitos reservados. <a href="/termos" className="hover:text-vexio-orange transition-colors">Termos de Uso</a> e <a href="/privacidade" className="hover:text-vexio-orange transition-colors">Política de Privacidade</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Integrations;
