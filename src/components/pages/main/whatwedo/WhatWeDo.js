import React from "react";
import img1 from "./images/what-we-do1.png";
import img2 from "./images/what-we-do2.png";
import img3 from "./images/what-we-do3.png";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className={styles.whatwedo_background}>
      <div className={styles.whatwedo_container}>
        <h3 className={styles.whatwedo_h3}>Чем мы занимаемся ?</h3>
        <ul className={styles.whatwedo_ul}>
          <li className={styles.whatwedo_li}>
            <img className={styles.whatwedo_img} src={img1} alt="wwd1" />
            <p className={styles.whatwedo_p}>
              Картинку и текст обязательно придется поменять на что-то более символичное. Эти я взял так как они подходят по размеру и качеству
            </p>
          </li>
          <li className={styles.whatwedo_li}>
            <img className={styles.whatwedo_img} src={img2} alt="wwd2" />
            <p className={styles.whatwedo_p}>
              Если честно, я до сих пор не до конца понимаю чем конкретно занимается ваша компания, что может позволить содержать 30 человек и офис.
            </p>
          </li>
          <li className={styles.whatwedo_li}>
            <img className={styles.whatwedo_img} src={img3} alt="wwd3" />
            <p className={styles.whatwedo_p}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, atque? Necessitatibus quis optio asperiores pariatur vel voluptatum beatae rem.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
