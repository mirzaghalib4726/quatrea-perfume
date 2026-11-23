import type { NavigationItem } from "@/types/navigation";

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = [
  { label: "Collection", href: "/collection" },
  { label: "Our story", href: "/story" },
  { label: "Journal", href: "/journal" },
] as const;
