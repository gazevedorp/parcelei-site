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
            </div>
          </div>
          <nav>
            <b>Produto</b>
            <a href="/#como">Como funciona</a>
            <a href="/#onde">Onde usar</a>
            <a href="/#seguranca">Segurança</a>
            <a href="/#duvidas">Dúvidas</a>
          </nav>
          <nav>
            <b>Contato</b>
            <span className="pend">
              WhatsApp <em>(número a confirmar)</em>
            </span>
            <span>Atendimento em dias úteis.</span>
            <a href="/#lista">Lista de espera</a>
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
