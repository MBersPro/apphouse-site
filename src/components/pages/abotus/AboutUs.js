import React from "react";
import styles from "./AboutUs.module.css";
import BackScreen from "../../reused/backScreen/BackScreen";
import Footer from "../../reused/footer/Footer";
const AboutUs = () => {
  return (
    <>
      <BackScreen>
        <div className={styles.aboutus_container}>
          <h4 className={styles.aboutus_h4}>О нашем проекте</h4>
          <p className={styles.aboutus_p1}>
            Команда специалистов{" "}
            <span className={styles.aboutus_span}>AppHouse</span> позаботятся о
            творческой и стратегической составляющих вашего маркетинга, чтобы вы
            могли сосредоточиться на управлении бизнесом в полную силу. В своей
            работе мы активно используем технологии, чтобы реализовать нашу
            главную миссию — обеспечить успех клиентов сейчас и в будущем.
          </p>
          <p className={styles.aboutus_p2}>
            Собственная разработка приложений и профессиональное работа со всеми
            основными источниками трафика обеспечивают для наших партнеров более
            1 000 000 установок ежемесячно по всему миру.
          </p>
        </div>
      </BackScreen>
      <Footer />
    </>
  );
};

export default AboutUs;
