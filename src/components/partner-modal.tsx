"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

const BENEFITS = [
  "Aumente suas vendas",
  "Nova possibilidade de parcelamento",
  "Sem risco de inadimplência",
  "Pixback",
];

const REVENUE = [
  "Até R$ 50 mil",
  "De R$ 50 mil a R$ 200 mil",
  "De R$ 200 mil a R$ 1 milhão",
  "Acima de R$ 1 milhão",
];

const PLATFORMS = [
  "VTEX",
  "Shopify",
  "Nuvemshop",
  "WooCommerce",
  "Tray",
  "Loja Integrada",
  "Magento",
  "Plataforma própria",
  "Outra",
];

const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(value: string) {
  return value.replace(/\D/g, "");
}

function maskPhone(value: string) {
  const d = digits(value).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function maskCnpj(value: string) {
  const d = digits(value).slice(0, 14);
  return d
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

type Status = "idle" | "loading" | "ok" | "err";

export function PartnerModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => document.documentElement.classList.remove("modal-open");
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  function open() {
    setStatus("idle");
    setMessage("");
    document.documentElement.classList.add("modal-open");
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const error =
      !data.nome?.trim()
        ? "Informe seu nome."
        : !MAIL.test(data.email?.trim() ?? "")
          ? "Confira o e-mail digitado."
          : digits(data.whatsapp ?? "").length < 10
            ? "Confira o número de WhatsApp."
            : !data.loja?.trim()
              ? "Informe o nome da loja."
              : digits(data.cnpj ?? "").length !== 14
                ? "Confira o CNPJ."
                : !data.faturamento
                  ? "Selecione o faturamento mensal."
                  : "";

    if (error) {
      setStatus("err");
      setMessage(error);
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/parceiros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("parceiros");
      form.reset();
      setPhone("");
      setCnpj("");
      setStatus("ok");
    } catch {
      setStatus("err");
      setMessage("Não foi possível enviar agora. Tente de novo em instantes.");
    }
  }

  return (
    <>
      <button type="button" className="foot-link" onClick={open}>
        Parcerias para lojistas
      </button>
      <dialog
        ref={dialogRef}
        className="pm"
        aria-labelledby="pm-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="pm-in">
          <button type="button" className="pm-close" onClick={close} aria-label="Fechar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <aside className="pm-side">
            <img src="/mark-white.png" alt="" className="pm-mark" />
            <p className="pm-kicker">Parcerias para lojistas</p>
            <h2 id="pm-title">Ative seu e-commerce</h2>
            <p className="pm-lead">Ofereça Pix Parcelado aos seus clientes e receba à vista.</p>
            <ul className="pm-benefits">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>

          <div className="pm-body">
            {status === "ok" ? (
              <div className="pm-done" role="status">
                <span className="pm-done-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3>Recebemos seus dados.</h3>
                <p>Nosso time comercial vai entrar em contato pelo e-mail ou WhatsApp informado.</p>
                <button type="button" className="btn btn-primary" onClick={close}>
                  Fechar
                </button>
              </div>
            ) : (
              <form className="pm-form" onSubmit={onSubmit} noValidate>
                <h3>Fale com o nosso time comercial</h3>
                <p className="pm-hint">Preencha os dados e entraremos em contato.</p>

                <div className="pm-grid">
                  <label className="pm-field pm-full">
                    <span>Nome completo</span>
                    <input name="nome" autoComplete="name" required />
                  </label>
                  <label className="pm-field">
                    <span>E-mail</span>
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                  <label className="pm-field">
                    <span>WhatsApp</span>
                    <input
                      name="whatsapp"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={(event) => setPhone(maskPhone(event.target.value))}
                      required
                    />
                  </label>
                  <label className="pm-field">
                    <span>Nome da loja</span>
                    <input name="loja" autoComplete="organization" required />
                  </label>
                  <label className="pm-field">
                    <span>CNPJ</span>
                    <input
                      name="cnpj"
                      inputMode="numeric"
                      placeholder="00.000.000/0000-00"
                      value={cnpj}
                      onChange={(event) => setCnpj(maskCnpj(event.target.value))}
                      required
                    />
                  </label>
                  <label className="pm-field pm-full">
                    <span>
                      Site da loja <em>(opcional)</em>
                    </span>
                    <input name="site" type="url" inputMode="url" placeholder="www.sualoja.com.br" />
                  </label>
                  <label className="pm-field">
                    <span>Faturamento mensal</span>
                    <select name="faturamento" defaultValue="" required>
                      <option value="" disabled>
                        Selecione
                      </option>
                      {REVENUE.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className="pm-field">
                    <span>
                      Plataforma <em>(opcional)</em>
                    </span>
                    <select name="plataforma" defaultValue="">
                      <option value="" disabled>
                        Selecione
                      </option>
                      {PLATFORMS.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <p className="pm-msg" role="alert">
                  {status === "err" ? message : ""}
                </p>
                <button
                  type="submit"
                  className="btn btn-primary pm-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Enviando..." : "Quero ativar minha loja"}
                </button>
                <p className="pm-legal">
                  Ao enviar, você concorda com a{" "}
                  <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                    Política de privacidade
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
