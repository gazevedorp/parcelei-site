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

## Fotos

As duas fotos estão em `public/photos/`, em WebP, e entram pela `next/image`. A licença é a [Pexels License](https://www.pexels.com/license/): uso gratuito, inclusive comercial, com direito de editar. A atribuição não é obrigatória.

Não há foto na hero. O fundo já tem o mesh, a grade e o mockup do app. Uma terceira imagem ali competiria com o telefone.

- Onde usar, card Mercado. Mulher empurrando um carrinho cheio num supermercado, com o celular na mão. Autor: Gustavo Fring. Foto: https://www.pexels.com/photo/a-woman-with-a-shopping-cart-4971954/ . Licença: Pexels License, https://www.pexels.com/license/ . Arquivo: `public/photos/mercado.webp`.
- CTA final. Mulher em casa, no sofá, sorrindo com o celular na mão e a cabeça inteira no quadro. Autora: Helena Lopes. Foto: https://www.pexels.com/photo/woman-smiling-while-using-phone-on-sofa-in-home-27176011/ . Licença: Pexels License, https://www.pexels.com/license/ . Arquivo: `public/photos/cta.webp`.

## Pendências

- CNPJ confirmado no rodapé: 58.473.999/0001-76
- Termos de uso e privacidade: marcados como em breve, sem link
- Lista de espera: ligar `/api/waitlist` a um serviço. O ponto está marcado com TODO em `src/app/api/waitlist/route.ts`
- Em Confiança, os cards de CPF e de regras do Pix ainda precisam de confirmação. Os outros dois usam só o que já está fechado: sem cartão, e parcelamento de 1x a 4x com o custo total visível antes de confirmar
- A loja "Mercado Bom Preço" no mockup é fictícia
- Parcelamento de 1x a 4x, com parcela mínima de R$ 40. O simulador continua sendo exemplo, sem juros ou tarifas
