export type Season = "spring" | "summer" | "autumn" | "winter";

export interface PerfumeNote {
  name: string;
  description: string;
}

export interface Perfume {
  slug: string;
  name: string;
  edition: string;
  season: Season;
  seasonLabel: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  volume: string;
  price: number;
  accent: string;
  background: string;
  image: string;
  bottleColor: string;
  liquidColor: string;
  notes: {
    top: PerfumeNote[];
    heart: PerfumeNote[];
    base: PerfumeNote[];
  };
}
