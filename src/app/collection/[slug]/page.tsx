import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bottle } from "@/components/Bottle";
import { getPerfumeBySlug, perfumes } from "@/data/perfumes";

interface PerfumePageProps {
  params: Promise<{ slug: string }>;
}

export const instant = false;

export function generateStaticParams() {
  return perfumes.map((perfume) => ({ slug: perfume.slug }));
}

export async function generateMetadata({ params }: PerfumePageProps): Promise<Metadata> {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  return perfume ? { title: `${perfume.name} — Quatrea` } : { title: "Fragrance — Quatrea" };
}

export default async function PerfumePage({ params }: PerfumePageProps) {
  const { slug } = await params;
  const perfume = getPerfumeBySlug(slug);
  if (!perfume) notFound();

  const index = perfumes.findIndex((item) => item.slug === perfume.slug);
  const next = perfumes[(index + 1) % perfumes.length];

  return (
    <>
      <Header />
      <main className="perfume-page" style={{ "--perfume-accent": perfume.accent } as React.CSSProperties}>
        <section className="perfume-hero">
          <div className="perfume-hero-image" style={{ backgroundImage: `url(${perfume.image})` }} />
          <div className="perfume-hero-wash" />
          <Link href="/collection" className="back-link"><ArrowLeft size={16} /> Collection</Link>
          <div className="perfume-hero-copy">
            <p>{perfume.edition} · {perfume.seasonLabel}</p>
            <h1>{perfume.name}</h1>
            <span>{perfume.eyebrow}</span>
          </div>
          <Bottle perfume={perfume} />
        </section>

        <section className="perfume-details">
          <div className="perfume-description">
            <p className="section-kicker">The composition</p>
            <h2>{perfume.longDescription}</h2>
          </div>
          <div className="notes-list">
            {(["top", "heart", "base"] as const).map((level) => (
              <div className="notes-row" key={level}>
                <p>{level} notes</p>
                <div>
                  {perfume.notes[level].map((note) => (
                    <h3 key={note.name}>{note.name}</h3>
                  ))}
                  {perfume.notes[level].map((note) => (
                    <span key={note.description}>{note.description}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="purchase-bar">
          <div>
            <p>{perfume.name} · Eau de parfum</p>
            <span>{perfume.volume}</span>
          </div>
          <button type="button">Add to bag · €{perfume.price}</button>
        </section>

        <Link href={`/collection/${next.slug}`} className="next-fragrance" style={{ backgroundImage: `url(${next.image})` }}>
          <span>Next fragrance</span>
          <h2>{next.name}</h2>
          <div><span>Discover</span><ArrowRight size={18} /></div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
