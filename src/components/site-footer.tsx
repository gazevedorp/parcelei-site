import Link from "next/link";
import { PartnerModal } from "./partner-modal";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-top">
          <div>
            <img src="/parcelei-logo-azul-horizontal-1024.png" alt="Parcelei" height={32} />
            <p>Pix Parcelado sem cartão.</p>
            <div className="foot-social">
              <a
                href="https://www.instagram.com/parcelei_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Parcelei"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/parcelei_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Parcelei"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="8" cy="8.25" r="0.9" fill="currentColor" stroke="none" />
                  <path d="M8 11.2v5M12.2 11.2V16.2M12.2 13.1a2.1 2.1 0 0 1 4.2 0V16.2" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511921392248"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Parcelei, (11) 92139-2248"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5.15a6.85 6.85 0 0 0-5.95 10.25L5.15 18.85l3.55-.9A6.85 6.85 0 1 0 12 5.15z" />
                  <path d="M9.55 10.05c-.35.1-.6.45-.5.85.25 1.35 1.15 2.5 2.3 3.1.4.2.85 0 .95-.4l.15-.55c.08-.2.28-.3.48-.22l.95.42c.28.12.42.42.3.7-.28.75-1.05 1.2-1.85 1.1-2-.25-3.65-1.95-3.95-3.95-.1-.8.4-1.55 1.15-1.75.22-.06.45.04.52.22l.4.95c.08.18.02.38-.16.48z" />
                </svg>
              </a>
            </div>
          </div>
          <nav>
            <b>Produto</b>
            <Link href="/#como">Como funciona</Link>
            <Link href="/#onde">Onde usar</Link>
            <Link href="/#seguranca">Segurança</Link>
            <Link href="/#duvidas">Dúvidas</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
          <nav>
            <b>Contato</b>
            <a
              className="foot-wa"
              href="https://wa.me/5511921392248"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
              <span>(11) 92139-2248</span>
            </a>
            <span>Atendimento em dias úteis.</span>
            <Link href="/#lista">Lista de espera</Link>
            <PartnerModal />
          </nav>
          <nav>
            <b>Legal</b>
            <Link href="/termos-de-uso" target="_blank" rel="noopener noreferrer">
              Termos de uso
            </Link>
            <Link href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
              Política de privacidade
            </Link>
          </nav>
        </div>
        <div className="foot-bot">
          <span>© 2026 Parcelei Serviços Digitais Ltda. Todos os direitos reservados.</span>
          <span>
            CNPJ 58.473.999/0001-76 · Rua Conceição, 233, sala 916, Centro, Campinas – SP
          </span>
        </div>
      </div>
    </footer>
  );
}
