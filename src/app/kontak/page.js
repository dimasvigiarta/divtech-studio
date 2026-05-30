"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    layanan: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo divtech Studio, saya ingin konsultasi!

*Nama:* ${form.nama}
*Email:* ${form.email}
*WhatsApp:* ${form.whatsapp}
*Layanan yang diminati:* ${form.layanan}
*Pesan:* ${form.pesan}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6282335486623?text=${encoded}`, "_blank");
  };

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
            Kontak
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
            Mulai proyek bersama{" "}
            <span style={{ color: "#2563EB" }}>divtech Studio</span>
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
            Ceritakan kebutuhan Anda dan kami akan segera menghubungi untuk
            diskusi lebih lanjut. Gratis, tanpa komitmen.
          </p>
        </div>
      </section>

      {/* KONTEN */}
      <section style={{ padding: "0 5% 72px", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
          }}
        >
          {/* INFO */}
          <div data-aos="fade-up">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#0F172A",
                marginBottom: "24px",
              }}
            >
              Informasi Kontak
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#EFF6FF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#94A3B8",
                      marginBottom: "4px",
                    }}
                  >
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6282335486623"
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    +62 823-3548-6623
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#EFF6FF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#94A3B8",
                      marginBottom: "4px",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hello@divtech.studio"
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    hello@divtech.studio
                  </a>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#EFF6FF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#94A3B8",
                      marginBottom: "4px",
                    }}
                  >
                    Lokasi
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    Jawa Tengah
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B" }}>
                    Melayani seluruh Indonesia secara remote
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#EFF6FF",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#94A3B8",
                      marginBottom: "4px",
                    }}
                  >
                    Jam Operasional
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#0F172A",
                    }}
                  >
                    Senin – Sabtu
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748B" }}>
                    08.00 – 17.00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#F8FAFC",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #E2E8F0",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "#64748B",
                  lineHeight: "1.7",
                }}
              >
                Butuh respon cepat? Langsung chat via WhatsApp — biasanya kami
                membalas dalam{" "}
                <strong style={{ color: "#0F172A" }}>1x24 jam</strong>.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#0F172A",
                marginBottom: "24px",
              }}
            >
              Kirim Pesan
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#0F172A",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#0F172A",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="contoh@email.com"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#0F172A",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="08xxxxxxxxxx"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    outline: "none",
                    background: "#fff",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#0F172A",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Layanan yang Diminati
                </label>
                <select
                  name="layanan"
                  value={form.layanan}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: form.layanan ? "#0F172A" : "#94A3B8",
                    outline: "none",
                    background: "#fff",
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Pilih layanan...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Company Profile">Company Profile</option>
                  <option value="Toko Online">Toko Online</option>
                  <option value="Sistem Web Custom">Sistem Web Custom</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#0F172A",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Pesan *
                </label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan kebutuhan Anda secara singkat..."
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0F172A",
                    outline: "none",
                    background: "#fff",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  background: "#2563EB",
                  color: "#ffffff",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Send size={16} />
                Kirim via WhatsApp
              </button>
              <p
                style={{
                  fontSize: "12px",
                  color: "#94A3B8",
                  textAlign: "center",
                }}
              >
                Pesan akan dikirim langsung ke WhatsApp divtech Studio
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
