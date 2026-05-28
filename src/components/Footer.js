import { MessageCircle, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/logo-footer.png" alt="divtech studio" height={36} />
            </div>
            <p>
              Jasa pembuatan website dan sistem web profesional untuk UMKM,
              bisnis, dan instansi di Blora, Semarang, dan seluruh Indonesia.
            </p>
          </div>

          <div className={styles.col}>
            <h4>Layanan</h4>
            <ul>
              <li>
                <a href="#layanan">Landing Page</a>
              </li>
              <li>
                <a href="#layanan">Company Profile</a>
              </li>
              <li>
                <a href="#layanan">Toko Online</a>
              </li>
              <li>
                <a href="#layanan">Sistem Web Custom</a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Perusahaan</h4>
            <ul>
              <li>
                <a href="/tentang">Tentang Kami</a>
              </li>
              <li>
                <a href="/portofolio">Portofolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 divtech studio. All rights reserved.</p>
          <div className={styles.socials}>
            <a
              href="https://instagram.com/divtech_studio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@divtech_studio"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="TikTok"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6282335486623"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
            <a
              href="mailto:hello@divtech.studio"
              className={styles.socialBtn}
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
