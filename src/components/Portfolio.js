import { ArrowRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const projects = [
  {
    category: "Web Aplikasi",
    title: "Lanesra Attire",
    isPersonal: false,
    desc: "Website katalog ketersediaan kebaya untuk Lanesra Attire — menampilkan koleksi kebaya, informasi ketersediaan, dan kontak pemesanan langsung.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    color: "#FDF4FF",
    textColor: "#9333EA",
    image: "/lanesraattire.png",
    url: "https://lanesraattire.my.id/",
    tiktok: "https://www.tiktok.com/@lanesra_attire",
    instagram: "https://www.instagram.com/lanesra_attire",
  },
  {
    category: "Sistem Web",
    title: "Sistem Manajemen Kos",
    desc: "Aplikasi web untuk pemilik kos — kelola kamar, penghuni, pembayaran, dan laporan bulanan secara digital.",
    image: "/juragankos.png",
    textColor: "#2563EB",
  },
  {
    category: "Web Aplikasi",
    title: "Web Katalog Promosi dan Portofolio Sales Toyota",
    desc: "Website promosi dinamis yang dilengkapi halaman admin untuk mengelola katalog unit mobil, update promo berkala, dan informasi kontak sales untuk memudahkan konversi calon pembeli.",
    image: "/toyota.png",
    textColor: "#DC2626",
  },
  {
    category: "Web Aplikasi",
    title: "Sistem Informasi Manajemen dan Persewaan Kebaya",
    desc: "Website katalog dan persewaan kebaya interaktif, dilengkapi panel admin untuk manajemen stok kebaya, pelacakan pesanan, laporan keuangan, serta fitur blokir tanggal otomatis untuk mengatur jadwal sewa.",
    image: "/kebaya.png",
    textColor: "#660049",
  },
];

export default function Portfolio() {
  return (
    <section className={styles.section} id="portofolio">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Portofolio</p>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Hasil kerja yang berbicara
            <br />
            sendiri
          </h2>
          <a href="/portofolio" className={styles.btnOutline}>
            Lihat semua <ArrowRight size={14} />
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className={styles.body}>
                <p className={styles.type} style={{ color: project.textColor }}>
                  {project.category}
                </p>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href="/portofolio" className={styles.link}>
                  Lihat semua portofolio <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
