/**
 * FAQ oficial da Parcelei. O texto das perguntas e respostas é o material oficial.
 *
 * `hidden: true` na categoria ou na pergunta tira o item da home e de /faq.
 * Para reexibir o Clube Parcelei, apague `hidden` da categoria `clube` e das
 * perguntas rápidas `pago-juros` e `pago-mensalidade`.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string[];
  /** Sequência que vem depois dos parágrafos, quando a resposta é um passo a passo. */
  steps?: string[];
  /** Oculta na home e em /faq. Apague ou mude para false para reexibir. */
  hidden?: boolean;
  /** Uma pergunta por categoria visível entra no FAQ da home. */
  featured?: boolean;
};

export type FaqCategory = {
  id: string;
  number: number;
  title: string;
  /** Oculta a categoria inteira. Apague ou mude para false para reexibir. */
  hidden?: boolean;
  items: FaqItem[];
};

export const FAQ_TITLE = "FAQ PARCELEI";

export const FAQ_TAGLINE = "Tudo o que você precisa saber para usar a Parcelei";

export const FAQ_INTRO =
  "Comprar ficou mais simples. Com a Parcelei, você pode fazer suas compras via Pix e parcelar seus pagamentos de forma simples, segura e transparente.";

export const FAQ_IMPORTANT = {
  title: "IMPORTANTE",
  paragraphs: [
    "As condições de crédito, limite, parcelamento, assinatura, elegibilidade, vencimento, cancelamento e demais características do produto podem variar conforme o plano contratado, o perfil do cliente, a operação realizada e as regras vigentes.",
    "Sempre confira as condições apresentadas no aplicativo antes de confirmar uma contratação.",
  ],
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "comecando",
    number: 1,
    title: "Começando na Parcelei",
    items: [
      {
        id: "o-que-e",
        question: "O que é a Parcelei?",
        featured: true,
        answer: [
          "A Parcelei é uma solução de crédito que permite fazer compras parceladas via Pix, sem depender de cartão de crédito.",
          "Você tem acesso a um limite de crédito para realizar suas compras em estabelecimentos comerciais que comercializam, neste início, produtos essenciais: saúde e alimentação.",
        ],
      },
      {
        id: "como-funciona",
        question: "Como funciona a Parcelei?",
        answer: ["É simples:"],
        steps: [
          "Você baixa o aplicativo nas lojas Play Store (Android) e Apple Store (IOS) e cria sua conta na Parcelei.",
          "Fazemos uma análise rápida de crédito e risco.",
          "Se aprovado, você recebe um limite disponível.",
          "Escolhe um estabelecimento comercial que aceite pix.",
          "Realiza sua compra utilizando a Parcelei.",
          "Escolhe a proposta de parcelamento.",
          "Paga as parcelas via Pix nas datas combinadas (entrada, 15 dias, 30 dias e 45 dias).",
        ],
      },
      {
        id: "preciso-cartao",
        question: "Preciso ter cartão de crédito?",
        answer: [
          "Não.",
          "A Parcelei foi criada para permitir que você faça compras parceladas via Pix sem precisar utilizar o limite do seu cartão de crédito.",
        ],
      },
      {
        id: "onde-usar",
        question: "Onde posso usar a Parcelei?",
        answer: [
          "A Parcelei está disponível em qualquer estabelecimento comercial que aceite Pix..",
          "Você poderá consultar no aplicativo os locais onde seu crédito pode ser utilizado.",
        ],
      },
      {
        id: "e-um-banco",
        question: "A Parcelei é um banco?",
        answer: [
          "Não.",
          "A Parcelei é uma plataforma de tecnologia e crédito que oferece uma nova experiência de compra parcelada via Pix.",
        ],
      },
    ],
  },
  {
    id: "cadastro",
    number: 2,
    title: "Cadastro e aprovação",
    items: [
      {
        id: "quem-pode",
        question: "Quem pode se cadastrar na Parcelei?",
        answer: [
          "Qualquer pessoa que atenda aos critérios de elegibilidade da Parcelei pode solicitar seu cadastro.",
          "A aprovação está sujeita à análise de crédito e risco, além às regras vigentes da plataforma.",
        ],
      },
      {
        id: "como-cadastro",
        question: "Como faço meu cadastro?",
        featured: true,
        answer: [
          "Baixe o aplicativo Parcelei e siga as etapas indicadas para criar sua conta.",
          "Durante o cadastro, algumas informações serão solicitadas para confirmar sua identidade e realizar a análise de crédito e risco.",
        ],
      },
      {
        id: "por-que-dados",
        question: "Por que a Parcelei precisa dos meus dados?",
        answer: [
          "Precisamos de algumas informações para confirmar sua identidade, avaliar seu perfil de crédito, prevenir fraudes e oferecer um limite adequado ao seu perfil.",
          "Seus dados são tratados de acordo com nossa Política de Privacidade e a legislação aplicável.",
        ],
      },
      {
        id: "aprovacao-automatica",
        question: "A aprovação é automática?",
        answer: [
          "A análise acontece de forma digital e pode ser concluída rapidamente, mas a aprovação não é garantida.",
          "Cada solicitação passa por uma análise individual.",
        ],
      },
      {
        id: "tempo-aprovacao",
        question: "Quanto tempo demora para saber se fui aprovado?",
        answer: [
          "Na maioria dos casos, a análise acontece rapidamente em poucos segundos.",
          "Se forem necessárias informações adicionais, o aplicativo informará os próximos passos.",
        ],
      },
      {
        id: "nao-aprovado",
        question: "Por que minha solicitação não foi aprovada?",
        answer: [
          "A aprovação depende de diversos critérios utilizados na análise de crédito, risco e segurança.",
          "Por isso, não significa necessariamente que exista algum problema com seu cadastro.",
        ],
      },
      {
        id: "tentar-novamente",
        question: "Posso tentar novamente se não for aprovado?",
        answer: [
          "Sim, quando a Parcelei disponibilizar uma nova análise para o seu perfil.",
          "As condições e o momento para uma nova avaliação podem variar de acordo com os critérios da plataforma.",
        ],
      },
      {
        id: "aprovacao-garante",
        question: "A aprovação da Parcelei garante crédito para qualquer compra?",
        answer: [
          "Não.",
          "A aprovação do cadastro e a disponibilização de limite não significam que todas as compras serão necessariamente aprovadas.",
          "Cada transação pode passar por uma nova análise de segurança, crédito e risco.",
        ],
      },
    ],
  },
  {
    id: "clube",
    number: 3,
    title: "Clube Parcelei",
    hidden: true,
    items: [
      {
        id: "quanto-pago-clube",
        question: "O que eu pago para participar do Clube Parcelei+?",
        answer: [
          "O Clube Parcelei possui uma assinatura mensal.",
          "O valor da assinatura e os benefícios associados ao seu plano são apresentados no momento da contratação.",
        ],
      },
      {
        id: "assinatura-limite",
        question: "Se eu pago a assinatura, posso usar todo o meu limite?",
        answer: [
          "O limite disponibilizado depende da análise de crédito e das condições do seu plano.",
          "O valor disponível para novas compras pode mudar conforme você utiliza e paga seu crédito.",
        ],
      },
      {
        id: "assinatura-parcela",
        question: "A assinatura é a mesma coisa que uma parcela da compra?",
        answer: [
          "Não.",
          "A assinatura do Clube Parcelei é uma cobrança recorrente pelo acesso aos benefícios e serviços do clube.",
          "As parcelas das suas compras são cobranças separadas.",
        ],
      },
      {
        id: "cobra-juros",
        question: "A Parcelei cobra juros nas compras?",
        answer: [
          'No Clube Parcelei, as modalidades anunciadas como "sem juros", não há cobrança de juros sobre as parcelas da compra.',
          "A assinatura do Clube Parcelei é uma cobrança independente e deve ser considerada pelo usuário ao avaliar o custo total da utilização da plataforma.",
          "Se o usuário não for assinante do Clube Parcelei, existe a cobrança de juros junto as parcelas e estará descrito detalhadamente na proposta de parcelamento.",
        ],
      },
      {
        id: "pagar-sem-compra",
        question: "Preciso pagar a assinatura mesmo se não fizer nenhuma compra?",
        answer: [
          "Sim, enquanto sua assinatura estiver ativa, será cobrado o valor correspondente ao plano contratado, conforme as condições apresentadas no momento da adesão.",
        ],
      },
      {
        id: "cancelar-assinatura",
        question: "Posso cancelar minha assinatura?",
        answer: [
          "Sim.",
          "O cancelamento pode ser solicitado pelo aplicativo, de acordo com as regras do seu plano.",
          "O cancelamento da assinatura não elimina automaticamente eventuais parcelas de compras já realizadas.",
        ],
      },
      {
        id: "cancelar-clube-compras",
        question: "Se eu cancelar o Clube, minhas compras parceladas continuam?",
        answer: [
          "Sim.",
          "O cancelamento da assinatura não cancela compras já realizadas.",
          "As parcelas que ainda estiverem em aberto continuam sendo devidas e deverão ser pagas normalmente.",
        ],
      },
      {
        id: "voltar-a-assinar",
        question: "Posso voltar a assinar depois de cancelar?",
        answer: [
          "Sim, desde que o Clube esteja disponível para o seu perfil e você atenda aos critérios vigentes no momento da nova adesão.",
        ],
      },
    ],
  },
  {
    id: "limite",
    number: 4,
    title: "Limite de crédito",
    items: [
      {
        id: "como-descubro-limite",
        question: "Como descubro meu limite?",
        featured: true,
        answer: ["Seu limite disponível aparece diretamente no aplicativo Parcelei."],
      },
      {
        id: "como-limite-definido",
        question: "Como meu limite é definido?",
        answer: [
          "O limite é definido a partir da análise de crédito, risco e dos critérios utilizados pela Parcelei.",
          "Esses critérios podem considerar diferentes informações relacionadas ao perfil financeiro e de crédito.",
        ],
      },
      {
        id: "limite-aumentar",
        question: "Meu limite pode aumentar?",
        answer: [
          "Sim.",
          "O limite pode ser reavaliado ao longo do relacionamento com a Parcelei, considerando fatores como utilização e histórico de pagamentos.",
        ],
      },
      {
        id: "limite-diminuir",
        question: "Meu limite pode diminuir?",
        answer: [
          "Sim.",
          "O limite disponível pode ser alterado de acordo com novas análises de crédito, comportamento de pagamento ou critérios de segurança e risco.",
        ],
      },
      {
        id: "limite-e-o-valor",
        question: "O limite que aparece no aplicativo é o valor que posso gastar?",
        answer: [
          "É o valor disponível para novas compras, respeitando as regras e condições da Parcelei e do estabelecimento comercial.",
        ],
      },
      {
        id: "limite-liberado",
        question: "Quando meu limite é liberado novamente?",
        answer: [
          "À medida que suas compras são pagas, o limite utilizado pode ser liberado novamente, conforme as regras da Parcelei.",
        ],
      },
      {
        id: "sacar-limite",
        question: "Posso sacar meu limite em dinheiro?",
        answer: [
          "Não.",
          "O limite da Parcelei é destinado à realização de compras nos estabelecimentos comerciais.",
        ],
      },
    ],
  },
  {
    id: "compra",
    number: 5,
    title: "Como fazer uma compra",
    items: [
      {
        id: "como-comprar",
        question: "Como faço uma compra com a Parcelei?",
        featured: true,
        answer: [
          "Escolha um estabelecimento comercial, informe que deseja pagar a compra via Pix, abra o aplicativo e siga as instruções apresentadas na tela.",
        ],
      },
      {
        id: "dinheiro-na-conta",
        question: "Preciso ter dinheiro na conta para fazer a compra?",
        answer: [
          "Para realizar o pagamento das parcelas, você precisará ter saldo disponível na sua conta bancária na data de vencimento.",
        ],
      },
      {
        id: "primeira-parcela",
        question: "Como pago minha primeira parcela?",
        answer: [
          "No momento da compra, o aplicativo apresentará as condições da operação e a forma de pagamento da primeira parcela.",
          "Siga as instruções para realizar o Pix.",
        ],
      },
      {
        id: "valor-parcela",
        question: "Como sei quanto vou pagar em cada parcela?",
        answer: [
          "Antes de confirmar a compra, o aplicativo apresentará o valor da compra, a quantidade de parcelas e o valor de cada pagamento.",
          "Confira essas informações antes de confirmar.",
        ],
      },
      {
        id: "escolher-parcelas",
        question: "Posso escolher o número de parcelas?",
        answer: [
          "A quantidade de parcelas disponível depende das condições oferecidas para sua compra e do seu perfil.",
          "O aplicativo mostrará as opções disponíveis antes da confirmação.",
        ],
      },
      {
        id: "mais-de-uma-compra",
        question: "Posso fazer mais de uma compra ao mesmo tempo?",
        answer: [
          "Sim, desde que você possua limite disponível e as novas transações sejam aprovadas.",
        ],
      },
      {
        id: "qualquer-produto",
        question: "Posso usar a Parcelei para qualquer produto ou serviço?",
        answer: [
          "A utilização depende dos estabelecimentos e categorias aceitas pela Parcelei.",
          "Consulte no aplicativo os locais disponíveis.",
        ],
      },
    ],
  },
  {
    id: "pagamento",
    number: 6,
    title: "Pagamento das parcelas",
    items: [
      {
        id: "quando-vencem",
        question: "Quando vencem minhas parcelas?",
        answer: [
          "As datas de vencimento são apresentadas no aplicativo no momento da contratação e podem ser consultadas posteriormente na área de pagamentos.",
        ],
      },
      {
        id: "como-pagar-parcela",
        question: "Como faço para pagar uma parcela?",
        featured: true,
        answer: [
          "Abra o aplicativo Parcelei, acesse suas compras e selecione a parcela que deseja pagar.",
          "O aplicativo apresentará as instruções para pagamento via Pix.",
        ],
      },
      {
        id: "antecipar-uma",
        question: "Posso antecipar uma parcela?",
        answer: [
          "Sim, se a antecipação estiver disponível para sua compra, essa opção aparecerá no aplicativo.",
        ],
      },
      {
        id: "antecipar-todas",
        question: "Posso antecipar todas as parcelas?",
        answer: ["Sim. Você poderá consultar as condições diretamente no aplicativo."],
      },
      {
        id: "atrasar",
        question: "O que acontece se eu atrasar uma parcela?",
        answer: [
          "O atraso pode gerar consequências previstas nas condições da contratação, além de poder afetar a disponibilidade do seu crédito.",
          "Consulte no aplicativo os detalhes da sua situação.",
        ],
      },
      {
        id: "atraso-limite",
        question: "O atraso pode reduzir meu limite?",
        answer: [
          "Sim.",
          "O histórico de pagamentos pode ser considerado em futuras análises de crédito e pode impactar o limite disponível.",
        ],
      },
      {
        id: "usar-com-atraso",
        question: "Posso continuar usando a Parcelei se tiver uma parcela atrasada?",
        answer: [
          "A utilização de novos créditos pode ficar temporariamente indisponível enquanto houver pagamentos em atraso.",
        ],
      },
      {
        id: "lembretes",
        question: "Receberei lembretes antes do vencimento?",
        answer: [
          "A Parcelei poderá enviar lembretes para ajudar você a acompanhar seus pagamentos.",
          "Mesmo assim, recomendamos que você acompanhe suas próximas parcelas diretamente pelo aplicativo.",
        ],
      },
    ],
  },
  {
    id: "cancelamento",
    number: 7,
    title: "Cancelamento, estorno e problemas com a compra",
    items: [
      {
        id: "quero-cancelar",
        question: "Fiz uma compra e quero cancelar. O que devo fazer?",
        featured: true,
        answer: [
          "O cancelamento da compra deve seguir as regras do estabelecimento onde a compra foi realizada.",
          "Entre em contato com o estabelecimento para solicitar o cancelamento.",
        ],
      },
      {
        id: "cancelei-parcelas",
        question: "Cancelei minha compra. E as parcelas?",
        answer: [
          "Depois que o estabelecimento confirmar o cancelamento, a Parcelei realizará os procedimentos necessários conforme as regras da operação.",
          "Acompanhe a atualização diretamente pelo aplicativo.",
        ],
      },
      {
        id: "parcela-apos-cancelamento",
        question: "Minha compra foi cancelada, mas ainda aparece uma parcela. O que faço?",
        answer: [
          "Primeiro, confirme se o estabelecimento já processou o cancelamento.",
          "Se o cancelamento já foi confirmado e a cobrança continuar aparecendo, entre em contato com o suporte da Parcelei pelo aplicativo.",
        ],
      },
      {
        id: "produto-nao-chegou",
        question: "O produto não chegou. Devo parar de pagar?",
        answer: [
          "Não interrompa os pagamentos por conta própria.",
          "Problemas relacionados à entrega, produto ou serviço devem ser tratados inicialmente com o estabelecimento responsável pela venda.",
          "Se precisar, nossa equipe poderá orientar você sobre os próximos passos.",
        ],
      },
      {
        id: "produto-diferente",
        question: "Recebi um produto diferente do que comprei. O que faço?",
        answer: [
          "Entre em contato diretamente com o estabelecimento onde a compra foi realizada.",
          "A Parcelei é responsável pelo processamento do pagamento, enquanto questões relacionadas ao produto ou serviço devem ser tratadas com o estabelecimento.",
        ],
      },
      {
        id: "problema-estabelecimento",
        question: "Tive um problema com o estabelecimento. A Parcelei pode ajudar?",
        answer: [
          "Sim.",
          "Nossa equipe pode orientar você sobre questões relacionadas ao pagamento.",
          "Para problemas relacionados ao produto, entrega, troca ou serviço, o primeiro contato deve ser feito com o estabelecimento.",
        ],
      },
    ],
  },
  {
    id: "seguranca",
    number: 8,
    title: "Segurança",
    items: [
      {
        id: "e-segura",
        question: "A Parcelei é segura?",
        featured: true,
        answer: [
          "A Parcelei utiliza mecanismos de segurança para proteger seus dados, sua conta e suas transações.",
          "Nunca compartilhe senhas, códigos de autenticação ou informações confidenciais com terceiros.",
        ],
      },
      {
        id: "pede-senha",
        question: "A Parcelei pede senha ou código por WhatsApp?",
        answer: [
          "Desconfie de qualquer pessoa que solicite sua senha, código de segurança ou informações confidenciais em nome da Parcelei.",
          "Nunca compartilhe códigos recebidos por SMS ou aplicativo com terceiros.",
        ],
      },
      {
        id: "transacao-desconhecida",
        question: "O que faço se identificar uma transação que não reconheço?",
        answer: [
          "Entre imediatamente em contato com o suporte da Parcelei pelo aplicativo.",
          "Nossa equipe poderá orientar você sobre os procedimentos necessários.",
        ],
      },
      {
        id: "perdi-celular",
        question: "Perdi ou troquei de celular. Minha conta continua segura?",
        answer: [
          "Sim. Para sua segurança, recomendamos acessar sua conta novamente apenas por meio do aplicativo oficial e seguir as etapas de validação solicitadas.",
          "Se você suspeitar que alguém teve acesso à sua conta, entre em contato com nosso suporte imediatamente.",
        ],
      },
    ],
  },
  {
    id: "conta",
    number: 9,
    title: "Conta e aplicativo",
    items: [
      {
        id: "onde-compras",
        question: "Onde vejo minhas compras?",
        featured: true,
        answer: [
          "No aplicativo Parcelei, você poderá consultar suas compras, parcelas, pagamentos e limite disponível.",
        ],
      },
      {
        id: "onde-limite",
        question: "Onde vejo meu limite disponível?",
        answer: ["Seu limite disponível fica na área de crédito do aplicativo."],
      },
      {
        id: "onde-parcelas",
        question: "Onde vejo minhas próximas parcelas?",
        answer: [
          "Acesse a área de pagamentos para consultar suas próximas parcelas e respectivas datas de vencimento.",
        ],
      },
      {
        id: "alterar-dados",
        question: "Como altero meus dados cadastrais?",
        answer: [
          "Acesse seu perfil no aplicativo e verifique quais informações podem ser atualizadas diretamente.",
          "Algumas alterações podem exigir uma nova validação de segurança.",
        ],
      },
      {
        id: "troquei-celular",
        question: "Troquei meu número de celular. O que faço?",
        answer: [
          "Acesse o aplicativo e siga o processo de atualização cadastral.",
          "Se não conseguir acessar sua conta, entre em contato com o suporte.",
        ],
      },
      {
        id: "esqueci-senha",
        question: "Esqueci minha senha ou não consigo acessar minha conta. O que faço?",
        answer: [
          "Na tela de acesso, utilize a opção de recuperação disponível no aplicativo.",
          "Se o problema continuar, procure o suporte da Parcelei.",
        ],
      },
    ],
  },
  {
    id: "suporte",
    number: 10,
    title: "Suporte",
    items: [
      {
        id: "como-contato",
        question: "Como entro em contato com a Parcelei?",
        featured: true,
        answer: [
          "O atendimento pode ser realizado pelos canais oficiais disponibilizados no aplicativo e no site da Parcelei.",
        ],
      },
      {
        id: "horario",
        question: "Qual é o horário de atendimento?",
        answer: ["Consulte no aplicativo ou no site os horários atualizados de atendimento."],
      },
      {
        id: "termos",
        question: "Onde encontro os termos e condições?",
        answer: [
          "Os Termos de Uso, Política de Privacidade e demais documentos aplicáveis ficam disponíveis nos canais oficiais da Parcelei.",
        ],
      },
      {
        id: "ainda-duvidas",
        question: "Ainda tenho dúvidas. O que faço?",
        answer: [
          "Se você não encontrou sua resposta nesta FAQ, entre em contato com nosso atendimento.",
          "Estamos aqui para ajudar você.",
        ],
      },
    ],
  },
  {
    id: "rapidas",
    number: 11,
    title: "Perguntas rápidas",
    items: [
      {
        id: "usa-cartao",
        question: "A Parcelei usa cartão?",
        answer: ["Não."],
      },
      {
        id: "funciona-pix",
        question: "A Parcelei funciona com Pix?",
        answer: ["Sim."],
      },
      {
        id: "rapida-cartao",
        question: "Preciso ter cartão de crédito?",
        featured: true,
        answer: ["Não."],
      },
      {
        id: "conta-banco",
        question: "Preciso ter conta em banco?",
        answer: ["Você precisará de uma conta que permita realizar os pagamentos via Pix."],
      },
      {
        id: "posso-parcelar",
        question: "Posso parcelar minhas compras?",
        answer: ["Sim, nas condições disponibilizadas para sua compra."],
      },
      {
        id: "pago-juros",
        question: "Pago juros?",
        hidden: true,
        answer: [
          "Sim. Assinando o Clube Parcelei você fica isento da cobrança de juros nas parcelas.",
        ],
      },
      {
        id: "pago-mensalidade",
        question: "Pago mensalidade?",
        hidden: true,
        answer: ["Se você participar do Clube Parcelei, sim, conforme o plano contratado."],
      },
      {
        id: "sacar-dinheiro",
        question: "Posso usar meu limite para sacar dinheiro?",
        answer: ["Não."],
      },
      {
        id: "qualquer-lugar",
        question: "Posso usar a Parcelei em qualquer lugar?",
        answer: [
          "Não. Apenas nos estabelecimentos comerciais que comercializem produtos e serviços essenciais: alimentação e saúde.",
        ],
      },
      {
        id: "mais-de-uma-conta",
        question: "Posso ter mais de uma conta?",
        answer: ["Não."],
      },
      {
        id: "limite-muda",
        question: "Meu limite pode mudar?",
        answer: ["Sim."],
      },
      {
        id: "perder-limite",
        question: "Posso perder meu limite?",
        answer: [
          "O limite pode ser alterado de acordo com novas análises e critérios da Parcelei.",
        ],
      },
    ],
  },
];

export function visibleFaqCategories(): FaqCategory[] {
  return FAQ_CATEGORIES.flatMap((category) => {
    if (category.hidden) return [];
    const items = category.items.filter((item) => !item.hidden);
    if (items.length === 0) return [];
    return [{ ...category, items }];
  });
}

export function homeFaqEntries(): { category: FaqCategory; item: FaqItem }[] {
  return visibleFaqCategories().flatMap((category) => {
    const item = category.items.find((entry) => entry.featured) ?? category.items[0];
    return item ? [{ category, item }] : [];
  });
}
