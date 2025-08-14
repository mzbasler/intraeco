import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { Documents } from "./components/Documents";
import { Team } from "./components/Team";
import { Calendar } from "./components/Calendar";
import { Reports } from "./components/Reports";
import { Projects } from "./components/Projects";
import { Company } from "./components/Company";
import { GenericSection } from "./components/GenericSection";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { useIsMobile } from "./components/ui/use-mobile";
import { Link, Menu } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      // Main
      dashboard: "Dashboard",
      
      // Empresa
      "empresa-info": "Informações Gerais",
      "empresa-perfil": "Perfil da Empresa",
      "empresa-sedes": "Sedes e Filiais",
      "empresa-clientes": "Clientes",
      "empresa-organograma": "Organograma",
      "empresa-brigada": "Organograma Brigada",
      "empresa-responsaveis": "Responsáveis",
      "empresa-atestados": "Atestados Técnicos",
      "empresa-papelaria": "Papelaria",
      
      // Setores
      "setores-rh": "Recursos Humanos",
      
      // CIPA
      "cipa-historico": "Histórico CIPA",
      "cipa-nr5": "NR-5",
      "cipa-equipe": "Equipe Atual CIPA",
      "cipa-calendario": "Calendário CIPA",
      "cipa-saude": "Saúde no Trabalho",
      "cipa-eleicoes": "Eleições CIPA",
      
      // Inclusão PcD
      "inclusao-info": "Inclusão PcD",
      "inclusao-deficiencias": "Deficiências",
      "inclusao-relacionamento": "Relacionamento PcD",
      "inclusao-legislacao": "Legislação PcD",
      "inclusao-glossario": "Glossário PcD",
      
      // Sistema da Qualidade
      "qualidade-iso": "ISO 9001",
      "qualidade-certificados": "Certificados",
      "qualidade-politica": "Política da Qualidade",
      "qualidade-comunicados": "Comunicados",
      "qualidade-manuais": "Manuais e Informativos",
      "qualidade-procedimentos": "Procedimentos",
      "qualidade-instrucoes": "Instruções de Trabalho",
      "qualidade-modelos": "Modelos",
      "qualidade-aspectos": "Aspectos Ambientais",
      "qualidade-riscos": "Avaliação de Riscos",
      
      // Compliance
      "compliance-politica": "Política Anticorrupção",
      "compliance-lei": "Lei 12846",
      "compliance-decreto": "Decreto",
      "compliance-comunicado": "Comunicado Compliance",
      "compliance-manual": "Manual Compliance",
      "compliance-instrucoes": "Instruções Compliance",
      "compliance-modelos": "Modelos Compliance",
      "compliance-ouvidoria": "Ouvidoria",
      
      // Contratos
      "contratos-relacao": "Relação de Contratos",
      "contratos-skill": "Contratos Skill",
      
      // Informações Gerais
      "info-usuarios": "Lista de Usuários",
      "info-emails": "Lista de E-mails",
      "info-custos-eng": "Centro de Custos - Engenharia",
      "info-custos-skill": "Centro de Custos - Skill",
      "info-malotes": "Programação de Malotes",
      "info-fgv": "Índices FGV",
      "info-igpm": "Índices IGP-M e INPC",
      "info-pesquisas": "Pesquisas",
      
      // Sistemas
      "sistemas-ssi": "SSI - Suporte TI",
      "sistemas-ssg": "SSG - Serviços Gerais",
      "sistemas-acervo": "Pesquisa no Acervo",
      "sistemas-timesheet": "TimeSheet Eletrônico",
      
      // Eventos
      "eventos-aniversarios": "Aniversariantes",
      "eventos-relacao": "Relação de Eventos",
      
      // Pesquisas
      "pesquisas-internos": "Pesquisa - Clientes Internos",
      "pesquisas-externos": "Pesquisa - Clientes Externos",
      
      // Links
      "links-legislacao": "Legislação e Normas",
      
      // Blog
      "blog-ecoblog": "Ecoblog",
      
      // Classificados
      "classificados-anuncios": "Classificados",
      
      // Coleta Seletiva
      "coleta-folders": "Folders Coleta Seletiva",
      "coleta-modelos": "Modelos Coleta Seletiva",
      
      // Legacy
      documents: "Documentos",
      team: "Equipe",
      news: "Notícias",
      calendar: "Calendário",
      tools: "Ferramentas",
      reports: "Relatórios",
      projects: "Projetos"
    };
    return titles[section] || "Dashboard";
  };

  const getSectionDescription = (section: string) => {
    const descriptions: { [key: string]: string } = {
      "empresa-info": "Informações institucionais e dados gerais da Ecoplan",
      "empresa-perfil": "Conheça a trajetória e perfil institucional da empresa",
      "empresa-sedes": "Nossas unidades e escritórios pelo país",
      "empresa-clientes": "Portfólio de clientes e principais parcerias",
      "empresa-organograma": "Estrutura organizacional da empresa",
      "empresa-brigada": "Estrutura da brigada de incêndio e emergência",
      "empresa-responsaveis": "Principais responsáveis por área na empresa",
      "empresa-atestados": "Templates e modelos de atestados técnicos",
      "empresa-papelaria": "Templates e modelos de papelaria institucional",
      "setores-rh": "Gestão de recursos humanos e colaboradores",
      "cipa-historico": "Histórico e registros da CIPA",
      "sistemas-ssi": "Sistema de solicitações de suporte de TI",
      "eventos-aniversarios": "Aniversariantes do mês e comemorações",
      "blog-ecoblog": "Blog corporativo com artigos e novidades",
      // Adicione mais conforme necessário
    };
    return descriptions[section] || "Seção do sistema de intranet";
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const renderContent = () => {
    // Seções da Empresa
    if (activeSection.startsWith("empresa-")) {
      return <Company section={activeSection} />;
    }
    
    // Seções específicas com componentes próprios
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "documents":
        return <Documents />;
      case "team":
        return <Team />;
      case "news":
        return <NewsSection />;
      case "calendar":
        return <Calendar />;
      case "tools":
        return <ToolsSection />;
      case "reports":
        return <Reports />;
      case "projects":
        return <Projects />;
      
      // Todas as outras seções usam o componente genérico
      default:
        return (
          <GenericSection 
            section={activeSection}
            title={getSectionTitle(activeSection)}
            description={getSectionDescription(activeSection)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentSection={getSectionTitle(activeSection)}
        showMobileMenuButton={isMobile}
        onMobileMenuClick={() => setMobileMenuOpen(true)}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
        )}

        {/* Mobile Navigation Drawer */}
        {isMobile && (
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetContent side="left" className="p-0 w-80">
              <Sidebar 
                activeSection={activeSection} 
                onSectionChange={handleSectionChange}
                isMobile={true}
              />
            </SheetContent>
          </Sheet>
        )}

        {/* Main Content */}
        <main className={`flex-1 ${isMobile ? 'p-4' : 'p-6'}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function NewsSection() {
  const isMobile = useIsMobile();
  
  const news = [
    {
      id: 1,
      title: "Nova Política de Home Office Aprovada",
      content: "A partir de março de 2024, todos os colaboradores da Ecoplan poderão trabalhar em regime híbrido, com até 3 dias por semana em home office. Esta nova política visa aumentar a flexibilidade e melhorar o equilíbrio entre vida pessoal e profissional.",
      author: "Ana Costa - RH",
      date: "15/01/2024",
      category: "Políticas"
    },
    {
      id: 2,
      title: "Lançamento do Novo Sistema de Gestão",
      content: "O novo sistema ERP será implementado na próxima semana. Todos os colaboradores receberão treinamento adequado. O sistema promete otimizar nossos processos e melhorar a eficiência operacional.",
      author: "Roberto Ferreira - TI",
      date: "12/01/2024",
      category: "Tecnologia"
    },
    {
      id: 3,
      title: "Resultados Excelentes do Q4 2024",
      content: "A Ecoplan atingiu 115% da meta estabelecida para o último trimestre de 2024. Este resultado excepcional reflete o comprometimento de toda a equipe e a eficácia de nossas estratégias de mercado.",
      author: "Carlos Lima - Financeiro",
      date: "10/01/2024",
      category: "Resultados"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="mb-2">Notícias e Comunicados</h1>
        <p className="text-muted-foreground">
          Fique atualizado com as últimas notícias e comunicados da empresa.
        </p>
      </div>
      <div className="space-y-4">
        {news.map((item) => (
          <Card key={item.id}>
            <CardHeader className={isMobile ? "p-4" : ""}>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="mb-2">{item.title}</CardTitle>
                  <div className={`flex items-center gap-2 md:gap-4 text-sm text-muted-foreground ${isMobile ? 'flex-wrap' : ''}`}>
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className={isMobile ? "p-4 pt-0" : ""}>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ToolsSection() {
  const isMobile = useIsMobile();
  
  const tools = [
    { name: "Portal RH", description: "Gestão de recursos humanos", url: "#" },
    { name: "Sistema Financeiro", description: "Controle financeiro", url: "#" },
    { name: "CRM", description: "Gestão de relacionamento com clientes", url: "#" },
    { name: "Helpdesk TI", description: "Suporte técnico", url: "#" },
    { name: "Sistema de Projetos", description: "Gerenciamento de projetos", url: "#" },
    { name: "Portal do Cliente", description: "Acesso para clientes", url: "#" }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2">
        <Link className="h-6 w-6" />
        <h1>Ferramentas e Links Úteis</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className={isMobile ? "p-4" : "p-6"}>
              <h3 className="mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}