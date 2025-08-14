import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useIsMobile } from "./ui/use-mobile";
import { 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp,
  Clock,
  MessageCircle,
  Phone,
  MessageSquare,
  Settings,
  HelpCircle,
  UsersIcon,
  Folder
} from "lucide-react";

export function Dashboard() {
  const isMobile = useIsMobile();

  const stats = [
    {
      title: "Colaboradores Ativos",
      value: "247",
      icon: Users,
      trend: "+12 este mês",
      color: "text-blue-600"
    },
    {
      title: "Documentos Atualizados",
      value: "156",
      icon: FileText,
      trend: "+8 esta semana",
      color: "text-green-600"
    },
    {
      title: "Próximos Eventos",
      value: "4",
      icon: Calendar,
      trend: "Esta semana",
      color: "text-orange-600"
    },
    {
      title: "Projetos Ativos",
      value: "23",
      icon: TrendingUp,
      trend: "87% concluídos",
      color: "text-purple-600"
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Nova Política de Home Office Aprovada",
      excerpt: "A partir de março, todos os colaboradores poderão trabalhar em regime híbrido...",
      date: "Há 2 horas",
      category: "RH",
      priority: "high"
    },
    {
      id: 2,
      title: "Lançamento do Novo Sistema de Gestão",
      excerpt: "O sistema ERP será implementado na próxima semana com treinamentos...",
      date: "Há 5 horas",
      category: "TI",
      priority: "medium"
    },
    {
      id: 3,
      title: "Resultados do Q4 2024",
      excerpt: "A Ecoplan atingiu 115% da meta estabelecida para o último trimestre...",
      date: "Ontem",
      category: "Financeiro",
      priority: "low"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Reunião Geral - Resultados Q1",
      date: "Amanhã, 14:00",
      location: "Auditório Principal",
      attendees: 45
    },
    {
      id: 2,
      title: "Treinamento - Novo Sistema",
      date: "Seg, 09:00",
      location: "Sala de Treinamento",
      attendees: 12
    },
    {
      id: 3,
      title: "Workshop de Inovação",
      date: "Ter, 15:30",
      location: "Sala de Reuniões B",
      attendees: 8
    }
  ];

  const quickLinks = [
    {
      id: "documents",
      title: "Documentos",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      description: "Acesse a biblioteca de documentos"
    },
    {
      id: "team",
      title: "Diretório",
      icon: UsersIcon,
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      description: "Diretório de colaboradores"
    },
    {
      id: "calendar",
      title: "Calendário",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      description: "Calendário corporativo"
    },
    {
      id: "settings",
      title: "Configurações",
      icon: Settings,
      color: "text-gray-600",
      bgColor: "bg-gray-50 hover:bg-gray-100",
      description: "Configurações do sistema"
    },
    {
      id: "projects",
      title: "Projetos",
      icon: Folder,
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      description: "Gestão de projetos"
    },
    {
      id: "help",
      title: "Ajuda",
      icon: HelpCircle,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      description: "Central de ajuda"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <h1 className="mb-2">Bem-vindo de volta, João!</h1>
        <p className="text-muted-foreground">
          Aqui está um resumo das atividades da Ecoplan hoje.
        </p>
      </div>

      {/* Stats Grid - Mobile: 2 cols, Desktop: 4 cols */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className={isMobile ? "p-4" : "p-6"}>
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <p className={`text-muted-foreground mb-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {stat.title}
                    </p>
                    <p className={`font-semibold ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                      {stat.value}
                    </p>
                    <p className={`text-muted-foreground mt-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      {stat.trend}
                    </p>
                  </div>
                  <Icon className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} ${stat.color} shrink-0`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* News and Events - Mobile: Stacked, Desktop: Side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Recent News */}
        <Card>
          <CardHeader className={`flex flex-row items-center justify-between ${isMobile ? 'p-4 pb-3' : ''}`}>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Notícias Recentes
            </CardTitle>
            <Button variant="outline" size="sm">
              Ver todas
            </Button>
          </CardHeader>
          <CardContent className={`space-y-4 ${isMobile ? 'p-4 pt-0' : ''}`}>
            {recentNews.map((news) => (
              <div key={news.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant={news.priority === 'high' ? 'destructive' : news.priority === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {news.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{news.date}</span>
                </div>
                <h4 className={`mb-1 ${isMobile ? 'text-sm' : ''}`}>{news.title}</h4>
                <p className="text-sm text-muted-foreground">{news.excerpt}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className={`flex flex-row items-center justify-between ${isMobile ? 'p-4 pb-3' : ''}`}>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Próximos Eventos
            </CardTitle>
            <Button variant="outline" size="sm">
              Ver calendário
            </Button>
          </CardHeader>
          <CardContent className={`space-y-4 ${isMobile ? 'p-4 pt-0' : ''}`}>
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                <h4 className={`mb-1 ${isMobile ? 'text-sm' : ''}`}>{event.title}</h4>
                <div className={`flex items-center gap-2 md:gap-4 text-sm text-muted-foreground ${
                  isMobile ? 'flex-wrap' : ''
                }`}>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.date}
                  </span>
                  <span className={isMobile ? 'text-xs' : ''}>{event.location}</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {event.attendees}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Links and Need Assistance - Mobile: Stacked, Desktop: Side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Links Rápidos */}
        <Card>
          <CardHeader className={isMobile ? 'p-4 pb-3' : ''}>
            <CardTitle>Links Rápidos</CardTitle>
          </CardHeader>
          <CardContent className={isMobile ? 'p-4 pt-0' : ''}>
            <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-3'}`}>
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    className={`flex items-center gap-2 md:gap-3 ${isMobile ? 'p-3' : 'p-4'} rounded-lg border transition-colors ${link.bgColor} hover:shadow-sm`}
                  >
                    <Icon className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} ${link.color}`} />
                    <span className={`font-medium ${isMobile ? 'text-sm' : ''}`}>{link.title}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Precisa de Ajuda? */}
        <Card>
          <CardHeader className={isMobile ? 'p-4 pb-3' : ''}>
            <CardTitle>Precisa de Ajuda?</CardTitle>
          </CardHeader>
          <CardContent className={`text-center ${isMobile ? 'p-4 pt-0' : ''}`}>
            <div className={isMobile ? 'mb-4' : 'mb-6'}>
              <div className={`inline-flex items-center justify-center ${
                isMobile ? 'w-12 h-12 mb-3' : 'w-16 h-16 mb-4'
              } rounded-full bg-teal-100`}>
                <Phone className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} text-teal-600`} />
              </div>
              <h3 className={`mb-2 ${isMobile ? 'text-base' : ''}`}>Suporte de TI</h3>
              <p className="text-muted-foreground text-sm">
                Tendo problemas técnicos? Entre em contato com nossa equipe de suporte.
              </p>
            </div>
            <div className={`grid grid-cols-2 ${isMobile ? 'gap-2' : 'gap-3'}`}>
              <Button variant="outline" className={`flex items-center gap-2 ${isMobile ? 'text-sm px-3' : ''}`}>
                <Phone className="h-4 w-4" />
                Ligar
              </Button>
              <Button className={`flex items-center gap-2 bg-teal-600 hover:bg-teal-700 ${
                isMobile ? 'text-sm px-3' : ''
              }`}>
                <MessageSquare className="h-4 w-4" />
                Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}