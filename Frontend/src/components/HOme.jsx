import React from "react";
import BAnner from "./BAnner";
import Freebooks from "./Freebooks";
import NAvbar from "./NAvbar";
import Footer from "./Footer";

const HOme = () => {
  return (
    <div>
    <NAvbar/>
      <BAnner />
      <Freebooks />
      <Footer/>
    </div>
  );
};

export default HOme;
