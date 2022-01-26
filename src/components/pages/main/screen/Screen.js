import React from "react";
import styles from "./Screen.module.css";
import BackScreen from "../../../reused/backScreen/BackScreen";

const Screen = () => {
  return (
    <BackScreen>
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
    </BackScreen>
  );
};

export default Screen;
