import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  FileText, 
  Download, 
  Eye, 
  Filter, 
  Upload,
  Folder,
  Search,
  Calendar
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Documents() {
  const categories = [
    { id: "policies", name: "Políticas e Procedimentos", count: 24 },
    { id: "forms", name: "Formulários", count: 18 },
    { id: "manuals", name: "Manuais", count: 12 },
    { id: "reports", name: "Relatórios", count: 35 },
    { id: "templates", name: "Templates", count: 15 },
    { id: "legal", name: "Documentos Legais", count: 8 }
  ];

  const documents = [
    {
      id: 1,
      name: "Manual do Colaborador 2024",
      category: "Manuais",
      type: "PDF",
      size: "2.3 MB",
      lastModified: "15/01/2024",
      author: "RH - Maria Santos",
      downloads: 145,
      isNew: true
    },
    {
      id: 2,
      name: "Política de Home Office",
      category: "Políticas e Procedimentos",
      type: "PDF",
      size: "856 KB",
      lastModified: "12/01/2024",
      author: "RH - João Silva",
      downloads: 89,
      isNew: true
    },
    {
      id: 3,
      name: "Formulário de Férias",
      category: "Formulários",
      type: "DOC",
      size: "245 KB",
      lastModified: "08/01/2024",
      author: "RH - Ana Costa",
      downloads: 67,
      isNew: false
    },
    {
      id: 4,
      name: "Relatório Financeiro Q4 2023",
      category: "Relatórios",
      type: "XLS",
      size: "1.8 MB",
      lastModified: "20/12/2023",
      author: "Financeiro - Carlos Lima",
      downloads: 234,
      isNew: false
    },
    {
      id: 5,
      name: "Template Apresentação Corporativa",
      category: "Templates",
      type: "PPT",
      size: "3.2 MB",
      lastModified: "18/12/2023",
      author: "Marketing - Laura Oliveira",
      downloads: 178,
      isNew: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Biblioteca de Documentos</h1>
          <p className="text-muted-foreground">
            Acesse todos os documentos corporativos organizados por categoria.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Enviar Documento
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar documentos..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="doc">DOC</SelectItem>
                <SelectItem value="xls">XLS</SelectItem>
                <SelectItem value="ppt">PPT</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Categorias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between p-2 rounded hover:bg-muted cursor-pointer">
                  <span className="text-sm">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Documentos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border rounded">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-muted rounded">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4>{doc.name}</h4>
                          {doc.isNew && (
                            <Badge variant="default" className="text-xs">
                              Novo
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{doc.category}</span>
                          <span>{doc.type} • {doc.size}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {doc.lastModified}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Por {doc.author} • {doc.downloads} downloads
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
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
      </div>
    </div>
  );
}