import React from "react";
import BackScreen from "../../reused/backScreen/BackScreen";
import styles from "./Contacts.module.css";
import Footer from "../../reused/footer/Footer";
import Form from "../../reused/form/Form";
const Contacts = ({ onAddData }) => {
  return (
    <>
      <BackScreen>
        <div className={styles.back_screen}>
          <div className={styles.container}>
            <div className={styles.data}>
              <div className={styles.data_container}>
                <p className={styles.p_contacts}>Контакты</p>
                <p className={styles.p_adress}>Москва, Россия</p>
                <p className={styles.p_mail}>partners@apphouse.pro</p>
              </div>
            </div>
            <div className={styles.form}>
              <Form onAddData={onAddData} />
            </div>
          </div>
        </div>
      </BackScreen>
      <Footer />
    </>
  );
};

export default Contacts;
