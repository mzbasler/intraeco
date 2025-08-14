import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useIsMobile } from "./ui/use-mobile";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Users,
  Settings,
  Search,
  Calendar,
  BarChart3,
  Monitor,
  Shield,
  Heart,
  Scale,
  Leaf,
  Mail,
  Gift,
  Rss,
  ShoppingCart
} from "lucide-react";

interface GenericSectionProps {
  section: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function GenericSection({ section, title, description, icon: Icon = FileText }: GenericSectionProps) {
  const isMobile = useIsMobile();

  const getSectionContent = () => {
    // Conteúdo baseado na seção específica
    switch (section) {
      case "setores-rh":
        return {
          items: [
            { name: "Lista de Colaboradores", type: "document", description: "Diretório completo de funcionários" },
            { name: "Organograma RH", type: "chart", description: "Estrutura do departamento" },
            { name: "Políticas de RH", type: "document", description: "Políticas e procedimentos" },
            { name: "Benefícios", type: "document", description: "Guia de benefícios da empresa" }
          ]
        };
      
      case "cipa-historico":
        return {
          items: [
            { name: "Histórico CIPA 2020-2024", type: "document", description: "Relatórios anuais" },
            { name: "Atas de Reuniões", type: "document", description: "Registros de reuniões" },
            { name: "Relatórios de Acidentes", type: "document", description: "Histórico de incidentes" }
          ]
        };
      
      case "sistemas-ssi":
        return {
          items: [
            { name: "Abrir Chamado", type: "link", description: "Solicitar suporte de TI" },
            { name: "Acompanhar Chamados", type: "link", description: "Status das solicitações" },
            { name: "FAQ - Problemas Comuns", type: "document", description: "Soluções rápidas" }
          ]
        };
      
      case "eventos-aniversarios":
        return {
          items: [
            { name: "Aniversários de Janeiro", type: "list", description: "12 colaboradores" },
            { name: "Aniversários de Fevereiro", type: "list", description: "8 colaboradores" },
            { name: "Próximos Eventos", type: "calendar", description: "Agenda de comemorações" }
          ]
        };
      
      case "blog-ecoblog":
        return {
          items: [
            { name: "Sustentabilidade na Empresa", type: "blog", description: "Publicado há 2 dias" },
            { name: "Inovações em Engenharia", type: "blog", description: "Publicado há 1 semana" },
            { name: "Meio Ambiente e Tecnologia", type: "blog", description: "Publicado há 2 semanas" }
          ]
        };
      
      default:
        return {
          items: [
            { name: "Documentos Gerais", type: "document", description: "Documentação da seção" },
            { name: "Procedimentos", type: "document", description: "Guias e procedimentos" },
            { name: "Formulários", type: "form", description: "Formulários relacionados" }
          ]
        };
    }
  };

  const getItemIcon = (type: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      document: FileText,
      chart: BarChart3,
      link: ExternalLink,
      list: Users,
      calendar: Calendar,
      blog: Rss,
      form: Settings
    };
    return iconMap[type] || FileText;
  };

  const content = getSectionContent();

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon className="h-6 w-6" />
          <h1>{title}</h1>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Área de conteúdo principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.items.map((item, index) => {
          const ItemIcon = getItemIcon(item.type);
          
          return (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className={isMobile ? "p-4" : "p-6"}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <ItemIcon className="h-5 w-5 text-blue-600" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  {item.type === 'document' && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                  {item.type === 'link' && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Seção de ações rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Novo Documento
            </Button>
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Informações adicionais */}
      <Card>
        <CardHeader>
          <CardTitle>Informações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-blue-600">24</div>
              <div className="text-sm text-muted-foreground">Documentos</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-green-600">12</div>
              <div className="text-sm text-muted-foreground">Atualizações</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-orange-600">3</div>
              <div className="text-sm text-muted-foreground">Pendências</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}