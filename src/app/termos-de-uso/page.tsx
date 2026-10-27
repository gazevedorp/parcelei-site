import type { Metadata } from "next";
import { LegalDoc, type LegalSection } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Termos de uso · Parcelei",
  description: "Termos de uso da plataforma Parcelei para consumidores.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "finalidade",
    title: "1. Qual a finalidade destes Termos de Uso?",
    blocks: [
      'Este documento ("Termos de Uso") é um contrato, entre a PARCELEI SERVIÇOS DIGITAIS LTDA, empresa inscrita no CNPJ sob o nº 58.473.999/0001-76, que possui sede na Rua Conceição, 233, sala 916, Centro, Campinas – SP, ("Parcelei") e o consumidor que utiliza os serviços por ela disponibilizados ("Você"), que explica como funcionam nossos serviços e quais são as regras aplicáveis ao relacionamento entre nós.',
      "Quando Você usa os serviços oferecidos pela Parcelei, Você concorda com todas as condições previstas nestes Termos de Uso, por isso deve ler este documento com bastante atenção, antes de usar nossos serviços. Caso Você não concorde com qualquer das disposições desses Termos de Uso, Você não deve utilizar os serviços.",
      'Para que possamos oferecer os serviços, precisaremos coletar e tratar alguns dados pessoais. Os dados pessoais que Você nos fornece, diretamente ou indiretamente, serão tratados de acordo com o disposto em nossa Política de Privacidade ("Política de Privacidade").',
      "Se tiver qualquer dúvida sobre esses Termos de Uso ou nossa Política de Privacidade, consulte nossos canais oficiais de atendimento por meio do site www.parcelei.com.br e fale conosco antes de utilizar nossos serviços.",
    ],
  },
  {
    id: "quem-e",
    title: "2. Quem é a Parcelei e o que ela oferece?",
    blocks: [
      'A Parcelei é uma empresa que oferece uma plataforma via app ("Parcelei") que permite o pagamento de compras de forma parcelada, via Pix, junto a uma rede variada de estabelecimentos comerciais ("Lojistas").',
    ],
  },
  {
    id: "acesso",
    title: "3. Como posso acessar os serviços da Parcelei?",
    blocks: [
      "A Parcelei está disponível para acesso pelo site www.parcelei.com.br onde você encontra o link direto para as lojas de aplicativos ou diretamente nas lojas de aplicativos Play Store e Apple Store.",
      "Após baixar o app, fazer seu cadastro e ter sua análise de crédito aprovada, você pode utilizar nossos serviços diretamente ao efetuar uma compra em qualquer Lojista, bastando selecionar as opções de parcelamento no momento de finalizar a sua compra e optando em realizar o pagamento no estabelecimento comercial na modalidade Pix.",
    ],
  },
  {
    id: "quem-pode",
    title: "4. Quem pode usar a Parcelei?",
    blocks: [
      "A Parcelei pode ser usada por qualquer pessoa física residente no Brasil, desde que seja maior de 18 (dezoito) anos e civilmente capaz, que aceitar esses Termos de Uso e for aprovada no processo de criação de conta e análise de crédito da Parcelei.",
      "Ao usar a Parcelei e aceitar esses Termos de Uso, você declara e garante que preenche tais requisitos.",
    ],
  },
  {
    id: "conta",
    title: "5. Como posso criar a minha conta para usar a Parcelei?",
    blocks: [
      "Recomenda-se criar a sua conta e fazer sua análise de crédito previamente, antes do momento da sua compra. Você preencherá um cadastro com alguns dados pessoais, dará o aceite nos Termos de Uso e consentimentos de Open Finance, SCR do Banco Central e pix automático, passando por uma avaliação de perfil e riscos.",
      "Após a criação da conta, no primeiro acesso a Parcelei, você deverá criar uma senha e mantê-la em sigilo.",
    ],
  },
  {
    id: "como-usar",
    title: "6. Como posso usar a Parcelei?",
    blocks: [
      "Você pode utilizar a Parcelei para pagar compras tanto em lojas online quanto em lojas físicas.",
      "Para compras em lojas online, basta você selecionar pagamento por pix como meio de pagamento, no momento do fechamento do carrinho, confirmar o valor da compra e será necessário copiar o código pix disponibilizado pelo Lojista, colar dentro do app da Parcelei e seguir o fluxo que for apresentado.",
      "Com isso sua compra será efetuada e seu pagamento será processado.",
      "Para compras em lojas físicas, é necessário ler o QR Code (código de barras bidimensional) disponibilizado pelo Lojista e/ou seguir o fluxo que for apresentado.",
      "A partir da sua escolha por nosso meio de pagamento, a Parcelei, de acordo com seus critérios, poderá consultar uma série de informações junto a bancos de dados públicos e/ou privados, por meios próprios ou de parceiros da Parcelei, para fins de avaliação de perfil e de riscos, que será realizada de acordo com critérios definidos pela Parcelei.",
      "Para uma avaliação mais robusta é importante que a Parcelei possa acessar informações sobre operações de crédito disponíveis no Open Finance e SCR (Sistema de Informação de Crédito) mantido pelo Banco Central do Brasil. Assim, você autoriza a Parcelei, por si ou por seus parceiros financeiros, a qualquer tempo, a consultar o Open Finance e SCR sobre eventuais informações existentes sobre você e, nesse contexto, fornecer ao Banco Central do Brasil as informações que venham a ser requeridas, tais como histórico de recebimentos e pagamentos, o valor de suas parcelas a vencer e vencidas, o valor de eventuais taxas de serviço ou de conveniência cobradas e não pagas por você.",
      "Se Você for aprovado no processo de avaliação de parcelamento, que leva poucos segundos, o valor da sua compra será parcelado e a Parcelei vai gerar um QR Code e um código Copia e Cola para pagamento da primeira parcela, via Pix – ATENÇÃO! O código pode expirar em até 2 (duas) horas.",
      "Em seguida, você deve entrar no site ou aplicativo de seu banco ou instituição de pagamento e seguir o passo-a-passo aplicável para efetivação do Pix.",
      "Assim que o pagamento via Pix da primeira parcela for efetuado, a Parcelei automaticamente comunicará ao Lojista transferindo o valor integral da compra instantaneamente e, então, a compra será confirmada! A confirmação geralmente acontece em segundos. Se Você não pagar a primeira (ou a única) parcela no ato da compra, o Lojista não receberá a confirmação automática do pagamento e a compra não será efetivada.",
      "Após esse fluxo você receberá por email a sua CCB (cédula de crédito bancário), documento esse que formaliza junto a órgão reguladores o que crédito que você contratou.",
      {
        lead: "Atenção:",
        note: "Podemos recusar uma transação de pagamento por motivos de segurança, como suspeita de fraude ou identificação de indícios de operação fora do padrão, entre outros – se isso acontecer consulte a seção Ajuda de nosso site, disponível www.parcelei.com.br/ajuda/.",
      },
    ],
  },
  {
    id: "quantas-compras",
    title: "7. Posso realizar quantas compras eu quiser com a Parcelei?",
    blocks: [
      "Em regra, você pode efetuar novas compras com a Parcelei, desde que tenha limite disponível e não tenha parcelas em aberto ou atrasadas. A Parcelei, a seu critério, poderá, pontualmente, flexibilizar esta regra, permitindo que você pague novas compras mesmo se tiver parcelas em aberto.",
      "Vale lembrar que todas as transações de pagamento de compras passarão pelo processo de avaliação de perfil e de riscos mencionado no item 6 acima e que mesmo clientes antigos podem ter novas transações de pagamento recusadas por motivos de segurança.",
    ],
  },
  {
    id: "custo",
    title: "8. Qual o custo de usar a Parcelei?",
    blocks: [
      "A Parcelei oferece uma forma para que você possa realizar pagamento de compras, de modo parcelado, podendo cobrar taxas de serviço, taxas de conveniência e outros encargos, os quais serão claramente apresentados a Você durante a jornada de pagamento.",
    ],
  },
  {
    id: "parcelamento",
    title: "9. Como funciona o parcelamento via Parcelei?",
    blocks: [
      'Nos casos aprovados em nossa avaliação de crédito, o valor do seu limite é disponibilizado na sua carteira e dentro desse limite você pode utilizar para fazer suas compras. O valor total das compras pode ser dividido em até 4 parcelas quinzenais, sendo a primeira parcela no ato, a segunda parcela em quinze dias, a terceira parcela em trinta dias e a quanta parcela em quarenta e cinco dias. Para viabilizar os pagamentos e parcelamentos, podem ser instituídos arranjos de pagamentos, estruturados fundos de investimentos em direitos creditórios ("FIDC") ou operações assemelhadas e firmadas parcerias com instituições financeiras.',
    ],
  },
  {
    id: "cobranca",
    title: "10. Como é feita a cobrança das parcelas?",
    blocks: [
      "Você deverá concordar com a iniciação do pagamento dando o aceite da cobrança por via pix automático. Com isso sua parcela será cobrada automaticamente, na data do vencimento em sua conta bancária como qual você deu o aceite. Em caso de falha nas tentativas por falta de saldo em conta, a Parcelei poderá utilizar outros meios de cobrança das parcelas em aberto, por cartão de crédito tokenizado dentro do aplicativo ou lembretes por mensageria. Em casos de atrasos de pagamentos por falha nos meios principais utilizados, alguns dias após o vencimento de cada parcela enviaremos lembretes para os canais de contato que você cadastrou (por exemplo, por meio de e-mail, WhatsApp e/ou SMS). Os QR Codes para pagamento via Pix poderão ser acessados diretamente na sua conta parcelei. Lembre-se de que a Parcelei é uma solução de pagamento e parcelamento, sendo a quitação das parcelas devida por você independentemente da entrega do produto.",
    ],
  },
  {
    id: "atraso",
    title: "11. E se eu atrasar um pagamento?",
    blocks: [
      "Se Você atrasar o pagamento, poderá gerar uma série de consequências e impactos na sua jornada junto à Parcelei.",
      "Você perderá imediatamente qualquer isenção ou vantagem promocional que tenha sido concedida no ato da compra.",
      "Sobre o valor principal da parcela em atraso, incidirão juros moratórios e multa, conforme detalhado nos anexos específicos de cada Produto.",
      "Seu acesso a novos parcelamentos e serviços da Plataforma Parcelei poderá ser bloqueado até que a pendência seja integralmente regularizada.",
      "A Parcelei reserva-se o direito de declarar o vencimento antecipado de todas as parcelas vincendas na mesma transação, tornando o saldo total da compra exigível de imediato, a título de Cláusula Penal Compensatória.",
      "Caso Você atrase o pagamento de qualquer parcela, poderão ser tomadas pela Parcelei, pela instituição parceira e pelo FIDC as medidas necessárias para cobrança, inclusive protesto e inscrição do nome do devedor nos serviços de proteção ao crédito.",
      "Por fim, você reconhece e concorda que seu débito poderá ser concedido a empresas especializadas em recuperação de crédito ou a terceiros, que passarão a ser os novos credores da obrigação.",
    ],
  },
  {
    id: "historico",
    title: "12. Posso consultar o histórico de minhas compras?",
    blocks: [
      "Sim, o histórico das compras realizadas, valores pagos, parcelas vencidas e a vencer ficam disponíveis para consulta na Parcelei pelo prazo de, pelo menos, 6 (seis) meses da data de cada transação.",
    ],
  },
  {
    id: "encerrar",
    title: "13. E se eu quiser encerrar minha conta?",
    blocks: [
      "Esse processo é simples e apenas necessita de sua ação dentro da própria conta Parcelei. Vale ressaltar que este processo será efetuado se não houver parcelas em aberto.",
      'Acesse o recurso "Perfil" e clique em "Configurações da conta Parcelei" e na sequência "Exclusão da conta". Sua solicitação será analisada em até 45 dias e te atualizaremos por e-mail sobre o efetivo cancelamento.',
    ],
  },
  {
    id: "encerramento-parcelei",
    title: "14. A Parcelei pode encerrar minha conta?",
    blocks: [
      "Sim, nós podemos encerrar sua conta imediatamente, mediante simples notificação, nas seguintes hipóteses:",
      {
        ul: [
          "a) caso você não utilize a Parcelei por mais de 12 (doze) meses consecutivos;",
          "b) caso haja suspeita de que você violou quaisquer das disposições desses Termos de Uso, ou da legislação e regulamentação infralegal pertinente;",
          "c) caso sejam identificadas operações fora do padrão de uso, e você deixe de atender pedido de envio de novos documentos e/ou informações para a comprovação da regularidade dessas operações, nos prazos solicitados;",
          "d) em caso de seu falecimento;",
          "e) caso se verifique que seu CPF consta como cancelado nas bases de dados da Receita Federal Brasileira; ou",
          "f) caso se verifique que seu CPF consta como suspenso ou pendente de regularização nas bases de dados da Receita Federal Brasileira – neste caso, somente será possível solicitar a abertura de uma nova conta após a comprovação da regularização do CPF.",
        ],
      },
      "Também podemos encerrar sua conta imotivadamente, por mero desinteresse comercial, a qualquer momento, mediante comunicação prévia.",
    ],
  },
  {
    id: "conta-encerrada",
    title: "15. O que acontece se minha conta for encerrada?",
    blocks: [
      "Você não poderá realizar novas compras, mas seguirá obrigado a pagar as parcelas que eventualmente estiverem em aberto.",
    ],
  },
  {
    id: "propriedade",
    title: "16. De quem é a propriedade intelectual da Parcelei?",
    blocks: [
      "A identidade visual da Parcelei, assim como as marcas, logomarcas, nomes de domínio ou quaisquer outros sinais distintivos da Parcelei presentes na Parcelei são de propriedade exclusiva da Parcelei. As marcas, logomarcas, nomes de domínio ou quaisquer outros sinais distintivos dos Lojistas ou de terceiros são de propriedade exclusiva de referidos Lojistas ou terceiros.",
      "A utilização da Parcelei não confere a Você qualquer direito sobre essa propriedade intelectual, tampouco lhe concede qualquer direito ao software ou funcionalidade empregados na Parcelei.",
      "É expressamente vedado:",
      {
        ul: [
          "a) copiar ou alterar de qualquer forma a propriedade intelectual da Parcelei;",
          "b) realizar engenharia reversa, descompilação ou atividades semelhantes;",
          "c) remover, ocultar ou alterar qualquer bloqueio ou mecanismo de segurança existente que restrinja o acesso a determinada funcionalidade;",
          "d) utilizar a Parcelei para quaisquer outros fins que não os expressamente previstos nesses Termos De Uso.",
        ],
      },
    ],
  },
  {
    id: "responsabilidade",
    title: "17. Há alguma limitação de responsabilidade por parte da Parcelei?",
    blocks: [
      { h3: "Compras" },
      "A Parcelei não é responsável pelas compras cujo pagamento você realizar por meio da Parcelei, uma vez que não é parte de qualquer operação de compra e venda junto aos Lojistas. Assim, a Parcelei não responde por: (i) eventual restrição ao uso da Parcelei imposta por referidos Lojistas; (ii) desacordo comercial entre você e determinado Lojista e/ou por prejuízos decorrentes deste; ou (iii) pelo preço, quantidade, qualidade ou atraso na entrega do bem ou serviço adquirido. Neste sentido, é sua obrigação verificar: (i) a idoneidade do Lojista junto ao qual pretende realizar uma compra; e (ii) a correção das condições de cada compra antes de efetivá-la.",
      {
        lead: "Atenção:",
        note: "a Parcelei atua somente como prestadora de um serviço de pagamentos. Eventuais reclamações, demandas ou problemas relacionados aos produtos e/ou serviços adquiridos por intermédio da Parcelei deverão ser solucionados diretamente com o Lojista que os forneceu, não podendo a Parcelei ser responsabilizada, em qualquer hipótese.",
      },
      "Diante de um acordo celebrado entre você e o Lojista, para o desfeito da operação de compra e venda, a Parcelei, após acatar uma solicitação formal do Lojista, efetuará o reembolso para Você em até 14 (quatorze) dias, exceto se forem identificados indícios de fraude ou conluio com o Lojista.",
      { h3: "Indisponibilidades" },
      "Procuramos manter a Parcelei disponível em tempo integral, mas imprevistos podem levar a interrupções ou falhas no acesso. Não podemos garantir, portanto, a disponibilidade ininterrupta do Site Parcelei e do app Parcelei. Não obstante, nessas hipóteses, você poderá entrar em contato conosco através de nossos canais de atendimento para relatar o problema, de forma que possamos adotar as providências necessárias para o reestabelecimento no menor prazo possível. Além disso, a Parcelei se reserva o direito de, a qualquer tempo, retirar a Parcelei do ar ou alterar o seu conteúdo, sem aviso prévio.",
      { h3: "Uso indevido de falhas" },
      "Caso sejam identificadas tentativas de uso indevido da plataforma decorrentes de falhas técnicas, erros temporários ou comportamentos inesperados do sistema, a Parcelei poderá cancelar operações, suspender acessos e tomar as medidas cabíveis, incluindo a cobrança de valores obtidos de forma irregular e a adoção de medidas legais, se houver indício de má-fé.",
      { h3: "Links de terceiros" },
      "A Parcelei não se responsabiliza por links para sites e/ou aplicativos de terceiros que sejam ou venham a ser disponibilizados na Parcelei, nem garante a veracidade das informações de terceiros que eventualmente sejam divulgadas no Site Parcelei ou na Plataforma Parcelei. Se Você acessar os links, ficará sujeito aos termos e condições de uso dos respectivos sites e/ou aplicativos.",
      { h3: "Links e arquivos Parcelei" },
      "A Parcelei não envia e-mail com links ou arquivos para atualização de cadastro, e recomenda que você não acesse links e arquivos que vier a receber. Caso isso venha a ocorrer, você deverá entrar em contato conosco imediatamente, para confirmar a procedência dessa comunicação.",
    ],
  },
  {
    id: "lavagem",
    title: "18. Quais são as obrigações a prevenção a lavagem de dinheiro?",
    blocks: [
      "A Parcelei cumpre rigorosamente a Lei nº 9.613/1998 e as normas do Banco Central do Brasil relativas à prevenção da lavagem de dinheiro e do financiamento ao terrorismo. Ao utilizar a Plataforma, você declara e garante que:",
      {
        ul: [
          "Os recursos utilizados para o pagamento das parcelas de suas compras têm origem lícita e declarada;",
          "A Parcelei poderá, a qualquer momento, solicitar documentos adicionais para comprovar a sua identidade e a regularidade de suas transações;",
          "Caso sejam identificadas operações atípicas, a Parcelei poderá suspender sua conta e reportar tais atividade aos órgãos competentes (como o COAF), sem necessidade de aviso prévio.",
        ],
      },
    ],
  },
  {
    id: "cet",
    title: "19. O que é Custo Efetivo Total (CET)?",
    blocks: [
      'Em conformidade com a regulamentação bancária, para toda operação de parcelamento ou crédito, a Parcelei apresentará a Você o Custo Efetivo Total (CET) antes da confirmação da compra. O CET representa o custo real da operação, expresso na forma de taxa percentual anual, incluindo não apenas a taxa de conveniência, mas também juros, tributos (como o IOF), seguros e demais encargos incidentes na transação. Ao clicar em "Pagar", você declara que leu e compreendeu o CET daquela operação específica.',
    ],
  },
  {
    id: "superendividamento",
    title: "20. Como a Parcelei atua contra o Superendividamento?",
    blocks: [
      "Em observância à Lei nº 14.181/2021 (Lei do Superendividamento), a Parcelei promove o crédito responsável. A avaliação de perfil e riscos mencionada na pergunta de número 6 também visa garantir que o parcelamento oferecido seja compatível com sua saúde financeira.",
      "A Parcelei reserva-se o direito de negar crédito ou limitar o número de parcelas disponíveis caso identifique risco de comprometimento excessivo de sua renda. Recomendamos que você avalie sua capacidade de pagamento antes de assumir novos compromissos financeiros.",
    ],
  },
  {
    id: "lgpd",
    title: "21. Quais são seus direitos em relação à LGPD?",
    blocks: [
      "Além do disposto em nossa Política de Privacidade, Você, como titular de dados pessoais, possui direitos garantidos pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018):",
      {
        ul: [
          "Você pode solicitar, a qualquer momento, a confirmação da existência de tratamento, o acesso aos seus dados, a correção de dados incompletos ou a exclusão de dados desnecessários;",
          "A exclusão definitiva de dados está sujeita aos prazos legais de guarda de documentos financeiros e registros de transações exigidos pelo Banco Central do Brasil e pela legislação tributária.",
        ],
      },
    ],
  },
  {
    id: "contestacao",
    title: "22. Como funciona o processo de contestação (Disputa)?",
    blocks: [
      "Caso Você não reconheça uma transação ou identifique erro no valor cobrado, deverá entrar em contato com nossos canais de atendimento imediatamente. A abertura de uma contestação não suspende automaticamente a obrigação de pagamento da parcela, salvo se houver comprovação inequívoca de fraude ou erro sistêmico da Parcelei.",
      "Desacordos comerciais relativos ao produto (entrega, qualidade ou defeito) devem ser resolvidos diretamente com o Lojista, conforme previsto no item 17 destes Termos.",
    ],
  },
  {
    id: "novos-produtos",
    title: "23. Novos produtos",
    blocks: [
      'A Parcelei é uma empresa inovadora que está em busca de atender sempre os consumidores, oferecendo novos produtos ("Novos Produtos"). Os Novos Produtos serão individualmente descritos e especificados em nossa Plataforma Parcelei. A implementação desses Novos Produtos, sua validade e uso, pelos usuários, não dependem da prévia atualização ou inclusão do conteúdo descritivo dessas novas atividades, projetos e produtos nestes Termos.',
    ],
  },
  {
    id: "mais",
    title: "24. O que mais preciso saber?",
    blocks: [
      { h3: "Contato" },
      "Estamos à disposição nos seguintes canais de atendimento:",
      {
        ul: [
          "Chat disponível no site www.parcelei.com.br",
          "WhatsApp: (11) 92139-2248",
          "E-mail: contato@parcelei.com.br",
        ],
      },
      { h3: "Alterações" },
      "Esses Termos de Uso poderão ser alterados a qualquer tempo pela Parcelei, com entrada em vigor de forma imediata, salvo se houver comunicação da Parcelei em sentido contrário, que estabeleça prazo específico para entrada em vigor de determinada alteração. Eventuais modificações serão divulgadas na Parcelei e em caso de não concordância com as alterações introduzidas, você deve se abster de utilizar novamente os serviços da Parcelei.",
      { h3: "Lei aplicável e foro" },
      "Você concorda que esses Termos de Uso e o uso da Parcelei são regidos pela legislação brasileira. Quaisquer dúvidas e situações não previstas nesses Termos de Uso serão primeiramente resolvidas pela Parcelei e, caso persistam, fica eleito o foro de seu domicílio para sua solução, com exclusão de qualquer outro, por mais privilegiado que seja.",
      { h3: "Da concordância" },
      "Ao aceitar os Termos de Uso e seus respectivos Anexos, você obriga-se a realizar os pagamentos de suas parcelas em dia, declara que está ciente e de acordo com todos estes fluxos operacionais.",
    ],
  },
];

export default function TermosDeUsoPage() {
  return (
    <LegalDoc
      title="Termos de uso da plataforma Parcelei"
      meta={["Consumidor", "Pessoa física"]}
      sections={SECTIONS}
      closing={<p>PARCELEI SERVIÇOS DIGITAIS LTDA · CNPJ 58.473.999/0001-76</p>}
    />
  );
}
