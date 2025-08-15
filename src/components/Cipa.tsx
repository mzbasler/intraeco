import { useState } from "react";
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
  const reunioes = [
    { mes: "Outubro/2015", dia: 30, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Novembro/2015", dia: 17, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Dezembro/2015", dia: 15, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Janeiro/2016", dia: 19, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Fevereiro/2016", dia: 16, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Março/2016", dia: 15, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Abril/2016", dia: 19, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Maio/2016", dia: 17, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Junho/2016", dia: 21, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Julho/2016", dia: 20, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Agosto/2016", dia: 16, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Setembro/2016", dia: 21, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Outubro/2016", dia: 18, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Outubro/2016", dia: 31, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Novembro/2016", dia: 8, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Dezembro/2016", dia: 13, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Janeiro/2017", dia: 10, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Fevereiro/2017", dia: 14, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Março/2017", dia: 14, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Abril/2017", dia: 11, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Maio/2017", dia: 9, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Junho/2017", dia: 13, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Julho/2017", dia: 11, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Agosto/2017", dia: 8, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Setembro/2017", dia: 12, horario: "09:00", local: "Sala de Convivência" },
    { mes: "Outubro/2017", dia: 10, horario: "09:00", local: "Sala de Convivência" }
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Calendário de Reuniões</h1>
        <p className="text-muted-foreground">
          Para localizar uma reunião, digite o texto no mecanismo de procura. Clicando da barra azul do mecanismo, pode-se arrastar para qualquer parte da tela.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Cronograma de Reuniões CIPA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">MÊS/ANO</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">DIA</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">HORÁRIO</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">LOCAL</th>
                </tr>
              </thead>
              <tbody>
                {reunioes.map((reuniao, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-300 px-4 py-2 font-medium text-blue-600">
                      {reuniao.mes}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {reuniao.dia}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {reuniao.horario}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reuniao.local}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Componente Saúde no Trabalho
function CipaSaude() {
  const [activeSubsection, setActiveSubsection] = useState("aspectos-legais");

  const subsections = [
    { id: "aspectos-legais", title: "Aspectos Legais", icon: Scale },
    { id: "ordem-limpeza", title: "Ordem e Limpeza", icon: Shield },
    { id: "ler", title: "L.E.R", icon: Heart },
    { id: "estresse", title: "Estresse", icon: Heart },
    { id: "extintores", title: "Extintores", icon: Shield },
    { id: "campanhas", title: "Campanhas", icon: Heart }
  ];

  const renderSubsection = () => {
    switch (activeSubsection) {
      case "aspectos-legais":
        return <AspectosLegais />;
      case "ordem-limpeza":
        return <OrdemLimpeza />;
      case "ler":
        return <LER />;
      case "estresse":
        return <Estresse />;
      case "extintores":
        return <Extintores />;
      case "campanhas":
        return <Campanhas />;
      default:
        return <AspectosLegais />;
    }
  };

  return (
    <>
      <div>
        <h1 className="mb-2">Saúde no Trabalho</h1>
        <p className="text-muted-foreground">
          Informações sobre saúde e segurança no ambiente de trabalho.
        </p>
      </div>

      {/* Navegação das subseções */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {subsections.map((subsection) => {
              const Icon = subsection.icon;
              return (
                <Button
                  key={subsection.id}
                  variant={activeSubsection === subsection.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSubsection(subsection.id)}
                  className="flex items-center gap-2 h-auto p-3 text-xs"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{subsection.title}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Conteúdo da subseção */}
      {renderSubsection()}
    </>
  );
}

// Aspectos Legais
function AspectosLegais() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Acidentes do Trabalho e seus Aspectos Legais</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          O empregador pode, dentro de seu poder regulamentar, elaborar regulamento interno que institua normas sobre segurança de trabalho, bem como estabelecer que funcionários de empresas (ou de clientes), formistas, caminhistas cavados, etc.), ainda que não esteja obrigado pela legislação ao fornecimento de uniformes ou roupas especiais para trabalho. O regulamento interno também pode prever normas quanto ao estado dos equipamentos, como apresentar-se de unhas cortadas, cabelos presos para mulheres e corte para homens, dependendo do empregado por questões profissionais. Cabe a cada empregador observar as atribuições internas e as necessidades de boa apresentação diante dos seus clientes e estabelecer regras de conduta a serem seguidas por seus empregados.
        </p>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            As Leis 8.212 e 8.213, de 9/12/91, estabelecem a responsabilidade civil do empregador pelo acidente de trabalho e a co-responsabilidade dos diretores, sócios, gerentes e administradores por crimes contra a Previdência Social. Também autoriza a Previdência a promover ação regressiva contra a empresa ou terceiros causadores do acidente do trabalho, garantindo a estabilidade de emprego ao acidentado por 12 meses após a cessação do auxílio-doença da Previdência Social.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// Ordem e Limpeza
function OrdemLimpeza() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ordem e Limpeza</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          A manutenção da limpeza, ordem e conservação são alguns fatores locais de trabalho. Há quem pense que a ordem e a limpeza, no ambiente de trabalho, são responsabilidades apenas das equipes de limpeza. Essa responsabilidade da ordem e da higiene pessoal é obrigação de todos.
        </p>
        
        <p className="text-muted-foreground leading-relaxed">
          Cada empregado é responsável por manter limpo e ordenado seu ambiente de trabalho, de modo que cada equipamento ou ferramenta de trabalho esteja no seu devido lugar, não haja sujeiras e nem materiais espalhados no local.
        </p>
        
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            A falta da ordem e limpeza criam, com frequência, problemas que afetam à produtividade e à eficácia das operações, contribuem para o relaxamento dos hábitos de higiene pessoal e aumentam a propensão a doenças profissionais e acidentes de trabalho.
          </p>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          Quando há boa ordem e limpeza no local de trabalho, existe um ambiente mais agradável e saudável que reforça a atitude positiva dos trabalhadores, aumentando a produção e diminuindo os riscos de acidentes. Devido a isso, a ordem e a limpeza são necessidades básicas que fazem parte integrante do nosso ambiente de trabalho.
        </p>
      </CardContent>
    </Card>
  );
}

// L.E.R.
function LER() {
  const exercicios = [
    "Com as pernas flexionadas e pés paralelos, incline-se como se fosse enrolar a coluna a partir da cabeça. Leve as mãos até a metade da coxa e permaneça nessa posição por alguns segundos.",
    "Solte bem os braços e vá girando a cabeça e o tronco para os lados, mantendo as pernas flexionadas e o quadril parado. Quanto mais para trás você conseguir olhar, melhor.",
    "Inspire fundo levantando os ombros e tentando encostá-los nas orelhas. Expire rapidamente, soltando os ombros sobre o corpo.",
    "Com os olhos fechados, desenhe o sinal de infinito com a ponta do nariz. Também faça outros movimentos como o sinal de \"sim\" e \"não\".",
    "Com as mãos soltas e os punhos relaxados, massageie o corpo todo com a ponta dos dedos. Nas partes em que há mais músculos, a massagem pode ser realizada com a mão fechada.",
    "Sentado em uma cadeira, incline o corpo para a frente tentando encostar as mãos no chão. Respeite o seu limite: desça até onde o seu corpo permitir.",
    "Ainda na cadeira, passe os braços sobre as cabeça e vá esticando até sentir alongar a parte lateral do tronco.",
    "Relaxe, respire fundo e espreguice bem o corpo. Em pé ou sentado, estique o corpo à vontade, como quiser. Vale até bocejar.",
    "Sentado na cadeira, tente fazer uma rotação do tronco apoiando-se no encosto, até conseguir olhar para trás.",
    "Sentado na cadeira, coloque as mãos na nuca e puxe a pele como se fosse descolá-la do pescoço. Continue realizando uma auto massagem, levando as mãos da nuca para os ombros.",
    "Faça massagens nas mãos. Simule movimentos de uma lavagem de mão. Outra opção: com os punhos relaxados sobre o colo, segure a ponta de cada um dos dedos, girando-os.",
    "Com a ponta dos dedos, vá apertando toda a superfície das mãos. Procure sentir os locais mais doloridos.",
    "Encostado em uma parede, com os pés paralelos, flexione os joelhos deixando os pés longe da parede. Desça a cabeça e a parte superior do tronco até o braço atingir o meio da coxa."
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Lesões por Esforços Repetitivos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold text-red-800 text-lg mb-2">ATENÇÃO: ESCAPE DA TENDINITE!</h3>
            <p className="text-sm text-red-700">
              Quem nunca viu alguém se contorcendo de dor só por tocar de leve num mouse?
            </p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Todos nós, que vivemos diante do computador, somos vítimas fáceis de tendinites, bursites, tenossinovites e mais uma montanha de lesões causadas por esforços repetitivos - doenças características dos escritórios do século XX. Pois bem, agora que estamos entrando num novo milênio, é uma boa hora de cuidar mais do corpo e evitar a LER - como os especialistas chamam esse tipo de problema.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Apesar de não haver nenhum estudo comprovando por A mais B que a ginástica soluciona os problemas relacionados à LER, sabe-se que, além de relaxante, ela é uma grande aliada na tentativa de compensar ou amenizar estes problemas.
          </p>
          
          <div className="space-y-3">
            <h4 className="font-medium">Vários fatores predispõem o trabalhador a contrair tais lesões:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Trabalho repetitivo, monótono e com grande solicitação dos membros superiores, provocadas por tarefas específicas, tais como as que ocorrem em linhas de montagem;</li>
              <li>• Falta de pausas que garantam a recuperação física do esforço a que foram submetidos os trabalhadores;</li>
              <li>• Ritmos acelerados para o cumprimento de metas de produção, que não levam em conta a capacidade física do ser humano.</li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Dica:</strong> Ao digitar, você deve manter os punhos retos ou, então, utilizar um apoio para os pulsos, diminuindo assim, a tensão dos músculos.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exercícios Preventivos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            A fisioterapeuta Flora Maria Gomide Vezzá, consultora de ergonomia da Fundação Vanzolini sugere alguns exercícios para serem feitos nos momentos de pausa no trabalho:
          </p>
          <div className="space-y-3">
            {exercicios.map((exercicio, index) => (
              <div key={index} className="flex gap-3">
                <span className="font-bold text-blue-600 min-w-[24px]">{index + 1}.</span>
                <p className="text-sm text-muted-foreground">{exercicio}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Estresse
function Estresse() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Estresse</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          O estresse é a resposta do organismo a determinados estímulos que representam circunstâncias súbitas ou ameaçadoras. Para se adaptar à nova situação, o corpo desencadeia reações que ativam a produção de hormônios, entre elas a adrenalina. Isso deixa o indivíduo em estado de alerta e em condições de reagir. Esta resposta é normal e necessária ao ser humano, só passando a ser prejudicial quando se mantém de forma inadequada e por períodos prolongados, provoca uma infinidade de complicações. Outro fator são o enfraquecimento do sistema de defesa, tornando o organismo mais vulnerável às doenças.
        </p>
        
        <div className="space-y-3">
          <h4 className="font-medium">O aparecimento do estresse pode estar relacionado a situações reais ou imaginárias e suas principais causas podem ser:</h4>
          <p className="text-sm text-muted-foreground">
            Acúmulo de raiva e sentimentos negativos, problemas de relacionamento, descontrole diante de situações críticas, preocupação excessiva, falta de descanso.
          </p>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Existem três fases de evolução do estresse:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Fase de Alerta:</strong> Ocorre quando existe reação a uma ação externa;</li>
            <li>• <strong>Fase de Resistência:</strong> O indivíduo pode controlar-se naturalmente ou continuar estressado;</li>
            <li>• <strong>Fase de Exaustão:</strong> Persistindo a situação de estresse, possivelmente surgirá uma série de doenças crônicas, como: hipertensão, úlceras, alterações no sono, etc.</li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium">Algumas sugestões para a prevenção do estresse:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Alimente-se de maneira saudável e em períodos regulares;</li>
            <li>• Evite fumo, café, e bebidas alcoólicas;</li>
            <li>• Mantenha pelo menos uma atividade física periódica, com orientação médica;</li>
            <li>• Programe e tire férias anuais;</li>
            <li>• Crie atividades de lazer;</li>
            <li>• Delegue atividades e aprenda a trabalhar em grupo;</li>
            <li>• Procure ser mais compreensivo e menos exigente;</li>
            <li>• Reavalie suas atividades e modo de pensar;</li>
            <li>• Administre seu tempo realizando uma atividade por vez.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

// Extintores
function Extintores() {
  const extintores = [
    {
      tipo: "Extintor de Pó Químico Seco",
      descricao: "O agente extintor pode ser o BICARBONATO DE SÓDIO ou de POTÁSSIO que recebem um tratamento para torná-los em absorvente de umidade. O agente propulsor pode ser o GÁS CARBÔNICO ou NITROGÊNIO. O agente extintor forma uma nuvem de pó sobre a chama, que visa a exclusão do OXIGÊNIO. Destes elementos são acrescentados à nuvem, GÁS CARBÔNICO e VAPOR DE ÁGUA, devido à queima do PÓ."
    },
    {
      tipo: "Extintor de Gás Carbônico (CO₂)",
      descricao: "O GÁS CARBÔNICO é material não condutor de ENERGIA ELÉTRICA. O mesmo atua sobre o FOGO onde este elemento (eletricidade) está presente. Ao ser acionado o extintor, o gás é liberado formando uma nuvem que ABAFA E RESFRIA. É empregado para combater fogos em fogões inflamáveis (classe B) e em pequenos equipamentos energizados (classe C)."
    },
    {
      tipo: "Extintor de Água Pressurizada - Pressão Permanente",
      descricao: "Não é provido de cilindro de gás propelente, visto que a água permanece sob pressão dentro do aparelho. Para funcionar, necessita apenas da abertura do registro de passagem do líquido extintor."
    },
    {
      tipo: "Extintor de Água - Pressão Injetada",
      descricao: "Fixado na parte externa do aparelho está um pequeno cilindro contendo o gás propelente, cuja a válvula deve ser aberta no ato da utilização do extintor. A fim de pressurizar o ambiente interno do cilindro permitindo o seu funcionamento. O elemento extintor é a água, que tem como função principal resfriar o material em combustão. O agente propulsor (propelente) é o GÁS CARBÔNICO (CO₂)."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Extintores de Incêndio</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {extintores.map((extintor, index) => (
          <div key={index} className="border-l-4 border-red-500 pl-4">
            <h4 className="font-medium text-red-700 mb-2">
              {index + 1}. {extintor.tipo}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {extintor.descricao}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Campanhas
function Campanhas() {
  const [selectedCampanha, setSelectedCampanha] = useState(null);
  
  const campanhas = [
    {
      id: 1,
      titulo: "ATENÇÃO: ESCAPE DA TENDINITE",
      conteudo: "Conteúdo da campanha sobre tendinite..."
    },
    {
      id: 2,
      titulo: "Dieta e Exercícios para um coração saudável",
      conteudo: "Informações sobre alimentação saudável e exercícios para o coração..."
    },
    {
      id: 3,
      titulo: "O que você deve saber sobre FUMO",
      conteudo: "Campanha antitabagismo com informações sobre os malefícios do cigarro..."
    },
    {
      id: 4,
      titulo: "Prevenindo Doenças da Pele",
      conteudo: "Informações sobre prevenção de câncer de pele e cuidados dermatológicos..."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Campanhas de Saúde</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campanhas.map((campanha) => (
            <div key={campanha.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <h4 className="font-medium text-blue-600">{campanha.titulo}</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Clique para acessar o conteúdo da campanha
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Interfaces
interface Candidato {
  nome: string;
  setor: string;
  votos: number;
  percentual: number;
}

interface Eleicao {
  gestao: string;
  inicio: string;
  termino: string;
  situacao: string;
}

// Componente Eleições
function CipaEleicoes() {
  const [selectedEleicao, setSelectedEleicao] = useState<string | null>(null);
  const [showAllResults, setShowAllResults] = useState(false);

  const eleicoes: Eleicao[] = [
    { gestao: "2025-2026", inicio: "05/05/2025 08:00", termino: "05/05/2025 17:00", situacao: "Concluída" },
    { gestao: "2024-2025", inicio: "02/05/2024 08:00", termino: "02/05/2024 18:00", situacao: "Concluída" },
    { gestao: "2023-2024", inicio: "24/05/2023 08:00", termino: "24/05/2023 17:00", situacao: "Concluída" },
    { gestao: "2022-2023", inicio: "19/05/2022 08:00", termino: "19/05/2022 17:00", situacao: "Concluída" },
    { gestao: "2020-2021", inicio: "25/09/2020 08:00", termino: "25/09/2020 17:00", situacao: "Concluída" },
    { gestao: "2019-2020", inicio: "27/09/2019 08:00", termino: "27/09/2019 17:00", situacao: "Concluída" },
    { gestao: "2018-2019", inicio: "28/09/2018 08:00", termino: "28/09/2018 17:00", situacao: "Concluída" },
    { gestao: "2017-2018", inicio: "29/09/2017 08:00", termino: "29/09/2017 17:00", situacao: "Concluída" },
    { gestao: "2016-2017", inicio: "30/09/2016 08:00", termino: "30/09/2016 17:00", situacao: "Concluída" },
    { gestao: "2015-2016", inicio: "29/09/2015 08:00", termino: "29/09/2015 17:00", situacao: "Concluída" },
    { gestao: "2014-2015", inicio: "29/09/2014 08:00", termino: "29/09/2014 17:00", situacao: "Concluída" },
    { gestao: "2013-2014", inicio: "26/09/2013 08:00", termino: "26/09/2013 18:30", situacao: "Concluída" },
    { gestao: "2012-2013", inicio: "18/09/2012 08:00", termino: "18/09/2012 18:30", situacao: "Concluída" }
  ];

  const resultadosEleicoes: Record<string, Candidato[]> = {
    "2025-2026": [
      { nome: "Daniel Bender Calesso", setor: "Faturamento", votos: 13, percentual: 26.53 },
      { nome: "Leonardo Marinheiro Muller", setor: "Contabilidade", votos: 2, percentual: 4.08 },
      { nome: "Vanessa Menezes de Oliveira", setor: "Contabilidade", votos: 17, percentual: 34.69 },
      { nome: "Ítalo Oliveira Guimarães", setor: "Compras", votos: 11, percentual: 22.45 },
      { nome: "Frederico Garcia Retzke", setor: "Compras", votos: 6, percentual: 12.24 }
    ],
    "2024-2025": [
      { nome: "Raimundo Nonato dos Santos", setor: "Engenharia", votos: 7, percentual: 15.22 },
      { nome: "Paula Jenifer Pimentel da Silva", setor: "Engenharia", votos: 5, percentual: 10.87 },
      { nome: "Leonardo Marinheiro Muller", setor: "Contabilidade", votos: 13, percentual: 28.26 },
      { nome: "Larissa Machado Flores", setor: "Financeiro", votos: 12, percentual: 26.09 },
      { nome: "Gabriela Tirello Acquolini", setor: "Meio Ambiente", votos: 4, percentual: 8.70 },
      { nome: "Diego Pinho Silva", setor: "Engenharia", votos: 5, percentual: 10.87 }
    ],
    "2023-2024": [
      { nome: "Ariane de Maia Souza", setor: "RH", votos: 3, percentual: 7.32 },
      { nome: "Larissa Machado Flores", setor: "Financeiro", votos: 2, percentual: 4.88 },
      { nome: "Leonardo Marinheiro Muller", setor: "Financeiro", votos: 1, percentual: 2.44 },
      { nome: "Daniel Bender Calesso", setor: "Tesouraria", votos: 19, percentual: 46.34 },
      { nome: "Raimundo Nonato dos Santos", setor: "Engenharia", votos: 16, percentual: 39.02 }
    ],
    "2022-2023": [
      { nome: "Silvia Maria da Costa", setor: "Contabilidade", votos: 4, percentual: 9.30 },
      { nome: "Daniele Vanessa de Souza", setor: "Meio Ambiente", votos: 8, percentual: 18.60 },
      { nome: "Alessandro Romario Ketzer Bianchi", setor: "Assessoria", votos: 15, percentual: 34.88 },
      { nome: "Daniel Bender Calesso", setor: "Tesouraria", votos: 11, percentual: 25.58 },
      { nome: "Matheus Mugica Marques", setor: "Cadastro", votos: 5, percentual: 11.63 }
    ],
    "2020-2021": [
      { nome: "Adriana Viana Gomes", setor: "Contabilidade", votos: 14, percentual: 34.15 },
      { nome: "Alessandro Romario Ketzer Bianchi", setor: "Assessoria", votos: 12, percentual: 29.27 },
      { nome: "Daniele Vanessa de Souza", setor: "Meio Ambiente", votos: 4, percentual: 9.76 },
      { nome: "Ewerton Machado da Silva", setor: "Cadastro", votos: 11, percentual: 26.83 }
    ],
    "2019-2020": [
      { nome: "Ewerton Machado da Silva", setor: "Cadastro", votos: 10, percentual: 20.41 },
      { nome: "Denize Trajano Lopes", setor: "Contabilidade", votos: 4, percentual: 8.16 },
      { nome: "Daniel Bender Calesso", setor: "Tesouraria", votos: 13, percentual: 26.53 },
      { nome: "Daniele Vanessa de Souza", setor: "Meio Ambiente", votos: 9, percentual: 18.37 },
      { nome: "Carina da Luz de Abreu", setor: "Meio Ambiente", votos: 2, percentual: 4.08 },
      { nome: "Alessandro Romario Ketzer Bianchi", setor: "Assessoria", votos: 11, percentual: 22.45 }
    ],
    "2018-2019": [
      { nome: "Alipio Angelino da Silva", setor: "Oficina", votos: 15, percentual: 24.59 },
      { nome: "Daniel Bender Calesso", setor: "Financeiro", votos: 16, percentual: 26.23 },
      { nome: "Cristiane Echevarria Bastos", setor: "Engenharia", votos: 14, percentual: 22.95 },
      { nome: "Pablo Maciel da Silva", setor: "Meio Ambiente", votos: 7, percentual: 11.48 },
      { nome: "Ronaldo Godolphim Plá", setor: "Meio Ambiente", votos: 9, percentual: 14.75 }
    ]
  };

  if (showAllResults) {
    return <AllEleicoesResults resultados={resultadosEleicoes} onBack={() => setShowAllResults(false)} />;
  }

  if (selectedEleicao) {
    return <EleicaoDetails eleicao={selectedEleicao} resultados={resultadosEleicoes[selectedEleicao]} onBack={() => setSelectedEleicao(null)} />;
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="mb-2">Eleições CIPA</h1>
          <p className="text-muted-foreground">
            Histórico completo das eleições da Comissão Interna de Prevenção de Acidentes.
          </p>
        </div>
        <Button 
          onClick={() => setShowAllResults(true)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Users className="h-4 w-4" />
          Ver Todos os Resultados
        </Button>
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{eleicoes.length}</div>
            <div className="text-sm text-muted-foreground">Total de Eleições</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">13</div>
            <div className="text-sm text-muted-foreground">Anos de História</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-muted-foreground">Concluídas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">2025</div>
            <div className="text-sm text-muted-foreground">Última Eleição</div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Eleições */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Histórico de Eleições
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Descrição da Eleição</th>
                  <th className="text-left p-3">Início</th>
                  <th className="text-left p-3">Término</th>
                  <th className="text-left p-3">Situação</th>
                  <th className="text-left p-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {eleicoes.map((eleicao, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div className="font-medium">Eleições CIPA Gestão {eleicao.gestao}</div>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">{eleicao.inicio}</td>
                    <td className="p-3 text-sm text-muted-foreground">{eleicao.termino}</td>
                    <td className="p-3">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {eleicao.situacao}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedEleicao(eleicao.gestao)}
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Ver Resultados
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

// Componente para mostrar detalhes de uma eleição específica
function EleicaoDetails({ eleicao, resultados, onBack }: { 
  eleicao: string; 
  resultados: Candidato[] | undefined; 
  onBack: () => void; 
}) {
  if (!resultados) {
    return (
      <div>
        <Button onClick={onBack} variant="outline" className="mb-4">
          ← Voltar
        </Button>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">Resultados não disponíveis para esta eleição.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalVotos = resultados.reduce((sum: number, candidato: Candidato) => sum + candidato.votos, 0);
  const vencedores = resultados.slice().sort((a: Candidato, b: Candidato) => b.votos - a.votos).slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline">
          ← Voltar
        </Button>
        <div>
          <h1>Eleições CIPA Gestão {eleicao}</h1>
          <p className="text-muted-foreground">Resultados da votação</p>
        </div>
      </div>

      {/* Resumo da Eleição */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{totalVotos}</div>
            <div className="text-sm text-muted-foreground">Total de Votos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{resultados.length}</div>
            <div className="text-sm text-muted-foreground">Candidatos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">2</div>
            <div className="text-sm text-muted-foreground">Eleitos</div>
          </CardContent>
        </Card>
      </div>

      {/* Candidatos Eleitos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Users className="h-5 w-5" />
            Candidatos Eleitos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vencedores.map((candidato: Candidato, index: number) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}°
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{candidato.nome}</h4>
                  <p className="text-sm text-muted-foreground">{candidato.setor}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-green-700">{candidato.votos} votos</span>
                    <span className="text-sm text-muted-foreground">({candidato.percentual}%)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resultados Completos */}
      <Card>
        <CardHeader>
          <CardTitle>Resultados Completos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resultados.map((candidato: Candidato, index: number) => (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                    {candidato.votos}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{candidato.nome}</h4>
                    <p className="text-sm text-muted-foreground">{candidato.setor}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{candidato.percentual}%</div>
                    <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                      <div 
                        className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${candidato.percentual}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente para mostrar todos os resultados
function AllEleicoesResults({ resultados, onBack }: { 
  resultados: Record<string, Candidato[]>; 
  onBack: () => void; 
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button onClick={onBack} variant="outline">
          ← Voltar
        </Button>
        <div>
          <h1>Todos os Resultados das Eleições</h1>
          <p className="text-muted-foreground">Histórico completo de todas as votações</p>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(resultados).map(([gestao, candidatos]: [string, Candidato[]]) => (
          <Card key={gestao}>
            <CardHeader>
              <CardTitle>Eleições CIPA Gestão {gestao}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {candidatos.map((candidato: Candidato, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {candidato.votos}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{candidato.nome}</h4>
                      <p className="text-xs text-muted-foreground">{candidato.setor}</p>
                      <p className="text-xs font-medium text-blue-600">{candidato.percentual}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}