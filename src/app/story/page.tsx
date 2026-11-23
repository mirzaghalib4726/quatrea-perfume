import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Our Story — Quatrea" };

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="editorial-page">
        <section className="editorial-hero">
          <p className="section-kicker">Est. 2026 · Paris</p>
          <h1>The art of<br /><em>paying attention.</em></h1>
        </section>
        <section className="editorial-image story-atlas" />
        <section className="editorial-copy">
          <p className="section-kicker">A note from the founder</p>
          <h2>We began with a question: can a fragrance hold a season?</h2>
          <div>
            <p>Quatrea was formed around the idea that scent is inseparable from the time and place in which we experience it.</p>
            <p>Our perfumers work between Paris and Grasse, allowing each formula to evolve slowly with the natural materials that give it life.</p>
          </div>
        </section>
        <section className="editorial-image story-lab" />
      </main>
      <Footer />
    </>
  );
}
