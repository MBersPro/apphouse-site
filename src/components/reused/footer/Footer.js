import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={styles.section}>
      <p className={styles.p}>AppHouse</p>
      <p className={styles.p}>Москва, Россия</p>
      <p className={styles.p}>©2022 AppHouse</p>
    </section>
  );
};

export default Footer;
