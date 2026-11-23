"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PRIMARY_NAVIGATION } from "@/constants/navigation";
import { HEADER_LABELS } from "@/components/header/Header.constants";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label={HEADER_LABELS.home}>
        <span className="brand-mark" aria-hidden="true">Q</span>
        <span>Quatrea</span>
      </Link>

      <nav className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Main navigation">
        {PRIMARY_NAVIGATION.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <button className="bag-button" aria-label={HEADER_LABELS.bag}>
          <ShoppingBag size={18} strokeWidth={1.5} />
          <span>0</span>
        </button>
        <button
          className="menu-button"
          aria-label={open ? HEADER_LABELS.closeMenu : HEADER_LABELS.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
