import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Jasa Pembuatan Website Blora - divtech Studio",
  description:
    "Jasa pembuatan website profesional di Blora. Melayani UMKM, toko, instansi, dan bisnis lokal Blora dengan harga terjangkau dan kualitas profesional.",
  keywords:
    "jasa pembuatan website blora, jasa website blora, web developer blora, buat website blora, website murah blora",
  alternates: {
    canonical: "https://divtech.studio/jasa-pembuatan-website-blora",
  },
};

export default function BloraPage() {
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
          Blora, Jawa Tengah
        </div>
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
          Jasa Pembuatan Website <span style={{ color: "#2563EB" }}>Blora</span>{" "}
          Profesional & Terjangkau
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#64748B",
            lineHeight: "1.7",
            maxWidth: "560px",
            marginBottom: "36px",
          }}
        >
          divtech studio melayani pembuatan website untuk UMKM, toko, instansi,
          dan bisnis lokal di Blora dan sekitarnya. Harga terjangkau, kualitas
          profesional.
        </p>
        <a
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
            untuk bisnis di Blora
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
                title: "Harga Terjangkau",
                desc: "Paket website mulai dari harga yang ramah di kantong, tanpa mengorbankan kualitas.",
              },
              {
                title: "SEO Lokal Blora",
                desc: "Website dioptimasi agar mudah ditemukan di Google oleh calon pelanggan di Blora.",
              },
              {
                title: "Desain Profesional",
                desc: "Tampilan modern, clean, dan responsif di semua perangkat — HP, tablet, maupun laptop.",
              },
              {
                title: "Support Lokal",
                desc: "Bisa konsultasi tatap muka langsung di Blora. Tidak perlu khawatir komunikasi jarak jauh.",
              },
              {
                title: "Pengerjaan Cepat",
                desc: "Landing page selesai dalam 1–3 hari, company profile 3–7 hari sesuai kesepakatan.",
              },
              {
                title: "Garansi Revisi",
                desc: "Tidak puas? Kami revisi sampai hasilnya sesuai dengan ekspektasi Anda.",
              },
            ].map((item, i) => (
              <div
                key={i}
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
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: "700",
              color: "#0F172A",
              marginBottom: "16px",
              lineHeight: "1.25",
            }}
          >
            Siap punya website untuk bisnis Anda di Blora?
          </h2>
          <p
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
