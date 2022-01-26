import React, { useState } from "react";
import styles from "./Form.module.css";

const initialState = {
  name: "",
  phone: "",
  mail: "",
  comment: "",
};

const Form = ({ onAddData }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onAddData(state);
    setState({ ...initialState });
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form} onSubmit={onHandleSubmit}>
      <label className={styles.label}>
        <div className={styles.title}>Имя</div>
        <input
          className={styles.input}
          type="text"
          onChange={onHandleChange}
          value={state.value}
          name="name"
        />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Телефон</div>
        <input
          className={styles.input}
          type="text"
          onChange={onHandleChange}
          value={state.value}
          name="phone"
        />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Почта</div>
        <input
          className={styles.input}
          type="text"
          onChange={onHandleChange}
          value={state.value}
          name="mail"
        />
      </label>
      <label className={styles.label}>
        <div className={styles.title}>Комментарий</div>
        <textarea
          className={styles.textarea}
          type="text"
          onChange={onHandleChange}
          value={state.value}
          name="comment"
        ></textarea>
      </label>
      <button className={styles.button} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default Form;
