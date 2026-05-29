import { MapPin, MessageCircle, Eye } from "lucide-react";
import styles from "./Hero.module.css";
import LaptopMockup from "@/components/LaptopMockup";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        {/* Kiri - Konten */}
        <div className={styles.heroContent}>
          <div className={styles.badge} data-aos="fade-up">
            <MapPin size={13} />
            Melayani Blora, Semarang & Seluruh Indonesia
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100">
            Jasa Pembuatan Website & Sistem Web <span>Profesional</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200">
            divtech studio hadir untuk UMKM, bisnis, dan instansi yang ingin
            tampil profesional di internet — dari landing page sederhana hingga
            sistem berbasis web yang kompleks.
          </p>

          <div
            className={styles.actions}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#kontak" className={styles.btnPrimary}>
              <MessageCircle size={16} />
              Konsultasi Gratis
            </a>
            <a href="#portofolio" className={styles.btnSecondary}>
              <Eye size={16} />
              Lihat Portofolio
            </a>
          </div>

          <div className={styles.stats} data-aos="fade-up" data-aos-delay="400">
            <div className={styles.statItem}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Proyek selesai</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Klien puas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>1+</span>
              <span className={styles.statLabel}>Tahun pengalaman</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statLabel}>Blora & Semarang</span>
            </div>
          </div>
        </div>

        {/* Kanan - Laptop */}
        <div
          className={styles.heroVisual}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <LaptopMockup />
        </div>
      </div>
    </section>
  );
}
