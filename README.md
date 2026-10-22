# Parcelei

Home da Parcelei: Pix Parcelado sem cartão, só com o CPF. O app está em testes. O pedido da página é entrar na lista de espera.

## Rodar localmente

```bash
npm install
npm run dev
```

Produção:

```bash
npm run build
npm start
```

`?static=1` desliga as animações. Serve para revisar o layout parado.

## Deploy na Vercel

1. Envie este repositório para o GitHub.
2. Na Vercel, importe o projeto. O framework Next.js é detectado sozinho.
3. O comando de build é `npm run build`. A saída é a padrão do Next.js.
4. Não há variável de ambiente obrigatória.
5. Publique. A rota `/api/waitlist` responde, mas ainda não grava nem encaminha o contato.

Não é necessário um `vercel.json`. Não altere a proteção do deploy por arquivo de configuração.

## Pendências

- CNPJ confirmado no rodapé: 58.473.999/0001-76
- Termos de uso e privacidade: marcados como em breve, sem link
- Lista de espera: ligar `/api/waitlist` a um serviço. O ponto está marcado com TODO em `src/app/api/waitlist/route.ts`
- Textos de Confiança (criptografia, validação por CPF e regras do Pix) ainda precisam de confirmação
- A loja "Mercado Bom Preço" no mockup é fictícia
- Parcelamento de 1x a 4x, com parcela mínima de R$ 40. O simulador continua sendo exemplo, sem juros ou tarifas
