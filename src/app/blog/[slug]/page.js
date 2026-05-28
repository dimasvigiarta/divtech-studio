import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const articles = {
  "cara-website-umkm-muncul-halaman-1-google": {
    title: "Cara Mudah Agar Website UMKM Muncul di Halaman 1 Google",
    category: "SEO",
    date: "20 Mei 2025",
    readTime: "5 menit",
    content: [
      {
        type: "p",
        text: "Memiliki website saja tidak cukup — website Anda harus bisa ditemukan oleh calon pelanggan di Google. Inilah yang disebut SEO (Search Engine Optimization).",
      },
      {
        type: "h2",
        text: "1. Tentukan Keyword yang Tepat",
      },
      {
        type: "p",
        text: 'Keyword adalah kata yang diketik calon pelanggan di Google. Untuk UMKM lokal, fokus pada keyword berbasis lokasi seperti "toko baju Blora" atau "catering Semarang". Keyword lokal lebih mudah bersaing dibanding keyword umum.',
      },
      {
        type: "h2",
        text: "2. Optimalkan Halaman Website",
      },
      {
        type: "p",
        text: "Pastikan setiap halaman punya title tag, meta description, dan heading H1 yang mengandung keyword utama. Konten halaman harus relevan, informatif, dan minimal 300 kata.",
      },
      {
        type: "h2",
        text: "3. Daftarkan di Google Business Profile",
      },
      {
        type: "p",
        text: "Google Business Profile adalah profil bisnis gratis yang muncul di Google Maps dan hasil pencarian lokal. Daftarkan bisnis Anda, isi informasi lengkap, dan minta pelanggan untuk memberikan ulasan.",
      },
      {
        type: "h2",
        text: "4. Pastikan Website Cepat dan Mobile-Friendly",
      },
      {
        type: "p",
        text: "Google memprioritaskan website yang cepat dan responsif di smartphone. Gunakan gambar berformat WebP, hindari plugin berlebihan, dan pastikan tampilan mobile nyaman digunakan.",
      },
      {
        type: "h2",
        text: "5. Buat Konten Secara Rutin",
      },
      {
        type: "p",
        text: "Blog atau artikel yang relevan dengan bisnis Anda membantu Google memahami topik website Anda. Tulis artikel minimal 2x sebulan dengan topik yang dicari calon pelanggan.",
      },
    ],
  },
  "biaya-buat-website-blora": {
    title: "Berapa Biaya Buat Website di Blora? Ini Rinciannya",
    category: "Tips",
    date: "15 Mei 2025",
    readTime: "4 menit",
    content: [
      {
        type: "p",
        text: "Banyak pelaku UMKM di Blora yang ingin punya website tapi tidak tahu berapa biaya yang harus disiapkan. Artikel ini membahas rincian biaya pembuatan website secara transparan.",
      },
      {
        type: "h2",
        text: "Komponen Biaya Website",
      },
      {
        type: "p",
        text: "Biaya website terdiri dari beberapa komponen: domain (nama website), hosting (tempat menyimpan file website), dan biaya pengerjaan (jasa developer). Masing-masing punya kisaran harga yang berbeda.",
      },
      {
        type: "h2",
        text: "Biaya Domain",
      },
      {
        type: "p",
        text: "Domain .com biasanya berkisar Rp 150.000–200.000 per tahun. Domain .id sekitar Rp 100.000–150.000 per tahun. Domain adalah identitas unik website Anda di internet.",
      },
      {
        type: "h2",
        text: "Biaya Hosting",
      },
      {
        type: "p",
        text: "Hosting shared untuk website sederhana berkisar Rp 150.000–500.000 per tahun. Untuk website dengan traffic tinggi atau sistem custom, dibutuhkan VPS dengan biaya Rp 600.000–2.000.000 per tahun.",
      },
      {
        type: "h2",
        text: "Biaya Pengerjaan di divtech Studio",
      },
      {
        type: "p",
        text: "Landing page mulai dari Rp 300.000, company profile mulai Rp 750.000, toko online mulai Rp 1.500.000, dan sistem web custom mulai Rp 2.500.000. Semua harga sudah final tanpa biaya tersembunyi.",
      },
    ],
  },
  "manfaat-website-untuk-umkm-semarang": {
    title: "Manfaat Website untuk UMKM di Semarang yang Wajib Diketahui",
    category: "Tips",
    date: "10 Mei 2025",
    readTime: "4 menit",
    content: [
      {
        type: "p",
        text: "Di era digital seperti sekarang, website bukan lagi kemewahan — melainkan kebutuhan bagi setiap bisnis yang ingin berkembang, termasuk UMKM di Semarang.",
      },
      {
        type: "h2",
        text: "1. Tampil Profesional 24 Jam",
      },
      {
        type: "p",
        text: "Website bekerja untuk bisnis Anda selama 24 jam sehari, 7 hari seminggu. Calon pelanggan bisa melihat produk dan layanan Anda kapan saja, bahkan saat Anda sedang tidur.",
      },
      {
        type: "h2",
        text: "2. Mudah Ditemukan di Google",
      },
      {
        type: "p",
        text: "Dengan optimasi SEO yang tepat, bisnis Anda bisa muncul di halaman pertama Google ketika calon pelanggan mencari produk atau jasa yang Anda tawarkan di Semarang.",
      },
      {
        type: "h2",
        text: "3. Meningkatkan Kepercayaan Calon Pelanggan",
      },
      {
        type: "p",
        text: "Bisnis yang punya website terlihat lebih profesional dan terpercaya. Calon pelanggan cenderung lebih yakin bertransaksi dengan bisnis yang memiliki website resmi.",
      },
      {
        type: "h2",
        text: "4. Media Promosi yang Efektif",
      },
      {
        type: "p",
        text: "Website adalah pusat dari semua aktivitas digital marketing Anda — dari media sosial, iklan Google, hingga WhatsApp, semuanya bisa diarahkan ke website untuk konversi yang lebih baik.",
      },
    ],
  },
  "perbedaan-landing-page-company-profile-toko-online": {
    title: "Perbedaan Landing Page, Company Profile, dan Toko Online",
    category: "Tutorial",
    date: "5 Mei 2025",
    readTime: "6 menit",
    content: [
      {
        type: "p",
        text: "Saat ingin membuat website, banyak pelaku bisnis bingung harus pilih jenis apa. Artikel ini menjelaskan perbedaan landing page, company profile, dan toko online secara lengkap.",
      },
      {
        type: "h2",
        text: "Landing Page",
      },
      {
        type: "p",
        text: "Landing page adalah halaman tunggal yang dirancang khusus untuk satu tujuan — biasanya untuk promosi produk, jasa, atau event tertentu. Cocok untuk kampanye iklan, peluncuran produk baru, atau penawaran terbatas.",
      },
      {
        type: "h2",
        text: "Company Profile",
      },
      {
        type: "p",
        text: "Company profile adalah website resmi yang menampilkan informasi lengkap tentang bisnis Anda — mulai dari profil perusahaan, layanan, portofolio, hingga kontak. Cocok untuk bisnis yang ingin tampil profesional dan membangun kepercayaan.",
      },
      {
        type: "h2",
        text: "Toko Online",
      },
      {
        type: "p",
        text: "Toko online adalah website yang memungkinkan pengunjung membeli produk secara langsung. Dilengkapi dengan katalog produk, keranjang belanja, dan sistem pembayaran. Cocok untuk bisnis yang ingin berjualan secara digital.",
      },
      {
        type: "h2",
        text: "Mana yang Tepat untuk Bisnis Anda?",
      },
      {
        type: "p",
        text: "Pilih landing page jika butuh promosi cepat dengan budget terbatas. Pilih company profile jika ingin membangun kredibilitas bisnis. Pilih toko online jika ingin berjualan langsung lewat website.",
      },
    ],
  },
  "cara-daftar-google-business-profile": {
    title:
      "Google Business Profile: Cara Daftar dan Optimalkan untuk Bisnis Lokal",
    category: "SEO",
    date: "1 Mei 2025",
    readTime: "7 menit",
    content: [
      {
        type: "p",
        text: "Google Business Profile (GBP) adalah tools gratis dari Google yang memungkinkan bisnis Anda muncul di Google Maps dan hasil pencarian lokal. Ini adalah salah satu cara paling efektif untuk mendapatkan pelanggan lokal.",
      },
      {
        type: "h2",
        text: "Cara Mendaftar Google Business Profile",
      },
      {
        type: "p",
        text: 'Buka business.google.com, klik "Kelola sekarang", masukkan nama bisnis Anda, pilih kategori yang sesuai, masukkan alamat bisnis, dan verifikasi kepemilikan bisnis melalui kartu pos atau telepon.',
      },
      {
        type: "h2",
        text: "Lengkapi Informasi Bisnis",
      },
      {
        type: "p",
        text: "Isi semua informasi dengan lengkap — jam operasional, nomor telepon, website, foto bisnis, dan deskripsi. Semakin lengkap informasi, semakin tinggi kemungkinan muncul di pencarian lokal.",
      },
      {
        type: "h2",
        text: "Kumpulkan Ulasan Pelanggan",
      },
      {
        type: "p",
        text: "Minta pelanggan yang puas untuk memberikan ulasan di Google. Ulasan positif sangat berpengaruh terhadap peringkat di Google Maps dan membangun kepercayaan calon pelanggan baru.",
      },
    ],
  },
  "wordpress-vs-nextjs-untuk-website-bisnis": {
    title: "WordPress vs Next.js: Mana yang Tepat untuk Website Bisnis Anda?",
    category: "Tutorial",
    date: "25 April 2025",
    readTime: "5 menit",
    content: [
      {
        type: "p",
        text: "WordPress dan Next.js adalah dua teknologi populer untuk membuat website bisnis. Keduanya punya kelebihan dan kekurangan masing-masing. Artikel ini membantu Anda memilih yang tepat.",
      },
      {
        type: "h2",
        text: "WordPress",
      },
      {
        type: "p",
        text: "WordPress adalah CMS (Content Management System) yang mudah digunakan tanpa perlu coding. Cocok untuk website yang butuh update konten rutin, memiliki ribuan plugin siap pakai, dan biaya pengerjaan lebih terjangkau.",
      },
      {
        type: "h2",
        text: "Next.js",
      },
      {
        type: "p",
        text: "Next.js adalah framework JavaScript modern yang menghasilkan website super cepat dan SEO-optimal. Cocok untuk website yang butuh performa tinggi, keamanan maksimal, dan skalabilitas jangka panjang.",
      },
      {
        type: "h2",
        text: "Kesimpulan",
      },
      {
        type: "p",
        text: "Pilih WordPress jika butuh website cepat jadi dengan budget terbatas dan ingin kelola konten sendiri. Pilih Next.js jika prioritas utama adalah performa, keamanan, dan SEO yang optimal untuk jangka panjang.",
      },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Artikel tidak ditemukan" };
  return {
    title: `${article.title} - divtech Studio`,
    description: article.content[0].text,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main>
        <Navbar />
        <section style={{ padding: "80px 5%", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "16px",
            }}
          >
            Artikel tidak ditemukan
          </h1>
          <a href="/blog" style={{ color: "#2563EB", fontWeight: "600" }}>
            Kembali ke Blog
          </a>
        </section>
        <Footer />
      </main>
    );
  }

  const categoryColors = {
    SEO: { bg: "#EFF6FF", text: "#2563EB" },
    Tips: { bg: "#F0FDF4", text: "#16A34A" },
    Tutorial: { bg: "#FFF7ED", text: "#EA580C" },
  };

  return (
    <main>
      <Navbar />

      <section style={{ padding: "80px 5%", background: "#ffffff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <a
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#64748B",
              marginBottom: "32px",
            }}
          >
            <ArrowLeft size={16} /> Kembali ke Blog
          </a>

          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              color: categoryColors[article.category].text,
              background: categoryColors[article.category].bg,
              padding: "3px 10px",
              borderRadius: "20px",
            }}
          >
            {article.category}
          </span>

          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
              fontWeight: "700",
              color: "#0F172A",
              lineHeight: "1.3",
              margin: "16px 0",
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "40px",
              paddingBottom: "40px",
              borderBottom: "1px solid #E2E8F0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#94A3B8",
              }}
            >
              <Calendar size={14} /> {article.date}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "#94A3B8",
              }}
            >
              <Clock size={14} /> {article.readTime} baca
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {article.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "#0F172A",
                      marginTop: "12px",
                    }}
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    color: "#64748B",
                    lineHeight: "1.8",
                  }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "28px",
              background: "#EFF6FF",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#0F172A",
                marginBottom: "8px",
              }}
            >
              Butuh website untuk bisnis Anda?
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#64748B",
                marginBottom: "20px",
              }}
            >
              Konsultasi gratis dengan divtech Studio sekarang.
            </p>
            <a
              href="https://wa.me/6282335486623"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#2563EB",
                color: "#ffffff",
                padding: "10px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
