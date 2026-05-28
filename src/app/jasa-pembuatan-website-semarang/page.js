import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Jasa Pembuatan Website Semarang - divtech Studio",
  description:
    "Jasa pembuatan website profesional di Semarang. Melayani startup, bisnis, dan instansi di Semarang dengan teknologi modern, SEO optimal, dan harga kompetitif.",
  keywords:
    "jasa pembuatan website semarang, jasa website semarang, web developer semarang, buat website semarang, website profesional semarang",
  alternates: {
    canonical: "https://divtech.studio/jasa-pembuatan-website-semarang",
  },
};

export default function SemarangPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section
        style={{
          padding: "80px 5%",
          background: "#ffffff",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          data-aos="fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#EFF6FF",
            color: "#2563EB",
            fontSize: "12px",
            fontWeight: "600",
            padding: "4px 12px",
            borderRadius: "20px",
            marginBottom: "24px",
          }}
        >
          <MapPin size={13} />
          Semarang, Jawa Tengah
        </div>
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
          Jasa Pembuatan Website{" "}
          <span style={{ color: "#2563EB" }}>Semarang</span> Profesional &
          Modern
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontSize: "18px",
            color: "#64748B",
            lineHeight: "1.7",
            maxWidth: "560px",
            marginBottom: "36px",
          }}
        >
          divtech studio melayani pembuatan website untuk startup, bisnis, dan
          instansi di Semarang. Teknologi modern, SEO optimal, dan tampilan yang
          berkesan.
        </p>
        <a
          data-aos="fade-up"
          data-aos-delay="300"
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
          <MessageCircle size={16} />
          Konsultasi Gratis Sekarang
        </a>
      </section>

      {/* KEUNGGULAN */}
      <section style={{ padding: "72px 5%", background: "#F8FAFC" }}>
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
            Kenapa divtech Studio
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "40px",
              lineHeight: "1.25",
            }}
          >
            Solusi website terbaik
            <br />
            untuk bisnis di Semarang
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
                title: "Teknologi Modern",
                desc: "Menggunakan Next.js dan Laravel — teknologi terkini yang cepat, aman, dan SEO-friendly.",
              },
              {
                title: "SEO Lokal Semarang",
                desc: "Website dioptimasi agar mudah ditemukan di Google oleh calon pelanggan di Semarang.",
              },
              {
                title: "Desain Profesional",
                desc: "Tampilan modern, clean, dan responsif di semua perangkat — HP, tablet, maupun laptop.",
              },
              {
                title: "Sistem Web Custom",
                desc: "Butuh sistem khusus? Kami buat sistem manajemen, kasir, inventori, dan lainnya sesuai kebutuhan.",
              },
              {
                title: "Pengerjaan Tepat Waktu",
                desc: "Estimasi waktu yang jelas sejak awal. Kami komit menyelesaikan proyek sesuai jadwal.",
              },
              {
                title: "Support Jangka Panjang",
                desc: "Kami tetap mendampingi setelah website selesai — maintenance, update, dan konsultasi lanjutan.",
              },
            ].map((item, i) => (
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
                  gap: "16px",
                }}
              >
                <div style={{ flexShrink: 0, marginTop: "2px" }}>
                  <CheckCircle size={20} color="#2563EB" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#0F172A",
                      marginBottom: "6px",
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
            Siap punya website untuk bisnis Anda di Semarang?
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
            Konsultasi gratis, tanpa komitmen. Hubungi kami sekarang dan
            dapatkan estimasi harga dalam 1x24 jam.
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
            <MessageCircle size={16} />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
