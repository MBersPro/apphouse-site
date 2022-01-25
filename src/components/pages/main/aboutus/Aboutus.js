import React from "react";
import styles from "./AboutUs.module.css";

const Aboutus = () => {
  return (
    <section>
      <div className={styles.aboutUs_container}>
        <div className={styles.aboutUs_2container}>
          <h3 className={styles.aboutUs_h3}>About Us</h3>
          <p className={styles.aboutUs_p}>
            Мы — маркетинговое агентство, профессионалы в сфере
            affiliate-marketing. Мы создаем эффективные приложения и
            обеспечиваем их продвижение. Благодаря работе с большим количеством
            самых актуальных каналов продвижения наши клиенты получают
            максимальный охват качественной аудитории по всему миру.
          </p>
          <button className={styles.btnServices}>Заказать услугу</button>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
