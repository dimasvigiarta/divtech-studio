import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Blog - divtech Studio",
  description:
    "Tips, tutorial, dan artikel seputar pembuatan website, SEO, dan digital marketing untuk UMKM dan bisnis lokal di Blora dan Semarang.",
  alternates: {
    canonical: "https://divtech.studio/blog",
  },
};

const articles = [
  {
    category: "SEO",
    title: "Cara Mudah Agar Website UMKM Muncul di Halaman 1 Google",
    desc: "Panduan lengkap optimasi SEO lokal untuk bisnis kecil dan menengah agar mudah ditemukan calon pelanggan di Google.",
    date: "20 Mei 2025",
    readTime: "5 menit",
    slug: "cara-website-umkm-muncul-halaman-1-google",
  },
  {
    category: "Tips",
    title: "Berapa Biaya Buat Website di Blora? Ini Rinciannya",
    desc: "Panduan lengkap estimasi biaya pembuatan website untuk UMKM, toko online, dan company profile di Blora dan sekitarnya.",
    date: "15 Mei 2025",
    readTime: "4 menit",
    slug: "biaya-buat-website-blora",
  },
  {
    category: "Tips",
    title: "Manfaat Website untuk UMKM di Semarang yang Wajib Diketahui",
    desc: "Kenapa bisnis lokal di Semarang harus punya website? Ini 7 manfaat nyata yang bisa langsung dirasakan.",
    date: "10 Mei 2025",
    readTime: "4 menit",
    slug: "manfaat-website-untuk-umkm-semarang",
  },
  {
    category: "Tutorial",
    title: "Perbedaan Landing Page, Company Profile, dan Toko Online",
    desc: "Bingung pilih jenis website yang tepat untuk bisnis Anda? Artikel ini menjelaskan perbedaan dan kapan harus menggunakannya.",
    date: "5 Mei 2025",
    readTime: "6 menit",
    slug: "perbedaan-landing-page-company-profile-toko-online",
  },
  {
    category: "SEO",
    title:
      "Google Business Profile: Cara Daftar dan Optimalkan untuk Bisnis Lokal",
    desc: "Panduan lengkap mendaftarkan bisnis Anda di Google Business Profile agar muncul di Google Maps dan pencarian lokal.",
    date: "1 Mei 2025",
    readTime: "7 menit",
    slug: "cara-daftar-google-business-profile",
  },
  {
    category: "Tutorial",
    title: "WordPress vs Next.js: Mana yang Tepat untuk Website Bisnis Anda?",
    desc: "Perbandingan lengkap WordPress dan Next.js dari sisi kemudahan, performa, SEO, dan biaya untuk website bisnis.",
    date: "25 April 2025",
    readTime: "5 menit",
    slug: "wordpress-vs-nextjs-untuk-website-bisnis",
  },
];

const categoryColors = {
  SEO: { bg: "#EFF6FF", text: "#2563EB" },
  Tips: { bg: "#F0FDF4", text: "#16A34A" },
  Tutorial: { bg: "#FFF7ED", text: "#EA580C" },
};

export default function BlogPage() {
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
            Blog
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
            Tips & insight seputar{" "}
            <span style={{ color: "#2563EB" }}>website & digital</span>
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
            Artikel praktis seputar pembuatan website, SEO lokal, dan strategi
            digital untuk UMKM dan bisnis di Indonesia.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section style={{ padding: "0 5% 72px", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            {articles.map((article, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      color: "#94A3B8",
                    }}
                  >
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                </div>
                <h2
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#0F172A",
                    lineHeight: "1.5",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748B",
                    lineHeight: "1.65",
                    flex: 1,
                  }}
                >
                  {article.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "4px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>
                    {article.date}
                  </span>
                  <a
                    href={`/blog/${article.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#2563EB",
                    }}
                  >
                    Baca <ArrowRight size={13} />
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
            Siap wujudkan website impian Anda?
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
            Konsultasi gratis, tanpa komitmen. Hubungi divtech Studio sekarang.
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
            Konsultasi Gratis
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
