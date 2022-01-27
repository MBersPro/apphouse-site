import React from "react";
import styles from "./Requests.module.css";
const Requests = ({ requests, questions }) => {
  return (
    <section className={styles.requests_background}>
      <div className={styles.requests_container}>
        <div className={styles.requests_Rcontainer}>
          <h4 className={styles.requests_h4}>Запросы:</h4>
          <ul className={styles.requests_Rul}>
            {requests.map((item) => (
              <li className={styles.requests_li}>
                <p className={styles.requests_p}>
                  <span className={styles.requests_Rname}>{item.name}</span>{" "}
                  делает запрос "{item.comment}"
                </p>
                <p className={styles.requests_p}>
                  Номер клиента: {item.phone}
                </p>
                <p className={styles.requests_p}>Почта клиента: {item.mail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.requests_Qcontainer}>
          <h4 className={styles.requests_h4}>Вопросы:</h4>
          <ul>
            {questions.map((question) => (
              <li className={styles.requests_li}>
                <p className={styles.requests_p}>{question}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Requests;
