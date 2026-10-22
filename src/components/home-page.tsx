"use client";

/* Logos are sized by the design spec. next/image inline styles would change that box. */
/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState, type FormEvent } from "react";

const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN = 10;
const MAX = 10000;
const HERO_OPTS = [
  { k: "2x", v: "R$ 120,00" },
  { k: "3x", v: "R$ 80,00" },
  { k: "4x", v: "R$ 60,00" },
];

type Row = { label: string; value: string };
type SimState = {
  amountLabel: string;
  summary: string;
  invalid: boolean;
  rows: Row[];
};

const initialSim: SimState = {
  amountLabel: "R$ 100,00",
  summary: "3 parcelas · total de R$ 300,00",
  invalid: false,
  rows: [],
};

function brl(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function parseAmount(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return digits ? parseInt(digits, 10) / 100 : 0;
}

function addMonths(date: Date, months: number) {
  const next = new Date(date);
  const day = next.getDate();
  next.setMonth(next.getMonth() + months);
  if (next.getDate() !== day) next.setDate(0);
  return next;
}

function computeSim(raw: string, count: number, previous: Row[]): SimState {
  const value = parseAmount(raw);
  if (value < MIN || value > MAX) {
    return {
      amountLabel: "R$ 0,00",
      summary:
        value < MIN
          ? "Digite um valor a partir de R$ 10,00"
          : "Para o exemplo, use até R$ 10.000,00",
      invalid: true,
      rows: previous,
    };
  }

  const cents = Math.round(value * 100);
  const base = Math.floor(cents / count);
  const rest = cents - base * count;
  const today = new Date();
  const rows: Row[] = [];

  for (let i = 0; i < count; i += 1) {
    const installment = (base + (i === 0 ? rest : 0)) / 100;
    const due = addMonths(today, i + 1);
    const date = due
      .toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
      .replace(".", "");
    rows.push({
      label: `${i + 1}ª parcela · ${date}`,
      value: brl(installment),
    });
  }

  return {
    amountLabel: brl(base / 100),
    summary: `${count} parcelas · total de ${brl(value)}`,
    invalid: false,
    rows,
  };
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
    const digits = value.replace(/\D/g, "");
    setStatus("idle");

    if (!value) {
      setStatus("err");
      setMessage("Informe seu e-mail ou WhatsApp.");
      input.focus();
      return;
    }

    const isMail = value.includes("@");
    if (isMail ? !MAIL.test(value) : !(digits.length === 10 || digits.length === 11)) {
      setStatus("err");
      setMessage(isMail ? "Confira o e-mail digitado." : "Confira o número com DDD.");
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
        body: JSON.stringify({ contato: value }),
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
          type="text"
          name="contato"
          placeholder="Seu e-mail ou WhatsApp"
          aria-label="Seu e-mail ou WhatsApp"
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
    </form>
  );
}

export function HomePage() {
  const [option, setOption] = useState(1);
  const [count, setCount] = useState(3);
  const [sim, setSim] = useState<SimState>(initialSim);
  const amountRef = useRef<HTMLInputElement>(null);

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
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reveal = document.querySelectorAll(
      ".sh,.hero-copy>*,.steps,.bento .b,.tr li,.acc,.sim-copy,.sim-out,.cta-in>*,.foot-top>*",
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

    const steps = [...document.querySelectorAll(".step")];
    const screens = [...document.querySelectorAll(".hs")];
    const setStep = (index: number) => {
      steps.forEach((step, stepIndex) => step.classList.toggle("on", stepIndex === index));
      screens.forEach((screen, screenIndex) =>
        screen.classList.toggle("on", screenIndex === index),
      );
    };
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStep(steps.indexOf(entry.target));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((step) => stepObserver.observe(step));

    let timer = 0;
    if (!frozen) {
      timer = window.setInterval(() => {
        setOption((current) => (current + 1) % HERO_OPTS.length);
      }, 2800);
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
      stepObserver.disconnect();
      window.clearInterval(timer);
      window.clearTimeout(fallback);
    };
  }, []);

  useLayoutEffect(() => {
    const raw = amountRef.current?.value ?? "300,00";
    setSim((current) => computeSim(raw, count, current.rows));
  }, [count]);

  function onAmount(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const value = parseAmount(input.value);
    input.value = value
      ? value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      : "";
    setSim((current) => computeSim(input.value, count, current.rows));
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-in">
          <a href="#topo" className="brand">
            <img src="/logo-white.png" alt="Parcelei" height={28} />
          </a>
          <nav className="nav-links">
            <a href="#como">Como funciona</a>
            <a href="#simulador">Simulador</a>
            <a href="#onde">Onde usar</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a href="#lista" className="btn btn-sm btn-light">
            Entrar na lista
          </a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="hero-glow" />
        <div className="container hero-in">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-dark">
              <i className="dot" />
              Em fase final de testes
            </span>
            <h1>
              Pague no Pix.
              <br />
              <span className="grad">Parcele no app.</span>
            </h1>
            <p className="lead">
              Mercado, farmácia, gás e contas da casa divididos em parcelas, só com o seu CPF.
            </p>
            <WaitlistForm />
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
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
                </svg>
                Aprovação na hora
              </li>
            </ul>
          </div>
          <div className="hero-art">
            <div className="phone phone-hero">
              <div className="scr">
                <div className="scr-top">
                  <img src="/mark-white.png" alt="" height={18} />
                  <span>Pix Parcelado</span>
                </div>
                <p className="scr-label">Pagamento para</p>
                <p className="scr-store">Mercado Bom Preço</p>
                <p className="scr-amount">R$ 240,00</p>
                <p className="scr-label">Escolha as parcelas</p>
                <div className="opts" data-opts>
                  {HERO_OPTS.map((item, index) => (
                    <div className={index === option ? "opt on" : "opt"} key={item.k}>
                      <b>{item.k}</b>
                      <span>{item.v}</span>
                    </div>
                  ))}
                </div>
                <div className="total">
                  <span>Custo total</span>
                  <b>R$ 240,00</b>
                </div>
                <div className="scr-btn">Confirmar parcelamento</div>
                <p className="scr-note">Valores de exemplo</p>
              </div>
            </div>
            <div className="chip chip-a">
              <i className="ok" />
              Pix aprovado
            </div>
            <div className="chip chip-b">
              <small>1ª parcela</small>
              <b>{HERO_OPTS[option].v}</b>
            </div>
          </div>
        </div>
      </section>

      <section id="como" className="sec how">
        <div className="container">
          <header className="sh">
            <span className="eyebrow">Como funciona</span>
            <h2>Três toques entre o Pix e as parcelas.</h2>
          </header>
          <div className="how-grid">
            <div className="how-sticky">
              <div className="phone phone-how">
                <div className="scr scr-light">
                  <div className="hs hs-1 on">
                    <div className="qr">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <p className="hs-t">Leia o QR Code</p>
                    <p className="hs-s">ou cole o Pix Copia e Cola</p>
                  </div>
                  <div className="hs hs-2">
                    <p className="hs-k">R$ 240,00</p>
                    <div className="hs-row">
                      <span>2x</span>
                      <b>R$ 120,00</b>
                    </div>
                    <div className="hs-row on">
                      <span>3x</span>
                      <b>R$ 80,00</b>
                    </div>
                    <div className="hs-row">
                      <span>4x</span>
                      <b>R$ 60,00</b>
                    </div>
                  </div>
                  <div className="hs hs-3">
                    <div className="check">✓</div>
                    <p className="hs-t">Pagamento feito</p>
                    <p className="hs-s">A loja recebeu o valor no Pix</p>
                    <div className="hs-cal">
                      <span>Próxima parcela</span>
                      <b>R$ 80,00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="steps">
              <li className="step on" data-step="1">
                <span className="num">01</span>
                <div>
                  <h3>Leia o Pix no app</h3>
                  <p>Escaneie o QR Code da loja ou cole o código Copia e Cola.</p>
                </div>
              </li>
              <li className="step" data-step="2">
                <span className="num">02</span>
                <div>
                  <h3>Escolha as parcelas</h3>
                  <p>Veja o valor de cada parcela e o custo total antes de confirmar.</p>
                </div>
              </li>
              <li className="step" data-step="3">
                <span className="num">03</span>
                <div>
                  <h3>Pronto, está pago</h3>
                  <p>A loja recebe na hora e você paga as parcelas pelo app.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="simulador" className="sec sim">
        <div className="container sim-in">
          <div className="sim-copy">
            <span className="eyebrow">Simulador</span>
            <h2>Faça a conta antes de comprar.</h2>
            <p className="sub">Digite um valor e veja como ficaria dividido.</p>
            <label className="field">
              <span>Valor da compra</span>
              <div className="money">
                <em>R$</em>
                <input
                  ref={amountRef}
                  id="valor"
                  inputMode="decimal"
                  defaultValue="300,00"
                  aria-label="Valor da compra"
                  onInput={onAmount}
                />
              </div>
            </label>
            <div className="seg" role="radiogroup" aria-label="Número de parcelas">
              {[2, 3, 4].map((item) => (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={count === item}
                  className={count === item ? "on" : undefined}
                  onClick={() => setCount(item)}
                >
                  {item}x
                </button>
              ))}
            </div>
            <p className="disc">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8v.01" />
              </svg>
              Exemplo ilustrativo, sem juros ou tarifas. As condições reais aparecem no app antes
              de você confirmar.
            </p>
          </div>
          <div className="sim-out">
            <div className="sim-head">
              <span>Cada parcela</span>
              <b id="parc" key={sim.amountLabel}>
                {sim.amountLabel}
              </b>
              <small id="resumo" key={sim.summary}>
                {sim.summary}
              </small>
            </div>
            <ol className={sim.invalid ? "tl err" : "tl"} id="tl">
              {sim.rows.map((row, index) => (
                <li key={`${row.label}-${row.value}`} style={{ animationDelay: `${index * 60}ms` }}>
                  <span>{row.label}</span>
                  <b>{row.value}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="onde" className="sec where">
        <div className="container">
          <header className="sh sh-row">
            <div>
              <span className="eyebrow">Onde usar</span>
              <h2>Feito para o que não pode esperar.</h2>
            </div>
            <p className="sub">Onde tiver Pix, tem Parcelei.</p>
          </header>
          <div className="bento">
            <div className="b b-mkt">
              <svg viewBox="0 0 48 48">
                <path d="M6 10h5l5 22h22l4-15H14" />
                <circle cx="19" cy="39" r="2.5" />
                <circle cx="35" cy="39" r="2.5" />
              </svg>
              <h3>Mercado</h3>
              <p>A compra do mês sem apertar.</p>
            </div>
            <div className="b b-far">
              <svg viewBox="0 0 48 48">
                <rect x="8" y="16" width="32" height="24" rx="5" />
                <path d="M18 16v-4a6 6 0 0 1 12 0v4M24 22v12M18 28h12" />
              </svg>
              <h3>Farmácia</h3>
              <p>Remédio na hora certa.</p>
            </div>
            <div className="b b-gas">
              <svg viewBox="0 0 48 48">
                <path d="M24 6c6 8 12 14 12 22a12 12 0 0 1-24 0c0-8 6-14 12-22z" />
                <path d="M24 40a6 6 0 0 1-6-6c0-3 3-6 6-10 3 4 6 7 6 10a6 6 0 0 1-6 6z" />
              </svg>
              <h3>Gás e água</h3>
              <p>O básico da casa garantido.</p>
            </div>
            <div className="b b-bill">
              <svg viewBox="0 0 48 48">
                <path d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3z" />
                <path d="M18 16h12M18 23h12M18 30h7" />
              </svg>
              <h3>Contas da casa</h3>
              <p>Boletos e contas pagos no Pix.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec trust">
        <div className="container trust-in">
          <header className="sh">
            <span className="eyebrow eyebrow-dark">Confiança</span>
            <h2>Seu dinheiro, com regra clara.</h2>
          </header>
          <ul className="tr">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <h3>Segurança</h3>
              <p>Seus dados protegidos com criptografia.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <circle cx="9" cy="12" r="2.5" />
                <path d="M14 10h4M14 14h3" />
              </svg>
              <h3>Identidade validada</h3>
              <p>Cada conta é confirmada pelo CPF do titular.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M3 10l9-6 9 6M5 10v8M10 10v8M14 10v8M19 10v8M3 20h18" />
              </svg>
              <h3>Regras do Banco Central</h3>
              <p>Operação feita dentro das regras do Pix.</p>
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" />
                <path d="M10 21h4" />
              </svg>
              <h3>Lembretes de vencimento</h3>
              <p>Avisos no app antes de cada parcela vencer.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="duvidas" className="sec faq">
        <div className="container faq-in">
          <header className="sh">
            <span className="eyebrow">Dúvidas</span>
            <h2>Perguntas frequentes</h2>
            <p className="sub">
              Não achou o que procurava? Fale com a gente em{" "}
              <a href="mailto:oi@parcelei.com.br">oi@parcelei.com.br</a>.
            </p>
          </header>
          <div className="acc">
            <details open>
              <summary>O que é o Pix Parcelado?</summary>
              <p>
                É pagar uma compra no Pix e dividir o valor em parcelas pelo app da Parcelei. A
                loja recebe à vista e você paga aos poucos.
              </p>
            </details>
            <details>
              <summary>Preciso ter cartão de crédito?</summary>
              <p>Não. Você só precisa do seu CPF e do app da Parcelei.</p>
            </details>
            <details>
              <summary>Onde posso usar?</summary>
              <p>Em qualquer pagamento com Pix, como mercado, farmácia, gás, água e contas da casa.</p>
            </details>
            <details>
              <summary>Quanto custa parcelar?</summary>
              <p>
                O app mostra o valor de cada parcela e o custo total antes de você confirmar. Nada
                é cobrado sem o seu aceite.
              </p>
            </details>
            <details>
              <summary>Quando o app será lançado?</summary>
              <p>
                O app está em fase final de testes. Entre na lista de espera e avisamos você no
                lançamento.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="lista" className="cta">
        <div className="container cta-in">
          <img src="/mark-white.png" alt="" className="cta-mark" />
          <h2>Seja um dos primeiros a parcelar.</h2>
          <p className="lead">Deixe seu contato e avisamos assim que o app estiver disponível.</p>
          <WaitlistForm className="wl-center" />
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
        </div>
      </section>

      <footer className="foot">
        <div className="container">
          <div className="foot-top">
            <div>
              <img src="/logo-white.png" alt="Parcelei" height={26} />
              <p>Pix Parcelado sem cartão.</p>
            </div>
            <nav>
              <b>Produto</b>
              <a href="#como">Como funciona</a>
              <a href="#simulador">Simulador</a>
              <a href="#onde">Onde usar</a>
              <a href="#duvidas">Dúvidas</a>
            </nav>
            <nav>
              <b>Contato</b>
              <a href="mailto:oi@parcelei.com.br">oi@parcelei.com.br</a>
              <a href="#lista">Lista de espera</a>
            </nav>
            <nav>
              <b>Legal</b>
              <span className="pend">
                Termos de uso <em>em breve</em>
              </span>
              <span className="pend">
                Privacidade <em>em breve</em>
              </span>
            </nav>
          </div>
          <div className="foot-bot">
            <span>© 2026 Parcelei. Todos os direitos reservados.</span>
            <span>
              CNPJ <mark className="ph">[XX.XXX.XXX/0001-XX]</mark>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
