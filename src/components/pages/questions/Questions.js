import React from "react";
import { useState } from "react/cjs/react.development";
import Footer from "../../reused/footer/Footer";
import styles from "./Questions.module.css";

const initialState = "";

const Questions = ({ onAddQuestion, questions }) => {
  const [question, setQuestion] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onAddQuestion(question);
    setQuestion(initialState);
  };

  const onHandleChange = (e) => {
    const { value } = e.target;
    setQuestion(() => value);
    console.log(question);
  };

  return (
    <>
      <section className={styles.questions_background}>
        <div className={styles.questions_container}>
          <h3 className={styles.questions_h3}>Хотите задать вопрос ?</h3>
          <ul className={styles.questions_ul}>
            <li className={styles.questions_li}>
              <p className={styles.questions_question}>
                Для каких платформ вы создаете приложения?
              </p>
              <p className={styles.questions_answer}>
                Наша команда разрабатывает приложения как для Android, так и для
                iOS. Помимо разработки, мы реализуем продвижение приложений в
                Google Play Store и App Store.
              </p>
            </li>
            <li className={styles.questions_li}>
              <p className={styles.questions_question}>
                Можно ли к вам обратиться для доработки и/или продвижения уже
                существующего приложения?
              </p>
              <p className={styles.questions_answer}>
                Вся наша команда разработчиков сосредоточена в первую очередь на
                том, чтобы изобретать и реализовывать приложения с нуля. Но мы
                также любим новые сложные задачи и профессиональные челленджи,
                поэтому с радостью обсудим и такой вариант работы!
              </p>
            </li>
            <li className={styles.questions_li}>
              <p className={styles.questions_question}>
                Есть ли у возможность попасть к вам в команду! Как узнать об
                открытых вакансиях?
              </p>
              <p className={styles.questions_answer}>
                У нас молодая и дружная команда, в которой каждый человек
                постоянно развивается не только как профессионал, но и как
                личность. И мы всегда ищем людей, способных сделать нашу команду
                еще продуктивнее и эффективнее, поэтому смело направляйте ваши
                резюме сюда: partners@apphouse.pro
              </p>
            </li>
            <li className={styles.questions_li}>
              <p className={styles.questions_question}>
                Вы работаете только со стартапами и недавно образовавшимися
                компаниями, или к вам также могут обращаться и более зрелые
                организации?
              </p>
              <p className={styles.questions_answer}>
                Мы всегда открыты к обсуждению любого партнерства! Свяжитесь с
                нами по указанным контактам, и мы обязательно подберем вариант
                сотрудничества, подходящий для обеих сторон.
              </p>
            </li>
            {questions.map((item) => (
              <li className={styles.questions_li}>
                <p className={styles.questions_question}>{item}</p>
              </li>
            ))}
          </ul>
          <form
            className={styles.questions_form}
            type="submit"
            onSubmit={onHandleSubmit}
          >
            <textarea
              placeholder="Задайте ваш вопрос"
              type="text"
              className={styles.questions_textarea}
              onChange={onHandleChange}
              value={question}
              name="question"
            />
            <button className={styles.questions_button} type="submit">
              Отправить вопрос
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Questions;
