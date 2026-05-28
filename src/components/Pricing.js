"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./Pricing.module.css";

const pricingData = {
  tanpaDomain: [
    {
      name: "Landing Page",
      desc: "Cocok untuk promosi produk, jasa, atau event khusus.",
      price: "Rp 300.000",
      note: "sekali bayar",
      popular: false,
      features: [
        "1 halaman landing page",
        "Desain custom & responsif",
        "Formulir kontak / WhatsApp",
        "SEO dasar (meta, title)",
        "Revisi 2x",
        "Selesai 1–3 hari",
      ],
    },
    {
      name: "Company Profile",
      desc: "Website resmi untuk bisnis atau instansi yang ingin tampil profesional.",
      price: "Rp 750.000",
      note: "sekali bayar",
      popular: true,
      features: [
        "Hingga 5 halaman",
        "Desain custom & responsif",
        "Halaman: Beranda, Layanan, Tentang, Portofolio, Kontak",
        "SEO on-page lengkap",
        "Integrasi Google Maps",
        "Revisi 3x",
        "Selesai 3–7 hari",
      ],
    },
    {
      name: "Toko Online",
      desc: "Website jualan lengkap dengan katalog produk dan manajemen pesanan.",
      price: "Rp 1.500.000",
      note: "sekali bayar",
      popular: false,
      features: [
        "Katalog produk unlimited",
        "Keranjang & checkout",
        "Integrasi WhatsApp order",
        "Manajemen produk & stok",
        "SEO on-page lengkap",
        "Revisi 3x",
        "Selesai 7–14 hari",
      ],
    },
    {
      name: "Sistem Web Custom",
      desc: "Sistem berbasis web sesuai kebutuhan bisnis — kos, kasir, inventori, dll.",
      price: "Mulai Rp 2.500.000",
      note: "tergantung fitur",
      popular: false,
      features: [
        "Analisis kebutuhan sistem",
        "Desain UI/UX custom",
        "Database & backend Laravel",
        "Login & manajemen user",
        "Laporan & export data",
        "Dokumentasi penggunaan",
        "Selesai 14–30 hari",
      ],
    },
  ],
  denganDomain: [
    {
      name: "Landing Page",
      desc: "Cocok untuk promosi produk, jasa, atau event khusus.",
      price: "Rp 650.000",
      note: "sudah include domain + hosting 1 tahun",
      popular: false,
      features: [
        "1 halaman landing page",
        "Desain custom & responsif",
        "Domain .com 1 tahun",
        "Hosting 1 tahun (Hostinger)",
        "SSL gratis (HTTPS)",
        "SEO dasar (meta, title)",
        "Revisi 2x",
        "Selesai 1–3 hari",
      ],
    },
    {
      name: "Company Profile",
      desc: "Website resmi untuk bisnis atau instansi yang ingin tampil profesional.",
      price: "Rp 1.100.000",
      note: "sudah include domain + hosting 1 tahun",
      popular: true,
      features: [
        "Hingga 5 halaman",
        "Desain custom & responsif",
        "Domain .com 1 tahun",
        "Hosting 1 tahun (Hostinger)",
        "SSL gratis (HTTPS)",
        "SEO on-page lengkap",
        "Integrasi Google Maps",
        "Revisi 3x",
        "Selesai 3–7 hari",
      ],
    },
    {
      name: "Toko Online",
      desc: "Website jualan lengkap dengan katalog produk dan manajemen pesanan.",
      price: "Rp 1.850.000",
      note: "sudah include domain + hosting 1 tahun",
      popular: false,
      features: [
        "Katalog produk unlimited",
        "Keranjang & checkout",
        "Integrasi WhatsApp order",
        "Domain .com 1 tahun",
        "Hosting 1 tahun (Hostinger)",
        "SSL gratis (HTTPS)",
        "Manajemen produk & stok",
        "Revisi 3x",
        "Selesai 7–14 hari",
      ],
    },
    {
      name: "Sistem Web Custom",
      desc: "Sistem berbasis web sesuai kebutuhan bisnis — kos, kasir, inventori, dll.",
      price: "Mulai Rp 2.850.000",
      note: "sudah include domain + hosting 1 tahun",
      popular: false,
      features: [
        "Analisis kebutuhan sistem",
        "Desain UI/UX custom",
        "Database & backend Laravel",
        "Login & manajemen user",
        "Domain .com 1 tahun",
        "Hosting VPS 1 tahun",
        "Dokumentasi penggunaan",
        "Selesai 14–30 hari",
      ],
    },
  ],
};

export default function Pricing() {
  const [active, setActive] = useState("tanpaDomain");
  const packages = pricingData[active];

  return (
    <section className={styles.section} id="harga">
      <div className={styles.inner}>
        <p className={styles.sectionLabel} data-aos="fade-up">
          Harga & Paket
        </p>
        <h2
          className={styles.sectionTitle}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Transparan, terjangkau,
          <br />
          tanpa biaya tersembunyi
        </h2>
        <p
          className={styles.sectionDesc}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Pilih paket yang sesuai kebutuhan. Semua harga sudah final — tidak ada
          biaya tambahan di luar kesepakatan.
        </p>

        <div className={styles.tabs} data-aos="fade-up" data-aos-delay="300">
          <button
            className={`${styles.tab} ${active === "tanpaDomain" ? styles.tabActive : ""}`}
            onClick={() => setActive("tanpaDomain")}
          >
            Tanpa Domain & Hosting
          </button>
          <button
            className={`${styles.tab} ${active === "denganDomain" ? styles.tabActive : ""}`}
            onClick={() => setActive("denganDomain")}
          >
            Include Domain & Hosting
          </button>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`${styles.card} ${pkg.popular ? styles.cardPopular : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>Paling Populer</div>
              )}
              <div className={styles.cardHeader}>
                <div className={styles.cardName}>{pkg.name}</div>
                <div className={styles.cardDesc}>{pkg.desc}</div>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{pkg.price}</span>
                </div>
                <div className={styles.priceNote}>{pkg.note}</div>
              </div>
              <ul className={styles.features}>
                {pkg.features.map((f, j) => (
                  <li key={j} className={styles.feature}>
                    <Check size={14} className={styles.featureIcon} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282335486623"
                className={pkg.popular ? styles.btnPrimary : styles.btnOutline}
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <strong>Catatan:</strong> Harga di atas adalah harga dasar. Untuk
          kebutuhan khusus seperti fitur tambahan, integrasi API, atau desain
          premium, harga dapat disesuaikan. Konsultasikan kebutuhan Anda
          terlebih dahulu untuk mendapatkan penawaran terbaik.
        </div>
      </div>
    </section>
  );
}
