import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className={styles.section} id="proses">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Proses Kerja</p>
        <h2 className={styles.sectionTitle}>
          Transparan dari awal
          <br />
          hingga selesai
        </h2>

        <div className={styles.grid}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <h3>Konsultasi</h3>
            <p>
              Diskusi kebutuhan, tujuan, dan anggaran Anda. Gratis, tanpa
              tekanan, bisa via WhatsApp atau meeting online.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <h3>Penawaran</h3>
            <p>
              Kami kirimkan proposal harga dan estimasi waktu yang jelas. Tidak
              ada biaya tersembunyi.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <h3>Pengerjaan</h3>
            <p>
              Proses development dengan update progres berkala. Anda bisa pantau
              dan beri masukan di setiap tahap.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>4</div>
            <h3>Revisi</h3>
            <p>
              Kami pastikan hasilnya sesuai ekspektasi sebelum serah terima.
              Revisi sudah termasuk dalam paket.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNum}>5</div>
            <h3>Launch & Support</h3>
            <p>
              Website live dan siap digunakan. Kami tetap mendampingi jika ada
              pertanyaan setelah website selesai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
