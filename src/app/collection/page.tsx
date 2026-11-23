import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bottle } from "@/components/Bottle";
import { perfumes } from "@/data/perfumes";

export const metadata: Metadata = {
  title: "The Collection — Quatrea",
};

export default function CollectionPage() {
  return (
    <>
      <Header />
      <main className="collection-page">
        <section className="collection-hero">
          <p className="section-kicker">The quatre saisons</p>
          <h1>Four moments,<br /><em>one continuous story.</em></h1>
        </section>
        <section className="collection-grid">
          {perfumes.map((perfume, index) => (
            <Link href={`/collection/${perfume.slug}`} className="collection-card" key={perfume.slug}>
              <div className="collection-card-top">
                <span>0{index + 1}</span>
                <span>{perfume.seasonLabel}</span>
              </div>
              <div className="collection-card-visual" style={{ background: perfume.background }}>
                <div className="card-image" style={{ backgroundImage: `url(${perfume.image})` }} />
                <Bottle perfume={perfume} compact />
              </div>
              <div className="collection-card-copy">
                <div>
                  <h2>{perfume.name}</h2>
                  <p>{perfume.description}</p>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
