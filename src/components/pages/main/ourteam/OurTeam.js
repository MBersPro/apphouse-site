import React from 'react';
import styles from "./OurTeam.module.css";
import Igor from "./images/Igor.jpg"
import Kolya from "./images/Kolya.jpg"
import Misha from "./images/Misha.jpg"
import Olga from "./images/Olga.jpg"
import {ReactComponent as Inst} from "./svg/Instagram.svg"
import {ReactComponent as Twit} from "./svg/Twitter.svg"
import {ReactComponent as Facebook} from "./svg/Facebook.svg"
import {ReactComponent as LinkedIn} from "./svg/LinkedIn.svg"
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
                        <Inst/>
                        <Twit/>
                        <Facebook/>
                        <LinkedIn/>
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
                    <div>
                        <Inst/>
                        <Twit/>
                        <Facebook/>
                        <LinkedIn/>
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
                    <div>
                        <Inst/>
                        <Twit/>
                        <Facebook/>
                        <LinkedIn/>
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
                    <div>
                        <Inst/>
                        <Twit/>
                        <Facebook/>
                        <LinkedIn/>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default OurTeam;