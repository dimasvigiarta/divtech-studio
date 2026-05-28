"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <a
        href="/"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        <img src="/logo-navbar.png" alt="divtech studio" height={36} />
      </a>

      <ul
        className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}
      >
        <li>
          <a href="/#layanan">Layanan</a>
        </li>
        <li>
          <a href="/#harga">Harga</a>
        </li>
        <li>
          <a href="/#kontak">Kontak</a>
        </li>
        <li>
          <a
            href="/portofolio"
            className={pathname === "/portofolio" ? styles.navLinkActive : ""}
          >
            Portofolio
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className={pathname === "/blog" ? styles.navLinkActive : ""}
          >
            Blog
          </a>
        </li>
      </ul>

      <a href="/#kontak" className={styles.navCta}>
        Konsultasi Gratis
      </a>

      <button
        className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
