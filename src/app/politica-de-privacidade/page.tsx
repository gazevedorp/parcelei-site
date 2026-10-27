import type { Metadata } from "next";
import { LegalDoc, type LegalSection } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Política de privacidade · Parcelei",
  description: "Política de Privacidade e Gestão do Tratamento de Dados Pessoais da Parcelei.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "objetivo",
    title: "1. Objetivo",
    blocks: [
      "A PARCELEI SERVIÇOS DIGITAIS LTDA. (“PARCELEI” e/ou “Empresa”) está empenhada em conduzir suas atividades visando proteger a privacidade dos dados pessoais a fim de que estes dados sejam utilizados de forma correta, mantidos em segurança, sendo tratados de forma lícita e de acordo com a legislação.",
      "Esta Política de Privacidade e Gestão de Tratamento de Dados Pessoais (“Política”) tem como objetivo guiar, orientar e informar o escopo e extensão do Tratamento de Dados Pessoais pela PARCELEI.",
      "A gestão do Tratamento de Dados Pessoais deverá ser pautada e regida pelos princípios, regras e padrões fornecidos e determinados por esta Política, pela Lei Geral de Proteção de Dados (“LGPD”), Marco Civil da Internet (“Marco Civil”) e melhores práticas globais, desde sua concepção, e durante todo o seu ciclo de vida, até que o dado seja eliminado.",
      "É obrigação de todos o respeito e comprometimento com esta Política. A PARCELEI trata com seriedade o cumprimento das disposições presentes, por isso, é essencial que você a conheça e a siga rigorosamente.",
      "O descumprimento das regras aqui contidas, bem como de quaisquer normas e procedimentos aplicáveis, poderá afetar a reputação da PARCELEI podendo levar à aplicação de penalidades que incluem multas e publicização da infração. Por isso, qualquer violação das regras apresentadas nesta Política será tratada com rigor.",
    ],
  },
  {
    id: "publico-alvo",
    title: "2. Público-alvo",
    blocks: [
      "Essa Política aplica-se à PARCELEI e às suas Afiliadas e/ou Controladas, sempre respeitando os documentos constitutivos e a legislação local aplicável.",
      "Todos os colaboradores, administradores e Diretores devem estar comprometidos com as regras estabelecidas nesta Política e são responsáveis por disseminar e praticar as diretrizes aqui contidas.",
      "Todos os fornecedores, parceiros de negócio, clientes e demais terceiros relacionados com a PARCELEI devem conhecer e cumprir essa Política para orientar suas condutas e evitar conflitos e violações.",
      "A presente Política se sobrepõe a outras políticas, normas ou processos eventualmente existentes, inclusive nas empresas controladas pela PARCELEI. Em caso de conflito entre os normativos em vigor, as diretrizes apresentadas neste documento devem prevalecer. Casos omissos ou disposições complementares, podem ser consideradas como adendo a presente Política.",
    ],
  },
  {
    id: "referencias",
    title: "3. Referências",
    blocks: [
      {
        ul: [
          "Lei Geral de Proteção de Dados Brasileira - “LGPD” (Lei n. 13.709/2018).",
          "Política de Segurança da Informação",
        ],
      },
    ],
  },
  {
    id: "conceitos",
    title: "4. Conceitos",
    blocks: [
      {
        lead: "Colaboradores:",
        text: "Funcionários, estagiários e menores aprendizes da PARCELEI e suas afiliadas e/ou controladas.",
      },
      {
        lead: "Fornecedores:",
        text: "Fornecedores de bens e prestadores de serviços contratados pela PARCELEI e suas controladas.",
      },
      {
        lead: "Parceiros de negócios:",
        text: "Franqueados, contadores, consultores, empresas privadas e demais entidades que estabeleçam alianças estratégicas e que partilhem objetivos comuns, mediante contrato assinado com a PARCELEI e suas controladas.",
      },
      {
        lead: "Clientes:",
        text: "Empresas contratantes dos produtos e serviços da PARCELEI e suas controladas.",
      },
      {
        lead: "Terceiros:",
        text: "Qualquer indivíduo, empresa ou entidade com o qual a PARCELEI e/ou suas controladas negocia, incluindo Fornecedores, Clientes, Parceiros de negócio e Beneficiários de Investimentos Socioambientais.",
      },
      {
        lead: "Titular do Dado:",
        text: "Pessoa física a quem os Dados Pessoais são objeto do Tratamento realizado pela PARCELEI, suas afiliadas e/ou controladas ou em nome desta.",
      },
      {
        lead: "Dado Pessoal:",
        text: "Qualquer informação relacionada a uma pessoa física identificada ou identificável, portanto, todo aquele dado que identifique uma pessoa física, ou que, através da junção de vários dados, possa a vir identificar uma pessoa física.",
      },
      {
        lead: "Dado Pessoal Sensível:",
        text: "é uma categoria especial de dado pessoal, em razão do seu potencial discriminatório. São dados de uma pessoa física sobre:",
      },
      {
        ul: [
          "Origem racial ou étnica;",
          "Opiniões políticas;",
          "Convicção religiosa;",
          "Filiação a sindicato ou a organização de caráter religioso, filosófico ou político;",
          "Dado referente à saúde ou à vida sexual;",
          "Dados biométricos, e",
          "Dados genéticos.",
        ],
      },
      {
        lead: "Dado Anonimizado:",
        text: "São aqueles em que o titular não pode ser identificado, considerando os meios técnicos utilizados no momento do Tratamento. Dados Anonimizados não são considerados Dados Pessoais.",
      },
      {
        lead: "Tratamento:",
        text: "Corresponde a toda atividade realizada com Dados Pessoais, desde a sua coleta até a sua eliminação.",
      },
      {
        lead: "Agentes de Tratamento:",
        text: "i) Controlador: consiste no agente a quem compete as decisões referentes ao Tratamento de Dados Pessoais; ii) Operador: é o agente que realiza o Tratamento de Dados Pessoais em nome do controlador.",
      },
      {
        lead: "Autoridade Nacional de Proteção de Dados (“ANPD”):",
        text: "Consiste no órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da Lei Geral de Proteção de Dados.",
      },
      {
        lead: "Encarregado ou Data Protection Officer (“DPO”):",
        text: "É a pessoa indicada pelo controlador para atuar como um canal de comunicação entre o controlador, os titulares dos dados pessoais e a ANPD.",
      },
    ],
  },
  {
    id: "principios",
    title: "5. Princípios do Tratamento dos Dados Pessoais",
    blocks: [
      "A PARCELEI tem o compromisso de conduzir todas as atividades de Tratamento envolvendo Dados Pessoais de acordo com os seguintes princípios:",
      {
        lead: "Minimização:",
        text: "a PARCELEI deve coletar e manter somente os Dados Pessoais que sejam adequados, relevantes e necessários para atingir os objetivos para os quais estes dados são tratados;",
      },
      {
        lead: "Finalidade:",
        text: "a PARCELEI deve tratar os Dados Pessoais de forma legal, justa legítima e transparente para o Titular de Dados;",
      },
      {
        lead: "Adequação:",
        text: "a PARCELEI deve garantir que o tratamento de Dados Pessoais deve ser compatível com a finalidade informada ao Titular;",
      },
      {
        lead: "Livre Acesso:",
        text: "o Titular deverá sempre poder, de forma facilitada e gratuita, consultar a PARCELEI a respeito da forma e da duração do Tratamento de seus Dados Pessoais;",
      },
      {
        lead: "Qualidade dos Dados:",
        text: "a PARCELEI deve garantir que os dados pessoais estejam exatos e, quando necessário, atualizados. A PARCELEI adotará medidas razoáveis para garantir a retificação ou a exclusão, imediata, de Dados Pessoais inexatos, considerando os objetivos para os quais os dados são tratados;",
      },
      {
        lead: "Transparência:",
        text: "todas as informações sobre a forma de tratamento dos dados pessoais devem ser claras, precisas e de fácil acesso. O Titular deve saber quais e para qual finalidade os dados pessoais estão sendo tratados;",
      },
      {
        lead: "Segurança:",
        text: "os colaboradores devem sempre estar atentos e tomar todas as medidas técnicas e administrativas de segurança de informação aptas a proteger os dados pessoais de acesso e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão;",
      },
      {
        lead: "Prevenção:",
        text: "devem ser adotadas medidas de forma a prevenir a ocorrência de danos em virtude do Tratamento de Dados Pessoais, tais como auditorias periódicas, treinamentos etc.",
      },
      {
        lead: "Não discriminação:",
        text: "impossibilidade de realização de tratamento de dados para fins discriminatórios;",
      },
      {
        lead: "Responsabilização e Prestação de Contas:",
        text: "deve ser demonstrada a adoção de medidas eficazes e capazes de comprovar a observância e cumprimento de normas de proteção de dados pessoais e eficácia dessas medidas.",
      },
    ],
  },
  {
    id: "fundamentacao",
    title: "6. Fundamentação Legal para o Tratamento dos Dados Pessoais",
    blocks: [
      "A Lei Geral de Proteção de Dados traz, como regra geral, dez hipóteses legais para que o Tratamento de Dados Pessoais seja lícito, ou seja, ao realizar tratamento de dados pessoais, deve-se observar se esse tratamento está dentro dessas dez hipóteses legais, caso não, o tratamento não é permitido. As hipóteses variam de acordo com as características dos dados. Se são Dados Pessoais sensíveis ou Dados Pessoais relativos as crianças e adolescentes, as hipóteses de Tratamento são reduzidas.",
      "Assim, antes do Tratamento de Dados Pessoais, a PARCELEI confirmará a existência de ao menos uma das hipóteses legais para o Tratamento de Dados Pessoais, a saber:",
      {
        ul: [
          <>
            <strong>Fornecimento de Consentimento:</strong> quando o Titular ou seu responsável
            legal consentir, de forma específica e destacada, para finalidades determinadas. A
            PARCELEI deverá obter o consentimento junto ao Titular de Dados antes do início do
            Tratamento;
          </>,
          <>
            <strong>Cumprimento de Obrigação Legal:</strong> quando for necessário tratar dados
            pessoais em virtude de uma obrigação legal ou regulatória;
          </>,
          <>
            <strong>Execução de Contrato/Diligência Pré-Contratuais:</strong> o tratamento ocorre
            para assegurar o cumprimento da execução contratual ou de diligências pré-contratuais;
          </>,
          <>
            <strong>Exercício regular de direito:</strong> quando o tratamento for necessário para
            um exercício regular de direitos em processo judicial, administrativo ou arbitral;
          </>,
          <>
            <strong>Proteção da Vida do Titular:</strong> se o tratamento for indispensável para a
            proteção da vida ou da incolumidade física;
          </>,
          <>
            <strong>Interesse Legítimo:</strong> em algumas situações, em caráter de exceção, o
            Terceiro pode valer-se do interesse legítimo para tratar dados pessoais, como apoio e
            promoção de atividades do controlador e proteção, em relação ao Titular, do exercício
            regular de seus direitos ou prestação de serviços que o beneficiem; e
          </>,
          <>
            <strong>Proteção ao crédito:</strong> a inclusão dos dados pessoais dos consumidores
            nos cadastros positivos poderá ser efetivada independentemente do consentimento
            expresso do Titular.
          </>,
        ],
      },
    ],
  },
  {
    id: "direitos",
    title: "7. Direitos Individuais de Titulares de Dados",
    blocks: [
      "A PARCELEI reconhece e respeita os direitos individuais concedidos aos Titulares dos Dados. Assim, quando a PARCELEI tratar Dados Pessoais, deverá garantir os seguintes direitos:",
      {
        lead: "Confirmação da existência de Tratamento e Acesso aos Dados Pessoais:",
        text: "o Titular poderá solicitar que a PARCELEI declare se trata de seus Dados Pessoais. Este direito tem relação com o princípio de livre acesso, ou seja, a garantia do Titular em consultar, de forma gratuita e facilitada, a respeito da forma e duração do Tratamento de seus Dados Pessoais, bem como da integridade de seus dados;",
      },
      {
        lead: "Portabilidade dos Dados a outro fornecedor de serviço ou produto:",
        text: "o Titular dos Dados Pessoais poderá querer transferir seus dados fornecido à um Terceiro para outro responsável pelo Tratamento sem que a PARCELEI possa impedi-lo;",
      },
      {
        lead: "Informação das entidades com as quais o controlador realizou uso compartilhado de dados:",
        text: "o Titular poderá solicitar à PARCELEI que está forneça as informações relativas ao compartilhamento de seus dados pessoais com entidades terceiras;",
      },
      {
        lead: "Correção de dados incompletos:",
        text: "o Titular poderá solicitar à PARCELEI que corrija ou complemente os seus Dados Pessoais;",
      },
      {
        lead: "Informação sobre a possibilidade de não fornecer consentimento:",
        text: "o Titular tem o direito de receber a informação a respeito da possibilidade de não fornecer o consentimento quando for realizado um tratamento de dados pessoais;",
      },
      {
        lead: "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados ilicitamente:",
        text: "em virtude dos princípios de adequação e necessidade, o Titular poderá solicitar à PARCELEI, a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados ilicitamente. Na medida do tecnicamente possível, a PARCELEI anonimizará os dados pessoais dos seus Titulares e primará pela minimização de dados pessoais tratados;",
      },
      {
        lead: "Revogação do consentimento:",
        text: "o Titular poderá a qualquer momento solicitar a revogação do consentimento dado para o tratamento de seus dados;",
      },
      {
        lead: "Reclamação a ANPD:",
        text: "o Titular poderá realizar uma reclamação juntamente à ANPD por violações ocasionais pela PARCELEI;",
      },
      {
        lead: "Eliminação dos Dados Pessoais:",
        text: "o Titular poderá solicitar a eliminação de seus dados pessoais tratados pela PARCELEI. Em situações de obrigação legal ou regulatória, estes dados poderão ser retidos/armazenados, e",
      },
      {
        lead: "Oposição ao Tratamento, se irregular:",
        text: "o Titular poderá se opor ao Tratamento de seus Dados Pessoais, se constatado que se trata de um Tratamento irregular.",
      },
    ],
  },
  {
    id: "categorias-especiais",
    title: "8. Categorias Especiais de Dados",
    blocks: [
      "Dados Pessoais Sensíveis são categorias de Dados Pessoais sujeitos a proteções e restrições adicionais, em razão do seu potencial discriminatório. Os Dados Pessoais Sensíveis incluem informações sobre:",
      {
        ul: [
          "Origem racial ou étnica;",
          "Convicção Religiosa;",
          "Opinião Política;",
          "Filiação a sindicato ou a organização de caráter religioso, filosófico ou político;",
          "Dado referente à saúde ou à vida sexual, e",
          "Dado genético ou biométrico.",
        ],
      },
    ],
  },
  {
    id: "menores",
    title: "9. Coleta de Dados de Menores de Idade",
    blocks: [
      "Sempre quando a PARCELEI tratar Dados Pessoais de menores, será necessário obter o consentimento de um dos pais ou responsável legal.",
    ],
  },
  {
    id: "terceiros",
    title: "10. Coleta de Dados de Terceiros",
    blocks: [
      "Quando a PARCELEI tratar Dados Pessoais com terceiros, celebrará contratos em conformidade com os termos da LGPD, indicando quem são os agentes de Tratamento de Dados – Controlador ou Operador – e sua responsabilidade em relação ao Dados Pessoais, assim como seguirá as diretrizes e processos estabelecidos na Política e Norma de contratação de terceiros",
    ],
  },
  {
    id: "retencao",
    title: "11. Retenção e Exclusão dos Dados Pessoais",
    blocks: [
      "Os Dados Pessoais não devem ser retidos por mais tempo do que o necessário. Assim, o período de retenção de Dados Pessoais varia de acordo com a finalidade pela qual o dado é utilizado. Dessa forma, a retenção deve ser apenas para duração necessária para cumprir os fins identificados ou conforme obrigações legais, regulatórias e contratuais que obrigam a retenção dos dados.",
      { h3: "Prazo de Retenção de Dados" },
      "A Lei Geral de Proteção de Dados não determina um prazo padrão para retenção de dados. A avaliação depende, portanto, da natureza dos dados e/ou finalidade e necessidade de uso pela PARCELEI.",
      "A PARCELEI poderá reter os Dados Pessoais durante o período que se entende como necessário e suficiente, no âmbito e nos limites técnicos das atividades, para:",
      {
        ul: [
          "a) Atingir a finalidade para qual o dado foi coletado;",
          "b) Cumprimento de obrigação legal ou regulatória pelo Controlador;",
          "c) Cumprimento de execução de contrato, ou",
          "d) Uso exclusivo do Controlador, vedado seu acesso por Terceiro e desde que seja anonimizados.",
        ],
      },
      "Nesse sentido, os Dados Pessoais devem ser eliminados após o término do tratamento, no âmbito e nos limites técnicos das atividades:",
      {
        ul: [
          "a) Quando a finalidade for alcançada ou que os dados deixaram de ser necessários ou pertinentes ao alcance da finalidade específica almejada;",
          "b) Término do período do Tratamento;",
          "c) Por requisição formal do Titular do dado; ou",
          "d) Por determinação da ANPD, quando houver violação a LGPD.",
        ],
      },
      "Devem ser observadas regularmente todas as formas de armazenamento de dados, a fim de verificar a necessidade de eliminação dos dados. Uma vez identificado a necessidade de eliminação, a PARCELEI deverá excluir os dados, independentemente da sua forma de armazenamento (física e eletrônica).",
      {
        lead: "ATENÇÃO:",
        note: "Ao identificar a necessidade de eliminação dos dados, será necessário triturar os papeis, em caso de documentos físicos, e excluir da rede/computador/mídia externa ou outro tipo de armazenamento, se de forma eletrônica.",
      },
    ],
  },
  {
    id: "seguranca",
    title: "12. Segurança da Informação",
    blocks: [
      "Os processos da PARCELEI possuem medidas de segurança eficazes para garantir a segurança e proteção dos dados pessoas que estão sendo tratados. Assim, a PARCELEI possui medidas organizacionais e técnicas para garantir um nível de segurança apropriado para o risco estimado de que o Tratamento venha a afetar negativamente os direitos e liberdades dos Titulares dos Dados, considerando a probabilidade de dano e a gravidade do dado aos Titulares dos Dados.",
      "Em caso de incidente de segurança envolvendo Dados Pessoais utilizados na prestação dos serviços, a PARCELEI determina sua comunicação imediata ao Comitê de Segurança da Informação e Privacidade de Dados, por meio do endereço juridico@parcelei.com.br. A gestão do incidente é conduzida com a participação das áreas de Tecnologia, Compliance/Jurídico e da administração, de acordo com a natureza e a gravidade da ocorrência.",
      "O procedimento de resposta está estruturado nas seguintes etapas: identificação e registro; classificação de gravidade e avaliação dos dados e titulares potencialmente afetados; contenção do incidente; erradicação de sua causa; recuperação e validação dos serviços; avaliação da necessidade de comunicação às partes envolvidas, aos titulares e à ANPD; e análise pós-incidente, com registro das medidas corretivas e preventivas.",
      "Durante a contenção poderão ser adotadas medidas como isolamento do ambiente afetado, bloqueio de acessos, revogação de credenciais e suspensão temporária de funcionalidades. A recuperação contempla a restauração segura dos sistemas e dados, testes de integridade e retorno monitorado do serviço.",
      "A PARCELEI adota como objetivo interno de recuperação dos serviços críticos um RTO de até 8 horas, sendo de 24 horas o limite máximo excepcional de indisponibilidade do serviço.",
      "Os incidentes e as providências adotadas são documentados. Quando o incidente puder acarretar risco ou dano relevante aos titulares, as comunicações cabíveis serão realizadas de acordo com a LGPD, com a regulamentação da ANPD e com as obrigações contratuais aplicáveis.",
    ],
  },
  {
    id: "avaliacao",
    title: "13. Avaliação do Tratamento de Dados Pessoais",
    blocks: [
      { h3: "O que fazer quando se deparar com um dado pessoal?" },
      "Durante as suas atividades profissionais diárias, os Colaboradores, Administradores e Terceiros poderão tratar Dados Pessoais. Assim, ao se deparar com o tratamento de dados pessoais:",
      {
        ul: [
          "Avalie se os princípios de tratamento foram seguidos;",
          "Se os Direitos dos Titulares estão sendo respeitados, e",
          "Se o Tratamento se enquadra em uma das formas de Tratamento previstas nesta Política;",
        ],
      },
      "Alguns questionamentos devem ser feitos ao realizar o tratamento de dados, conforme seguem:",
      {
        ul: [
          "a) Qual a finalidade do tratamento do dado pessoal?",
          "b) É necessário utilizar esses dados para atingir a finalidade?",
          "c) Está sendo tratado dado sensível?",
          "d) Qual base legal posso utilizar para esta atividade?",
        ],
      },
      "Caso depois dessa avaliação, você ainda tenha dúvidas em relação ao tratamento do dado, você pode encaminhar suas dúvidas para o setor responsável pela gestão da Segurança da Informação e Privacidade de Dados, através do e-mail juridico@parcelei.com.br",
      { h3: "Atenção" },
      {
        ul: [
          "Os dados tratados pelos Colaboradores no exercício de suas funções são de exclusiva propriedade da PARCELEI não podendo ser interpretados como de uso pessoal;",
          "As informações de Clientes devem ser tratadas de forma ética e sigilosa;",
          "Não deve ser compartilhado para outro Colaborador ou Terceiro, qualquer informação de acesso e login.",
        ],
      },
      "Qualquer dúvida, conflitos, casos de violação ou suspeita de violação a esta Política ou práticas de privacidade associadas, deverão ser reportadas ao setor responsável pela gestão da Segurança da Informação e Privacidade de Dados, por meio do e-mail juridico@parcelei.com.br.",
    ],
  },
  {
    id: "responsabilidades",
    title: "14. Responsabilidades",
    blocks: [
      { h3: "Diretoria Administrativa" },
      {
        ul: [
          "Apoiar e garantir que as diretrizes desta Política sejam cumpridas pela Empresa, e",
          "Garantir que haja um processo educativo e campanhas de sensibilização para promover esta Política, e",
        ],
      },
      { h3: "Diretoria de Compliance" },
      {
        ul: [
          "Setor responsável pela gestão da Segurança da Informação e Privacidade de Dados.",
          "Agir de forma independente e ter instrumentos para investigar e levar situações suspeitas ou possíveis violações às regras desta Política à Diretoria Administrativa da PARCELEI.",
          "Estabelecer orientações e ministrar treinamentos necessários para o cumprimento desta Política.",
          "Garantir a conformidade com esta Política.",
        ],
      },
      { h3: "Colaboradores e Terceiros" },
      {
        ul: [
          "Cumprir as diretrizes dispostas nesta política.",
          "Notificar infrações e descumprimentos desta Política;",
        ],
      },
      { h3: "Líderes" },
      { ul: ["Conscientizar os Colaboradores sob sua responsabilidade."] },
    ],
  },
  {
    id: "penalidades",
    title: "15. Penalidades",
    blocks: [
      "Violações desta Política resultarão na aplicação de medidas disciplinares apropriadas, conforme previstas no Código de Ética e Conduta da PARCELEI, que podem incluir a demissão do Colaborador e/ou Administradores. A medida disciplinar será imposta com base na seriedade da violação e nas circunstâncias da situação e poderá ser recomendada pelo Diretoria de Compliance da PARCELEI.",
      "Violações desta Política por Terceiros podem resultar em advertência, notificação e/ou no encerramento da relação comercial e respectiva rescisão contratual com esta parte.",
    ],
  },
  {
    id: "vigencia",
    title: "16. Vigência, Revisão e Aprovação",
    blocks: [
      "Esta Política entra vigor na data de sua publicação e deverá ser revisada periodicamente, no mínimo anualmente, ou quando houver necessidade de alteração de suas diretrizes, e submetida à aprovação da Diretoria Administrativa.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalDoc
      title="Política de Privacidade e Gestão do Tratamento de Dados Pessoais"
      meta={["Versão 1.0", "Junho de 2026"]}
      sections={SECTIONS}
      closing={
        <dl className="legal-version">
          <div>
            <dt>Versão</dt>
            <dd>1.0</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>06/2026</dd>
          </div>
          <div>
            <dt>Resumo da mudança</dt>
            <dd>Primeira versão da Política.</dd>
          </div>
          <div>
            <dt>Aprovação</dt>
            <dd>Camila Burnett - CEO</dd>
          </div>
        </dl>
      }
    />
  );
}
