import React, { useState } from "react";
import Header from "./header/Header";
import { routes } from "../utils/routes";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import AboutUs from "./pages/abotus/AboutUs";
import Contacts from "./pages/contacts/Contacts";
import Modal from "./reused/modal/Modal";

const App = () => {
  const [modal, setModal] = useState(false);
  const onModalOpen = () => {
    setModal(true);
  };
  const onModalClose = () => {
    setModal(false)
  }
  return (
    <>
      <Header routes={routes} />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main onModalOpen={onModalOpen} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      {modal && <Modal onModalClose={onModalClose} />}
    </>
  );
};

export default App;
