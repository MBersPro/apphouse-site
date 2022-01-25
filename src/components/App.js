import React from "react";
import Header from "./header/Header";
import { routes } from "../utils/routes";
import Main from "./pages/main/Main";
//import {Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Header routes={routes} />
      <Main/>
      
      {/* <Route path=""/> */}
      {/* {routes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
            exact
          />
        ))} */}
    </>
  );
};

export default App;
