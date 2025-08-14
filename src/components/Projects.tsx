import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Folder, 
  Plus,
  Calendar,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
  Filter,
  Search,
  Target,
  TrendingUp
} from "lucide-react";
import { Input } from "./ui/input";

interface Project {
  id: number;
  name: string;
  description: string;
  status: "planning" | "active" | "on-hold" | "completed" | "cancelled";
  priority: "low" | "medium" | "high" | "critical";
  progress: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  manager: string;
  team: Array<{
    name: string;
    role: string;
    avatar: string;
  }>;
  tasks: {
    total: number;
    completed: number;
    pending: number;
  };
  client?: string;
}

export function Projects() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects: Project[] = [
    {
      id: 1,
      name: "Sistema de Gestão Integrada",
      description: "Desenvolvimento de novo ERP para otimizar processos internos da empresa",
      status: "active",
      priority: "high",
      progress: 75,
      startDate: "2024-01-15",
      endDate: "2024-09-30",
      budget: 850000,
      spent: 620000,
      manager: "Pedro Santos",
      client: "Ecoplan Interna",
      team: [
        { name: "Pedro Santos", role: "Tech Lead", avatar: "PS" },
        { name: "Ana Silva", role: "Developer", avatar: "AS" },
        { name: "Carlos Lima", role: "Analyst", avatar: "CL" },
        { name: "Maria Costa", role: "UX Designer", avatar: "MC" }
      ],
      tasks: { total: 45, completed: 34, pending: 11 }
    },
    {
      id: 2,
      name: "Portal do Cliente ABC Corp",
      description: "Desenvolvimento de portal personalizado para gestão de contratos e documentos",
      status: "active",
      priority: "critical",
      progress: 45,
      startDate: "2024-03-01",
      endDate: "2024-08-15",
      budget: 320000,
      spent: 185000,
      manager: "Laura Oliveira",
      client: "ABC Corp",
      team: [
        { name: "Laura Oliveira", role: "Project Manager", avatar: "LO" },
        { name: "Roberto Silva", role: "Full Stack", avatar: "RS" },
        { name: "Julia Santos", role: "Frontend", avatar: "JS" }
      ],
      tasks: { total: 28, completed: 12, pending: 16 }
    },
    {
      id: 3,
      name: "Migração Cloud Infrastructure",
      description: "Migração completa da infraestrutura para AWS com implementação de DevOps",
      status: "planning",
      priority: "medium",
      progress: 15,
      startDate: "2024-06-01",
      endDate: "2024-12-31",
      budget: 450000,
      spent: 75000,
      manager: "Roberto Ferreira",
      client: "Ecoplan Interna",
      team: [
        { name: "Roberto Ferreira", role: "DevOps Lead", avatar: "RF" },
        { name: "Diego Lima", role: "Cloud Architect", avatar: "DL" },
        { name: "Sofia Costa", role: "Security Specialist", avatar: "SC" }
      ],
      tasks: { total: 52, completed: 8, pending: 44 }
    },
    {
      id: 4,
      name: "App Mobile Vendas",
      description: "Aplicativo móvel para equipe de vendas com CRM integrado",
      status: "completed",
      priority: "medium",
      progress: 100,
      startDate: "2023-10-01",
      endDate: "2024-02-28",
      budget: 280000,
      spent: 265000,
      manager: "Marina Silva",
      client: "Ecoplan Interna",
      team: [
        { name: "Marina Silva", role: "Mobile Lead", avatar: "MS" },
        { name: "Felipe Santos", role: "iOS Developer", avatar: "FS" },
        { name: "Camila Lima", role: "Android Developer", avatar: "CML" }
      ],
      tasks: { total: 35, completed: 35, pending: 0 }
    },
    {
      id: 5,
      name: "Dashboard Analytics XYZ",
      description: "Sistema de business intelligence para análise de dados de vendas",
      status: "on-hold",
      priority: "low",
      progress: 30,
      startDate: "2024-02-15",
      endDate: "2024-10-30",
      budget: 180000,
      spent: 54000,
      manager: "João Silva",
      client: "XYZ Enterprises",
      team: [
        { name: "João Silva", role: "Data Analyst", avatar: "JS" },
        { name: "Fernanda Costa", role: "BI Developer", avatar: "FC" }
      ],
      tasks: { total: 22, completed: 7, pending: 15 }
    }
  ];

  const statusConfig = {
    planning: { label: "Planejamento", color: "bg-blue-500", variant: "secondary" as const },
    active: { label: "Ativo", color: "bg-green-500", variant: "default" as const },
    "on-hold": { label: "Pausado", color: "bg-yellow-500", variant: "secondary" as const },
    completed: { label: "Concluído", color: "bg-gray-500", variant: "outline" as const },
    cancelled: { label: "Cancelado", color: "bg-red-500", variant: "destructive" as const }
  };

  const priorityConfig = {
    low: { label: "Baixa", color: "text-green-600" },
    medium: { label: "Média", color: "text-yellow-600" },
    high: { label: "Alta", color: "text-orange-600" },
    critical: { label: "Crítica", color: "text-red-600" }
  };

  const filteredProjects = projects.filter(project => {
    if (selectedStatus !== "all" && project.status !== selectedStatus) return false;
    if (selectedPriority !== "all" && project.priority !== selectedPriority) return false;
    return true;
  });

  const projectStats = {
    total: projects.length,
    active: projects.filter(p => p.status === "active").length,
    completed: projects.filter(p => p.status === "completed").length,
    onHold: projects.filter(p => p.status === "on-hold").length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0)
  };

  const upcomingDeadlines = projects
    .filter(p => p.status === "active")
    .sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Gestão de Projetos</h1>
          <p className="text-muted-foreground">
            Acompanhe o progresso e gerencie todos os projetos da empresa.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Projeto
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Total de Projetos</p>
                <p className="text-2xl font-semibold">{projectStats.total}</p>
              </div>
              <Folder className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Projetos Ativos</p>
                <p className="text-2xl font-semibold">{projectStats.active}</p>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Orçamento Total</p>
                <p className="text-2xl font-semibold">R$ {(projectStats.totalBudget / 1000000).toFixed(1)}M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1">Concluídos</p>
                <p className="text-2xl font-semibold">{projectStats.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar projetos..." className="pl-10" />
              </div>
            </div>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="planning">Planejamento</SelectItem>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="on-hold">Pausado</SelectItem>
                <SelectItem value="completed">Concluído</SelectItem>
                <SelectItem value="cancelled">Cancelado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Prioridade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="low">Baixa</SelectItem>
                <SelectItem value="medium">Média</SelectItem>
                <SelectItem value="high">Alta</SelectItem>
                <SelectItem value="critical">Crítica</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                Lista
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lista de Projetos */}
        <div className="lg:col-span-3">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="mb-2">{project.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={statusConfig[project.status].variant}>
                        {statusConfig[project.status].label}
                      </Badge>
                      <Badge variant="outline" className={priorityConfig[project.priority].color}>
                        {priorityConfig[project.priority].label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Progresso</span>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Orçamento</p>
                        <p className="font-medium">R$ {(project.budget / 1000).toFixed(0)}K</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Gasto</p>
                        <p className="font-medium">R$ {(project.spent / 1000).toFixed(0)}K</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-muted-foreground text-sm mb-2">Equipe</p>
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 4).map((member, index) => (
                          <Avatar key={index} className="h-8 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs">{member.avatar}</AvatarFallback>
                          </Avatar>
                        ))}
                        {project.team.length > 4 && (
                          <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                            <span className="text-xs">+{project.team.length - 4}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.endDate).toLocaleDateString('pt-BR')}
                      </span>
                      <span>{project.tasks.completed}/{project.tasks.total} tarefas</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Lista de Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border rounded">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4>{project.name}</h4>
                          <Badge variant={statusConfig[project.status].variant}>
                            {statusConfig[project.status].label}
                          </Badge>
                          <Badge variant="outline" className={priorityConfig[project.priority].color}>
                            {priorityConfig[project.priority].label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Gerente: {project.manager}</span>
                          <span>{project.team.length} membros</span>
                          <span>R$ {(project.spent / 1000).toFixed(0)}K / R$ {(project.budget / 1000).toFixed(0)}K</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-32 mb-2">
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <p className="text-sm font-medium">{project.progress}%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Próximos Prazos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Próximos Prazos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDeadlines.map((project) => (
                <div key={project.id} className="p-3 border rounded">
                  <h4 className="mb-1">{project.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(project.endDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <Progress value={project.progress} className="h-1 mt-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resumo de Orçamento */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo Financeiro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Orçamento Total</span>
                <span className="font-medium">R$ {(projectStats.totalBudget / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Gasto</span>
                <span className="font-medium">R$ {(projectStats.totalSpent / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Disponível</span>
                <span className="font-medium text-green-600">
                  R$ {((projectStats.totalBudget - projectStats.totalSpent) / 1000000).toFixed(1)}M
                </span>
              </div>
              <Progress 
                value={(projectStats.totalSpent / projectStats.totalBudget) * 100} 
                className="h-2 mt-2" 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}