import { MessageCircle, Mail } from "lucide-react";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} id="kontak">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Mulai Sekarang</p>
        <h2 className={styles.sectionTitle}>
          Siap punya website yang profesional?
        </h2>
        <p className={styles.sectionDesc}>
          Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan kami
          bantu temukan solusi terbaik.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/6282335486623" className={styles.btnPrimary}>
            <MessageCircle size={16} />
            Chat WhatsApp
          </a>
          <a href="mailto:hello@divtech.studio" className={styles.btnSecondary}>
            <Mail size={16} />
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
}
