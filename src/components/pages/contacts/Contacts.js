import React from "react";
import BackScreen from "../../reused/backScreen/BackScreen";
import styles from "./Contacts.module.css";
import Footer from "../../reused/footer/Footer";
import Form from "../../reused/form/Form";
const Contacts = () => {
  return (
    <>
      <BackScreen>
        <div className={styles.back_screen}>
          <div className={styles.container}>
            <div className={styles.data}>Some</div>
            <div className={styles.form}>
              <Form />
            </div>
          </div>
        </div>
      </BackScreen>
      <Footer />
    </>
  );
};

export default Contacts;
