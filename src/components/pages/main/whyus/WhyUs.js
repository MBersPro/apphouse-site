import React from 'react';
import styles from "./WhyUs.module.css"
import { ReactComponent as Antena } from './svg/antena.svg';
import { ReactComponent as Clock } from './svg/clock.svg';
import { ReactComponent as Diagram } from './svg/diagram.svg';
import { ReactComponent as Astronaut } from './svg/astronaut.svg';
const WhyUs = () => {
    return (
    <section className={styles.sectionWhyUs}>
        <div className={styles.containerWhyUs}>
            <h3 className={styles.whyus}>Почему мы?</h3>
            <ul className={styles.ulWhyUs}>
                <li className={styles.liWhyUs}> 
                    <div className={styles.backIconSvgWhyUs}>                                        
                        <Antena className={styles.iconSvgWhyUs}/>  
                    </div>          
                        <h3 className={styles.h3WhyUs}>Внимание к деталям</h3>
                        <p className={styles.pWhyUs}>Идейные соображения, а также начало повседневной работы по формированию позиции.</p>
                </li>
                <li className={styles.liWhyUs}>     
                    <div className={styles.backIconSvgWhyUs}>                        
                        <Clock className={styles.iconSvgWhyUs}/> 
                    </div>           
                        <h3 className={styles.h3WhyUs}>Пунктуальность</h3>
                        <p className={styles.pWhyUs}>Задача организации, в особенности же рамки и место обучения кадров влечет за собой.</p>
                </li>
                <li className={styles.liWhyUs}> 
                    <div className={styles.backIconSvgWhyUs}>            
                        <Diagram className={styles.iconSvgWhyUs}/> 
                    </div>           
                        <h3 className={styles.h3WhyUs}>Планирование</h3>
                        <p className={styles.pWhyUs}>Равным образом консультация с широким активом в значительной степени обуславливает.</p>
                </li>
                <li className={styles.liWhyUs}>   
                    <div className={styles.backIconSvgWhyUs}>
                        <Astronaut className={styles.iconSvgWhyUs}/> 
                    </div>           
                        <h3 className={styles.h3WhyUs}>Современные технологии</h3>
                        <p className={styles.pWhyUs}>Значимость этих проблем настолько очевидна, что реализация плановых заданий.</p>
                </li>
            </ul>
        </div>
    </section> 
    );
}

export default WhyUs;