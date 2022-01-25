import React from 'react';
import styles from "./OurTeam.module.css";
import Igor from "./images/Igor.jpg"
import Kolya from "./images/Kolya.jpg"
import Misha from "./images/Misha.jpg"
import Olga from "./images/Olga.jpg"
const OurTeam = () => {
    return (
        <section className={styles.ourTeamBack}>
            <ul>
                <li>
                    <div>
                        <img className={styles.imgMember}
                        src={Igor}
                        alt="Igor"/>
                    </div>
                    <div className={styles.divH3P}>
                        <h3 className={styles.H3ourTeam}>Игорь Демьяненко</h3>
                        <p className={styles.PourTeam}>Product Designer</p>
                    </div>
                    <div>
                        <svg>
                            <use xlinkHref="./symbol-defs.svg#icon-linkedin-1"></use>
                        </svg>
                    </div>
                </li>
                <li>
                    <div>
                        <img className={styles.imgMember}
                        src={Kolya}
                        alt="Kolya"/>
                    </div>
                    <div className={styles.divH3P}>
                        <h3 className={styles.H3ourTeam}>Николай Тарасов</h3>
                        <p className={styles.PourTeam}>Marketing</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img className={styles.imgMember}
                        src={Misha}
                        alt="Misha"/>
                    </div>
                    <div className={styles.divH3P}>
                        <h3 className={styles.H3ourTeam}>Михаил Ермаков</h3>
                        <p className={styles.PourTeam}>UI Designer</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img className={styles.imgMember}
                        src={Olga}
                        alt="Olga"/>
                    </div>
                    <div className={styles.divH3P}>
                        <h3 className={styles.H3ourTeam}>Ольга Репина</h3>
                        <p className={styles.PourTeam}>Frontend Developer</p>
                    </div>
                </li>
            </ul>
            {/* <ul class="portfolio__cards-list list">
                        <li class="portfolio__cards-li">  
                            <div class="portfolio__card">                         
                                <div class="portfolio__img-overlay-wrapper">
                                    <img
                                    src="./images/portfolio-page-img/computer.jpg"
                                    alt="Ноутбук с сайтом"
                                    width="370"
                                    />
                                    <p class="portfolio__card-overlay">
                                        
                                    </p>
                                </div>
                                <div class="portfolio__name-service-wrapper">
                                    <h3 class="portfolio__card-name">Технокряк</h3>
                                    <p class="portfolio__card-service">Веб-сайт</p>
                                </div>
                            </div>
                        </li>
              </ul> */}
        </section>
    );
}

export default OurTeam;