import type { Metadata } from "next";
import { FaqItemView } from "@/components/faq-accordion";
import { LegalDoc, type LegalSection } from "@/components/legal-doc";
import { FAQ_IMPORTANT, FAQ_INTRO, FAQ_TAGLINE, FAQ_TITLE, visibleFaqCategories } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ · Parcelei",
  description: FAQ_TAGLINE,
};

export default function FaqPage() {
  const sections: LegalSection[] = visibleFaqCategories().map((category) => ({
    id: category.id,
    title: category.title,
    content: (
      <div className="acc">
        {category.items.map((item) => (
          <FaqItemView key={item.id} item={item} />
        ))}
      </div>
    ),
  }));

  return (
    <LegalDoc
      title={FAQ_TITLE}
      meta={[FAQ_TAGLINE]}
      intro={<p>{FAQ_INTRO}</p>}
      sections={sections}
      closing={
        <div className="legal-note">
          <p>
            <strong>{FAQ_IMPORTANT.title}</strong>
          </p>
          {FAQ_IMPORTANT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      }
    />
  );
}
