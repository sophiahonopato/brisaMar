import { Router } from "react-router-dom";
import Main from "../../../components/layout/main";
import Restaurante from "../../../components/layout/sectionRestaurante";
import Equipe from "../../../components/layout/sectionEquipe";
import Blocos from "../../../components/layout/Blocos";
import HeroSlider from "../../../components/layout/heroSlider/HeroSlider";



export default function Home() {
  return (
    <>
      <HeroSlider/>
      <Restaurante />
      <Equipe/>
      <Blocos/>
    </>
  );
}