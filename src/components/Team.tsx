import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  Users, 
  Search, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  Filter,
  UserPlus
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Team() {
  const departments = [
    { id: "all", name: "Todos", count: 247 },
    { id: "engineering", name: "Engenharia", count: 45 },
    { id: "sales", name: "Vendas", count: 32 },
    { id: "marketing", name: "Marketing", count: 18 },
    { id: "hr", name: "Recursos Humanos", count: 12 },
    { id: "finance", name: "Financeiro", count: 15 },
    { id: "operations", name: "Operações", count: 28 },
    { id: "it", name: "TI", count: 22 }
  ];

  const employees = [
    {
      id: 1,
      name: "Ana Costa",
      role: "Gerente de RH",
      department: "Recursos Humanos",
      email: "ana.costa@ecoplan.com",
      phone: "(11) 99999-0001",
      location: "São Paulo - SP",
      joinDate: "2020-03-15",
      initials: "AC",
      status: "online"
    },
    {
      id: 2,
      name: "Carlos Lima",
      role: "Diretor Financeiro",
      department: "Financeiro",
      email: "carlos.lima@ecoplan.com",
      phone: "(11) 99999-0002",
      location: "São Paulo - SP",
      joinDate: "2018-01-10",
      initials: "CL",
      status: "online"
    },
    {
      id: 3,
      name: "Laura Oliveira",
      role: "Coordenadora de Marketing",
      department: "Marketing",
      email: "laura.oliveira@ecoplan.com",
      phone: "(11) 99999-0003",
      location: "Rio de Janeiro - RJ",
      joinDate: "2021-08-22",
      initials: "LO",
      status: "away"
    },
    {
      id: 4,
      name: "Pedro Santos",
      role: "Engenheiro Sênior",
      department: "Engenharia",
      email: "pedro.santos@ecoplan.com",
      phone: "(11) 99999-0004",
      location: "São Paulo - SP",
      joinDate: "2019-11-05",
      initials: "PS",
      status: "offline"
    },
    {
      id: 5,
      name: "Marina Silva",
      role: "Analista de Vendas",
      department: "Vendas",
      email: "marina.silva@ecoplan.com",
      phone: "(11) 99999-0005",
      location: "Belo Horizonte - MG",
      joinDate: "2022-02-14",
      initials: "MS",
      status: "online"
    },
    {
      id: 6,
      name: "Roberto Ferreira",
      role: "Especialista em TI",
      department: "TI",
      email: "roberto.ferreira@ecoplan.com",
      phone: "(11) 99999-0006",
      location: "São Paulo - SP",
      joinDate: "2020-09-30",
      initials: "RF",
      status: "online"
    }
  ];

  const organizationChart = [
    {
      department: "Diretoria",
      manager: "João Silva",
      role: "CEO",
      members: 3
    },
    {
      department: "Engenharia",
      manager: "Pedro Santos",
      role: "Gerente de Engenharia",
      members: 45
    },
    {
      department: "Vendas",
      manager: "Marcos Vieira",
      role: "Diretor de Vendas",
      members: 32
    },
    {
      department: "Marketing",
      manager: "Laura Oliveira",
      role: "Coordenadora de Marketing",
      members: 18
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Equipe Ecoplan</h1>
          <p className="text-muted-foreground">
            Conheça todos os colaboradores da empresa e suas informações de contato.
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Colaborador
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar colaboradores..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Departamento" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="away">Ausente</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Departments Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Departamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {departments.map((dept) => (
                <div key={dept.id} className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer">
                  <span className="text-sm">{dept.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {dept.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Organograma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {organizationChart.map((item, index) => (
                <div key={index} className="p-3 border rounded">
                  <h4 className="mb-1">{item.department}</h4>
                  <p className="text-sm text-muted-foreground">{item.manager}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <Badge variant="outline" className="text-xs mt-2">
                    {item.members} membros
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Employee Directory */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Diretório de Colaboradores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {employees.map((employee) => (
                  <div key={employee.id} className="p-4 border rounded hover:shadow-sm transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{employee.initials}</AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background ${
                          employee.status === 'online' ? 'bg-green-500' : 
                          employee.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{employee.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{employee.role}</p>
                        <Badge variant="outline" className="text-xs mb-3">
                          {employee.department}
                        </Badge>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span>{employee.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span>{employee.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span>{employee.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>Desde {employee.joinDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}