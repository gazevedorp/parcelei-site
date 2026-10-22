# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), TypeScript, Tailwind CSS. Deploy alvo: Vercel. Escolha explícita do briefing. Pacote de fonte: `geist`.

## Users

Pessoa no Brasil que precisa pagar o essencial e quer dividir um Pix em parcelas, sem cartão de crédito. Situação confirmada pelo briefing e pelo site atual (parcelei.com.br): mercado, farmácia, gás, contas da casa e compras em que já existe um Pix.

Inferência marcada: o visitante da home chega antes de ter o app, porque o produto ainda está em testes. O trabalho desta página é explicar o mecanismo e entrar na lista de espera.

## Product Purpose

Parcelei oferece Pix Parcelado sem cartão, só com o CPF, para o essencial. A Parcelei quita o Pix à vista para quem recebe e a pessoa paga a Parcelei em parcelas pelo app. Sucesso da home: a pessoa entende o mecanismo e entra na lista de espera por e-mail ou WhatsApp.

## Positioning

Parcelar um Pix sem cartão de crédito, com cadastro pelo CPF. O app mostra as parcelas antes da confirmação. Não é cartão, não é fatura e não pede download enquanto os testes não terminam.

## Operating Context

- O pagamento de origem é um Pix: leitura de QR Code ou chave Pix colada no app.
- A pessoa escolhe o número de parcelas e vê o valor de cada uma antes de confirmar.
- Depois, as parcelas ficam no app, com aviso antes do vencimento.
- A home é a porta de entrada enquanto o app está em testes.

## Capabilities and Constraints

- CTA único: lista de espera por e-mail ou WhatsApp. Nunca baixar o app.
- Selos "Em breve nas lojas". Sem link de loja.
- Simulador ilustrativo de parcelas e datas. Sem taxas e sem juros inventados. Aviso claro de que é só um exemplo.
- Formulário sem backend: validação no cliente, mensagem de sucesso, envio isolado num handler com TODO.
- Não inventar números, clientes, prazos de aprovação, taxas, juros ou parceiros.
- Textos em PT-BR, curtos, sem travessão.
- CNPJ, termos e privacidade estão pendentes e devem aparecer como placeholder.
- Contato confirmado: oi@parcelei.com.br.
- Não copiar pagaleve.com.br nem pixypay.com.br.

## Brand Commitments

- Nome: Parcelei. Site: parcelei.com.br.
- Cores fixas: #000035, #062863, #1C4C96, #7ba2e0. Fundo: #f6f7fb.
- Fonte: Geist, pacote `geist`.
- Logos brancos oficiais em `public/logo-white.png` e `public/mark-white.png`. Não redesenhar.
- Voz: direta, pouca prosa, sem promessa numérica.

## Evidence on Hand

- Logos baixados de https://parcelei.com.br/assets/logo-white.png e https://parcelei.com.br/assets/mark-white.png.
- Mecanismo, passos, lugares de uso e FAQ descritos no site atual da própria Parcelei e reafirmados no briefing. Não há depoimento, volume, nota, taxa ou CNPJ publicados para esta home.
- Ausências que não podem ser fabricadas: taxas, juros, quantidade de pessoas, tempo de aprovação, lista de lojas parceiras, número de WhatsApp da empresa, CNPJ, textos legais.

## Product Principles

- Mostrar o Pix se dividindo, em vez de afirmar que é simples.
- A lista de espera é a única ação.
- Exemplo ilustrativo nunca se passa por condição real.
- Confiança vem do mecanismo (CPF, Pix, parcelas visíveis antes de confirmar), não de estatística.
- Onde faltar um dado, o placeholder fica visível.
