
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useGsapFadeIn } from "@/hooks/useGsapAnimations";

const TermsOfUse = () => {
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
                            Termos de Uso
                        </h1>
                        <p className="text-gray-500 mb-10 text-lg">
                            Última atualização: 25 de setembro de 2025
                        </p>

                        <div className="prose prose-lg prose-gray max-w-none text-gray-700">
                            <p>
                                Ao acessar o site Vexio Studio, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                            </p>

                            <div className="mt-12 space-y-12">
                                <section id="termos" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Termos</h2>
                                    <p>
                                        Ao acessar este site, você concorda em ficar vinculado a estes Termos de Uso e a todas as leis e regulamentos aplicáveis, assumindo total responsabilidade pelo cumprimento das leis locais. Caso não concorde com qualquer um dos termos aqui estabelecidos, o uso do site e dos serviços da Vexio Studio não é autorizado.
                                    </p>
                                </section>

                                <section id="uso-licenca" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de Licença</h2>
                                    <p>
                                        É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Vexio Studio, apenas para visualização pessoal, não comercial e transitória. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Modificar ou copiar os materiais;</li>
                                        <li>Utilizar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                                        <li>Tentar descompilar, fazer engenharia reversa ou acessar indevidamente qualquer software, automação ou sistema disponibilizado pela Vexio Studio;</li>
                                        <li>Remover quaisquer direitos autorais, marcas registradas ou outras notificações de propriedade dos materiais;</li>
                                        <li>Transferir os materiais para outra pessoa ou espelhar os materiais em qualquer outro servidor.</li>
                                    </ul>
                                    <p className="mt-4">
                                        Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pela Vexio Studio a qualquer momento. Ao encerrar a visualização desses materiais ou ao término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
                                    </p>
                                </section>

                                <section id="isencao" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Isenção de Responsabilidade</h2>
                                    <p>
                                        Os materiais no site da Vexio Studio são fornecidos “como estão”. A Vexio Studio não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outros direitos.
                                    </p>
                                    <p className="mt-4">
                                        Além disso, a Vexio Studio não garante nem faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionados a esses materiais ou a sites vinculados a este site.
                                    </p>
                                </section>

                                <section id="limitacoes" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitações</h2>
                                    <p>
                                        Em nenhum caso a Vexio Studio ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados, perda de lucro ou interrupção de negócios) decorrentes do uso ou da incapacidade de usar os materiais, sistemas, automações ou serviços da Vexio Studio, mesmo que a Vexio Studio ou um representante autorizado tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                                    </p>
                                    <p className="mt-4">
                                        Como algumas jurisdições não permitem limitações em garantias implícitas ou limitações de responsabilidade por danos consequenciais ou incidentais, essas limitações podem não se aplicar a você.
                                    </p>
                                </section>

                                <section id="precisao" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Precisão dos Materiais</h2>
                                    <p>
                                        Os materiais exibidos no site da Vexio Studio podem incluir erros técnicos, tipográficos ou fotográficos. A Vexio Studio não garante que qualquer material em seu site seja preciso, completo ou atual. A Vexio Studio pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, a Vexio Studio não se compromete a atualizar os materiais.
                                    </p>
                                </section>

                                <section id="links" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                                    <p>
                                        A Vexio Studio não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Vexio Studio. O uso de qualquer site vinculado é por conta e risco do usuário.
                                    </p>
                                </section>

                                <section id="modificacoes" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modificações</h2>
                                    <p>
                                        A Vexio Studio pode revisar estes Termos de Uso a qualquer momento, sem aviso prévio. Ao utilizar este site, você concorda em ficar vinculado à versão atual destes termos de serviço.
                                    </p>
                                </section>

                                <section id="lei-aplicavel" className="scroll-mt-28">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Lei Aplicável</h2>
                                    <p>
                                        Estes termos e condições são regidos e interpretados de acordo com as leis aplicáveis no território brasileiro, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais competentes do Brasil.
                                    </p>
                                </section>

                                <section id="contato" className="scroll-mt-28">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Contato</h3>
                                    <p>
                                        Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato com a Vexio Studio pelos canais oficiais disponíveis no site.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </main>

                    {/* Sidebar Navigation */}
                    <aside className="lg:w-72 order-1 lg:order-2">
                        <div className="lg:sticky lg:top-28 bg-white p-6 rounded-2xl shadow-sm border border-orange-100/50">
                            <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">Índice</h4>
                            <nav className="flex flex-col space-y-2">
                                <button onClick={() => scrollToSection('termos')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    1. Termos
                                </button>
                                <button onClick={() => scrollToSection('uso-licenca')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    2. Uso de Licença
                                </button>
                                <button onClick={() => scrollToSection('isencao')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    3. Isenção
                                </button>
                                <button onClick={() => scrollToSection('limitacoes')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    4. Limitações
                                </button>
                                <button onClick={() => scrollToSection('precisao')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    5. Precisão
                                </button>
                                <button onClick={() => scrollToSection('links')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    6. Links
                                </button>
                                <button onClick={() => scrollToSection('modificacoes')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    7. Modificações
                                </button>
                                <button onClick={() => scrollToSection('lei-aplicavel')} className="text-left text-sm text-gray-600 hover:text-vexio-orange hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors">
                                    8. Lei Aplicável
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

export default TermsOfUse;
