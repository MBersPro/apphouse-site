import React from "react";
import Aboutus from "./aboutus/Aboutus";

import Screen from "./screen/Screen";
import WhatWeDo from "./whatwedo/WhatWeDo";
import WhyUs from "./whyus/WhyUs";
import OurTeam from "./ourteam/OurTeam";
import OurClients from "./ourclients/OurClients";
import Footer from "./footer/Footer";

const Main = ({onModalOpen}) => {
  return (
    <main>
      <Screen />
      <Aboutus onModalOpen={onModalOpen} />
      <WhatWeDo />
      <WhyUs />
      <OurTeam />
      <OurClients/>
      <Footer/>
    </main>
  );
};

export default Main;
