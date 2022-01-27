import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Inst } from "./svg/Instagram.svg";
import { ReactComponent as Twit } from "./svg/Twitter.svg";
import { ReactComponent as Facebook } from "./svg/Facebook.svg";
import { ReactComponent as LinkedIn } from "./svg/LinkedIn.svg";
import { Link } from "react-router-dom";
import TeleIcon from "./images/telegramIcon.png";
const Footer = () => {
  return (
    <section className={styles.backFooter}>
      <div className={styles.containerFooter}>
        <div className={styles.footer}>
          <div className={styles.divFooterOne}>
            <span className={styles.logoApp}>App</span>
            <span className={styles.logoStudio}>House</span>
            <div className={styles.dataFooter}>
              <p>Адрес</p>
              <p>Телефон</p>
              <p>Mail</p>
            </div>
          </div>
          <div className={styles.divFooterTwo}>
            <p className={styles.joinFooter}>ПРИСОЕДИНЯЙТЕСЬ</p>
            <div className={styles.divIconSvg}>
              <Link to="" className={styles.linkIcon}>
                <Inst className={styles.iconSvg} />
              </Link>
              <Link to="" className={styles.linkIcon}>
                <Twit className={styles.iconSvg} />
              </Link>
              <Link to="" className={styles.linkIcon}>
                <Facebook className={styles.iconSvg} />
              </Link>
              <Link to="" className={styles.linkIcon}>
                <LinkedIn className={styles.iconSvg} />
              </Link>
            </div>
          </div>
          <div className={styles.divFooterThree}>
            <p className={styles.subFooter}>ПОДПИШИТЕСЬ НА РАССЫЛКУ</p>

            <div className={styles.divFooterFife}>
              <form className={styles.footer_form}>
                <input type="text" placeholder="Введите текст" className={styles.footer_input} />
                <button className={styles.subBtnFooter}>
                  Подписаться
                  <img
                    className={styles.button_img}
                    src={TeleIcon}
                    alt="TeleIcon"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
