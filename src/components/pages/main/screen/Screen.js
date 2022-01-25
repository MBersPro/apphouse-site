import React from "react";
import styles from "./Screen.module.css";

const Screen = () => {
  return (
    <section className={styles.screen_background}>
      <div className={styles.screen_container}>
        <div className={styles.screen_lightHalf}>
          <h1 className={styles.screen1_h1}>AppHouse Marketing agency</h1>
        </div>
        <div className={styles.screen_darkHalf}>
          <h1 className={styles.screen2_h1}>
            Effective solutions for your business
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Screen;
