import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Globe } from "lucide-react";

export const metadata = {
  title: "Portofolio - divtech Studio",
  description:
    "Kumpulan proyek website dan sistem web yang telah dikerjakan divtech Studio. Landing page, company profile, toko online, dan sistem web custom.",
  alternates: {
    canonical: "https://divtech.studio/portofolio",
  },
};

const projects = [
  {
    category: "Sistem Web",
    title: "Sistem Manajemen Kos",
    isPersonal: true,
    desc: "Aplikasi web untuk pemilik kos — kelola kamar, penghuni, pembayaran, dan laporan bulanan secara digital. Dibangun dengan Laravel & MySQL.",
    tech: ["Laravel", "MySQL", "Tailwond CSS"],
    color: "#EFF6FF",
    textColor: "#2563EB",
    image: "/juragankos.png",
  },
  {
    category: "Sistem Web",
    title: "Sistem Manajemen dan Tracking Progres Cuci Sepatu",
    isPersonal: true,
    desc: "Aplikasi berbasis web untuk mengelola operasional jasa cuci sepatu, dilengkapi fitur tracking status cucian secara real-time oleh pelanggan dan manajemen inventaris.",
    tech: ["Laravel", "Mysql", "Tailwind CSS"],
    color: "#F0FDF4",
    textColor: "#ec9121",
    image: "/shoecare.png",
  },
  {
    category: "Web Aplikasi",
    title: "Web Katalog Promosi dan Portofolio Sales Toyota",
    isPersonal: true,
    desc: "Website promosi dinamis yang dilengkapi halaman admin untuk mengelola katalog unit mobil, update promo berkala, dan informasi kontak sales untuk memudahkan konversi calon pembeli.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    color: "#FEF2F2",
    textColor: "#DC2626",
    image: "/toyota.png",
  },
  {
    category: "Web Aplikasi",
    title: "Web Katalog Dinamis dan CMS Toko Roti & Kue",
    isPersonal: true,
    desc: "Website katalog responsif untuk toko roti yang dilengkapi panel admin (CMS) khusus untuk mengelola dasbor ringkasan, data produk kue, kategori menu, serta manajemen banner promosi.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    color: "#FFF7ED",
    textColor: "#862600",
    image: "/bakery.png",
  },
  {
    category: "Web Aplikasi",
    title: "Sistem Informasi Manajemen dan Persewaan Kebaya",
    isPersonal: true,
    desc: "Website katalog dan persewaan kebaya interaktif, dilengkapi panel admin untuk manajemen stok kebaya, pelacakan pesanan, laporan keuangan, serta fitur blokir tanggal otomatis untuk mengatur jadwal sewa.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    color: "#FFF1F2",
    textColor: "#660049",
    image: "/kebaya.png",
  },
  {
    category: "Web Aplikasi",
    title: "Web Katalog Kuliner dan CMS Layanan Katering",
    isPersonal: true,
    desc: "Website katalog makanan untuk layanan katering yang dilengkapi panel admin dinamis untuk mengelola kategori paket, daftar menu hidangan, serta konfigurasi pengaturan profil usaha.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    color: "#FFFBEB",
    textColor: "#c68c5f",
    image: "/katering.png",
  },
];

export default function PortofolioPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ padding: "80px 5%", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            data-aos="fade-up"
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#2563EB",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Portofolio
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              color: "#0F172A",
              lineHeight: "1.2",
              maxWidth: "720px",
              marginBottom: "20px",
            }}
          >
            Hasil kerja yang{" "}
            <span style={{ color: "#2563EB" }}>berbicara sendiri</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              fontSize: "18px",
              color: "#64748B",
              lineHeight: "1.7",
              maxWidth: "560px",
            }}
          >
            Kumpulan proyek website dan sistem web yang telah dikerjakan divtech
            Studio untuk klien dari berbagai industri.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "0 5% 72px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "180px",
                    background: project.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Globe size={48} color={project.textColor} />
                  )}
                </div>
                <div style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        color: project.textColor,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        margin: "0",
                      }}
                    >
                      {project.category}
                    </p>
                    {project.isPersonal && (
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#94A3B8",
                          background: "#F1F5F9",
                          padding: "2px 8px",
                          borderRadius: "20px",
                        }}
                      >
                        Personal Project
                      </span>
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#0F172A",
                      marginBottom: "8px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#64748B",
                      lineHeight: "1.65",
                      marginBottom: "16px",
                    }}
                  >
                    {project.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        style={{
                          fontSize: "11px",
                          fontWeight: "600",
                          color: "#2563EB",
                          background: "#EFF6FF",
                          padding: "3px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/#kontak"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#2563EB",
                    }}
                  >
                    Diskusi proyek serupa <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "72px 5%",
          background: "#EFF6FF",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            data-aos="fade-up"
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "16px",
              lineHeight: "1.25",
            }}
          >
            Ingin proyek Anda jadi bagian dari portofolio ini?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: "16px",
              color: "#64748B",
              lineHeight: "1.7",
              marginBottom: "36px",
            }}
          >
            Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda
            sekarang.
          </p>
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            href="https://wa.me/6282335486623"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#2563EB",
              color: "#ffffff",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Mulai Proyek Bersama
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
