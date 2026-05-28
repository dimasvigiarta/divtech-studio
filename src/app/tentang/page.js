import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Code, Globe, Smartphone } from "lucide-react";

export const metadata = {
  title: "Tentang Kami - divtech Studio",
  description:
    "divtech Studio adalah jasa pembuatan website profesional berbasis di Jawa Tengah. Melayani UMKM, bisnis, dan instansi di Blora, Semarang, dan seluruh Indonesia.",
  alternates: {
    canonical: "https://divtech.studio/tentang",
  },
};

export default function TentangPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ padding: "80px 5%", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#2563EB",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Tentang Kami
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              color: "#0F172A",
              lineHeight: "1.2",
              maxWidth: "720px",
              marginBottom: "20px",
            }}
          >
            Kami hadir untuk membantu bisnis Anda{" "}
            <span style={{ color: "#2563EB" }}>tampil profesional</span> di
            internet
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#64748B",
              lineHeight: "1.7",
              maxWidth: "640px",
            }}
          >
            divtech Studio adalah studio pengembangan web freelance yang
            berfokus pada pembuatan website dan sistem berbasis web untuk UMKM,
            bisnis, dan instansi di Indonesia.
          </p>
        </div>
      </section>

      {/* NILAI */}
      <section style={{ padding: "72px 5%", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#2563EB",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Nilai Kami
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "40px",
              lineHeight: "1.25",
            }}
          >
            Kenapa memilih
            <br />
            divtech Studio
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                icon: <Code size={20} />,
                title: "Kode Berkualitas",
                desc: "Setiap proyek dikerjakan dengan standar kode yang bersih, terstruktur, dan mudah dimaintain jangka panjang.",
              },
              {
                icon: <Globe size={20} />,
                title: "SEO First",
                desc: "Setiap website dibangun dengan fondasi SEO yang kuat agar mudah ditemukan di Google sejak hari pertama.",
              },
              {
                icon: <Smartphone size={20} />,
                title: "Mobile First",
                desc: "Desain mengutamakan tampilan mobile karena lebih dari 60% pengguna internet mengakses lewat smartphone.",
              },
              {
                icon: <CheckCircle size={20} />,
                title: "Transparan",
                desc: "Harga jelas, proses terbuka, dan komunikasi aktif dari awal hingga proyek selesai. Tidak ada kejutan di akhir.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
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

      {/* TEKNOLOGI */}
      <section style={{ padding: "72px 5%", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#2563EB",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Teknologi
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "16px",
              lineHeight: "1.25",
            }}
          >
            Stack teknologi yang kami gunakan
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#64748B",
              lineHeight: "1.7",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            Kami menggunakan teknologi modern yang terbukti handal, cepat, dan
            SEO-friendly.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              "Next.js",
              "Laravel",
              "WordPress",
              "MySQL",
              "React",
              "Tailwind CSS",
              "WooCommerce",
              "Vercel",
            ].map((tech, i) => (
              <span
                key={i}
                style={{
                  background: "#EFF6FF",
                  color: "#2563EB",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  border: "1px solid #BFDBFE",
                }}
              >
                {tech}
              </span>
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
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "16px",
              lineHeight: "1.25",
            }}
          >
            Siap bekerja sama dengan divtech Studio?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#64748B",
              lineHeight: "1.7",
              marginBottom: "36px",
            }}
          >
            Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan Anda dan kami
            bantu temukan solusi terbaik.
          </p>
          <a
            href="/#kontak"
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
            Hubungi Kami
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
