"use client";

import styles from "./WorkspaceAnimation.module.css";

export default function WorkspaceAnimation() {
  return (
    <div className={styles.workspace}>
      <svg
        className={styles.dotGrid}
        width="80"
        height="80"
        viewBox="0 0 80 80"
      >
        <pattern
          id="dots"
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="#2563EB" />
        </pattern>
        <rect width="80" height="80" fill="url(#dots)" />
      </svg>

      <div className={styles.laptopWrap}>
        <div className={`${styles.floatTag} ${styles.tag4}`}>&lt;/&gt;</div>
        <div className={`${styles.floatTag} ${styles.tag5}`}>{"{ }"}</div>

        <div className={styles.laptopScreen}>
          <div className={styles.screenBar}>
            <div className={`${styles.dot} ${styles.dotRed}`}></div>
            <div className={`${styles.dot} ${styles.dotYellow}`}></div>
            <div className={`${styles.dot} ${styles.dotGreen}`}></div>
            <div className={styles.urlBar}></div>
          </div>

          <div className={styles.codeArea}>
            <span className={styles.codeLine}>
              <span className={styles.cm}>{"// divtech Studio"}</span>
            </span>
            <span className={styles.codeLine}>
              <span className={styles.kw}>export default function</span>{" "}
              <span className={styles.fn}>Website</span>
              {"() {"}
            </span>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>const</span> client ={" "}
              {"{"}
            </span>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className={styles.fn}>location</span>:{" "}
              <span className={styles.str}>'Blora & Semarang'</span>,
            </span>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.fn}>quality</span>
              : <span className={styles.str}>'profesional'</span>,
            </span>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.fn}>seo</span>:{" "}
              <span className={styles.num}>true</span>,
            </span>
            <span className={styles.codeLine}>&nbsp;&nbsp;{"}"}</span>
            <span className={styles.codeLine}>
              &nbsp;&nbsp;<span className={styles.kw}>return</span> &lt;
              <span className={styles.fn}>WebsiteTerbaik</span> /&gt;{" "}
              <span className={styles.cursor}></span>
            </span>
          </div>
        </div>

        <div className={styles.laptopBase}>
          <div className={styles.laptopNotch}></div>
        </div>
        <div className={styles.laptopBottom}></div>

        <div className={`${styles.floatTag} ${styles.tag1}`}>Next.js</div>
        <div className={`${styles.floatTag} ${styles.tag2}`}>Laravel</div>
        <div className={`${styles.floatTag} ${styles.tag3}`}>WordPress</div>

        <div className={styles.spinnerWrap}>
          <div className={styles.spinnerRing}></div>
        </div>

        <div className={styles.coffeeWrap}>
          <div className={styles.steam}>
            <div className={styles.steamLine}></div>
            <div className={styles.steamLine}></div>
            <div className={styles.steamLine}></div>
          </div>
          <div className={styles.coffeeCup}>
            <div className={styles.coffeeTop}></div>
            <div className={styles.coffeeHandle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
