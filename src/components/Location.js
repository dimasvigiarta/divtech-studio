import { MapPin, Globe, Check } from "lucide-react";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-aos="fade-up">
          Jangkauan Layanan
        </p>
        <h2
          className={styles.sectionTitle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Jasa pembuatan website
          <br />
          Blora & Semarang
        </h2>
        <p
          className={styles.sectionDesc}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Berbasis di Jawa Tengah, kami melayani klien dari Blora, Semarang, dan
          seluruh Indonesia secara remote.
        </p>

        <div className={styles.grid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.cardTitle}>
              <MapPin size={20} />
              Blora
            </div>
            <p>
              Jasa pembuatan website untuk UMKM, toko, dan instansi di Blora dan
              sekitarnya. Harga terjangkau, kualitas profesional.
            </p>
            <ul className={styles.list}>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Website UMKM Blora
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Company profile instansi
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Toko online lokal
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Konsultasi tatap muka
              </li>
            </ul>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.cardTitle}>
              <MapPin size={20} />
              Semarang
            </div>
            <p>
              Melayani bisnis dan startup di Semarang yang ingin hadir secara
              digital dengan website profesional dan berperforma tinggi.
            </p>
            <ul className={styles.list}>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Website startup & bisnis
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Sistem web custom
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Optimasi SEO lokal
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Support jangka panjang
              </li>
            </ul>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="500">
            <div className={styles.cardTitle}>
              <Globe size={20} />
              Seluruh Indonesia
            </div>
            <p>
              Semua layanan dapat dikerjakan secara remote. Komunikasi via
              WhatsApp, Zoom, atau Google Meet sesuai kebutuhan klien.
            </p>
            <ul className={styles.list}>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                100% remote-friendly
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Update progres berkala
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Pembayaran fleksibel
              </li>
              <li>
                <div className={styles.checkIcon}>
                  <Check size={10} />
                </div>
                Garansi revisi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
