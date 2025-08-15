import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  Calendar, 
  Link, 
  BarChart3, 
  FolderOpen,
  Building2,
  Shield,
  Heart,
  Settings,
  FileCheck,
  Scale,
  Mail,
  Monitor,
  Gift,
  Search,
  Rss,
  ShoppingCart,
  Leaf,
  ChevronDown,
  ChevronRight,
  HandHeart
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useIsMobile } from "./ui/use-mobile";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobile?: boolean;
}

export function Sidebar({ activeSection, onSectionChange, isMobile = false }: SidebarProps) {
  const isScreenMobile = useIsMobile();
  const shouldShowMobileLayout = isMobile || isScreenMobile;
  
  const [openSections, setOpenSections] = useState<string[]>(['main']);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const mainNavigation = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      count: null
    },
    {
      id: "documents",
      label: "Documentos",
      icon: FileText,
      count: 12
    },
    {
      id: "team",
      label: "Equipe",
      icon: Users,
      count: null
    },
    {
      id: "calendar",
      label: "Calendário",
      icon: Calendar,
      count: 3
    }
  ];

  const navigationGroups = [
    {
      id: "empresa",
      label: "Empresa",
      icon: Building2,
      items: [
        { id: "empresa-info", label: "Informações Gerais", icon: FileText },
        { id: "empresa-perfil", label: "Perfil", icon: Users },
        { id: "empresa-sedes", label: "Sedes", icon: Building2 },
        { id: "empresa-clientes", label: "Clientes", icon: Users },
        { id: "empresa-organograma", label: "Organograma", icon: Users },
        { id: "empresa-brigada", label: "Organograma Brigada", icon: Shield },
        { id: "empresa-responsaveis", label: "Responsáveis", icon: Users }
      ]
    },
    {
      id: "rh",
      label: "Recursos Humanos",
      icon: Heart,
      items: [
        { id: "rh-colaboradores", label: "Colaboradores", icon: Users },
        { id: "rh-beneficios", label: "Benefícios", icon: Gift },
        { id: "rh-competencias", label: "Quadro de Competências", icon: FileCheck }
      ]
    },
    {
      id: "cipa",
      label: "CIPA",
      icon: Shield,
      items: [
        { id: "cipa-historico", label: "Histórico", icon: FileText },
        { id: "cipa-nr5", label: "NR-5", icon: Scale },
        { id: "cipa-equipe", label: "Equipe Atual", icon: Users },
        { id: "cipa-calendario", label: "Calendário de Reuniões", icon: Calendar },
        { id: "cipa-saude", label: "Saúde no Trabalho", icon: Heart },
        { id: "cipa-eleicoes", label: "Eleições", icon: Users }
      ]
    },
    {
      id: "inclusao",
      label: "Inclusão PcD",
      icon: Heart,
      items: [
        { id: "inclusao-info", label: "Programa de Inclusão", icon: Heart },
        { id: "inclusao-deficiencias", label: "Tipos de Deficiências", icon: Users },
        { id: "inclusao-relacionamento", label: "Como se Relacionar", icon: HandHeart },
        { id: "inclusao-legislacao", label: "Legislação", icon: Scale },
        { id: "inclusao-glossario", label: "Glossário", icon: FileText }
      ]
    },
    {
      id: "qualidade",
      label: "Sistema da Qualidade",
      icon: FileCheck,
      items: [
        { id: "qualidade-iso", label: "ISO 9001", icon: FileCheck },
        { id: "qualidade-certificados", label: "Certificados", icon: FileCheck },
        { id: "qualidade-politica", label: "Política", icon: FileText },
        { id: "qualidade-comunicados", label: "Comunicados", icon: MessageSquare },
        { id: "qualidade-manuais", label: "Manuais e Informativos", icon: FileText },
        { id: "qualidade-procedimentos", label: "Procedimentos", icon: Settings },
        { id: "qualidade-instrucoes", label: "Instruções de Trabalho", icon: FileText },
        { id: "qualidade-aspectos", label: "Aspectos e Impactos Ambientais", icon: Leaf },
        { id: "qualidade-riscos", label: "Perigos e Avaliação dos Riscos", icon: Shield }
      ]
    },
    {
      id: "compliance",
      label: "Programa Compliance",
      icon: Scale,
      items: [
        { id: "compliance-politica", label: "Política Anticorrupção", icon: Scale },
        { id: "compliance-lei", label: "Lei 12846", icon: FileText },
        { id: "compliance-decreto", label: "Decreto", icon: FileText },
        { id: "compliance-comunicado", label: "Comunicado", icon: MessageSquare },
        { id: "compliance-manual", label: "Manual", icon: FileText },
        { id: "compliance-instrucoes", label: "Instruções", icon: Settings },
        { id: "compliance-modelos", label: "Modelos", icon: FileText },
        { id: "compliance-ouvidoria", label: "Ouvidoria", icon: MessageSquare }
      ]
    },
    {
      id: "contratos",
      label: "Contratos",
      icon: FileText,
      items: [
        { id: "contratos-relacao", label: "Relação de Contratos", icon: FileText },
        { id: "contratos-skill", label: "Relação de Contratos Skill", icon: FileText }
      ]
    },
    {
      id: "informacoes",
      label: "Informações Gerais",
      icon: FileText,
      items: [
        { id: "info-usuarios", label: "Lista de Usuários", icon: Users },
        { id: "info-emails", label: "Lista de e-mail", icon: Mail },
        { id: "info-custos-eng", label: "Centro de Custos - Engenharia", icon: BarChart3 },
        { id: "info-custos-skill", label: "Centro de Custos - Skill", icon: BarChart3 },
        { id: "info-malotes", label: "Programação de Malotes", icon: Mail },
        { id: "info-fgv", label: "Índices FGV", icon: BarChart3 },
        { id: "info-igpm", label: "Índices IGP-M e INPC", icon: BarChart3 },
        { id: "info-pesquisas", label: "Pesquisas", icon: Search }
      ]
    },
    {
      id: "sistemas",
      label: "Sistemas",
      icon: Monitor,
      items: [
        { id: "sistemas-ssi", label: "SSI - Solicitações de TI", icon: Monitor },
        { id: "sistemas-ssg", label: "SSG - Serviços Gerais", icon: Settings },
        { id: "sistemas-acervo", label: "Pesquisa no Acervo", icon: Search },
        { id: "sistemas-timesheet", label: "TimeSheet Eletrônico", icon: Calendar }
      ]
    },
    {
      id: "eventos",
      label: "Eventos",
      icon: Calendar,
      items: [
        { id: "eventos-aniversarios", label: "Aniversariantes do mês", icon: Gift },
        { id: "eventos-relacao", label: "Relação de Eventos", icon: Calendar }
      ]
    },
    {
      id: "pesquisas",
      label: "Pesquisas de Satisfação",
      icon: Search,
      items: [
        { id: "pesquisas-internos", label: "Clientes Internos", icon: Users },
        { id: "pesquisas-externos", label: "Clientes Externos", icon: Users }
      ]
    },
    {
      id: "links",
      label: "Links",
      icon: Link,
      items: [
        { id: "links-legislacao", label: "Legislação e Normas", icon: Scale }
      ]
    },
    {
      id: "blog",
      label: "Blog",
      icon: Rss,
      items: [
        { id: "blog-ecoblog", label: "Ecoblog", icon: Rss }
      ]
    },
    {
      id: "classificados",
      label: "Classificados",
      icon: ShoppingCart,
      items: [
        { id: "classificados-anuncios", label: "Classificados", icon: ShoppingCart }
      ]
    },
    {
      id: "coleta",
      label: "Coleta Seletiva",
      icon: Leaf,
      items: [
        { id: "coleta-folders", label: "Folders", icon: FileText },
        { id: "coleta-modelos", label: "Modelos", icon: FileText }
      ]
    }
  ];

  const legacyItems = [
    {
      id: "reports",
      label: "Relatórios",
      icon: BarChart3,
      count: null
    },
    {
      id: "projects",
      label: "Projetos",
      icon: FolderOpen,
      count: 5
    }
  ];

  return (
    <div className={`bg-sidebar border-r border-sidebar-border flex flex-col ${
      shouldShowMobileLayout ? 'w-full h-full' : 'w-64'
    }`}>
      {/* Mobile Header */}
      {isMobile && (
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">Ecoplan</span>
              <span className="text-xs text-muted-foreground">Intranet Corporativa</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Content */}
      <div className={`flex-1 overflow-y-auto ${shouldShowMobileLayout ? 'p-4' : 'p-4'}`}>
        <nav className="space-y-2">
          {/* Main Dashboard */}
          <div className="space-y-1 mb-4">
            {mainNavigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  } ${shouldShowMobileLayout ? 'h-11 text-sm' : 'h-9 text-sm'}`}
                  onClick={() => onSectionChange(item.id)}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <Badge 
                      variant={isActive ? "secondary" : "outline"}
                      className={`text-xs ${
                        isActive ? "bg-sidebar-primary-foreground/20" : ""
                      }`}
                    >
                      {item.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          <Separator className="bg-sidebar-border my-4" />

          {/* Navigation Groups */}
          {navigationGroups.map((group) => {
            const GroupIcon = group.icon;
            const isOpen = openSections.includes(group.id);
            
            return (
              <Collapsible key={group.id} open={isOpen} onOpenChange={() => toggleSection(group.id)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                      shouldShowMobileLayout ? 'h-10 text-sm' : 'h-9 text-sm'
                    }`}
                  >
                    <GroupIcon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{group.label}</span>
                    {isOpen ? (
                      <ChevronDown className="h-3 w-3" />
                    ) : (
                      <ChevronRight className="h-3 w-3" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    const isActive = activeSection === item.id;
                    
                    return (
                      <Button
                        key={item.id}
                        variant={isActive ? "default" : "ghost"}
                        className={`w-full justify-start gap-2 ${
                          isActive 
                            ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        } ${shouldShowMobileLayout ? 'h-9 text-xs' : 'h-8 text-xs'}`}
                        onClick={() => onSectionChange(item.id)}
                      >
                        <ItemIcon className="h-3 w-3 shrink-0" />
                        <span className="flex-1 text-left">{item.label}</span>
                      </Button>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>
            );
          })}

          <Separator className="bg-sidebar-border my-4" />

          {/* Legacy Analytics */}
          <div className="space-y-1">
            <h3 className="text-xs font-medium text-sidebar-foreground/70 mb-2 px-2">
              Analytics
            </h3>
            {legacyItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  } ${shouldShowMobileLayout ? 'h-10 text-sm' : 'h-9 text-sm'}`}
                  onClick={() => onSectionChange(item.id)}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <Badge 
                      variant={isActive ? "secondary" : "outline"}
                      className={`text-xs ${
                        isActive ? "bg-sidebar-primary-foreground/20" : ""
                      }`}
                    >
                      {item.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Footer - Only show in desktop */}
      {!shouldShowMobileLayout && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 space-y-1">
            <p>© 2024 Ecoplan</p>
            <p>Versão 2.1.0</p>
          </div>
        </div>
      )}
    </div>
  );
}