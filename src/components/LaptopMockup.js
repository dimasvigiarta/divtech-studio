import styles from "./LaptopMockup.module.css";

export default function LaptopMockup() {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.badge} ${styles.badgeSeo}`}>
        <div className={styles.dot} style={{ background: "#10B981" }}></div>
        SEO #1 Google
      </div>
      <div className={`${styles.badge} ${styles.badgeSpeed}`}>
        <div className={styles.dot} style={{ background: "#2563EB" }}></div>
        Loading Cepat
      </div>
      <div className={`${styles.badge} ${styles.badgeMobile}`}>
        <div className={styles.dot} style={{ background: "#9333EA" }}></div>
        Mobile Friendly
      </div>

      <div className={styles.laptop}>
        <div className={styles.lid}>
          <div className={styles.browserBar}>
            <div className={styles.btnRed}></div>
            <div className={styles.btnYellow}></div>
            <div className={styles.btnGreen}></div>
            <div className={styles.urlBar}>divtech-studio.vercel.app</div>
          </div>
          <div className={styles.screen}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <div className={styles.logoDot}></div>
                divtech studio
              </div>
              <div className={styles.navLinks}>
                <span>Layanan</span>
                <span>Harga</span>
                <span>Portofolio</span>
              </div>
              <div className={styles.navCta}>Konsultasi</div>
            </div>
            <div className={styles.hero}>
              <div className={styles.badge2}>Blora & Semarang</div>
              <div className={styles.h1}>
                Jasa Website <span>Profesional</span>
              </div>
              <div className={styles.p}>
                divtech studio hadir untuk UMKM dan bisnis yang ingin tampil
                profesional di internet.
              </div>
              <div className={styles.btns}>
                <div className={styles.btnPrimary}>Konsultasi Gratis</div>
                <div className={styles.btnSecondary}>Portofolio</div>
              </div>
              <div className={styles.stats}>
                <div>
                  <div className={styles.statNum}>30+</div>
                  <div className={styles.statLabel}>Proyek</div>
                </div>
                <div>
                  <div className={styles.statNum}>100%</div>
                  <div className={styles.statLabel}>Puas</div>
                </div>
                <div>
                  <div className={styles.statNum}>3+</div>
                  <div className={styles.statLabel}>Tahun</div>
                </div>
              </div>
            </div>
            <div className={styles.services}>
              {["Landing Page", "Company Profile", "Toko Online"].map(
                (s, i) => (
                  <div key={i} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}></div>
                    <div className={styles.serviceTitle}>{s}</div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div className={styles.base}>
          <div className={styles.notch}></div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
