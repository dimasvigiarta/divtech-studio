import { Layout, Building2, ShoppingCart, Server } from "lucide-react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.section} id="layanan">
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-aos="fade-up">
          Layanan
        </p>
        <h2
          className={styles.sectionTitle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Solusi digital yang tepat
          <br />
          untuk kebutuhan Anda
        </h2>
        <p
          className={styles.sectionDesc}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Dari website profil sederhana hingga sistem manajemen yang kompleks —
          semua dikerjakan dengan serius dan profesional.
        </p>

        <div className={styles.grid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.iconBox}>
              <Layout size={20} />
            </div>
            <h3>Landing Page</h3>
            <p>
              Halaman promosi yang dioptimasi untuk konversi. Cocok untuk
              produk, jasa, atau event khusus yang butuh tampilan menarik dan
              cepat.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>1–3 hari</span>
              <span className={styles.tag}>WordPress</span>
              <span className={styles.tag}>Next.js</span>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.iconBox}>
              <Building2 size={20} />
            </div>
            <h3>Company Profile</h3>
            <p>
              Website resmi untuk bisnis atau instansi. Menampilkan profil,
              layanan, portofolio, dan kontak — tampil profesional di mata
              klien.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>3–7 hari</span>
              <span className={styles.tag}>WordPress</span>
              <span className={styles.tag}>Next.js</span>
            </div>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="800">
            <div className={styles.iconBox}>
              <Server size={20} />
            </div>
            <h3>Sistem Web Custom</h3>
            <p>
              Sistem berbasis web sesuai kebutuhan bisnis — manajemen kos,
              inventori, kasir, presensi karyawan, dan lainnya. Dibuat
              menggunakan Laravel.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>14–30 hari</span>
              <span className={styles.tag}>Laravel</span>
              <span className={styles.tag}>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
