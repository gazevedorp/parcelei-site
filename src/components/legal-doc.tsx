/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";

export type LegalBlock =
  | string
  | { lead: string; text: string }
  | { h3: string }
  | { ul: ReactNode[] }
  | { note: string; lead?: string };

export type LegalSection = {
  id: string;
  title: string;
  blocks?: LegalBlock[];
  content?: ReactNode;
};

type LegalDocProps = {
  title: string;
  meta: string[];
  intro?: ReactNode;
  sections: LegalSection[];
  closing?: ReactNode;
};

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("h3" in block) return <h3>{block.h3}</h3>;
  if ("ul" in block) {
    return (
      <ul>
        {block.ul.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("note" in block) {
    return (
      <p className="legal-note">
        {block.lead && <strong>{block.lead} </strong>}
        {block.note}
      </p>
    );
  }
  return (
    <p>
      <strong>{block.lead}</strong> {block.text}
    </p>
  );
}

export function LegalDoc({ title, meta, intro, sections, closing }: LegalDocProps) {
  return (
    <>
      <header className="nav scrolled">
        <div className="container nav-in">
          <Link href="/" className="brand">
            <img src="/parcelei-logo-azul-horizontal-1024.png" alt="Parcelei" height={36} />
          </Link>
          <nav className="nav-links legal-links">
            <Link href="/termos-de-uso" target="_blank" rel="noopener noreferrer">
              Termos de uso
            </Link>
            <Link href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
              Privacidade
            </Link>
          </nav>
          <Link href="/" className="btn btn-sm btn-primary">
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="legal">
        <section className="legal-hero">
          <div className="container">
            <h1>{title}</h1>
            <p className="legal-meta">
              {meta.map((item, index) => (
                <span key={item}>
                  {index > 0 && <i aria-hidden="true">·</i>}
                  {item}
                </span>
              ))}
            </p>
          </div>
        </section>

        <div className="container legal-in">
          <aside className="legal-toc" aria-label="Índice">
            <b>Nesta página</b>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal-body">
            {intro && <div className="legal-intro">{intro}</div>}
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                {section.blocks?.map((block, index) => (
                  <Block key={index} block={block} />
                ))}
                {section.content}
              </section>
            ))}
            {closing && <div className="legal-closing">{closing}</div>}
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
