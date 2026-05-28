import {
  Shield,
  Clock,
  MessageCircle,
  RefreshCw,
  Search,
  Smartphone,
} from "lucide-react";
import styles from "./Testimonials.module.css";

const reasons = [
  {
    icon: <Shield size={20} />,
    title: "Kualitas Terjamin",
    desc: "Setiap proyek dikerjakan dengan standar kode yang bersih, terstruktur, dan diuji sebelum diserahkan ke klien.",
  },
  {
    icon: <Clock size={20} />,
    title: "Tepat Waktu",
    desc: "Estimasi waktu pengerjaan yang jelas sejak awal. Kami komit menyelesaikan proyek sesuai jadwal yang disepakati.",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Komunikasi Aktif",
    desc: "Update progres berkala selama pengerjaan. Anda bisa pantau dan beri masukan di setiap tahap pengerjaan.",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Garansi Revisi",
    desc: "Tidak puas dengan hasilnya? Kami revisi sampai sesuai ekspektasi. Revisi sudah termasuk dalam setiap paket.",
  },
  {
    icon: <Search size={20} />,
    title: "SEO Teroptimasi",
    desc: "Setiap website dibangun dengan fondasi SEO yang kuat agar mudah ditemukan di Google sejak hari pertama.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Responsif di Semua Device",
    desc: "Tampilan website dioptimasi untuk HP, tablet, dan laptop. Lebih dari 60% pengguna browsing lewat smartphone.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Keunggulan</p>
        <h2 className={styles.sectionTitle}>
          Kenapa memilih
          <br />
          divtech Studio
        </h2>

        <div className={styles.grid}>
          {reasons.map((item, i) => (
            <div key={i} className={styles.card}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "#EFF6FF",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2563EB",
                  marginBottom: "16px",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0F172A",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748B",
                  lineHeight: "1.65",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
