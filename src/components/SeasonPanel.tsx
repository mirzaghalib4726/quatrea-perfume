"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { SeasonPanelProps } from "@/components/season-panel/SeasonPanel.types";
import { Bottle } from "./Bottle";

export function SeasonPanel({ perfume, index }: SeasonPanelProps) {
  const isReverse = index % 2 === 1;

  return (
    <section
      id={perfume.season}
      className={`season-panel season-panel--${perfume.season}`}
      style={{ "--season-accent": perfume.accent } as React.CSSProperties}
    >
      <div className="season-image" style={{ backgroundImage: `url(${perfume.image})` }} />
      <div className="season-wash" />
      <div className={`season-content ${isReverse ? "season-content--reverse" : ""}`}>
        <motion.div
          className="season-copy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="season-meta">
            <span>0{index + 1}</span>
            <span>{perfume.seasonLabel}</span>
            <span>{perfume.edition}</span>
          </div>
          <p className="season-eyebrow">{perfume.eyebrow}</p>
          <h2>{perfume.name}</h2>
          <p className="season-description">{perfume.description}</p>
          <Link href={`/collection/${perfume.slug}`} className="text-link">
            Discover the fragrance <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Bottle perfume={perfume} />
        </motion.div>
      </div>
      {index < 3 && (
        <a className="season-next" href={`#${perfumesNext[index]}`} aria-label={`Scroll to ${perfumesNext[index]}`}>
          <ArrowDown size={17} />
        </a>
      )}
    </section>
  );
}

const perfumesNext = ["summer", "autumn", "winter"];
