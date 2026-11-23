"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { perfumes } from "@/data/perfumes";
import { SeasonPanel } from "./SeasonPanel";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function HomeExperience() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-kicker"
            >
              Four fragrances · One revolving year
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Scent follows<br /><em>the seasons.</em>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="hero-bottom"
            >
              <p>An olfactory portrait of time,<br />composed in Paris.</p>
              <Link href="#spring" className="round-link" aria-label="Explore the collection">
                <ArrowDown size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {perfumes.map((perfume, index) => (
          <SeasonPanel key={perfume.slug} perfume={perfume} index={index} />
        ))}

        <section className="story-banner">
          <div className="story-image" />
          <div className="story-content">
            <p className="section-kicker">Our composition</p>
            <h2>A perfume is a place<br /><em>you remember.</em></h2>
            <p>
              Born from material, memory and movement. Each Quatrea fragrance
              is blended slowly in Grasse, then rested for one full season.
            </p>
            <Link href="/story" className="text-link text-link--light">
              Enter our atelier <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
