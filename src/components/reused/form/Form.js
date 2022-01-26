import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <div className={styles.title}>Имя</div>
        <input className={styles.input} />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Телефон</div>
        <input className={styles.input} />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Почта</div>
        <input className={styles.input} />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Комментарий</div>
        <textarea className={styles.textarea}></textarea>
      </label>
      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default Form;
