import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Heart, 
  Users, 
  Eye,
  Ear,
  Brain,
  UserCheck,
  Scale,
  BookOpen,
  Target,
  Building2,
  HandHeart,
  AlertCircle,
  Info
} from "lucide-react";

interface InclusaoPcDProps {
  section: string;
}

export function InclusaoPcD({ section }: InclusaoPcDProps) {
  const [activeTab, setActiveTab] = useState(() => {
    if (section === "inclusao-info") return "programa";
    if (section === "inclusao-deficiencias") return "deficiencias";
    if (section === "inclusao-relacionamento") return "relacionamento";
    if (section === "inclusao-legislacao") return "legislacao";
    if (section === "inclusao-glossario") return "glossario";
    return "programa";
  });

  useEffect(() => {
    if (section === "inclusao-info") setActiveTab("programa");
    else if (section === "inclusao-deficiencias") setActiveTab("deficiencias");
    else if (section === "inclusao-relacionamento") setActiveTab("relacionamento");
    else if (section === "inclusao-legislacao") setActiveTab("legislacao");
    else if (section === "inclusao-glossario") setActiveTab("glossario");
  }, [section]);

  const tiposDeficiencia = [
    {
      tipo: "Deficiência Física",
      icone: UserCheck,
      cor: "text-blue-600",
      definicao: "É toda aquela que apresenta alteração completa ou parcial de um ou mais segmentos do corpo humano, acarretando no comprometimento da função física."
    },
    {
      tipo: "Deficiência Visual",
      icone: Eye,
      cor: "text-green-600",
      definicao: "É toda aquela que apresenta uma situação irreversível de diminuição da resposta visual, mesmo após tratamento clínico e/ou cirúrgico e uso de óculos convencionais."
    },
    {
      tipo: "Deficiência Auditiva",
      icone: Ear,
      cor: "text-purple-600",
      definicao: "É toda aquela que apresenta uma diferença na habilidade normal para a detecção sonora."
    },
    {
      tipo: "Deficiência Intelectual",
      icone: Brain,
      cor: "text-orange-600",
      definicao: "É toda aquela que apresenta funcionamento intelectual significativamente inferior à média, com manifestação antes dos dezoito anos e limitações associadas a duas ou mais áreas de habilidades adaptativas."
    },
    {
      tipo: "Deficiência Múltipla",
      icone: Users,
      cor: "text-red-600",
      definicao: "É toda aquela que apresenta duas ou mais deficiências."
    }
  ];

  const relacionamentoGeral = [
    "Enxergue a pessoa além de sua condição",
    "Aja com naturalidade e bom senso",
    "Não subestime ou superestime a pessoa",
    "Perceba as necessidades da pessoa",
    "Ao perceber que a pessoa está com dificuldade, pergunte: \"Como posso te ajudar?\""
  ];

  const relacionamentoFisica = [
    "Se estiver empurrando a cadeira de um cadeirante e parar para conversar com alguém, posicione a cadeira de modo que a pessoa também participe da conversa",
    "Ao conversar com um cadeirante, procure ficar no nível do olhar dele",
    "Cadeiras de rodas, bengalas e muletas são parte do espaço corporal. Não agarre-se ou encoste-se nesses equipamentos",
    "Antes de mover a cadeira de rodas de uma pessoa, peça permissão",
    "Se você está caminhando ao lado de uma pessoa que o faz devagar, acompanhe o passo dela",
    "Se você presenciar um tombo de uma pessoa com deficiência, ofereça ajuda imediatamente e pergunte como ajudar",
    "Não se acanhe ao usar palavras como andar e correr, as pessoas com deficiência também usam essas palavras",
    "Tome cuidado para não tropeçar nas muletas",
    "As muletas devem ficar sempre ao alcance das mãos"
  ];

  const relacionamentoVisual = [
    "Toque no braço da pessoa cega, antes de falar com ela e ao deixar o ambiente avise-a",
    "Jamais utilize expressões que se relacionem diretamente à deficiência. Não é necessário evitar termos como ver e olhar",
    "Ao explicar as direções, seja o mais claro possível, de preferência indique as distâncias em metros",
    "Mantenha as portas completamente abertas ou fechadas. Portas entreabertas oferecem riscos a pessoa cega",
    "Para guiar uma pessoa com deficiência visual, ofereça seu antebraço para que ela segure. Oriente-a para obstáculos como meio fios, degraus, buracos e outros de forma clara",
    "Não tenha vergonha. Se você não sabe como direcionar a pessoa seja franco. Pergunte de que maneira deve descrever as coisas",
    "Pessoas com visão subnormal (sérias dificuldades visuais) devem receber o mesmo tratamento. Ofereça sua ajuda sempre que notar que ela está em dificuldade"
  ];

  const relacionamentoAuditiva = [
    "Não é correto dizer que alguém é surdo-mudo. Muitas pessoas surdas não falam porque não aprenderam a falar. Muitas fazem a leitura labial, outras não",
    "Se ao falar com uma pessoa surda e sentir que ela não está prestando atenção, acene para ela ou toque levemente em seu braço",
    "Ao falar com uma pessoa surda, fale de maneira clara e pronunciando todas as palavras de forma articulada. Use sua velocidade normal de fala, a não ser que lhe seja solicitado falar mais devagar",
    "Fale diretamente com a pessoa, de modo que sua boca fique visível",
    "Seja expressivo ao falar e mantenha o contato visual. Eles saberão ler suas expressões faciais, seus gestos ou movimentos de seu corpo para entender o que você quer comunicar",
    "Não grite, fale com o tom de voz normal, a não ser que lhe peçam para levantar o tom de voz",
    "Nem sempre uma pessoa surda tem uma boa dicção, não se acanhe ao pedir que ela repita",
    "Se um deficiente auditivo estiver acompanhado de intérprete, fale diretamente à pessoa surda, não à intérprete"
  ];

  const glossario = [
    {
      termo: "Alfabeto manual (ou dactilologia)",
      definicao: "O alfabeto manual (ou dactilologia) é um sistema de representação simbólica e icônica das letras do alfabeto, por meio das mãos."
    },
    {
      termo: "Bengala",
      definicao: "A bengala é um instrumento que serve como \"prolongamento do tato\" para o cego. Ela ajuda a pessoa com deficiência visual a locomover-se tanto em ambientes conhecidos quanto desconhecidos como ruas e calçadas. Com o auxílio da bengala a pessoa tem condições de \"perceber\" os obstáculos que estão à sua volta. A Bengala, assim, como a cadeira de rodas e a muletas são consideradas uma extensão do corpo da pessoa que a utiliza não devendo ser manuseada sem prévia autorização."
    },
    {
      termo: "Braille",
      definicao: "O braille é um código universal de leitura tátil e de escrita. Esse método é lido da esquerda para a direita, com uma ou ambas as mãos. Utilizando seis pontos em relevo dispostos em duas colunas, cada célula braille permite 63 combinações de pontos. O Sistema Braille foi adotado no Brasil, a partir de 1854, com a criação do Imperial Instituto dos Meninos Cegos, hoje Instituto Benjamin Constant."
    },
    {
      termo: "Cão-guia",
      definicao: "Os cães-guia, que geralmente são labradores, golden retrievers ou pastores alemães, são treinados em escolas especiais que potencializam diversas de suas qualidades, principalmente a vontade de aprender, a habilidade de se concentrar por períodos longos de tempo, a atenção a toques e sons, a boa memória e a excelente saúde. Essas três raças são as preferidas pelos adestradores, pois têm importantes características, como, por exemplo, força, obediência e inteligência, mas nada impede que vira-latas sejam adestrados e virem cães-guia."
    },
    {
      termo: "Ergonomia",
      definicao: "Torna-se indispensável no momento de maximizar as capacidades da pessoa com deficiência e também para que as ocupações existentes ofereçam as condições ideais de trabalho em termos de acessibilidade, com base na NBR 9050:2004 da Associação Brasileira de Normas Técnicas (ABNT)."
    },
    {
      termo: "Investimento Social Privado",
      definicao: "É o repasse voluntário e sistemático de recursos privados, de forma planejada e monitorada, para projetos sociais de interesse público. (Conceito GIFE)"
    },
    {
      termo: "Leitura labial",
      definicao: "A leitura labial é uma técnica desenvolvida por pessoas surdas em que sons e palavras emitidas pelo interlocutor são captados pela leitura (interpretação) dos movimentos de seus lábios."
    },
    {
      termo: "Libras",
      definicao: "É a Língua Brasileira de Sinais, uma linguagem visual e gestual utilizada apenas no Brasil. Assim como o português, a Libras é uma língua oficial. A Libras, ao contrário do que muitos imaginam, não é o português falado com mãos e nem um conjunto de mímicas e gestos soltos. A Língua Brasileira de Sinais tem regras gramaticais como qualquer outro idioma."
    },
    {
      termo: "Oralização",
      definicao: "É o processo fonoaudiológico pelo qual passa a pessoa com deficiência auditiva. Por meio desse processo, a pessoa surda consegue falar oralmente, ainda que não escute. Geralmente, os surdos oralizados fazem leitura labial."
    },
    {
      termo: "Órtese",
      definicao: "São os aparelhos ou dispositivos ortopédicos de uso externo, destinados a alinhar, prevenir ou corrigir deformidades ou melhorar a função das partes móveis do corpo. Por exemplo: muletas, joelheira, aparelho ortodôntico."
    },
    {
      termo: "Prótese",
      definicao: "São as peças ou dispositivos artificiais utilizados para substituir um membro, um órgão, ou parte dele e os aparelhos ou dispositivos destinados a corrigir a função deficiente de um órgão, como no caso da audição."
    },
    {
      termo: "Responsabilidade Social Empresarial",
      definicao: "É a forma de gestão que se define pela relação ética e transparente da empresa com todos os públicos com os quais ela se relaciona. (Conceito Ethos)"
    },
    {
      termo: "Softwares leitores de tela",
      definicao: "Para utilizar o computador os deficientes visuais utilizam os recursos de softwares leitores de tela que, junto com sintetizadores de voz, \"leem\" o conteúdo da tela de um computador. Alguns dos melhores e mais populares leitores de tela com voz sintetizada em português são: Jaws, Virtual Vision, DosVox."
    },
    {
      termo: "Tecnologia assistiva",
      definicao: "É um termo ainda novo, utilizado para identificar todo o arsenal de recursos e serviços que contribuem para proporcionar ou ampliar habilidades funcionais de pessoas com deficiência e consequentemente promover vida independente e inclusão."
    }
  ];

  const renderPrograma = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Programa de Inclusão PcD</h2>
        <p className="text-muted-foreground">
          Compromisso da Ecoplan com a diversidade e inclusão no ambiente de trabalho.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-600" />
            Nossa Missão
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Buscar trazer a diferença para dentro da empresa, combatendo o preconceito e reconhecendo a igualdade essencial entre as pessoas, é uma atitude que faz parte da postura ética a ser adotada como valor e prática nos negócios.
          </p>
          <p className="text-sm leading-relaxed">
            O Programa é um compromisso da Ecoplan Engenharia, que neste ano de 2014 vem conscientizando seus colaboradores e gerando mudanças de comportamento frente às diversidades. Com o apoio de todos passamos a trabalhar diariamente a inclusão como oportunidade de desenvolvimento humano e organizacional.
          </p>
          <p className="text-sm leading-relaxed">
            Estamos compartilhando informações, curiosidades, dicas que contribuirão para você conhecer mais sobre as deficiências. Compartilhe com seus colegas, amigos e familiares. Curiosamente, algumas deficiências são desconhecidas por quem às possuem.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Objetivo do Programa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Investir em inclusão de Pessoas com Deficiências, contribuindo com o desenvolvimento humano dos colaboradores, e na imagem socialmente responsável da empresa junto aos seus públicos de interesse (stakeholders).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-green-600" />
              Inclusão no Trabalho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              A inclusão de pessoas com deficiência no trabalho é um direito adquirido por Lei e está relacionada diretamente a ambientes funcionais e seguros. A pessoa recebe o estímulo para se desenvolver, melhorando sua autoestima e obtém a oportunidade de contribuir e retribuir, com suas habilidades profissionais, para o funcionamento da empresa.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderDeficiencias = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Tipos de Deficiências</h2>
        <p className="text-muted-foreground">
          Conheça os diferentes tipos de deficiências e suas características.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            O que é deficiência?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed mb-4">
            Toda perda ou anormalidade de uma estrutura ou função psicológica, fisiológica ou anatômica que gere incapacidade para o desempenho de atividades dentro do padrão considerado normal para o ser humano.
          </p>
          <p className="text-sm leading-relaxed">
            <strong>Quais são os tipos de deficiências?</strong> Existem cinco tipos de deficiência: auditiva, física, intelectual, visual e múltipla e elas podem ser congênitas (provenientes do nascimento) ou adquiridas (ao longo da vida).
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiposDeficiencia.map((deficiencia, index) => {
          const IconeComponent = deficiencia.icone;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${deficiencia.cor}`}>
                  <IconeComponent className="h-5 w-5" />
                  {deficiencia.tipo}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{deficiencia.definicao}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderRelacionamento = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Como se Relacionar com PcD</h2>
        <p className="text-muted-foreground">
          Dicas importantes para uma convivência respeitosa e inclusiva.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HandHeart className="h-5 w-5 text-purple-600" />
            Princípios Gerais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed mb-4">
            Precisamos lembrar que todas as pessoas têm várias características que as tornam únicas. Essas características vão desde aspectos de personalidade como caráter, humor, jeito de lidar com a vida, até aspectos físicos, como cor da pele e dos cabelos, altura, deficiência visível ou não.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Ao nos relacionarmos com pessoas que, dentre milhares de características, possuem uma deficiência, é importante lembrar:
          </p>
          <ul className="space-y-2">
            {relacionamentoGeral.map((dica, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                {dica}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <UserCheck className="h-5 w-5" />
              Relacionando-se com Deficiência Física
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {relacionamentoFisica.map((dica, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  {dica}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Eye className="h-5 w-5" />
              Relacionando-se com Deficiência Visual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {relacionamentoVisual.map((dica, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  {dica}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <Ear className="h-5 w-5" />
              Relacionando-se com Deficiência Auditiva
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {relacionamentoAuditiva.map((dica, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  {dica}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderLegislacao = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Legislação</h2>
        <p className="text-muted-foreground">
          Principais leis e normas relacionadas à inclusão de pessoas com deficiência.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-600" />
            Lei Federal 8.213/1991 - Lei das Cotas
          </CardTitle>
          <p className="text-sm text-muted-foreground">Planos de Benefícios da Previdência Social</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Art. 93 - Obrigatoriedade de Contratação</h4>
            <p className="text-sm mb-3">
              A empresa com 100 (cem) ou mais colaboradores está obrigada a preencher de 2% a 5% dos seus cargos com beneficiários reabilitados ou pessoas com deficiência, habilitadas, na seguinte proporção:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-muted/50 rounded">
                <span className="font-medium">Até 200 colaboradores:</span> 2%
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <span className="font-medium">De 201 a 500:</span> 3%
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <span className="font-medium">De 501 a 1.000:</span> 4%
              </div>
              <div className="p-3 bg-muted/50 rounded">
                <span className="font-medium">De 1.001 em diante:</span> 5%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            Multa Trabalhista por Discriminação
          </CardTitle>
          <p className="text-sm text-muted-foreground">Lei nº 9.029, de 13 de abril de 1995</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Proíbe a adoção de qualquer prática discriminatória e limitativa para efeito de acesso ao/ou manutenção no emprego por motivo de sexo, origem, raça, cor, estado civil, situação familiar ou idade.
          </p>
          <div>
            <h4 className="font-medium mb-2">Infrações são passíveis das seguintes cominações:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                Multa administrativa de 10X o valor do maior salário pago pelo empregador, elevado em 50%, em caso de reincidência
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                Proibição de obter empréstimo ou financiamento junto a instituições financeiras oficiais
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-orange-600" />
            Práticas Discriminatórias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-orange-50 rounded">
            <span className="font-medium text-orange-800">Atenção: </span>
            <span className="text-orange-700">
              Concentrar-se num tipo único de deficiência é entendida como uma prática discriminatória.
            </span>
          </div>
          <div className="p-3 bg-orange-50 rounded">
            <span className="font-medium text-orange-800">Importante: </span>
            <span className="text-orange-700">
              Esperar para contratar apenas deficiências leves também é considerado um ato discriminatório.
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            É necessário buscar a pessoa e não a deficiência. A PcD têm o direito de ser respeitada, sejam quais forem a natureza e a severidade de sua deficiência.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderGlossario = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Glossário</h2>
        <p className="text-muted-foreground">
          Termos e conceitos importantes relacionados à inclusão e acessibilidade.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {glossario.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BookOpen className="h-5 w-5 text-blue-600" />
                {item.termo}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{item.definicao}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Inclusão PcD</h1>
          <p className="text-muted-foreground">
            Programa de inclusão de pessoas com deficiência da Ecoplan.
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={activeTab === "programa" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("programa")}
              className="flex items-center gap-2"
            >
              <Heart className="h-4 w-4" />
              Programa
            </Button>
            <Button
              variant={activeTab === "deficiencias" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("deficiencias")}
              className="flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Deficiências
            </Button>
            <Button
              variant={activeTab === "relacionamento" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("relacionamento")}
              className="flex items-center gap-2"
            >
              <HandHeart className="h-4 w-4" />
              Relacionamento
            </Button>
            <Button
              variant={activeTab === "legislacao" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("legislacao")}
              className="flex items-center gap-2"
            >
              <Scale className="h-4 w-4" />
              Legislação
            </Button>
            <Button
              variant={activeTab === "glossario" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("glossario")}
              className="flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Glossário
            </Button>
          </div>
        </CardContent>
      </Card>

      {activeTab === "programa" && renderPrograma()}
      {activeTab === "deficiencias" && renderDeficiencias()}
      {activeTab === "relacionamento" && renderRelacionamento()}
      {activeTab === "legislacao" && renderLegislacao()}
      {activeTab === "glossario" && renderGlossario()}
    </div>
  );
}