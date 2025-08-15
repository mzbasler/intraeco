import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  Users, 
  Gift, 
  FileCheck,
  Heart,
  Utensils,
  Car,
  CreditCard,
  Phone,
  MapPin,
  Mail,
  Building2,
  Shield,
  Stethoscope,
  Clock,
  Info
} from "lucide-react";

interface RHProps {
  section: string;
}

export function RH({ section }: RHProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (section === "rh-colaboradores") return "colaboradores";
    if (section === "rh-beneficios") return "beneficios";  
    if (section === "rh-competencias") return "competencias";
    return "colaboradores";
  });

  useEffect(() => {
    if (section === "rh-colaboradores") setActiveTab("colaboradores");
    else if (section === "rh-beneficios") setActiveTab("beneficios");
    else if (section === "rh-competencias") setActiveTab("competencias");
  }, [section]);

  const colaboradores = [
    {
      id: 1,
      nome: "Márcio da Luz de Abreu",
      cargo: "Gerente Contábil",
      ramal: "939",
      initials: "MA"
    },
    {
      id: 2,
      nome: "Ana Julia Nicolodi",
      cargo: "Aprendiz",
      ramal: null,
      initials: "AN"
    },
    {
      id: 3,
      nome: "Ariane de Maia de Souza",
      cargo: "Analista de RH",
      ramal: "321",
      initials: "AS"
    },
    {
      id: 4,
      nome: "Juliana Gonçalves de Araújo",
      cargo: "Auxiliar Administrativo",
      ramal: null,
      initials: "JG"
    },
    {
      id: 5,
      nome: "Julianna Figueiro Pires",
      cargo: "Estagiário",
      ramal: null,
      initials: "JP"
    },
    {
      id: 6,
      nome: "Marilei Teresinha de Bona",
      cargo: "Analista de RH",
      ramal: "920",
      initials: "MT"
    },
    {
      id: 7,
      nome: "Nicole Haenzel Limas",
      cargo: "Estagiário",
      ramal: null,
      initials: "NH"
    },
    {
      id: 8,
      nome: "Vanessa Pereira Flores",
      cargo: "Analista de RH",
      ramal: null,
      initials: "VF"
    },
    {
      id: 9,
      nome: "Carolina Santos Schwambach",
      cargo: "Técnico Seg. do Trabalho",
      ramal: "935",
      initials: "CS"
    }
  ];

  const beneficios = {
    saude: [
      {
        nome: "Unimed",
        descricao: "Plano Privativo (com participação)",
        subsidio: "70% dos valores para o titular",
        carencia: "Obstétrica de 300 dias, demais casos 30 dias",
        enderecos: [
          "Av. Venâncio Aires, 1040 - Fone: (51) 3316-4646",
          "Rua dos Andradas, 1234 Conj. 203 - Fone: (51) 3316-4637",
          "Rua Cristóvão Pereira, 103 - Fone: (51) 3362-6269"
        ],
        cidade: "Porto Alegre/RS",
        site: "http://www.unimedpoa.com.br",
        beneficiosInclusos: [
          "Consultas Médicas livres apenas com participação",
          "Hospitalização 40 dias por ano (excluída as hipóteses de Acidente de Trabalho)",
          "Despesas com acompanhante somente para internados menores de 12 anos (no semiprivativo)",
          "Anestesia",
          "Consultas Psiquiátricas - uma por mês",
          "Consultas Fisioterápicas – 20 sessões por ano"
        ],
        examesIncluidos: [
          "Análises Clínicas", "Anato Patológico", "Exames Radiológicos", "Exames Citológicos",
          "Exames Colposcópicos", "Exames e Teses Cardiológicos", "Exames Neurológicos",
          "Exames Endoscópicos", "Exames e Testes Audiométricos", "Exames Ecográficos",
          "Medicina Nuclear", "Tomografia Computadorizada (em alguns casos)", "Cintilografia"
        ],
        naoIncluido: [
          "Cirurgia Plástica Estética", "Transplante", "Psiquiátricos fora da fase aguda",
          "Investigação Diagnóstica (check-up)", "Síndrome de Insuficiência Imunológica e similares",
          "Doenças crônicas", "Doenças congênitas", "Todas as moléstias conhecidas anteriormente à vigência do contrato"
        ],
        tratamentosEspeciais: [
          "Psicoterapia", "Cobaltoterapia", "Cineangiocoronáriografia com Cateterismo",
          "Quimioterapia", "Ressonância Magnética", "Aviamento de óculos, aparelhos auditivos, ortopédicos, próteses, válvulas e similares"
        ],
        observacao: "As inclusões são feitas até o dia 15 de cada mês e a carência é de 30 dias após a inclusão."
      },
      {
        nome: "Sulmed",
        descricao: "Plano Ambulatorial + Plano Odontológico",
        subsidio: "70% dos valores para o titular",
        endereco: "Av. Independência, 381 - Fone: (51) 3226-4877",
        cidade: "Porto Alegre/RS",
        site: "http://www.sulmed.com.br",
        valoresAmbulatorial: [
          { faixa: "0 até 17", valor: "R$ 48,90" },
          { faixa: "18 a 49", valor: "R$ 60,97" },
          { faixa: "50 a 59", valor: "R$ 90,45" },
          { faixa: "60 a 69", valor: "R$ 121,91" },
          { faixa: "70 ou mais", valor: "R$ 182,88" }
        ],
        coberturaAmbulatorial: [
          "Consultas médicas, em número ilimitado, em clínicas básicas ou especializadas",
          "Serviços de apoio diagnóstico, tratamento e demais procedimentos, incluindo procedimentos cirúrgicos ambulatoriais",
          "Atendimentos caracterizados como urgência e emergência que demandem atenção continuada, pelo período de até doze horas",
          "Cobertura de remoção, após realizados os atendimentos classificados como urgência e emergência"
        ],
        examesComplementares: [
          "Exames Laboratoriais: Todos exames solicitados pelo médico credenciado, sem limite de quantidades",
          "Exames Radiológicos: Cobertura para todos os exames solicitados pelo médico credenciado",
          "Exames Ultra-Sonográficos: Ecografias em geral incluindo Dopplerfluxometria a cores"
        ],
        carenciaEspecial4meses: [
          "Avaliação Ortóptica", "Biópsia sob visão ecográfica", "Cintilografias", "Colonoscopia",
          "Densometria óssea", "Ecografias com Doppler", "Ecocardiogramas", "Exame anti-HIV",
          "Fibrobroncoscopia", "Ressonância Magnética", "Tomografia Computadorizada", 
          "Teste do Pezinho", "Uretrocistografia", "Urografias"
        ],
        carenciaEspecial6meses: [
          "Cirurgias Oftalmológicas Ambulatoriais", "Hemodiálise e Diálise Peritonial",
          "Quimioterapia", "Hemoterapia", "Radioterapia"
        ],
        odontologico: {
          cobertura: [
            "Serviço Odontológico prestado por clínica credenciada",
            "Procedimentos abrangentes, oferecendo cobertura praticamente completa aos beneficiários",
            "Atendimento nas 24 horas do dia, para urgências e emergências"
          ],
          procedimentos: {
            diagnostico: ["Consulta"],
            urgencia: ["Curativo em caso de hemorragia bucal", "Curativo em caso de odontalgia aguda", "Imobilização dentária temporária", "Recimentação de peça protética", "Tratamento de alveolite"],
            radiologia: ["Radiografia periapical", "Radiografia bite-wing"],
            prevencao: ["Evidenciação de placa, profilaxia", "Polimento coronário", "Aplicação tópica profissional de flúor", "Aplicação de selante"],
            dentistica: ["Restauração de até 4 superfícies", "Colagem de fragmentos", "Restauração de ângulo", "Restauração a pino", "Restauração de superfície radicular"],
            periodontia: ["Raspagem, alisamento e polimento", "Coronário e radicular", "Curetagem de bolsa periodontal", "Tratamento da gengivite"],
            endodontia: ["Remoção de obturação radicular", "Remoção de prótese e/ou pino metálico", "Tratamento endodôntico em dentes permanentes (até 4 condutos)", "Capeamento pulpar - direto e indireto"],
            cirurgia: ["Alveoloplastia", "Apicectomia", "Biópsia", "Cirurgia de torus", "Correção de bridas musculares", "Excisão de mucocele", "Exodontias", "Fraturas alvéolo-dentárias", "Frenectomias", "Incisão e drenagem de abscessos", "Reimplante de dente avulsionado", "Remoção de dentes retidos", "Sulcoplastia"]
          },
          carencia: "Não há nenhum tipo de carência para procedimentos odontológicos ambulatoriais"
        },
        dependentes: [
          "Esposas ou companheiras",
          "Filhos homens até 18 anos e filhas até 21 anos, enquanto solteiros"
        ],
        informacoesGerais: [
          "A Carteira de Identificação Sulmed é obrigatória e deve ser apresentada com documento de identidade",
          "Consultas com Clínico Geral ou Pediatra não necessitam marcação prévia",
          "Atendimento no Ambulatório Central: Segunda a Sexta das 8h às 20h, Sábados das 8h às 12h",
          "Fora do horário, casos de urgência devem ser encaminhados à Rede de Prontos-Socorros credenciados",
          "Emissão de atestados para abonos a faltas é feita criteriosamente pela Sulmed (Lei 5890/73)"
        ]
      }
    ],
    alimentacao: [
      {
        nome: "Vale Refeição",
        descricao: "Convênio com Alelo e Ticket Restaurante",
        valor: "R$ 15,62 por dia trabalhado",
        desconto: "20% do valor total recebido",
        distribuicao: "Todos os meses de acordo com o número de dias úteis",
        beneficiarios: "Todos os funcionários e estagiários",
        utilizacao: "Restaurantes, bares e estabelecimentos conveniados"
      },
      {
        nome: "Sacola Econômica",
        descricao: "Benefício adicional para aquisição de produtos",
        tipos: ["Sacola de Alimentação", "Sacola de Limpeza/Higiene"],
        valor: "Valor integral dos produtos constantes na sacola",
        desconto: "100% do valor dos produtos",
        distribuicao: "Mensalmente",
        solicitacao: "Deve ser feita uma solicitação formal ao Setor de Pessoal",
        restricao: "Estagiários não possuem este benefício"
      }
    ],
    transporte: [
      {
        nome: "Vale Transporte",
        descricao: "Direito do trabalhador para percurso residência-trabalho e vice-versa",
        utilizacao: "Exclusivamente para o percurso residência-trabalho e vice-versa",
        valor: "De acordo com os dias úteis de cada mês",
        desconto: "Até 6% (seis por cento) do salário base recebido pelo funcionário",
        solicitacao: "Necessário preencher formulário declarando a opção de utilizar este benefício",
        distribuicao: "Todos os meses",
        estagiarios: "Recebem este benefício sem o devido desconto"
      }
    ],
    convenios: [
      {
        nome: "Good Card",
        descricao: "Cartão para compras em farmácias conveniadas",
        comoUsar: [
          "Procure uma farmácia com a bandeira GOOD CARD",
          "Faça seu pedido normalmente observando o seu limite",
          "Na hora de pagar, apresente o Cartão junto com a sua carteira de identidade ou carteira de trabalho",
          "Você não paga nada de juros",
          "Confira o valor, assine o bloqueto e pegue seu cartão",
          "Observando as datas, você pode ter até 40 dias de prazo"
        ],
        vantagens: [
          "Ampla rede de farmácias conveniadas - As melhores redes de farmácia do país são credenciadas GOOD CARD",
          "Não paga CPMF - Como o usuário não precisa sacar dinheiro no banco e nem emitir cheque, evita o desconto da CPMF",
          "Indicação de farmácias - Basta sugerir a farmácia mais conveniente que o Departamento de Estabelecimentos irá procurá-la para credenciamento",
          "Até 40 dias para pagar - Observados os prazos, tem até 40 dias antes do desconto em folha",
          "Medicamentos 24 horas por dia, 7 dias por semana - Sempre encontra uma farmácia conveniada aberta",
          "Medicamentos por tele-entrega - Permite compra por tele-entrega bastando informar o número do cartão",
          "Opção de escolha - Comparar para encontrar o melhor preço",
          "Rede credenciada nacional - Nas Capitais e principais cidades de SP, PR, SC e RS, solicitar medicamento por tele-entrega direto no hotel",
          "Cartão Adicional - Cada funcionário pode solicitar um cartão adicional para um familiar. Os dois cartões utilizam o crédito do cartão principal",
          "Desconto Automático em Folha de Pagamento - Valores das compras são automaticamente descontados na folha seguinte",
          "Dispensa as Ordens de Compra - Acabou a fila na porta do RH para solicitar ordens de compra de farmácia"
        ],
        sac: {
          telefone: "0800 78 78 23",
          horario: "Segunda a Sexta das 08:30 às 22:00, Sábados e Domingos das 09:00 às 18:00",
          automatico: "0800 78 78 04 - Atendimento automático 24 horas para verificar saldo ou bloquear cartão"
        },
        extratoOnline: "No site www.goodcard.com.br, você pode acessar o Extrato On Line informando o número do cartão e CPF"
      }
    ]
  };

  const competencias = [
    {
      area: "Técnicas",
      skills: [
        "Gestão de Pessoas",
        "Legislação Trabalhista",
        "Departamento Pessoal",
        "Recrutamento e Seleção",
        "Treinamento e Desenvolvimento",
        "Segurança do Trabalho"
      ]
    },
    {
      area: "Comportamentais",
      skills: [
        "Comunicação",
        "Liderança",
        "Trabalho em Equipe",
        "Resolução de Conflitos",
        "Empatia",
        "Ética Profissional"
      ]
    },
    {
      area: "Tecnológicas",
      skills: [
        "Sistemas de RH",
        "Excel Avançado",
        "PowerBI",
        "eSocial",
        "SEFIP/GFIP",
        "Folha de Pagamento Digital"
      ]
    }
  ];

  const renderColaboradores = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Equipe de Recursos Humanos</h2>
        <p className="text-muted-foreground">
          Conheça a equipe do departamento de Recursos Humanos da Ecoplan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colaboradores.map((colaborador) => (
          <Card key={colaborador.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {colaborador.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{colaborador.nome}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{colaborador.cargo}</p>
                  {colaborador.ramal && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>Ramal {colaborador.ramal}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderBeneficios = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Benefícios Ecoplan</h2>
        <p className="text-muted-foreground">
          Conheça todos os benefícios oferecidos aos colaboradores da empresa.
        </p>
      </div>

      {/* Saúde */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-red-600" />
            Saúde
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {beneficios.saude.map((plano, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-medium text-xl">{plano.nome}</h4>
                  <p className="text-sm text-muted-foreground">{plano.descricao}</p>
                </div>
                <Badge variant="secondary" className="text-sm">70% subsidiado</Badge>
              </div>
              
              {/* Informações de contato */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded">
                <div className="space-y-2">
                  {plano.enderecos ? (
                    <div>
                      <h5 className="font-medium text-sm mb-2">Endereços:</h5>
                      {plano.enderecos.map((endereco, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span>{endereco}</span>
                        </div>
                      ))}
                      <p className="text-sm text-muted-foreground mt-1">{plano.cidade}</p>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{plano.endereco}, {plano.cidade}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{plano.site}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">Carência:</span>
                      <p className="text-sm text-muted-foreground">{plano.carencia}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valores Sulmed */}
              {plano.valoresAmbulatorial && (
                <div>
                  <h5 className="font-medium mb-3">Valores do Plano Ambulatorial:</h5>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {plano.valoresAmbulatorial.map((valor, i) => (
                      <div key={i} className="p-2 bg-muted/50 rounded text-center">
                        <div className="text-xs text-muted-foreground">{valor.faixa} anos</div>
                        <div className="font-medium text-sm">{valor.valor}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefícios Inclusos - Unimed */}
              {plano.beneficiosInclusos && (
                <div>
                  <h5 className="font-medium mb-2">Resumo dos Benefícios:</h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    {plano.beneficiosInclusos.map((beneficio, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Cobertura Ambulatorial - Sulmed */}
              {plano.coberturaAmbulatorial && (
                <div>
                  <h5 className="font-medium mb-2">Cobertura do Plano Ambulatorial:</h5>
                  <ul className="space-y-1 text-sm">
                    {plano.coberturaAmbulatorial.map((cobertura, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {cobertura}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exames */}
              {plano.examesIncluidos && (
                <div>
                  <h5 className="font-medium mb-2">Exames Incluídos:</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm">
                    {plano.examesIncluidos.map((exame, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                        {exame}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {plano.examesComplementares && (
                <div>
                  <h5 className="font-medium mb-2">Exames Complementares de Diagnóstico:</h5>
                  <ul className="space-y-1 text-sm">
                    {plano.examesComplementares.map((exame, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {exame}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Carências especiais - Sulmed */}
              {plano.carenciaEspecial4meses && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-orange-600">Carência 4 meses:</h5>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      {plano.carenciaEspecial4meses.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-red-600">Carência 6 meses:</h5>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      {plano.carenciaEspecial6meses.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Não incluído - Unimed */}
              {plano.naoIncluido && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2 text-red-600">Hospitalização não incluída:</h5>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      {plano.naoIncluido.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-red-600">Tratamentos Especializados:</h5>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      {plano.tratamentosEspeciais.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Plano Odontológico - Sulmed */}
              {plano.odontologico && (
                <div className="border-t pt-4">
                  <h5 className="font-medium mb-3 text-lg">Plano Odontológico</h5>
                  <div className="space-y-3">
                    <div>
                      <h6 className="font-medium mb-2">Cobertura:</h6>
                      <ul className="space-y-1 text-sm">
                        {plano.odontologico.cobertura.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(plano.odontologico.procedimentos).map(([categoria, procedimentos]) => (
                        <div key={categoria}>
                          <h6 className="font-medium mb-2 capitalize">{categoria.replace(/([A-Z])/g, ' $1').trim()}:</h6>
                          <ul className="space-y-1 text-xs">
                            {procedimentos.map((proc, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-blue-600 rounded-full mt-1 flex-shrink-0"></div>
                                {proc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded">
                      <span className="font-medium text-green-800">Carência Odontológica: </span>
                      <span className="text-green-700">{plano.odontologico.carencia}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Dependentes */}
              {plano.dependentes && (
                <div>
                  <h5 className="font-medium mb-2">Dependentes que podem ser incluídos:</h5>
                  <ul className="space-y-1 text-sm">
                    {plano.dependentes.map((dep, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {dep}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Informações Gerais */}
              {plano.informacoesGerais && (
                <div>
                  <h5 className="font-medium mb-2">Informações Importantes:</h5>
                  <ul className="space-y-1 text-sm">
                    {plano.informacoesGerais.map((info, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Observação */}
              {plano.observacao && (
                <div className="bg-yellow-50 p-3 rounded">
                  <span className="font-medium text-yellow-800">Observação: </span>
                  <span className="text-yellow-700">{plano.observacao}</span>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Alimentação */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="h-5 w-5 text-orange-600" />
            Alimentação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {beneficios.alimentacao.map((beneficio, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-lg">{beneficio.nome}</h4>
                <Badge variant="outline">{beneficio.desconto} desconto</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{beneficio.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>Valor:</strong> {beneficio.valor}</div>
                  <div><strong>Distribuição:</strong> {beneficio.distribuicao}</div>
                  {beneficio.utilizacao && <div><strong>Utilização:</strong> {beneficio.utilizacao}</div>}
                  {beneficio.beneficiarios && <div><strong>Beneficiários:</strong> {beneficio.beneficiarios}</div>}
                </div>
                <div className="space-y-2">
                  {beneficio.tipos && (
                    <div>
                      <strong>Tipos disponíveis:</strong>
                      <ul className="mt-1 space-y-1">
                        {beneficio.tipos.map((tipo, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                            {tipo}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {beneficio.solicitacao && <div><strong>Solicitação:</strong> {beneficio.solicitacao}</div>}
                </div>
              </div>
              
              {beneficio.restricao && (
                <div className="bg-yellow-50 p-3 rounded mt-3">
                  <span className="font-medium text-yellow-800">Atenção: </span>
                  <span className="text-yellow-700">{beneficio.restricao}</span>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Transporte */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5 text-blue-600" />
            Transporte
          </CardTitle>
        </CardHeader>
        <CardContent>
          {beneficios.transporte.map((beneficio, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-lg">{beneficio.nome}</h4>
                <Badge variant="outline">Até 6% do salário</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{beneficio.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>Utilização:</strong> {beneficio.utilizacao}</div>
                  <div><strong>Valor:</strong> {beneficio.valor}</div>
                  <div><strong>Desconto:</strong> {beneficio.desconto}</div>
                </div>
                <div className="space-y-2">
                  <div><strong>Solicitação:</strong> {beneficio.solicitacao}</div>
                  <div><strong>Distribuição:</strong> {beneficio.distribuicao}</div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded">
                <span className="font-medium text-blue-800">Estagiários: </span>
                <span className="text-blue-700">{beneficio.estagiarios}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Convênios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-green-600" />
            Convênios
          </CardTitle>
        </CardHeader>
        <CardContent>
          {beneficios.convenios.map((convenio, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-lg">{convenio.nome}</h4>
                  <p className="text-sm text-muted-foreground">{convenio.descricao}</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium mb-2">Como usar seu cartão:</h5>
                <ol className="space-y-1 text-sm">
                  {convenio.comoUsar.map((passo, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {passo}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h5 className="font-medium mb-2">Vantagens do Good Card:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {convenio.vantagens.map((vantagem, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      {vantagem}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded">
                <div>
                  <h5 className="font-medium mb-2">SAC - Serviço de Atendimento ao Cliente:</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{convenio.sac.telefone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{convenio.sac.horario}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span>{convenio.sac.automatico}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Extrato Online:</h5>
                  <p className="text-sm text-muted-foreground">{convenio.extratoOnline}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderCompetencias = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Quadro de Competências</h2>
        <p className="text-muted-foreground">
          Mapeamento das principais competências e habilidades da equipe de RH.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competencias.map((categoria, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                {categoria.area}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categoria.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Desenvolvimento Contínuo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            A Ecoplan investe constantemente no desenvolvimento das competências de sua equipe de RH através de:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Treinamentos Internos</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Workshops mensais</li>
                <li>• Palestras especializadas</li>
                <li>• Mentoria interna</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Treinamentos Externos</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cursos profissionalizantes</li>
                <li>• Certificações técnicas</li>
                <li>• Congressos e seminários</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Recursos Humanos</h1>
          <p className="text-muted-foreground">
            Gestão de pessoas, benefícios e desenvolvimento profissional na Ecoplan.
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeTab === "colaboradores" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("colaboradores")}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Colaboradores
            </Button>
            <Button
              variant={activeTab === "beneficios" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("beneficios")}
              className="flex items-center gap-2"
            >
              <Gift className="h-4 w-4" />
              Benefícios
            </Button>
            <Button
              variant={activeTab === "competencias" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("competencias")}
              className="flex items-center gap-2"
            >
              <FileCheck className="h-4 w-4" />
              Quadro de Competências
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeTab === "colaboradores" && renderColaboradores()}
      {activeTab === "beneficios" && renderBeneficios()}
      {activeTab === "competencias" && renderCompetencias()}
    </div>
  );
}