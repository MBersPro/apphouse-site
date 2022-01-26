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
            <div className={styles.divOurTeam}> 
                <h3 className={styles.h3OurTeam}>Наша команда</h3>
                <ul className={styles.ulOurTeam}>
                    <li>
                        <div className={styles.divCardOurTeam}>   
                            <div>
                                <img className={styles.imgMember}
                                src={Igor}
                                alt="Igor"/>
                            </div>
                            <div className={styles.divH3P}>
                                <h3 className={styles.H3ourTeam}>Игорь Демьяненко</h3>
                                <p className={styles.descriptionTeam}>Product Designer</p>
                            </div>
                            <div className={styles.IconSvg}>
                                <div className={styles.BackIconSvg}>
                                    <Inst className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Twit className={styles.iconSvg }/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Facebook className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <LinkedIn className={styles.iconSvg}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.divCardOurTeam}>    
                            <div>
                                <img className={styles.imgMember}
                                src={Kolya}
                                alt="Kolya"/>
                            </div>
                            <div className={styles.divH3P}>
                                <h3 className={styles.H3ourTeam}>Николай Тарасов</h3>
                                <p className={styles.descriptionTeam}>Marketing</p>
                            </div>
                            <div className={styles.IconSvg}>
                                <div className={styles.BackIconSvg}>
                                    <Inst className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Twit className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Facebook className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <LinkedIn className={styles.iconSvg}/>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className={styles.divCardOurTeam}>    
                            <div>
                                <img className={styles.imgMember}
                                src={Misha}
                                alt="Misha"/>
                            </div>
                            <div className={styles.divH3P}>
                                <h3 className={styles.H3ourTeam}>Михаил Ермаков</h3>
                                <p className={styles.descriptionTeam}>UI Designer</p>
                            </div>
                            <div className={styles.IconSvg}>
                                <div className={styles.BackIconSvg}>
                                    <Inst className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Twit className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Facebook className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <LinkedIn className={styles.iconSvg}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.divCardOurTeam}>    
                            <div>
                                <img className={styles.imgMember}
                                src={Olga}
                                alt="Olga"/>
                            </div>
                            <div className={styles.divH3P}>
                                <h3 className={styles.H3ourTeam}>Ольга Репина</h3>
                                <p className={styles.descriptionTeam}>Frontend Developer</p>
                            </div>
                            <div className={styles.IconSvg}>
                                <div className={styles.BackIconSvg}>
                                    <Inst className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Twit className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <Facebook className={styles.iconSvg}/>
                                </div>
                                <div className={styles.BackIconSvg}>
                                    <LinkedIn className={styles.iconSvg}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default OurTeam;