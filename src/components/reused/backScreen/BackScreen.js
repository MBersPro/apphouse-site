import React from "react";
import styles from "./BackScreen.module.css";

const BackScreen = ({ children }) => {
  return <section className={styles.background}>{children}</section>;
};

export default BackScreen;
