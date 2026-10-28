"use client";

/* Logos are sized by the design spec. next/image inline styles would change that box. */
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { homeFaqEntries } from "@/data/faq";
import { FaqItemView } from "./faq-accordion";
import { SiteFooter } from "./site-footer";

const HOME_FAQ = homeFaqEntries();

const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PRINTS = [
  { src: "/prints/qrcode.png", alt: "Tela para escanear o QR Code ou colar o código Pix" },
  { src: "/prints/parcelas.png", alt: "Resumo das parcelas e botão para pagar a primeira parcela" },
  { src: "/prints/confirmacao.png", alt: "Compra confirmada no app" },
];

const STEPS = [
  { title: "Leia o Pix no app", text: "Escaneie o QR Code da loja ou cole o código Copia e Cola." },
  {
    title: "Confirme e pague a 1ª parcela",
    text: "Confira os valores e o custo total e pague a primeira parcela no Pix.",
  },
  {
    title: "Pronto, está pago",
    text: "A loja recebe na hora e as demais parcelas são cobradas pelo Pix Automático.",
  },
];

const LOGOS = [
  { src: "/logos/carrefour.jpg", name: "Carrefour" },
  { src: "/logos/drogasil.jpg", name: "Drogasil" },
  { src: "/logos/assai.jpg", name: "Assaí" },
  { src: "/logos/droga-raia.jpg", name: "Droga Raia" },
  { src: "/logos/pao-de-acucar.jpg", name: "Pão de Açúcar" },
  { src: "/logos/pague-menos.jpg", name: "Pague Menos" },
  { src: "/logos/atacadao.jpg", name: "Atacadão" },
  { src: "/logos/panvel.jpg", name: "Panvel" },
  { src: "/logos/extra.jpg", name: "Extra" },
  { src: "/logos/drogaria-sp.jpg", name: "Drogaria São Paulo" },
  { src: "/logos/sam-s-club.jpg", name: "Sam's Club" },
  { src: "/logos/araujo.jpg", name: "Araujo" },
  { src: "/logos/makro.jpg", name: "Makro" },
  { src: "/logos/ultrafarma.jpg", name: "Ultrafarma" },
  { src: "/logos/mambo.jpg", name: "Mambo" },
  { src: "/logos/nissei.jpg", name: "Nissei" },
];

function LogoMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Lojas que recebem Pix">
      <ul className="marquee-track">
        {[...LOGOS, ...LOGOS].map((logo, index) => (
          <li key={`${logo.src}-${index}`} aria-hidden={index >= LOGOS.length || undefined}>
            <img src={logo.src} alt="" width={44} height={44} loading="lazy" />
            <span>{logo.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="stores">
      <div className="store">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M16.4 12.6c0-2.5 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7 0-3.2 1-4.1 2.5-1.8 3-.5 7.5 1.2 10 .8 1.2 1.8 2.6 3.1 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.3-.9-2.3-4.2zM14 5.2c.7-.8 1.1-1.9 1-3-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z"
          />
        </svg>
        <div>
          <small>Em breve na</small>
          <b>App Store</b>
        </div>
      </div>
      <div className="store">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 2.5l10.5 9.5L4 21.5c-.4-.2-.6-.6-.6-1.1V3.6c0-.5.2-.9.6-1.1zm11.6 10.5l2.6 2.4-11 6.2zm0-2L7.2 2.4l11 6.2zm4 1.1c.6.4.6 1.4 0 1.8l-2.4 1.4-2.8-2.5 2.8-2.5z"
          />
        </svg>
        <div>
          <small>Em breve no</small>
          <b>Google Play</b>
        </div>
      </div>
    </div>
  );
}

function WaitlistForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = useRef(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;
    if (!input || busy.current) return;

    const value = input.value.trim();
    setStatus("idle");

    if (!value) {
      setStatus("err");
      setMessage("Informe seu e-mail.");
      input.focus();
      return;
    }

    if (!MAIL.test(value)) {
      setStatus("err");
      setMessage("Confira o e-mail digitado.");
      input.focus();
      return;
    }

    busy.current = true;
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      if (!response.ok) throw new Error("waitlist");
      input.value = "";
      setStatus("ok");
      setMessage("Pronto! Você está na lista e vai saber primeiro.");
    } catch {
      setStatus("err");
      setMessage("Não deu para enviar agora. Tente de novo em instantes.");
    } finally {
      busy.current = false;
    }
  }

  const classes = [
    "wl",
    className,
    status === "err" ? "err" : "",
    status === "ok" ? "ok" : "",
    status === "loading" ? "loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={classes} onSubmit={onSubmit} noValidate>
      <div className="wl-field">
        <input
          ref={inputRef}
          type="email"
          name="email"
          inputMode="email"
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          autoComplete="email"
        />
        <button className="btn btn-primary" type="submit">
          <span>
            {status === "loading" ? "Enviando..." : "Quero ser avisado no lançamento"}
          </span>
        </button>
      </div>
      <p className="wl-msg" aria-live="polite">
        {message}
      </p>
      <p className="wl-legal">
        Ao enviar, você concorda com a{" "}
        <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
          Política de privacidade
        </a>
        .
      </p>
    </form>
  );
}

export function HomePage() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frozen =
      reduced ||
      new URLSearchParams(window.location.search).has("static") ||
      document.documentElement.classList.contains("is-static");

    if (new URLSearchParams(window.location.search).has("static")) {
      document.documentElement.classList.add("is-static");
    }
    document.documentElement.classList.add("js");

    const nav = document.querySelector(".nav");
    const art = document.querySelector<HTMLElement>(".hero-art");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 24);
      if (!frozen && art) {
        const shift = Math.min(window.scrollY, 480) * 0.06;
        art.style.transform = `translate3d(0, ${shift}px, 0)`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveal = document.querySelectorAll(
      ".sh,.hero-copy>*,.steps,.where-list li,.where-no,.tr li,.club-card,.acc,.cta-in>*,.foot-top>*",
    );
    reveal.forEach((element, index) => {
      element.classList.add("rv");
      (element as HTMLElement).style.transitionDelay = `${(index % 4) * 80}ms`;
      if (frozen) element.classList.add("in");
    });

    let revealObserver: IntersectionObserver | undefined;
    if (!frozen) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.15 },
      );
      reveal.forEach((element) => revealObserver?.observe(element));
    }

    let seenObserver: IntersectionObserver | undefined;
    if (!frozen) {
      seenObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("seen");
            seenObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.25 },
      );
      document.querySelectorAll(".step-phone").forEach((phone) => seenObserver?.observe(phone));
    }

    const steps = [...document.querySelectorAll(".step")];
    const screens = [...document.querySelectorAll(".hs")];
    const setStep = (index: number) => {
      [steps, screens].forEach((group) =>
        group.forEach((element, elementIndex) =>
          element.classList.toggle("on", elementIndex === index),
        ),
      );
    };
    let current = 0;
    let frame = 0;
    const syncStep = () => {
      frame = 0;
      const line = window.innerHeight * 0.5;
      let index = 0;
      steps.forEach((step, stepIndex) => {
        if (step.getBoundingClientRect().top <= line) index = stepIndex;
      });
      if (index !== current) {
        current = index;
        setStep(index);
      }
    };
    const onStepScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(syncStep);
    };
    if (!document.documentElement.classList.contains("is-static")) {
      syncStep();
      window.addEventListener("scroll", onStepScroll, { passive: true });
      window.addEventListener("resize", onStepScroll);
    }

    const fallback = window.setTimeout(() => {
      document.querySelectorAll(".rv:not(.in)").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) element.classList.add("in");
      });
    }, 2400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver?.disconnect();
      seenObserver?.disconnect();
      window.removeEventListener("scroll", onStepScroll);
      window.removeEventListener("resize", onStepScroll);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav-in">
          <a href="#topo" className="brand">
            <img src="/parcelei-logo-azul-horizontal-1024.png" alt="Parcelei" height={36} />
          </a>
          <nav className="nav-links">
            <a href="#como">Como funciona</a>
            <a href="#onde">Onde usar</a>
            <a href="#seguranca">Segurança</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a href="#lista" className="btn btn-sm btn-primary">
            Entrar na lista
          </a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="hero-glow" />
        <div className="container hero-in">
          <div className="hero-copy">
            <h1>
              Pague no Pix.
              <br />
              <span className="grad">Parcele no app.</span>
            </h1>
            <p className="lead">
              Supermercado, mercearia e saúde divididos em parcelas, só com o seu CPF. A análise de
              crédito é feita na hora.
            </p>
            <WaitlistForm />
            <StoreButtons />
            <ul className="seals">
              <li>
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 3l18 18" />
                </svg>
                Sem cartão
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <circle cx="12" cy="10" r="2.5" />
                  <path d="M8 16.5c1-1.6 2.3-2.3 4-2.3s3 .7 4 2.3" />
                </svg>
                Só com CPF
              </li>
              <li className="seal-now">
                <svg viewBox="0 0 24 24">
                  <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
                </svg>
                Análise de crédito na hora
              </li>
            </ul>
          </div>
          <div className="hero-art">
            <div className="phone phone-back phone-back-l" aria-hidden="true">
              <div className="scr scr-shot">
                <img src={PRINTS[0].src} alt="" width={1080} height={2340} />
              </div>
            </div>
            <div className="phone phone-hero">
              <div className="scr scr-shot">
                <img src={PRINTS[1].src} alt={PRINTS[1].alt} width={1080} height={2340} />
              </div>
              <div className="chip chip-a">
                <i className="ok" />
                Pix aprovado
              </div>
              <div className="chip chip-b">
                <small>1ª parcela</small>
                <b>R$ 32,48</b>
              </div>
            </div>
            <div className="phone phone-back phone-back-r" aria-hidden="true">
              <div className="scr scr-shot">
                <img src={PRINTS[2].src} alt="" width={1080} height={2340} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como" className="sec how">
        <div className="container">
          <header className="sh">
            <h2>Parcelar um Pix é simples assim.</h2>
          </header>
          <div className="how-grid">
            <div className="how-stage">
            <div className="how-sticky">
              <div className="phone phone-how">
                <div className="scr scr-shot">
                  {PRINTS.map((print, index) => (
                    <img
                      key={print.src}
                      className={index === 0 ? "hs on" : "hs"}
                      src={print.src}
                      alt=""
                      width={1080}
                      height={2340}
                    />
                  ))}
                </div>
              </div>
            </div>
            </div>
            <ol className="steps">
              {STEPS.map((step, index) => (
                <li key={step.title} className={index === 0 ? "step on" : "step"}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <div className="phone step-phone">
                    <div className="scr scr-shot">
                      <img
                        src={PRINTS[index].src}
                        alt={PRINTS[index].alt}
                        width={1080}
                        height={2340}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="onde" className="sec where">
        <div className="container">
          <header className="sh">
            <h2>Onde tem Pix, tem Parcelei.</h2>
          </header>
          <LogoMarquee />
          <div className="where-cats">
            <div className="where-bg" aria-hidden="true">
              <Image src="/photos/mercado.webp" alt="" fill sizes="(max-width: 1200px) 100vw, 1152px" />
              <span className="where-shade" />
            </div>
            <ul className="where-list">
              <li>
                <span className="where-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 4h2l2.4 11h11l2-8H6.5" />
                    <circle cx="9.5" cy="19.5" r="1.3" />
                    <circle cx="17" cy="19.5" r="1.3" />
                  </svg>
                </span>
                <div>
                  <h3>Supermercados e mercearias</h3>
                  <p>A compra do mês e o comércio do bairro.</p>
                </div>
              </li>
              <li>
                <span className="where-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="7" width="16" height="13" rx="3" />
                    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M12 10.5v6M9 13.5h6" />
                  </svg>
                </span>
                <div>
                  <h3>Saúde</h3>
                  <p>Farmácias, exames e consultas.</p>
                </div>
              </li>
              <li className="is-soon">
                <span className="where-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 9.5 5.5 4h13L20 9.5M4 9.5h16M4 9.5V20h16V9.5M10 20v-5h4v5" />
                  </svg>
                </span>
                <div>
                  <h3>
                    Outras lojas de varejo <span className="where-tag">Em breve</span>
                  </h3>
                  <p>Novas categorias entram nas próximas etapas.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="where-no">
            <h3>Não pode ser parcelado</h3>
            <ul>
              <li>Pix enviado para CPF de pessoa física</li>
              <li>Sites de apostas, cassinos e plataformas similares</li>
              <li>Compras abaixo de R$ 40,00</li>
              <li>Tributos, multas e renegociação de empréstimos</li>
              <li>Pagamento de fatura de cartão</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="seguranca" className="sec trust">
        <div className="container trust-in">
          <div className="trust-head">
            <header className="sh">
              <h2>Segurança e transparência em cada parcela.</h2>
              <p className="sub">
                A Parcelei segue a legislação brasileira de proteção de dados e de crédito. O custo
                total aparece antes de você confirmar.
              </p>
            </header>
            <dl className="trust-id">
              <div>
                <dt>Razão social</dt>
                <dd>Parcelei Serviços Digitais Ltda.</dd>
              </div>
              <div>
                <dt>CNPJ</dt>
                <dd>58.473.999/0001-76</dd>
              </div>
              <div>
                <dt>Sede</dt>
                <dd>Rua Conceição, 233, sala 916, Centro, Campinas – SP</dd>
              </div>
              <div className="trust-docs">
                <a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">
                  Termos de uso
                </a>
                <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                  Política de privacidade
                </a>
              </div>
            </dl>
          </div>

          <ul className="tr">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <div>
                <h3>Dados protegidos</h3>
                <p>
                  Seus dados são tratados conforme a LGPD, com medidas técnicas e administrativas
                  de segurança.
                </p>
                <small>Lei 13.709/2018</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              <div>
                <h3>Custo total na tela</h3>
                <p>
                  Taxas, tributos e encargos aparecem no Custo Efetivo Total antes de você tocar em
                  Pagar.
                </p>
                <small>CET</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M4 19h16M6 16V10M10 16V7M14 16v-5M18 16V5" />
              </svg>
              <div>
                <h3>Crédito responsável</h3>
                <p>
                  A análise avalia se a parcela cabe no seu orçamento, como prevê a Lei do
                  Superendividamento.
                </p>
                <small>Lei 14.181/2021</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M7 3h7l5 5v13H7z" />
                <path d="M14 3v5h5M10 13h6M10 17h4" />
              </svg>
              <div>
                <h3>Contrato formal</h3>
                <p>
                  Cada parcelamento é formalizado em uma Cédula de Crédito Bancário, enviada para o
                  seu e-mail.
                </p>
                <small>CCB</small>
              </div>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />
              </svg>
              <div>
                <h3>Consultas autorizadas</h3>
                <p>
                  As consultas ao SCR do Banco Central e ao Open Finance usam a autorização que
                  você dá no cadastro.
                </p>
                <small>SCR · Open Finance</small>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="clube" className="club">
        <div className="container">
          <div className="club-card">
            <span className="club-mark" aria-hidden="true">
              <img src="/mark-white.png" alt="" />
            </span>
            <div className="club-copy">
              <h2>
                Clube Parcelei <span className="soon">Em breve</span>
              </h2>
              <p>Uma assinatura com vantagens exclusivas para quem parcela com a Parcelei.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="sec faq">
        <div className="container faq-in">
          <header className="sh">
            <h2>Perguntas frequentes</h2>
            <p className="sub">Tudo o que você precisa saber para usar a Parcelei</p>
          </header>
          <div className="acc">
            {HOME_FAQ.map(({ category, item }, index) => (
              <FaqItemView
                key={item.id}
                item={item}
                categoryTitle={category.title}
                open={index === 0}
              />
            ))}
          </div>
          <div className="faq-more">
            <Link href="/faq" className="btn btn-primary">
              Ver mais
            </Link>
          </div>
        </div>
      </section>

      <section id="lista" className="cta">
        <div className="container cta-in">
          <div className="cta-visual" aria-hidden="true">
            <Image
              className="cta-photo"
              src="/photos/cta.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <span className="cta-shade" />
          </div>
          <div className="cta-body">
          <img src="/mark-white.png" alt="" className="cta-mark" />
          <h2>Seja um dos primeiros a parcelar.</h2>
          <p className="lead">Deixe seu e-mail e avisamos assim que o app estiver disponível.</p>
          <WaitlistForm />
          <StoreButtons />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
