import React from 'react';
import styles from "./Footer.module.css"
import { ReactComponent as Inst } from "./svg/Instagram.svg";
import { ReactComponent as Twit } from "./svg/Twitter.svg";
import { ReactComponent as Facebook } from "./svg/Facebook.svg";
import { ReactComponent as LinkedIn } from "./svg/LinkedIn.svg";
import { Link } from "react-router-dom";
import TeleIcon from "./images/telegramIcon.png"
const Footer = () => {
    return (
        <section className={styles.backFooter}>
            <div className={styles.containerFooter}>
                <div>
                    <div className={styles.divFooterOne}>
                        <span className={styles.logoApp}>App</span>
                        <span className={styles.logoStudio}>House</span>
                        <h3 className={styles.dataH3Footer}>АДРЕС,ТЕЛ,E-MAIL</h3>
                    </div>
                    <div className={styles.divFooterTwo}>
                        <h3 className={styles.joinH3Footer}>ПРИСОЕДИНЯЙТЕСЬ</h3>
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
                    <h3 className={styles.subH3Footer}>ПОДПИШИТЕСЬ НА РАССЫЛКУ</h3> 

                    </div>
                    <div className={styles.divFooterFife}>
                        <button className='subBtnFooter'>Подписаться</button><img src={TeleIcon} alt="TeleIcon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;