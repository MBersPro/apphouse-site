import React, { useState } from "react";
import Header from "./header/Header";
import { routes } from "../utils/routes";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import AboutUs from "./pages/abotus/AboutUs";
import Contacts from "./pages/contacts/Contacts";
import Modal from "./reused/modal/Modal";
import Requests from "./pages/requests/Requests";
import Questions from "./pages/questions/Questions";

const App = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);

  const onAddQuestion = (state) => {
    setQuestions((prev) => [...prev, state]);
    console.log(questions);
  };

  const onAddData = (state) => {
    setData((prev) => [...prev, { ...state }]);
    console.log(data);
  };

  const onModalOpen = () => {
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false);
  };
  return (
    <>
      <Header routes={routes} />
      <Routes>
        <Route path="/" element={<Main onModalOpen={onModalOpen} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts onAddData={onAddData} />} />
        <Route
          path="/questions"
          element={
            <Questions onAddQuestion={onAddQuestion} questions={questions} />
          }
        />
        <Route
          path="/requests"
          element={<Requests requests={data} questions={questions} />}
        />
      </Routes>
      {modal && <Modal onModalClose={onModalClose} onAddData={onAddData} />}
    </>
  );
};

export default App;
