import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useIsMobile } from "./ui/use-mobile";
import { 
  Building2, 
  Users, 
  MapPin, 
  FileText, 
  Shield, 
  Download,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  Calendar,
  FileCheck
} from "lucide-react";

interface CompanyProps {
  section: string;
}

export function Company({ section }: CompanyProps) {
  const isMobile = useIsMobile();

  const renderSection = () => {
    switch (section) {
      case "empresa-info":
        return <CompanyInfo />;
      case "empresa-perfil":
        return <CompanyProfile />;
      case "empresa-sedes":
        return <CompanyLocations />;
      case "empresa-clientes":
        return <CompanyClients />;
      case "empresa-organograma":
        return <CompanyOrganogram />;
      case "empresa-brigada":
        return <FireBrigadeOrganogram />;
      case "empresa-responsaveis":
        return <CompanyResponsibles />;
      case "empresa-atestados":
        return <TechnicalCertificates />;
      case "empresa-papelaria":
        return <CompanyStationery />;
      default:
        return <CompanyInfo />;
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {renderSection()}
    </div>
  );
}

function CompanyInfo() {
  const isMobile = useIsMobile();

  const areasAtuacao = [
    "Aeroportos",
    "Desenvolvimento Regional", 
    "Edificações",
    "Energia",
    "Ferrovias",
    "Gás & Petróleo",
    "Gerenciamento",
    "Irrigação & Drenagem",
    "Meio Ambiente",
    "Metrô/Trens Urbanos",
    "Portos",
    "Recursos Hídricos",
    "Rodovias",
    "Saneamento",
    "Tecnologia da Informação"
  ];

  const trabalhos = [
    "Estudos Ambientais (EIA/RIMA/PCA/PRAD/PBA/AR)",
    "Estudos de Viabilidade e Anteprojetos",
    "Geoprocessamento",
    "Gerenciamento de Programas Internacionais: BID, BIRD, JBIC e UE",
    "Planos Diretores",
    "Projetos Básico e Executivo",
    "Supervisão de Obras",
    "Supervisão e Gestão Ambiental"
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Informações Gerais da Empresa</h1>
        <p className="text-muted-foreground">
          Informações institucionais e dados gerais da Ecoplan.
        </p>
      </div>

      {/* Dados Gerais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Dados Gerais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4>Razão Social</h4>
                <p className="text-muted-foreground">ECOPLAN Engenharia Ltda</p>
              </div>
              <div>
                <h4>CNPJ/MF</h4>
                <p className="text-muted-foreground">92.930.643/0001-52</p>
              </div>
              <div>
                <h4>Inscrição Estadual</h4>
                <p className="text-muted-foreground">096/Isento</p>
              </div>
              <div>
                <h4>Inscrição Municipal</h4>
                <p className="text-muted-foreground">005.218-2-5</p>
              </div>
              <div>
                <h4>Data Constituição</h4>
                <p className="text-muted-foreground">01/03/1969</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4>Endereço</h4>
                <p className="text-muted-foreground">
                  Rua Felicíssimo de Azevedo, 924<br />
                  Bairro Higienópolis<br />
                  CEP 90540-046 - Porto Alegre/RS
                </p>
              </div>
              <div>
                <h4>Telefone PABX</h4>
                <p className="text-muted-foreground">+55 (51) 3272-8900</p>
              </div>
              <div>
                <h4>Fax</h4>
                <p className="text-muted-foreground">+55 (51) 3342-3345</p>
              </div>
              <div>
                <h4>Internet</h4>
                <p className="text-muted-foreground">www.ecoplan.com.br</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ramo de Atividade Principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="h-5 w-5" />
            Ramo de Atividade Principal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            O objetivo da sociedade é a prestação de serviços de engenharia, arquitetura, 
            agronomia, meio ambiente, economia e administração, em seus respectivos campos 
            de atuação, abrangendo estudos, projetos, assessoria e consultoria, tecnologia 
            da informação, gerenciamento, supervisão e fiscalização, operação e controle 
            tecnológico de materiais e serviços.
          </p>
        </CardContent>
      </Card>

      {/* Áreas de Atuação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Áreas de Atuação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`grid gap-3 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'
          }`}>
            {areasAtuacao.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Trabalhos que Realizamos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Os Trabalhos que Realizamos Envolvem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {trabalhos.map((trabalho, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2"></div>
                <span className="text-sm text-muted-foreground leading-relaxed">{trabalho}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CompanyProfile() {
  const isMobile = useIsMobile();

  const areasAtuacao = [
    "Aeroportos",
    "Desenvolvimento Regional",
    "Edificações", 
    "Energia",
    "Ferrovias",
    "Gás e Petróleo",
    "Gerenciamento",
    "Irrigação e Drenagem",
    "Meio Ambiente",
    "Metrô/Trens Urbanos",
    "Portos",
    "Recursos Hídricos",
    "Rodovias",
    "Saneamento",
    "Tecnologia da Informação"
  ];

  const escritorios = [
    "Porto Alegre (Sede)",
    "Brasília",
    "Cuiabá", 
    "Recife",
    "Rio de Janeiro"
  ];

  const areasProfissionais = [
    "Administração de Empresas",
    "Advocacia",
    "Biologia",
    "Arquitetura e Urbanismo",
    "Agronomia",
    "Tecnologia da Informação",
    "Contabilidade",
    "Comunicação",
    "Economia",
    "Engenharia",
    "Geografia",
    "Geologia",
    "Geoprocessamento",
    "Meio Ambiente",
    "Recursos Hídricos",
    "Saúde Pública",
    "Sociologia"
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Perfil da Empresa</h1>
        <p className="text-muted-foreground">
          Conheça a trajetória e perfil institucional da Ecoplan.
        </p>
      </div>

      {/* Apresentação da Empresa */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Sobre a Ecoplan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A ECOPLAN é uma empresa brasileira que realiza estudos, projetos, gerenciamento e 
            assessoramento técnico, empregando as mais avançadas tecnologias disponíveis. Os 
            trabalhos da empresa estão voltados para as seguintes áreas de atuação:
          </p>
          <div className={`grid gap-2 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'
          }`}>
            {areasAtuacao.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded bg-muted/30">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="text-sm">{area}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* História e Origens */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Nossa História
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">1965-1969</Badge>
                <h4>Origens com a Brown & Root</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                No período de 1965 a 1969, a empresa norte-americana Brown & Root Overseas Inc., 
                do Texas, manteve operando no Brasil um Departamento de Projetos de Engenharia e 
                Economia, composto por técnicos norte-americanos e brasileiros. Com o encerramento 
                dos trabalhos da Brown & Root, alguns profissionais brasileiros, que nela exerciam 
                suas atividades, decidiram permanecer unidos, criando uma empresa que absorvesse 
                totalmente o amplo acervo de conhecimentos adquiridos na empresa internacional.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">1º de março de 1969</Badge>
                <h4>Fundação da Ecoplan</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A ECOPLAN foi então fundada em 1º de março de 1969, apresentando, desde aquela 
                data até os dias de hoje, um efetivo desenvolvimento, fruto do dinamismo de sua 
                equipe de profissionais e do espírito empresarial de seus diretores. A sua política 
                e método de trabalho adaptaram-se ao ritmo das mais avançadas tecnologias.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Presença Nacional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Presença Nacional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sediada em Porto Alegre, a ECOPLAN conta com escritórios nas cidades de Brasília, 
            Cuiabá, Recife e Rio de Janeiro, o que permite atuar de forma presente em todo o Brasil.
          </p>
          <div className={`grid gap-3 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'
          }`}>
            {escritorios.map((escritorio, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Building2 className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">{escritorio}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Equipe Profissional */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Nossa Equipe
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 rounded-lg bg-green-50">
                <div className="text-2xl font-semibold text-green-600 mb-1">128</div>
                <div className="text-sm text-muted-foreground">Profissionais de Nível Superior</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <div className="text-2xl font-semibold text-blue-600 mb-1">175</div>
                <div className="text-sm text-muted-foreground">Profissionais Técnicos e Administrativos</div>
              </div>
            </div>
            
            <div>
              <h4 className="mb-3">Áreas de Especialização</h4>
              <p className="text-muted-foreground text-sm mb-3">
                As equipes de trabalho atuam nas seguintes áreas:
              </p>
              <div className={`grid gap-2 ${
                isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'
              }`}>
                {areasProfissionais.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded bg-muted/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 p-4 rounded-lg bg-orange-50">
              <p className="text-sm text-muted-foreground">
                <strong>Consultores Especializados:</strong> A Empresa conta, também, com um quadro 
                de consultores especializados nas diferentes áreas em que atua.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CompanyLocations() {
  const isMobile = useIsMobile();

  const locations = [
    {
      name: "Porto Alegre/RS",
      type: "Sede",
      phone: "(51) 3272-8900",
      fax: "(51) 3342-3345",
      address: "Rua Felicíssimo de Azevedo, 924 - Bairro Higienópolis",
      cep: "CEP 90540-046 - Porto Alegre/RS",
      email: "ecoplan@ecoplan.com.br"
    },
    {
      name: "Brasília/DF",
      type: "Escritório",
      phone: "(61) 3542-8455",
      fax: "(61) 3542-8455",
      address: "SHIS-QL06-Conj.10-casa2-Lago Sul",
      cep: "CEP 71620-105 - Brasília/DF",
      email: "ecoplan.bsb@ecoplan.com.br"
    },
    {
      name: "Cuiabá/MT",
      type: "Filial",
      phone: "(65) 3055-6500",
      fax: "(65) 3023-2012",
      address: "Av. Mário Palma, 755 - Bairro Jardim Mariana",
      cep: "CEP 78040-640 - Cuiabá/MT",
      email: "ecoplan@ecoplan.com.br"
    },
    {
      name: "Recife/PE",
      type: "Escritório",
      phone: "(81) 3222-3806 / 3221-3372",
      fax: "(81) 3222-3806 / 3221-3372",
      address: "Rua das Pernambucanas, 282 - Sala 306 - Bairro das Graças",
      cep: "CEP 52011-010 - Recife/PE",
      email: "ecoplan.pe@ecoplan.com.br"
    },
    {
      name: "Rio de Janeiro/RJ",
      type: "Filial",
      phone: "(21) 2263-7879 / 2215-1707",
      fax: "(21) 2263-7879 / 2215-1707",
      address: "Av. Passos, 101 - Salas 208 e 209 - Bairro Centro",
      cep: "CEP 20051-040 - Rio de Janeiro/RJ",
      email: "ecoplan.rio@ecoplan.com.br"
    }
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Sedes e Filiais</h1>
        <p className="text-muted-foreground">
          Conheça nossas unidades e escritórios pelo país.
        </p>
      </div>

      <div className={`grid gap-4 ${
        isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
      }`}>
        {locations.map((location, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className={`${isMobile ? 'text-base' : 'text-lg'}`}>
                  {location.name}
                </CardTitle>
                <Badge variant={location.type === 'Sede' ? 'default' : 'secondary'}>
                  {location.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Endereço */}
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                  <p className="text-sm text-muted-foreground font-medium">{location.cep}</p>
                </div>
              </div>
              
              {/* Telefone */}
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Fone:</span> {location.phone}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Fax:</span> {location.fax}
                  </p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground break-all">
                  <span className="font-medium">eM:</span> {location.email}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </>
  );
}

function CompanyClients() {
  const isMobile = useIsMobile();

  const principalClients = [
    "AGERGS - Agência Estadual de Regulação dos Serviços Públicos Delegados do Rio Grande do Sul",
    "AHSUL - Administração das Hidrovias do Sul",
    "ARTESP - Agência Reguladora de Serviços Públicos Delegados de Transporte do Estado de São Paulo",
    "CBTU - Companhia Brasileira de Trens Urbanos",
    "CDP - Companhia Docas do Pará - Belém/PA",
    "CEDAE - Companhia Estadual de Águas e Esgotos do Rio de Janeiro",
    "CEEE - Companhia Estadual de Energia Elétrica do Rio Grande do Sul",
    "CEHAB - Companhia Estadual de Habitação e Obras - Pernambuco",
    "CEMIG - Companhia Energética de Minas Gerais",
    "CGTEE - Companhia de Geração Térmica de Energia Elétrica",
    "CHESF - Companhia Hidro Elétrica do São Francisco",
    "CODEVASF - Companhia de Desenvolvimento dos Vales do São Francisco e do Parnaíba",
    "COMPESA - Companhia Pernambucana de Saneamento",
    "COMUSA - Serviços de Água e Esgoto de Novo Hamburgo/RS",
    "COPASA - Companhia de Saneamento de Minas Gerais",
    "CORSAN - Companhia Riograndense de Saneamento",
    "COSANPA - Companhia de Saneamento do Pará",
    "CRH/RS - Conselho de Recursos Hídricos do Rio Grande do Sul",
    "CRM - Companhia Riograndense de Mineração",
    "CRT - Companhia Riograndense de Telecomunicações",
    "CVRD - Companhia Vale do Rio Doce",
    "DAER/RS - Departamento Autônomo de Estradas e Rodagem do Rio Grande do Sul",
    "DEOP/MG - Departamento Estadual de Obras Públicas do Estado de Minas Gerais",
    "DEPRC - Departamento Estadual de Portos, Rios e Canais - Rio Grande do Sul",
    "DER/AL - Departamento de Estradas de Rodagem de Alagoas",
    "DER/MG - Departamento de Estradas de Rodagem de Minas Gerais",
    "DER/PE - Departamento de Estradas de Rodagem do Estado de Pernambuco",
    "DER/PR - Departamento de Estradas de Rodagem do Estado da Paraíba",
    "DER/SC - Departamento de Estradas de Rodagem de Santa Catarina",
    "DER/SP - Departamento de Estradas de Rodagem do Estado de São Paulo",
    "DERMAT - Departamento de Estradas de Rodagem de Mato Grosso",
    "DIPER - Companhia de Desenvolvimento Industrial de Pernambuco",
    "DMAE - Departamento Municipal de Água e Esgotos - Porto Alegre/RS",
    "DNIT - Departamento Nacional de Infraestrutura de Transportes",
    "DNOCS - Departamento Nacional de Obras Contra as Secas",
    "DNOS - Departamento Nacional de Obras de Saneamento",
    "ECT - Empresa Brasileira de Correios e Telégrafos",
    "ELETROSUL - Centrais Elétricas S/A",
    "EMAP - Empresa Maranhense de Administração Portuária",
    "EMBRATEL - Empresa Brasileira de Telecomunicações",
    "FGV - Fundação Getúlio Vargas",
    "FURNAS - Furnas Centrais Elétricas S/A",
    "GEIPOT - Empresa Brasileira de Planejamento de Transportes",
    "IICA - Instituto Interamericano de Cooperação para a Agricultura",
    "INFRAERO - Empresa Brasileira de Infraestrutura Aeroportuária",
    "IRGA - Instituto Riograndense do Arroz",
    "MCIDADES - Ministério das Cidades",
    "METROPLAN - Fundação Estadual de Planejamento Metropolitano e Regional - Rio Grande do Sul",
    "MINC - Ministério da Cultura",
    "MI - Ministério da Integração Nacional",
    "MS - Ministério da Saúde",
    "MPOG - Ministério do Planejamento, Orçamento e Gestão",
    "PETROBRÁS - Petróleo Brasileiro S/A",
    "PMPA - Prefeitura Municipal de Porto Alegre/RS",
    "PORTOBRÁS - Empresa de Portos do Brasil S.A.",
    "RURALMINAS - Fundação Rural Mineira",
    "SCP - Secretaria de Coordenação e Planejamento do Rio Grande do Sul",
    "SEINF - Secretaria da Infraestrutura do Estado do Tocantins",
    "SEPLAN/MG - Secretaria de Estado de Planejamento e Coordenação Geral - Minas Gerais",
    "SEPLANDES/PE - Secretaria de Planejamento e Desenvolvimento Social do Estado de Pernambuco",
    "SERHMACT - Secretaria de Estado dos Recursos Hídricos, do Meio Ambiente e da Ciência e Tecnologia",
    "SINFRA - Secretaria de Estado de Infraestrutura do Mato Grosso",
    "SNC - Servicio Nacional de Caminos - Bolívia",
    "SOPS - Secretaria das obras Públicas e Saneamento - Porto Alegre/RS",
    "SRH - Secretaria de Recursos Hídricos do Ministério do Meio Ambiente",
    "SUAPE - Complexo Industrial Portuário - Pernambuco",
    "TELERJ - Telecomunicações do Estado do Rio de Janeiro",
    "TRENSURB - Empresa de Trens Urbanos de Porto Alegre S.A. - Rio Grande do Sul",
    "VALEC - Engenharia, Construções e Ferrovias S/A"
  ];

  // Categorizar clientes por tipo
  const clientsByCategory = {
    "Agências e Órgãos Reguladores": principalClients.filter(client => 
      client.includes("Agência") || client.includes("AGERGS") || client.includes("ARTESP")
    ),
    "Companhias e Empresas Estatais": principalClients.filter(client => 
      client.includes("Companhia") || client.includes("CBTU") || client.includes("CEMIG") || 
      client.includes("CHESF") || client.includes("ELETROSUL") || client.includes("FURNAS") ||
      client.includes("PETROBRÁS") || client.includes("CVRD") || client.includes("TRENSURB")
    ),
    "Departamentos Estaduais": principalClients.filter(client => 
      client.includes("Departamento") || client.includes("DAER") || client.includes("DEOP") ||
      client.includes("DER/") || client.includes("DERMAT") || client.includes("DMAE")
    ),
    "Ministérios e Órgãos Federais": principalClients.filter(client => 
      client.includes("Ministério") || client.includes("DNIT") || client.includes("DNOCS") ||
      client.includes("DNOS") || client.includes("INFRAERO") || client.includes("ECT") ||
      client.includes("GEIPOT") || client.includes("MCIDADES") || client.includes("MINC") ||
      client.includes("MI -") || client.includes("MS -") || client.includes("MPOG")
    ),
    "Secretarias Estaduais e Municipais": principalClients.filter(client => 
      client.includes("Secretaria") || client.includes("SCP") || client.includes("SEINF") ||
      client.includes("SEPLAN") || client.includes("SEPLANDES") || client.includes("SERHMACT") ||
      client.includes("SINFRA") || client.includes("SOPS") || client.includes("SRH") ||
      client.includes("PMPA")
    ),
    "Outros Órgãos e Instituições": principalClients.filter(client => 
      !client.includes("Agência") && !client.includes("Companhia") && !client.includes("Departamento") &&
      !client.includes("Ministério") && !client.includes("Secretaria") && !client.includes("AGERGS") &&
      !client.includes("ARTESP") && !client.includes("CBTU") && !client.includes("CEMIG") &&
      !client.includes("CHESF") && !client.includes("ELETROSUL") && !client.includes("FURNAS") &&
      !client.includes("PETROBRÁS") && !client.includes("CVRD") && !client.includes("TRENSURB") &&
      !client.includes("DAER") && !client.includes("DEOP") && !client.includes("DER/") &&
      !client.includes("DERMAT") && !client.includes("DMAE") && !client.includes("DNIT") &&
      !client.includes("DNOCS") && !client.includes("DNOS") && !client.includes("INFRAERO") &&
      !client.includes("ECT") && !client.includes("GEIPOT") && !client.includes("MCIDADES") &&
      !client.includes("MINC") && !client.includes("MI -") && !client.includes("MS -") &&
      !client.includes("MPOG") && !client.includes("SCP") && !client.includes("SEINF") &&
      !client.includes("SEPLAN") && !client.includes("SEPLANDES") && !client.includes("SERHMACT") &&
      !client.includes("SINFRA") && !client.includes("SOPS") && !client.includes("SRH") &&
      !client.includes("PMPA")
    )
  };

  return (
    <>
      <div>
        <h1 className="mb-2">Nossos Clientes</h1>
        <p className="text-muted-foreground">
          Portfólio de clientes e principais parcerias da Ecoplan.
        </p>
      </div>

      {/* Estatísticas Gerais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Principais Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 rounded-lg bg-blue-50">
              <div className="text-xl font-semibold text-blue-600">{principalClients.length}</div>
              <div className="text-sm text-muted-foreground">Total de Clientes</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-green-50">
              <div className="text-xl font-semibold text-green-600">6</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-orange-50">
              <div className="text-xl font-semibold text-orange-600">55+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-purple-50">
              <div className="text-xl font-semibold text-purple-600">Nacional</div>
              <div className="text-sm text-muted-foreground">Abrangência</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Clientes por Categoria */}
      <div className="space-y-6">
        {Object.entries(clientsByCategory).map(([category, clients]) => {
          if (clients.length === 0) return null;
          
          return (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {clients.length} clientes
                </Badge>
              </CardHeader>
              <CardContent>
                <div className={`grid gap-3 ${
                  isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
                }`}>
                  {clients.map((client, index) => {
                    const [sigla, ...descricaoParts] = client.split(' - ');
                    const descricao = descricaoParts.join(' - ');
                    
                    return (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                        <div>
                          <div className="font-medium text-sm text-blue-700">{sigla}</div>
                          {descricao && (
                            <div className="text-xs text-muted-foreground mt-1">{descricao}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Informações Adicionais */}
      <Card>
        <CardHeader>
          <CardTitle>Setores de Atuação</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Nossos clientes abrangem diversos setores estratégicos da economia brasileira:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 p-2 rounded bg-blue-50">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-sm">Infraestrutura</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-green-50">
              <div className="w-2 h-2 rounded-full bg-green-600"></div>
              <span className="text-sm">Energia</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-orange-50">
              <div className="w-2 h-2 rounded-full bg-orange-600"></div>
              <span className="text-sm">Saneamento</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-purple-50">
              <div className="w-2 h-2 rounded-full bg-purple-600"></div>
              <span className="text-sm">Transportes</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-red-50">
              <div className="w-2 h-2 rounded-full bg-red-600"></div>
              <span className="text-sm">Meio Ambiente</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-indigo-50">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
              <span className="text-sm">Telecomunicações</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-teal-50">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              <span className="text-sm">Recursos Hídricos</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-yellow-50">
              <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
              <span className="text-sm">Portos</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CompanyOrganogram() {
  return (
    <>
      <div>
        <h1 className="mb-2">Organograma</h1>
        <p className="text-muted-foreground">
          Estrutura organizacional da empresa.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estrutura Organizacional</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Download Organograma Completo (PDF)
            </Button>
            <p className="text-sm text-muted-foreground">
              Visualize a estrutura completa da empresa com todos os departamentos e hierarquias.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function FireBrigadeOrganogram() {
  return (
    <>
      <div>
        <h1 className="mb-2">Organograma Brigada de Incêndio</h1>
        <p className="text-muted-foreground">
          Estrutura da brigada de incêndio e emergência.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Brigada de Incêndio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full md:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Download Organograma da Brigada (PDF)
            </Button>
            <p className="text-sm text-muted-foreground">
              Consulte a estrutura completa da brigada de incêndio, responsabilidades e procedimentos de emergência.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CompanyResponsibles() {
  const isMobile = useIsMobile();

  // Dados extraídos do documento fornecido
  const unidadesOrganizacionais = [
    {
      categoria: "Diretoria",
      responsaveis: [
        { nome: "Julio Fortini de Souza", cargo: "Diretor" },
        { nome: "Ana Lucia Fortini Divelius", cargo: "Diretora" },
        { nome: "Carlos Alves Mees", cargo: "Diretor" }
      ]
    },
    {
      categoria: "Diretorias Executivas",
      responsaveis: [
        { nome: "Julio Fortini de Souza", cargo: "Diretoria Executiva" },
        { nome: "Ana Lucia Fortini Divelius/Gustavo Hermes", cargo: "Diretoria Administrativa-Financeira" },
        { nome: "Julio Fortini de Souza", cargo: "Diretoria Comercial" },
        { nome: "Carlos Alves Mees", cargo: "Coordenação Técnico-Operacional" }
      ]
    },
    {
      categoria: "Gerências",
      responsaveis: [
        { nome: "Ana Lucia Pavão Trindade", cargo: "Gerência da Qualidade" },
        { nome: "Ana Lucia Pavão Trindade", cargo: "Meio Ambiente/Saúde e Segurança" }
      ]
    },
    {
      categoria: "Áreas Técnicas (Gerências)",
      responsaveis: [
        { nome: "Julio Fortini de Souza/Jaworowski", cargo: "Estudos de Saneamento/Rec. Hídricos" },
        { nome: "Vinícios Andreolli", cargo: "Estradas" },
        { nome: "Sandra Sanritag", cargo: "Meio Ambiente" },
        { nome: "Ana Lucia Pavão Trindade", cargo: "TI/Suporte Técnico e Programação" },
        { nome: "Alvaro Luis Thomaz/Elisabeta Stortz", cargo: "Propostas" }
      ]
    },
    {
      categoria: "Áreas Administrativas",
      responsaveis: [
        { nome: "Gustavo Hermes", cargo: "Cadastro" },
        { nome: "Marcio da Luz de Abreu", cargo: "Contabilidade/Rec. Humanos" },
        { nome: "Ana Lucia Fortini Divelius S. Barbosa", cargo: "Financeiro" },
        { nome: "Daniel Kreuz Rohten", cargo: "Tesouraria" },
        { nome: "Juliano da Silva Müller", cargo: "Compras" }
      ]
    },
    {
      categoria: "Escritórios Regionais",
      responsaveis: [
        { nome: "Ivan Marante Junior", cargo: "Brasília/DF" },
        { nome: "Erno Stefan", cargo: "Cuiabá/MT" }
      ]
    }
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Identificação dos Responsáveis</h1>
        <p className="text-muted-foreground">
          Organização da Ecoplan Engenharia Ltda. e Skill Engenharia Ltda. - Identificação dos responsáveis por unidades organizacionais.
        </p>
      </div>

      <div className="space-y-6">
        {unidadesOrganizacionais.map((unidade, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{unidade.categoria}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`grid gap-4 ${
                isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
              }`}>
                {unidade.responsaveis.map((responsavel, respIndex) => (
                  <div key={respIndex} className="flex items-start justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{responsavel.cargo}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{responsavel.nome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Informações Adicionais */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Organizacional</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-blue-50">
              <div className="text-xl font-semibold text-blue-600">3</div>
              <div className="text-sm text-muted-foreground">Diretores</div>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <div className="text-xl font-semibold text-green-600">6</div>
              <div className="text-sm text-muted-foreground">Gerências</div>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <div className="text-xl font-semibold text-orange-600">5</div>
              <div className="text-sm text-muted-foreground">Áreas Admin.</div>
            </div>
            <div className="p-3 rounded-lg bg-purple-50">
              <div className="text-xl font-semibold text-purple-600">2</div>
              <div className="text-sm text-muted-foreground">Escritórios Regionais</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function TechnicalCertificates() {
  const certificates = [
    "Atestado de Capacidade Técnica",
    "Atestado de Responsabilidade Técnica",
    "Atestado de Visita Técnica",
    "Atestado de Conformidade Ambiental"
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Modelos de Atestados Técnicos</h1>
        <p className="text-muted-foreground">
          Templates e modelos de atestados técnicos padronizados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((certificate, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">{certificate}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

function CompanyStationery() {
  const stationeryItems = [
    "Papel Timbrado – Ecoplan",
    "Modelo de Identificação de Pastas - Ecoplan",
    "Modelo de Identificação de CDs – Ecoplan", 
    "Modelo de Capa de CD - Ecoplan",
    "Recibo de Reembolso de Despesas – Ecoplan",
    "Relatório de Viagem - Ecoplan",
    "Papel Timbrado – Skill",
    "Modelo de Identificação de Pastas - Skill",
    "Modelo de Identificação de CDs – Skill",
    "Modelo de Capa de CD - Skill", 
    "Recibo de Reembolso de Despesas – Skill",
    "Relatório de Viagem - Skill"
  ];

  return (
    <>
      <div>
        <h1 className="mb-2">Papelaria</h1>
        <p className="text-muted-foreground">
          Templates e modelos de papelaria institucional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stationeryItems.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span className="font-medium">{item}</span>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}