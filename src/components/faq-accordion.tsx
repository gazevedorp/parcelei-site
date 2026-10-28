import type { FaqItem } from "@/data/faq";

type FaqItemViewProps = {
  item: FaqItem;
  categoryTitle?: string;
  open?: boolean;
};

export function FaqItemView({ item, categoryTitle, open }: FaqItemViewProps) {
  return (
    <details {...(open ? { open: true } : {})}>
      <summary>
        <span className="acc-q">
          {categoryTitle ? <small className="acc-kicker">{categoryTitle}</small> : null}
          {item.question}
        </span>
      </summary>
      <div className="acc-body">
        {item.answer.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {item.steps ? (
          <ol>
            {item.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        ) : null}
      </div>
    </details>
  );
}
