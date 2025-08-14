import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  Download,
  Filter,
  Calendar
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

export function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState("last-30-days");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // Dados mockados para gráficos
  const salesData = [
    { month: "Jan", vendas: 65000, meta: 60000 },
    { month: "Fev", vendas: 58000, meta: 62000 },
    { month: "Mar", vendas: 72000, meta: 65000 },
    { month: "Abr", vendas: 68000, meta: 67000 },
    { month: "Mai", vendas: 75000, meta: 70000 },
    { month: "Jun", vendas: 82000, meta: 72000 },
    { month: "Jul", vendas: 78000, meta: 75000 },
    { month: "Ago", vendas: 85000, meta: 78000 }
  ];

  const revenueData = [
    { month: "Jan", receita: 120000, lucro: 25000 },
    { month: "Fev", receita: 135000, lucro: 32000 },
    { month: "Mar", receita: 145000, lucro: 38000 },
    { month: "Abr", receita: 152000, lucro: 42000 },
    { month: "Mai", receita: 168000, lucro: 48000 },
    { month: "Jun", receita: 175000, lucro: 52000 },
    { month: "Jul", receita: 182000, lucro: 55000 },
    { month: "Ago", receita: 195000, lucro: 62000 }
  ];

  const departmentData = [
    { name: "Vendas", value: 35, color: "#3b82f6" },
    { name: "Marketing", value: 25, color: "#10b981" },
    { name: "Engenharia", value: 20, color: "#f59e0b" },
    { name: "RH", value: 12, color: "#ef4444" },
    { name: "Outros", value: 8, color: "#8b5cf6" }
  ];

  const projectsData = [
    { month: "Jan", concluidos: 8, andamento: 12 },
    { month: "Fev", concluidos: 12, andamento: 15 },
    { month: "Mar", concluidos: 15, andamento: 18 },
    { month: "Abr", concluidos: 18, andamento: 14 },
    { month: "Mai", concluidos: 22, andamento: 16 },
    { month: "Jun", concluidos: 25, andamento: 19 },
    { month: "Jul", concluidos: 28, andamento: 21 },
    { month: "Ago", concluidos: 32, andamento: 23 }
  ];

  const kpiData = [
    {
      title: "Receita Total",
      value: "R$ 1.95M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs. mês anterior"
    },
    {
      title: "Novos Clientes",
      value: "247",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "este mês"
    },
    {
      title: "Vendas Realizadas",
      value: "1,429",
      change: "-2.1%",
      trend: "down",
      icon: ShoppingCart,
      description: "vs. mês anterior"
    },
    {
      title: "Taxa de Conversão",
      value: "24.8%",
      change: "+4.3%",
      trend: "up",
      icon: Activity,
      description: "vs. período anterior"
    }
  ];

  const topPerformers = [
    { name: "Maria Santos", department: "Vendas", metric: "R$ 125K", performance: 95 },
    { name: "João Silva", department: "Engenharia", metric: "8 Projetos", performance: 92 },
    { name: "Ana Costa", department: "Marketing", metric: "45% CTR", performance: 88 },
    { name: "Carlos Lima", department: "Financeiro", metric: "98% Accuracy", performance: 85 },
    { name: "Laura Oliveira", department: "Vendas", metric: "R$ 98K", performance: 82 }
  ];

  const recentReports = [
    {
      id: 1,
      title: "Relatório Financeiro Q3 2024",
      type: "Financeiro",
      date: "15/08/2024",
      author: "Carlos Lima",
      status: "Finalizado"
    },
    {
      id: 2,
      title: "Análise de Performance de Vendas",
      type: "Comercial",
      date: "12/08/2024",
      author: "Marina Silva",
      status: "Em Revisão"
    },
    {
      id: 3,
      title: "Métricas de Satisfação do Cliente",
      type: "Atendimento",
      date: "10/08/2024",
      author: "Ana Costa",
      status: "Finalizado"
    },
    {
      id: 4,
      title: "Produtividade da Equipe de Engenharia",
      type: "Operacional",
      date: "08/08/2024",
      author: "Pedro Santos",
      status: "Rascunho"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Relatórios e Analytics</h1>
          <p className="text-muted-foreground">
            Acompanhe as métricas de performance e indicadores da empresa.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button>Novo Relatório</Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Últimos 7 dias</SelectItem>
                <SelectItem value="last-30-days">Últimos 30 dias</SelectItem>
                <SelectItem value="last-90-days">Últimos 90 dias</SelectItem>
                <SelectItem value="this-year">Este ano</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os departamentos</SelectItem>
                <SelectItem value="sales">Vendas</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="engineering">Engenharia</SelectItem>
                <SelectItem value="hr">RH</SelectItem>
                <SelectItem value="finance">Financeiro</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Mais Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground mb-1">{kpi.title}</p>
                    <p className="text-2xl font-semibold">{kpi.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {kpi.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-600" />
                      )}
                      <span className={`text-sm ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {kpi.change}
                      </span>
                      <span className="text-sm text-muted-foreground">{kpi.description}</span>
                    </div>
                  </div>
                  <Icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="financial" className="space-y-4">
        <TabsList>
          <TabsTrigger value="financial">Financeiro</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Receita e Lucro Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`R$ ${value.toLocaleString()}`, ""]} />
                    <Legend />
                    <Area type="monotone" dataKey="receita" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                    <Area type="monotone" dataKey="lucro" stackId="1" stroke="#10b981" fill="#10b981" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Departamento</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance de Vendas vs Metas</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${value.toLocaleString()}`, ""]} />
                  <Legend />
                  <Bar dataKey="vendas" fill="#3b82f6" name="Vendas Realizadas" />
                  <Bar dataKey="meta" fill="#e5e7eb" name="Meta" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Projetos Concluídos vs Em Andamento</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={projectsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="concluidos" stroke="#10b981" strokeWidth={2} name="Concluídos" />
                  <Line type="monotone" dataKey="andamento" stroke="#f59e0b" strokeWidth={2} name="Em Andamento" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <h4>{performer.name}</h4>
                      <p className="text-sm text-muted-foreground">{performer.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{performer.metric}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full">
                          <div 
                            className="h-2 bg-primary rounded-full" 
                            style={{ width: `${performer.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{performer.performance}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Relatórios Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h4>{report.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>{report.type}</span>
                    <span>{report.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {report.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={
                      report.status === "Finalizado" ? "default" : 
                      report.status === "Em Revisão" ? "secondary" : "outline"
                    }
                  >
                    {report.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}