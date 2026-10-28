/* Logos are sized by the design spec. next/image inline styles would change that box. */
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { FaqItemView } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { FAQ_IMPORTANT, FAQ_INTRO, FAQ_TAGLINE, FAQ_TITLE, visibleFaqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ · Parcelei",
  description: FAQ_TAGLINE,
};

export default function FaqPage() {
  const categories = visibleFaqCategories();

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

      <main className="legal faq-page">
        <section className="legal-hero">
          <div className="container">
            <h1>{FAQ_TITLE}</h1>
            <p className="faq-hero-sub">{FAQ_TAGLINE}</p>
          </div>
        </section>

        <div className="container faq-wrap">
          <p className="faq-lead">{FAQ_INTRO}</p>

          <nav className="faq-jump" aria-label="Categorias">
            {categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </nav>

          {categories.map((category) => (
            <section key={category.id} id={category.id} className="faq-cat">
              <h2>{category.title}</h2>
              <div className="acc">
                {category.items.map((item) => (
                  <FaqItemView key={item.id} item={item} />
                ))}
              </div>
            </section>
          ))}

          <aside className="faq-note">
            <strong>{FAQ_IMPORTANT.title}</strong>
            {FAQ_IMPORTANT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
