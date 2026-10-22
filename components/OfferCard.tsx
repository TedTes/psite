import type { ReactNode } from "react";

export default function OfferCard({
  title,
  price,
  timeline,
  children,
  id,
}: {
  title: string;
  price: string;
  timeline: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <article id={id} className="system-card">
      <div className="system-card__header">
        <h2>{title}</h2>
        <span>{price}</span>
      </div>
      <p className="system-card__meta">{timeline}</p>
      {children}
    </article>
  );
}
