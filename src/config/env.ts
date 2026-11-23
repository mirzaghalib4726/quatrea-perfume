interface PublicEnvironment {
  siteUrl: string;
  brandName: string;
  contactEmail: string;
}

export const env: PublicEnvironment = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? "Quatrea",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "atelier@quatrea.example",
};
