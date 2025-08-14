import { Bell, Search, User, Settings, ChevronDown, Building2, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useIsMobile } from "./ui/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  currentSection?: string;
  showMobileMenuButton?: boolean;
  onMobileMenuClick?: () => void;
}

export function Header({ 
  currentSection = "Dashboard", 
  showMobileMenuButton = false,
  onMobileMenuClick
}: HeaderProps) {
  const isMobile = useIsMobile();
  
  const notifications = [
    { id: 1, title: "Nova política de home office", time: "2h", unread: true },
    { id: 2, title: "Reunião geral amanhã às 14h", time: "4h", unread: true },
    { id: 3, title: "Sistema ERP será atualizado", time: "1d", unread: false }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={`flex h-16 items-center justify-between ${isMobile ? 'px-4' : 'px-6'}`}>
        {/* Left Side */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Mobile Menu Button */}
          {showMobileMenuButton && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onMobileMenuClick}
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}

          {/* Logo and Company */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm">
                <Building2 className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-medium ${isMobile ? 'text-base' : 'text-lg'}`}>Ecoplan</span>
              {!isMobile && (
                <span className="text-xs text-muted-foreground">Intranet Corporativa</span>
              )}
            </div>
          </div>
          
          {/* Breadcrumb - Hidden on mobile */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Home</span>
              <span>/</span>
              <span className="text-foreground font-medium">{currentSection}</span>
            </div>
          )}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search - Hidden on mobile, shown as button */}
          {!isMobile ? (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar documentos, pessoas, projetos..."
                className="pl-10 w-64 lg:w-80 bg-muted/50 border-0 focus:bg-background"
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 text-xs p-0 flex items-center justify-center"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notificações</span>
                <Badge variant="secondary" className="text-xs">
                  {unreadCount} novas
                </Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 hover:bg-muted/50 border-b last:border-b-0">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary' : 'bg-muted'}`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium mb-1">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">há {notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Ver todas as notificações
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`relative h-10 gap-2 ${isMobile ? 'px-2' : 'px-3'}`}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
                {!isMobile && (
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium">João Silva</span>
                    <span className="text-xs text-muted-foreground">Gerente de TI</span>
                  </div>
                )}
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium">João Silva</p>
                  <p className="text-sm text-muted-foreground">
                    joao.silva@ecoplan.com
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Gerente de TI • Departamento de Tecnologia
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Meu Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Preferências de Notificação</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}