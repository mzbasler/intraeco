import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useIsMobile } from "./ui/use-mobile";
import { 
  FileText, 
  Download, 
  Users,
  Calendar,
  Heart,
  Scale,
  Shield
} from "lucide-react";

interface CipaProps {
  section: string;
}

export function Cipa({ section }: CipaProps) {
  const isMobile = useIsMobile();

  const renderSection = () => {
    switch (section) {
      case "cipa-historico":
        return <CipaHistorico />;
      case "cipa-nr5":
        return <CipaNr5 />;
      case "cipa-equipe":
        return <CipaEquipe />;
      case "cipa-calendario":
        return <CipaCalendario />;
      case "cipa-saude":
        return <CipaSaude />;
      case "cipa-eleicoes":
        return <CipaEleicoes />;
      default:
        return <CipaHistorico />;
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {renderSection()}
    </div>
  );
}

// Componente CIPA Histórico
function CipaHistorico() {
  const isMobile = useIsMobile();

  const gestoes = [
    {
      periodo: "2006/2007",
      posse: "20 de outubro de 2006",
      termino: "19 de outubro de 2007",
      eleitos: ["Cíntia Letícia Sallet", "Gilvan Silva de Andrade"],
      suplentes: ["Jorge Antonio da Silva Souza", "Heloiza Helena Taborda Nunes"],
      empresa: ["Jorge Luiz Fraga Rech", "Teresa Barão Soares"],
      suplenteEmpresa: ["Nelson Edwino Teixeira Junior", "Rogério Altamir Welter"]
    },
    {
      periodo: "2007/2008",
      posse: "22 de outubro de 2007",
      termino: "21 de outubro de 2008",
      eleitos: ["Jeanine Costa Godoi", "Jorge Antônio da Silva Souza"],
      suplentes: ["Fabian Estermann Meyer"],
      empresa: ["Jaqueline Alves Fernandes", "Fabian Estermann Meyer"],
      suplenteEmpresa: ["Andrea Stumm", "Tereza Barão Soares"],
      secretaria: "Heloiza Taborda Nunes"
    },
    {
      periodo: "2008/2009",
      posse: "22 de outubro de 2008",
      termino: "19 de outubro de 2009",
      eleitos: ["Tereza Barão Soares", "Gilvan Silva de Andrade"],
      suplentes: ["Fátima Castanho", "Ronaldo Plá"],
      empresa: ["Jeanine Costa Godoi"]
    },
    {
      periodo: "2009/2010",
      posse: "19 de outubro de 2009",
      termino: "18 de outubro de 2010",
      eleitos: ["Janaina Vieira Neves", "Daniela Viegas"],
      suplentes: ["Angélica Enick", "Ronaldo Plá"],
      empresa: ["Jeanine Costa Godoi", "Tereza Barão Soares", "Elenara Isabela Stertz"],
      secretaria: "Fátima Castanho"
    },
    {
      periodo: "2010/2011",
      posse: "20 de outubro de 2010",
      termino: "20 de outubro de 2011",
      eleitos: ["Tereza Barão Soares", "Fátima Castanho (Secretária)"],
      suplentes: ["Marcelo Levandoski", "Janaína Vieira Neves"],
      empresa: ["Jaqueline Alves Fernandes", "Clécio S. de Moraes"],
      suplenteEmpresa: ["Daiani Trisch", "Flávio Roese"],
      observacoes: "Em dezembro de 2010, Jeanine Godoi e Rafael Becker saíram da empresa"
    },
    {
      periodo: "2011/2012",
      posse: "21 de outubro de 2011",
      termino: "21 de outubro de 2012",
      eleitos: ["Clécio Steinhaus de Moraes", "Ana Paula Pinto Godoy"],
      suplentes: ["Thaiane Jeske (Secretária)", "Ewerton Machado da Silva"],
      empresa: ["Ana Lucia Pavão Trindade", "Israel Êndrius de Almeida (Tesoureiro)"],
      observacoes: "Em 22/06/12 Israel Êndrius se desligou, passando atividades para Ana Lúcia"
    },
    {
      periodo: "2012/2013",
      posse: "26 de outubro de 2012",
      termino: "22 de outubro de 2013",
      eleitos: ["Joel Jeske (Tesoureiro)", "Maria Andréia Moraes Lima (Secretária)"],
      suplentes: ["Ricardo Natal", "Pablo Maciel da Silva"],
      empresa: ["Sumire da Silva Hinata", "Maurício Jaques da Silva"],
      suplenteEmpresa: ["André Gattino Teixeira", "Gilvan Silva de Andrade"],
      observacoes: "Daniel Carvalho da Silva se desligou em 22/03/2013"
    },
    {
      periodo: "2013/2014",
      posse: "28 de outubro de 2013",
      eleitos: ["Joel Jeske (Vice-presidente e Tesoureiro)", "Bianca Bochi"],
      suplentes: ["Tereza Barão (Secretária)"],
      empresa: ["Sumire da Silva Hinata", "Carina da Luz de Abreu"],
      suplenteEmpresa: ["Guilherme Klein", "Jaerton Santini"]
    },
    {
      periodo: "2014/2015",
      posse: "29 de outubro de 2014",
      eleitos: ["Juliano da Silva Müller (Vice-presidente)", "Tereza Barão Soares"],
      suplentes: ["Luiz Antônio Krause de Verney", "Jaerton Santini"],
      empresa: ["Joel Jeske (Presidente)", "Sumirê da Silva Hinata"],
      suplenteEmpresa: ["Guilherme Klein", "Carina da Luz de Abreu"]
    },
    {
      periodo: "2015/2016",
      posse: "30 de outubro de 2015",
      eleitos: ["Juliano da Silva Müller (Vice-presidente)", "Fernanda Souza"],
      suplentes: ["Johnny Vagner Oliveira Machado", "Maurício Jaques da Silva"],
      empresa: ["Joel Jeske (Presidente)", "Marcio da Luz de Abreu"],
      suplenteEmpresa: ["Vinicios Andreolli", "Carlos Alves Mees"]
    }
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Histórico CIPA</h1>
        <p className="text-muted-foreground">
          Comissão Interna de Prevenção de Acidentes - Histórico das gestões da Ecoplan.
        </p>
      </div>

      {/* Objetivo e Constituição */}
      <Card>
        <CardHeader>
          <CardTitle>Objetivo da CIPA</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Comissão Interna de Prevenção de Acidentes – CIPA - tem como objetivo a prevenção de acidentes e doenças decorrentes do trabalho, de modo a tornar compatível, permanentemente, o trabalho com a preservação da vida e a promoção da saúde do trabalhador.
          </p>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Composição na Ecoplan</h4>
            <p className="text-sm text-muted-foreground">
              A CIPA é composta de 4 (quatro) membros eleitos, sendo 2 (dois) titulares, 2 (dois) suplentes, além dos representantes da empresa.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Histórico das Gestões */}
      <Card>
        <CardHeader>
          <CardTitle>Gestões da CIPA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {gestoes.map((gestao, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default" className="bg-blue-600">
                    {gestao.periodo}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Posse: {gestao.posse}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-1">Eleitos pelos Funcionários</h5>
                    <ul className="text-muted-foreground">
                      {gestao.eleitos.map((nome, i) => (
                        <li key={i}>• {nome}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-1">Representantes da Empresa</h5>
                    <ul className="text-muted-foreground">
                      {gestao.empresa.map((nome, i) => (
                        <li key={i}>• {nome}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {gestao.suplentes && (
                    <div>
                      <h5 className="font-medium mb-1">Suplentes</h5>
                      <ul className="text-muted-foreground">
                        {gestao.suplentes.map((nome, i) => (
                          <li key={i}>• {nome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {gestao.suplenteEmpresa && (
                    <div>
                      <h5 className="font-medium mb-1">Suplentes da Empresa</h5>
                      <ul className="text-muted-foreground">
                        {gestao.suplenteEmpresa.map((nome, i) => (
                          <li key={i}>• {nome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {gestao.secretaria && (
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Secretária:</strong> {gestao.secretaria}
                  </p>
                )}
                
                {gestao.observacoes && (
                  <div className="mt-2 p-2 bg-yellow-50 rounded text-sm text-yellow-800">
                    <strong>Observação:</strong> {gestao.observacoes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SIPAT */}
      <Card>
        <CardHeader>
          <CardTitle>SIPAT - Semana Interna de Prevenção de Acidentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Como o próprio nome já diz, é uma semana voltada à prevenção, tanto no que diz respeito a acidentes do trabalho quanto a doenças ocupacionais. É uma das atividades obrigatórias para todas as Comissões Internas de Prevenção de Acidentes do Trabalho, devendo ser realizada com frequência anual.
            </p>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium mb-2">Legislação</h4>
              <p className="text-sm text-muted-foreground">
                Prevista na Portaria nº 3.214, NR-5, item 5.16 "Atribuições da CIPA - letra O: Promover, anualmente, em conjunto com o Serviço Especializado em Segurança e Medicina do Trabalho (SESMT), a Semana Interna de Prevenção de Acidentes do Trabalho -SIPAT".
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Na SIPAT, os assuntos relacionados com saúde e segurança do trabalho são evidenciados, buscando a efetiva participação dos funcionários envolvendo, também, os diretores, gerentes. Ela não deve ser vista como mero cumprimento da legislação, mas sim como a continuidade dos trabalhos voltados para a prevenção de acidentes e doenças ocupacionais, onde a lucratividade está na promoção da saúde, aumento da produtividade e na valorização da vida.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-blue-600">{gestoes.length}</div>
              <div className="text-xs text-muted-foreground">Gestões Registradas</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-600">10</div>
              <div className="text-xs text-muted-foreground">Anos de Histórico</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-orange-600">4</div>
              <div className="text-xs text-muted-foreground">Membros por Gestão</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-purple-600">Anual</div>
              <div className="text-xs text-muted-foreground">Frequência SIPAT</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Componente NR-5
function CipaNr5() {
  return (
    <>
      <div>
        <h1 className="mb-2">NR-5</h1>
        <p className="text-muted-foreground">
          Norma Regulamentadora sobre Comissão Interna de Prevenção de Acidentes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5" />
            Documentos NR-5
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium">NR-5 Completa</span>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-green-600" />
                <span className="font-medium">Resumo NR-5</span>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Componente Equipe Atual
function CipaEquipe() {
  const equipeAtual = {
    gestao: "2022-2023",
    membros: [
      {
        cargo: "Presidente",
        nome: "Denize Lopes Trajano",
        tipo: "empresa"
      },
      {
        cargo: "Vice-Presidente e 1º Indicado dos Empregados",
        nome: "Alessandro Romario Ketzer Bianchi",
        tipo: "empregados"
      },
      {
        cargo: "2ª Indicada dos Empregados e Secretária",
        nome: "Daniel Bender Calesso",
        tipo: "empregados"
      },
      {
        cargo: "2ª Indicado do Empregador",
        nome: "Marcio da Luz de Abreu",
        tipo: "empresa"
      },
      {
        cargo: "3ª Indicado do Empregador",
        nome: "Vinicios Andreolli",
        tipo: "empresa"
      },
      {
        cargo: "4ª Indicado do Empregador",
        nome: "Carlos Alves Mees",
        tipo: "empresa"
      }
    ]
  };

  return (
    <>
      <div>
        <h1 className="mb-2">Equipe Atual CIPA</h1>
        <p className="text-muted-foreground">
          Membros atuais da Comissão Interna de Prevenção de Acidentes.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Gestão {equipeAtual.gestao}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipeAtual.membros.map((membro, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-2 ${
                  membro.tipo === 'empregados' ? 'bg-blue-500' : 'bg-green-500'
                }`}></div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{membro.cargo}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{membro.nome}</p>
                  <Badge 
                    variant="outline" 
                    className={`text-xs mt-2 ${
                      membro.tipo === 'empregados' ? 'text-blue-600' : 'text-green-600'
                    }`}
                  >
                    {membro.tipo === 'empregados' ? 'Representante dos Empregados' : 'Representante da Empresa'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resumo da Gestão */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-blue-600">
                {equipeAtual.membros.filter(m => m.tipo === 'empregados').length}
              </div>
              <div className="text-xs text-muted-foreground">Repr. Empregados</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-green-600">
                {equipeAtual.membros.filter(m => m.tipo === 'empresa').length}
              </div>
              <div className="text-xs text-muted-foreground">Repr. Empresa</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-orange-600">6</div>
              <div className="text-xs text-muted-foreground">Total Membros</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-purple-600">2022-2023</div>
              <div className="text-xs text-muted-foreground">Gestão</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Componente Calendário
function CipaCalendario() {
  return (
    <>
      <div>
        <h1 className="mb-2">Calendário de Reuniões</h1>
        <p className="text-muted-foreground">
          Cronograma de reuniões e atividades da CIPA.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Próximas Reuniões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Calendário de reuniões será disponibilizado em breve.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

// Componente Saúde no Trabalho
function CipaSaude() {
  return (
    <>
      <div>
        <h1 className="mb-2">Saúde no Trabalho</h1>
        <p className="text-muted-foreground">
          Informações sobre saúde e segurança no ambiente de trabalho.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Programas de Saúde
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Programas e iniciativas de saúde no trabalho serão disponibilizados em breve.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

// Componente Eleições
function CipaEleicoes() {
  return (
    <>
      <div>
        <h1 className="mb-2">Eleições CIPA</h1>
        <p className="text-muted-foreground">
          Informações sobre o processo eleitoral da CIPA.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Processo Eleitoral
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Informações sobre eleições da CIPA serão disponibilizadas em breve.
          </p>
        </CardContent>
      </Card>
    </>
  );
}