import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Journal — Quatrea" };

const entries = [
  { category: "Materials", title: "In praise of impermanence", image: "/images/journal-material.jpg" },
  { category: "Places", title: "A walk through Grasse", image: "/images/journal-place.jpg" },
  { category: "Ritual", title: "The hour before evening", image: "/images/journal-ritual.jpg" },
];

export default function JournalPage() {
  return (
    <>
      <Header />
      <main className="journal-page">
        <section className="journal-hero">
          <p className="section-kicker">The journal</p>
          <h1>Observations on scent<br /><em>and the passing hour.</em></h1>
        </section>
        <section className="journal-grid">
          {entries.map((entry) => (
            <article key={entry.title}>
              <div style={{ backgroundImage: `url(${entry.image})` }} />
              <p>{entry.category}</p>
              <h2>{entry.title}</h2>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
