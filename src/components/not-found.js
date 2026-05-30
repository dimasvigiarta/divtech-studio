"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.codeBlock}>
            <div className={styles.codeBar}>
              <div
                className={styles.dot}
                style={{ background: "#EF4444" }}
              ></div>
              <div
                className={styles.dot}
                style={{ background: "#F59E0B" }}
              ></div>
              <div
                className={styles.dot}
                style={{ background: "#10B981" }}
              ></div>
              <span className={styles.filename}>error.js</span>
            </div>
            <div className={styles.codeContent}>
              <p>
                <span className={styles.kw}>const</span>{" "}
                <span className={styles.fn}>error</span> = {"{"}
              </p>
              <p>
                &nbsp;&nbsp;<span className={styles.fn}>status</span>:{" "}
                <span className={styles.num}>404</span>,
              </p>
              <p>
                &nbsp;&nbsp;<span className={styles.fn}>message</span>:{" "}
                <span className={styles.str}>'Halaman tidak ditemukan'</span>,
              </p>
              <p>
                &nbsp;&nbsp;<span className={styles.fn}>solution</span>:{" "}
                <span className={styles.str}>'Kembali ke beranda'</span>,
              </p>
              <p>{"}"}</p>
              <p className={styles.cursor}>&nbsp;</p>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.badge}>Error 404</div>
            <h1 className={styles.title}>
              Ups! Halaman
              <br />
              tidak ditemukan
            </h1>
            <p className={styles.desc}>
              Halaman yang Anda cari tidak ada atau sudah dipindahkan. Jangan
              khawatir — kembali ke beranda atau hubungi kami.
            </p>
            <div className={styles.actions}>
              <a href="/" className={styles.btnPrimary}>
                <ArrowLeft size={16} />
                Kembali ke Beranda
              </a>
              <a
                href="https://wa.me/6282335486623"
                className={styles.btnSecondary}
              >
                <MessageCircle size={16} />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
