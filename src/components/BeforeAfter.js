"use client";

import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Transformasi Bisnis</p>
        <h2 className={styles.sectionTitle}>
          Dari bisnis yang tidak dikenal
          <br />
          menjadi <span>profesional online</span>
        </h2>

        <div className={styles.cards}>
          {/* BEFORE */}
          <div className={styles.cardBefore}>
            <p className={styles.cardLabel}>Sebelum</p>
            <div className={styles.shopWrap}>
              <div className={styles.shop}>
                <div className={styles.shopRoof}></div>
                <div className={styles.shopBody}>
                  <div
                    className={`${styles.shopWindow} ${styles.shopWindowL}`}
                  ></div>
                  <div
                    className={`${styles.shopWindow} ${styles.shopWindowR}`}
                  ></div>
                  <div className={styles.shopDoor}></div>
                </div>
              </div>
            </div>
            <div className={styles.beforeTag}>
              <div className={styles.dotRed}></div>
              Tidak ditemukan online
            </div>
            <p className={styles.beforeDesc}>
              Bisnis bagus tapi tidak muncul di Google dan tidak dikenal calon
              pelanggan baru
            </p>
            <div className={styles.noVisitors}>
              <div className={styles.personGray}></div>
              <div className={styles.personGray}></div>
              <div className={styles.personGray}></div>
            </div>
          </div>

          {/* MIDDLE */}
          <div className={styles.middle}>
            <div className={styles.midCard}>
              <p className={styles.midLabel}>divtech</p>
              <div className={styles.midLaptop}>
                <svg viewBox="0 0 40 30" fill="none">
                  <rect
                    x="2"
                    y="1"
                    width="36"
                    height="22"
                    rx="2"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="4"
                    y="3"
                    width="32"
                    height="18"
                    rx="1"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <rect
                    x="6"
                    y="5"
                    width="28"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.4)"
                  />
                  <rect
                    x="6"
                    y="10"
                    width="18"
                    height="1.5"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <rect
                    x="6"
                    y="14"
                    width="24"
                    height="1.5"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <rect
                    x="0"
                    y="23"
                    width="40"
                    height="4"
                    rx="2"
                    fill="rgba(255,255,255,0.2)"
                  />
                </svg>
              </div>
              <p className={styles.midSub}>Studio</p>
            </div>
            <div className={styles.arrowTrack}>
              <div className={styles.arrowFlow}></div>
            </div>
            <div className={styles.arrowTip}></div>
          </div>

          {/* AFTER */}
          <div className={styles.cardAfter}>
            <p className={styles.cardLabelAfter}>Sesudah</p>
            <div className={styles.shopWrap}>
              <div className={styles.shopAfter}>
                <div className={styles.shopRoofBlue}></div>
                <div className={styles.shopBodyBlue}>
                  <div
                    className={`${styles.shopWindowBlue} ${styles.shopWindowL}`}
                  ></div>
                  <div
                    className={`${styles.shopWindowBlue} ${styles.shopWindowR}`}
                  ></div>
                  <div className={styles.shopDoorBlue}></div>
                </div>
              </div>
            </div>
            <div className={styles.afterTag}>
              <div className={styles.dotGreen}></div>
              Online & profesional
            </div>
            <div className={styles.googleRows}>
              <div className={`${styles.gRow} ${styles.r1}`}>
                <div className={`${styles.gDot} ${styles.gDotGreen}`}></div>
                <span>#1 Google</span>
              </div>
              <div className={`${styles.gRow} ${styles.r2}`}>
                <div className={`${styles.gDot} ${styles.gDotBlue}`}></div>
                <span>Website live</span>
              </div>
              <div className={`${styles.gRow} ${styles.r3}`}>
                <div className={`${styles.gDot} ${styles.gDotYellow}`}></div>
                <span>Klien bertambah</span>
              </div>
            </div>
            <div className={styles.visitors}>
              <div className={styles.personBlue}></div>
              <div className={styles.personBlue}></div>
              <div className={styles.personBlue}></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {[
            { num: "1", title: "Konsultasi", desc: "Gratis, tanpa komitmen" },
            {
              num: "2",
              title: "Website dibuat",
              desc: "SEO-ready & profesional",
            },
            { num: "3", title: "Go live!", desc: "Online & siap diakses" },
            { num: "4", title: "Bisnis berkembang", desc: "Muncul di Google" },
          ].map((s, i) => (
            <div
              key={i}
              className={styles.step}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <strong>{s.title}</strong>
                <span>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
