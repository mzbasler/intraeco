import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Users,
  Filter
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: "meeting" | "training" | "holiday" | "deadline" | "presentation";
  location?: string;
  attendees?: number;
  description?: string;
}

const eventTypes = {
  meeting: { label: "Reunião", color: "bg-blue-500", textColor: "text-blue-700" },
  training: { label: "Treinamento", color: "bg-green-500", textColor: "text-green-700" },
  holiday: { label: "Feriado", color: "bg-red-500", textColor: "text-red-700" },
  deadline: { label: "Prazo", color: "bg-orange-500", textColor: "text-orange-700" },
  presentation: { label: "Apresentação", color: "bg-purple-500", textColor: "text-purple-700" }
};

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "list">("month");
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Reunião Geral - Resultados Q1",
      date: "2024-08-02",
      time: "14:00",
      type: "meeting",
      location: "Auditório Principal",
      attendees: 45,
      description: "Apresentação dos resultados do primeiro trimestre e metas para Q2."
    },
    {
      id: 2,
      title: "Treinamento - Novo Sistema ERP",
      date: "2024-08-05",
      time: "09:00",
      type: "training",
      location: "Sala de Treinamento A",
      attendees: 12,
      description: "Capacitação para uso do novo sistema de gestão empresarial."
    },
    {
      id: 3,
      title: "Apresentação Cliente ABC",
      date: "2024-08-08",
      time: "15:30",
      type: "presentation",
      location: "Sala de Reuniões B",
      attendees: 8,
      description: "Apresentação da proposta comercial para o cliente ABC."
    },
    {
      id: 4,
      title: "Independência do Brasil",
      date: "2024-09-07",
      time: "00:00",
      type: "holiday",
      description: "Feriado nacional - Independência do Brasil"
    },
    {
      id: 5,
      title: "Entrega Projeto X",
      date: "2024-08-15",
      time: "17:00",
      type: "deadline",
      description: "Prazo final para entrega do Projeto X"
    },
    {
      id: 6,
      title: "Workshop de Inovação",
      date: "2024-08-12",
      time: "10:00",
      type: "training",
      location: "Auditório Principal",
      attendees: 25,
      description: "Workshop sobre metodologias ágeis e inovação."
    }
  ]);

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getEventsForDate = (date: string) => {
    return events.filter(event => event.date === date);
  };

  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    const dateStr = selectedDate.toISOString().split('T')[0];
    return getEventsForDate(dateStr);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const dayEvents = getEventsForDate(dateStr);
      const isSelected = selectedDate && formatDate(selectedDate) === dateStr;
      const isToday = formatDate(new Date()) === dateStr;

      days.push(
        <div
          key={day}
          className={`h-24 border border-border p-1 cursor-pointer hover:bg-muted/50 ${
            isSelected ? "bg-primary/10 border-primary" : ""
          } ${isToday ? "bg-accent" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`mb-1 ${isToday ? "font-medium text-primary" : ""}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 rounded truncate ${eventTypes[event.type].color} text-white`}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-muted-foreground">
                +{dayEvents.length - 3} mais
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Calendário Corporativo</h1>
          <p className="text-muted-foreground">
            Acompanhe todos os eventos, reuniões e datas importantes da empresa.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "month" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("month")}
          >
            Mês
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            Lista
          </Button>
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              <Plus className="h-4 w-4" />
              Novo Evento
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Novo Evento</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" placeholder="Nome do evento" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Data</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="time">Horário</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="type">Tipo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(eventTypes).map(([key, type]) => (
                        <SelectItem key={key} value={key}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Local</Label>
                  <Input id="location" placeholder="Local do evento" />
                </div>
                <div>
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" placeholder="Descrição do evento" />
                </div>
                <Button className="w-full">Adicionar Evento</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {viewMode === "month" ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar Grid */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
                    Hoje
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-0">
                  {/* Week day headers */}
                  {weekDays.map((day) => (
                    <div key={day} className="p-2 text-center font-medium text-muted-foreground border border-border">
                      {day}
                    </div>
                  ))}
                  {/* Calendar days */}
                  {renderCalendarGrid()}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Event Types Legend */}
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {Object.entries(eventTypes).map(([key, type]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded ${type.color}`}></div>
                    <span className="text-sm">{type.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Selected Date Events */}
            {selectedDate && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedDate.toLocaleDateString('pt-BR', { 
                      day: '2-digit', 
                      month: 'long',
                      year: 'numeric'
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {getEventsForSelectedDate().length > 0 ? (
                    <div className="space-y-3">
                      {getEventsForSelectedDate().map((event) => (
                        <div key={event.id} className="p-3 border rounded">
                          <div className="flex items-start justify-between mb-2">
                            <h4>{event.title}</h4>
                            <Badge variant="outline" className={eventTypes[event.type].textColor}>
                              {eventTypes[event.type].label}
                            </Badge>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-3 w-3" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            {event.attendees && (
                              <div className="flex items-center gap-2">
                                <Users className="h-3 w-3" />
                                <span>{event.attendees} participantes</span>
                              </div>
                            )}
                          </div>
                          {event.description && (
                            <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">Nenhum evento neste dia.</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-2 border rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded ${eventTypes[event.type].color}`}></div>
                      <span className="text-sm font-medium">{event.title}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('pt-BR')} às {event.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* List View */
        <Card>
          <CardHeader>
            <CardTitle>Lista de Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <div key={event.id} className="flex items-start gap-4 p-4 border rounded">
                    <div className={`w-4 h-4 rounded mt-1 ${eventTypes[event.type].color}`}></div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4>{event.title}</h4>
                        <Badge variant="outline" className={eventTypes[event.type].textColor}>
                          {eventTypes[event.type].label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                        <span>{event.time}</span>
                        {event.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </span>
                        )}
                        {event.attendees && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.attendees}
                          </span>
                        )}
                      </div>
                      {event.description && (
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}