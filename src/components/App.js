import React from "react";
import Header from "./header/Header";
import { routes } from "../utils/routes";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import AboutUs from "./pages/abotus/AboutUs";
import Contacts from "./pages/contacts/Contacts";

const App = () => {
  return (
    <>
      <Header routes={routes} />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;
