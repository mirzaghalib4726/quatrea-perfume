import type { Perfume } from "@/types/perfume";

export const perfumes: Perfume[] = [
  {
    slug: "eclose",
    name: "Éclosé",
    edition: "N° 01",
    season: "spring",
    seasonLabel: "Spring",
    eyebrow: "The beginning of light",
    description: "A tender first bloom: green pear, jasmine and rain-washed woods.",
    longDescription:
      "Éclosé captures the precise moment daylight returns to the garden. Dew clings to new leaves, petals unfurl in silence, and the air is bright with possibility.",
    volume: "50 ml",
    price: 168,
    accent: "#c6b8c9",
    background: "#a8a7a0",
    image: "/images/spring.jpg",
    bottleColor: "#dfe8da",
    liquidColor: "#cbd0bc",
    notes: {
      top: [{ name: "Green pear", description: "Crystalline and fresh" }],
      heart: [{ name: "Jasmine", description: "Quiet, white petals" }],
      base: [{ name: "Blonde woods", description: "Soft and rain-washed" }],
    },
  },
  {
    slug: "solstice",
    name: "Solstice",
    edition: "N° 02",
    season: "summer",
    seasonLabel: "Summer",
    eyebrow: "Heat held in glass",
    description: "Sunlit neroli, salted citrus and golden amber beneath a cloudless sky.",
    longDescription:
      "Solstice is the warmth of sun on skin and a horizon that refuses to end. Radiant citrus drifts into neroli, framed by salt, resin and slow-burning amber.",
    volume: "50 ml",
    price: 168,
    accent: "#d7c49a",
    background: "#9eaa94",
    image: "/images/summer.jpg",
    bottleColor: "#efd89d",
    liquidColor: "#d8a84c",
    notes: {
      top: [{ name: "Bitter orange", description: "Bright Mediterranean peel" }],
      heart: [{ name: "Neroli", description: "Sun-warmed blossom" }],
      base: [{ name: "Amber", description: "Resinous golden warmth" }],
    },
  },
  {
    slug: "bruma",
    name: "Bruma",
    edition: "N° 03",
    season: "autumn",
    seasonLabel: "Autumn",
    eyebrow: "A walk through embers",
    description: "Smoked iris, plum skin and cedar warmed by the last quiet fire.",
    longDescription:
      "Bruma gathers the season's most intimate hours. Velvet iris and ripe plum settle into cedar smoke, like a forgotten hearth glowing through the mist.",
    volume: "50 ml",
    price: 168,
    accent: "#b38b73",
    background: "#6d685f",
    image: "/images/autumn.jpg",
    bottleColor: "#b6a091",
    liquidColor: "#7d4c32",
    notes: {
      top: [{ name: "Plum skin", description: "Dark, ripened fruit" }],
      heart: [{ name: "Iris", description: "Powdered and cool" }],
      base: [{ name: "Cedar", description: "Dry woods and smoke" }],
    },
  },
  {
    slug: "nival",
    name: "Nival",
    edition: "N° 04",
    season: "winter",
    seasonLabel: "Winter",
    eyebrow: "Stillness, distilled",
    description: "Silver pine, cold incense and mineral musk in a landscape of snow.",
    longDescription:
      "Nival is an atmosphere of silence: pale pine beneath a silver sky, cool stone, distant incense and the clean trace of skin against cashmere.",
    volume: "50 ml",
    price: 168,
    accent: "#aab7ba",
    background: "#728087",
    image: "/images/winter.jpg",
    bottleColor: "#d6dee0",
    liquidColor: "#91a6aa",
    notes: {
      top: [{ name: "Silver pine", description: "Cut bough and cold air" }],
      heart: [{ name: "Frankincense", description: "Pale, mineral smoke" }],
      base: [{ name: "Skin musk", description: "Soft and quietly warm" }],
    },
  },
];

export const getPerfumeBySlug = (slug: string): Perfume | undefined =>
  perfumes.find((perfume) => perfume.slug === slug);
