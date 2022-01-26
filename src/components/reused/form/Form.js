import React from "react";
const Form = () => {
  return (
    <form>
      <label>
        Имя
        <input />
      </label>
      <label>
        Телефон
        <input />
      </label>
      <label>
        Почта
        <input />
      </label>
      <label>
        Комментарий
        <textarea></textarea>
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
