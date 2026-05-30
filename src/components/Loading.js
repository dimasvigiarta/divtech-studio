"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Loading.module.css";

export default function Loading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.bar}></div>
      <div className={styles.center}>
        <div className={styles.logo}>
          <div className={styles.logoDot}></div>
          <span>divtech</span>
        </div>
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
}
