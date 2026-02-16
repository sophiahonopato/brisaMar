import React from "react";
import "./style.css";
import LinhaCinza from "../../../assets/images/Line3.png";
import HeroSlider from "../heroSlider/HeroSlider";
const Main = () => {
  return (
    <>
      <main className="main-home">
        <HeroSlider />
        <img src={LinhaCinza} alt="Foto da Equipe" className="linhaCinza" />
      </main>

    </>

  );
};

export default Main;