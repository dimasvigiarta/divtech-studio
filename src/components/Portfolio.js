import { Home, Store, FileText, ArrowRight } from "lucide-react";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.section} id="portofolio">
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-aos="fade-up">
          Portofolio
        </p>
        <div className={styles.header}>
          <h2
            className={styles.sectionTitle}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hasil kerja yang berbicara
            <br />
            sendiri
          </h2>
          <a href="#" className={styles.btnOutline}>
            Lihat semua <ArrowRight size={14} />
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className={`${styles.thumb} ${styles.thumb1}`}>
              <Home size={48} />
            </div>
            <div className={styles.body}>
              <p className={styles.type}>Sistem Web</p>
              <h3>Sistem Manajemen Kos</h3>
              <p>
                Aplikasi web untuk pemilik kos — kelola kamar, penghuni,
                pembayaran, dan laporan bulanan secara digital.
              </p>
              <a href="#" className={styles.link}>
                Lihat detail <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="500">
            <div className={`${styles.thumb} ${styles.thumb1}`}>
              <Store size={48} />
            </div>
            <div className={styles.body}>
              <p className={styles.type}>Toko Online</p>
              <h3>Website Toko UMKM Blora</h3>
              <p>
                Website toko online untuk UMKM lokal di Blora dengan fitur
                katalog produk dan kontak WhatsApp terintegrasi.
              </p>
              <a href="#" className={styles.link}>
                Lihat detail <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="900">
            <div className={`${styles.thumb} ${styles.thumb1}`}>
              <FileText size={48} />
            </div>
            <div className={styles.body}>
              <p className={styles.type}>Company Profile</p>
              <h3>Company Profile Instansi Semarang</h3>
              <p>
                Website profil resmi untuk instansi di Semarang dengan desain
                modern, SEO-ready, dan loading cepat.
              </p>
              <a href="#" className={styles.link}>
                Lihat detail <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
