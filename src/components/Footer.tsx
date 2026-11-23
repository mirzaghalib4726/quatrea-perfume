import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { SOCIAL_LINKS } from "@/components/footer/Footer.constants";
import { Newsletter } from "@/components/Newsletter";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="footer-kicker">Private letters</p>
          <h2>Notes on scent,<br />season and self.</h2>
        </div>
        <Newsletter />
      </div>
      <div className="footer-bottom">
        <Link href="/" className="footer-brand">{BRAND.name}</Link>
        <p>{BRAND.locations.join(" · ")}</p>
        <div className="footer-links">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <span>© {BRAND.establishedYear}</span>
        </div>
      </div>
    </footer>
  );
}
