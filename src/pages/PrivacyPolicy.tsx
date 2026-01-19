
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";

const PrivacyPolicy = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    useGsapFadeIn(pageRef, { duration: 1.2, delay: 0.1 });

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            <Header />

            <div ref={pageRef} className="container mx-auto px-4 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Main Content */}
                    <main className="flex-1 order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Política de Privacidade
                        </h1>
                        <p className="text-gray-500 mb-10 text-lg">
                            Última atualização: 25 de setembro de 2025
                        </p>

                        <div className="prose prose-lg prose-gray max-w-none text-gray-700">
                            <p>
                                A sua privacidade é importante para nós. É política da Vexio Studio respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site da Vexio Studio, bem como em outros sites, sistemas, aplicações, páginas e serviços que possuímos e operamos.
                            </p>
                            <p>
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para fornecer um serviço, produto, atendimento, automação ou solução digital. Fazemos isso por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando esses dados e como eles serão utilizados.
                            </p>
                            <p>
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado, cumprir obrigações legais, contratuais ou regulatórias, ou para garantir o funcionamento adequado das soluções oferecidas. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas, roubos, acessos não autorizados, divulgação, cópia, uso ou modificação indevida.
                            </p>
                            <p>
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei, mediante obrigação legal, ordem judicial ou para a correta execução dos serviços contratados (como integrações técnicas, provedores de hospedagem, APIs e plataformas de terceiros).
                            </p>
                            <p>
                                O nosso site e nossos sistemas podem conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e as práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                            </p>
                            <p>
                                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços, funcionalidades ou soluções desejadas.
                            </p>
                            <p>
                                O uso continuado de nossos sites, sistemas, plataformas e serviços será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
                            </p>

                            <div className="mt-12 space-y-12">
                                <section id="coleta" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Coleta e uso de informações</h2>
                                    <p>Podemos coletar as seguintes informações, dependendo do serviço contratado ou do contato realizado:</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Nome, e-mail, telefone e dados de contato;</li>
                                        <li>Informações profissionais (como nome da empresa, clínica ou negócio);</li>
                                        <li>Dados necessários para configuração de automações, sistemas, sites e integrações;</li>
                                        <li>Informações técnicas como endereço IP, tipo de navegador, páginas acessadas e dados de uso;</li>
                                        <li>Conteúdos enviados voluntariamente pelo usuário por formulários, WhatsApp, e-mail ou plataformas integradas.</li>
                                    </ul>
                                    <p className="mt-4">Essas informações são utilizadas para:</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Prestação de serviços de automação, IA, desenvolvimento de sistemas e sites;</li>
                                        <li>Comunicação com clientes e usuários;</li>
                                        <li>Suporte técnico e operacional;</li>
                                        <li>Melhoria contínua de nossos produtos e serviços;</li>
                                        <li>Cumprimento de obrigações legais e contratuais.</li>
                                    </ul>
                                </section>

                                <section id="cookies" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies e publicidade</h2>
                                    <p>Utilizamos cookies para melhorar a experiência do usuário, entender padrões de navegação e otimizar nossos serviços.</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Podemos utilizar serviços de terceiros, como ferramentas de análise e publicidade (ex.: Google Analytics e Google AdSense).</li>
                                        <li>O Google AdSense utiliza o cookie DoubleClick, que permite veicular anúncios mais relevantes e limitar o número de vezes que um anúncio é exibido para você.</li>
                                        <li>Cookies de publicidade comportamental podem ser usados para apresentar anúncios relevantes, de forma anônima, com base nos interesses do usuário.</li>
                                    </ul>
                                    <p className="mt-2">Você pode desativar os cookies nas configurações do seu navegador, se preferir, sabendo que isso pode afetar o funcionamento de algumas partes do site.</p>
                                </section>

                                <section id="compartilhamento" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Compartilhamento com terceiros</h2>
                                    <p>Podemos compartilhar dados estritamente necessários com:</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Plataformas de hospedagem, automação e infraestrutura;</li>
                                        <li>Serviços de e-mail, WhatsApp, APIs de IA e integrações técnicas;</li>
                                        <li>Parceiros operacionais envolvidos na execução do serviço contratado.</li>
                                    </ul>
                                    <p className="mt-2">Esses terceiros estão comprometidos com a confidencialidade e segurança das informações, utilizando-as apenas para os fins contratados.</p>
                                </section>

                                <section id="seguranca" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Segurança dos dados</h2>
                                    <p>Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, perda, destruição ou divulgação indevida. Apesar disso, nenhum método de transmissão ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.</p>
                                </section>

                                <section id="direitos" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Direitos do usuário</h2>
                                    <p>De acordo com a legislação aplicável (incluindo a LGPD), o usuário tem o direito de:</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Solicitar acesso aos seus dados pessoais;</li>
                                        <li>Solicitar correção ou atualização de dados;</li>
                                        <li>Solicitar a exclusão de dados, quando permitido por lei;</li>
                                        <li>Revogar consentimentos previamente concedidos.</li>
                                    </ul>
                                    <p className="mt-2">As solicitações podem ser feitas por meio dos nossos canais de contato.</p>
                                </section>

                                <section id="compromisso" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Compromisso do Usuário</h2>
                                    <p>O usuário se compromete a fazer uso adequado dos conteúdos, sistemas, plataformas e informações que a Vexio Studio oferece, incluindo, mas não se limitando a:</p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Não se envolver em atividades ilegais ou contrárias à boa-fé e à ordem pública;</li>
                                        <li>Não difundir conteúdo de natureza ilegal, discriminatória, ofensiva, racista, xenofóbica, pornográfica, de apologia ao terrorismo ou que viole direitos humanos;</li>
                                        <li>Não causar danos aos sistemas físicos (hardware) e lógicos (software) da Vexio Studio, de seus fornecedores ou terceiros, nem introduzir ou disseminar vírus ou quaisquer outros sistemas capazes de causar danos.</li>
                                    </ul>
                                </section>

                                <section id="mais-informacoes" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Mais informações</h2>
                                    <p>Esperamos que esta política esteja clara. Como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não fornecer, geralmente é mais seguro entrar em contato conosco antes de utilizar nossos serviços.</p>
                                    <p className="mt-4">Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise este documento regularmente para estar ciente de eventuais alterações.</p>
                                </section>

                                <section id="contato" className="scroll-mt-28">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contato</h3>
                                    <p>Caso tenha qualquer dúvida sobre esta Política de Privacidade ou sobre o tratamento de dados, entre em contato com a Vexio Studio pelos nossos canais oficiais.</p>
                                </section>
                            </div>
                        </div>
                    </main>

                    {/* Sidebar Navigation */}
                    <aside className="lg:w-72 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-28 bg-white p-6 rounded-2xl shadow-sm border border-orange-100/50">
                            <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">Índice</h4>
                            <nav className="flex flex-col space-y-2">
                                <button onClick={() => scrollToSection('coleta')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors text-nowrap lg:text-wrap">
                                    Coleta e uso
                                </button>
                                <button onClick={() => scrollToSection('cookies')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Cookies e publicidade
                                </button>
                                <button onClick={() => scrollToSection('compartilhamento')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Compartilhamento
                                </button>
                                <button onClick={() => scrollToSection('seguranca')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Segurança
                                </button>
                                <button onClick={() => scrollToSection('direitos')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Direitos do usuário
                                </button>
                                <button onClick={() => scrollToSection('compromisso')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Compromisso
                                </button>
                                <button onClick={() => scrollToSection('contato')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    Contato
                                </button>
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
