import React from "react";
import styles from "./Requests.module.css";
const Requests = ({ requests }) => {
  return (
    <section className={styles.requests_background}>
      <div className={styles.requests_container}>
        <div className={styles.requests_Rcontainer}>
          <h4 className={styles.requests_h4}>Запросы:</h4>
          <ul className={styles.requests_Rul}>
            {requests.map((item) => (
              <li className={styles.requests_Rli}>
                <p className={styles.requests_Rp}>
                  <span className={styles.requests_Rname}>{item.name}</span>{" "}
                  делает запрос "{item.comment}"
                </p>
                <p className={styles.requests_Rp}>
                  Номер клиента: {item.phone}
                </p>
                <p className={styles.requests_Rp}>Почта клиента: {item.mail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.requests_Qcontainer}>
          <h4 className={styles.requests_h4}>Вопросы:</h4>
        </div>
      </div>
    </section>
  );
};

export default Requests;
