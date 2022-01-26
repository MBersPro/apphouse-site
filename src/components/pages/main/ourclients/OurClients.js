import React from 'react';
import Flaticon from "./images/flaticon.png"
import Freepik from "./images/freepik.png"
import Piktab from "./images/piktab.png"
import Slidesgo from "./images/slidesgo.png"
import styles from "./OurClients.module.css"
const OurClients = () => {
    return (
        <section className={styles.sectionOurClients}>
            <div className={styles.containersOurClients}>
                <h3 className={styles.h3OurClients}>Наши клиенты</h3>
                <div className={styles.divImgOurClients}>
                    <img src={Flaticon} alt="Flaticon"/>
                    <img src={Freepik} alt="Freepik"/>
                    <img src={Piktab} alt="Piktab"/>
                    <img src={Slidesgo} alt="Slidesgo"/>
                </div>
            </div>
        </section>
    );
}

export default OurClients;