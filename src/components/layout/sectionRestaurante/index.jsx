import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import FotoRestaurante from "../../../assets/images/restaurante.png";
import LinhaCinza from "../../../assets/images/Line3.png";
import SplitTexth2 from "../../splitTexth2/SplitText";
import SplitTextp from "../../splitTextp/SplitTextp";
gsap.registerPlugin(ScrollTrigger);
const Restaurante = () => {
 const imageRef = useRef(null);
 const sectionRef = useRef(null);
 useEffect(() => {
   const ctx = gsap.context(() => {
     gsap.fromTo(
       imageRef.current,
       {
         opacity: 0,
         scale: 1.08,
         y: 80
       },
       {
         opacity: 1,
         scale: 1,
         y: 0,
         duration: 1.8,
         ease: "power3.out",
         scrollTrigger: {
           trigger: sectionRef.current,
           start: "top 80%",
           toggleActions: "play none none none"
         }
       }
     );
   }, sectionRef);
   return () => ctx.revert();
 }, []);
 return (
<>
<section className="section-restaurante" ref={sectionRef}>
<img
         ref={imageRef}
         src={FotoRestaurante}
         alt="Restaurante Mar & Brisa"
         className="img-restaurante"
       />
<div className="container-sectionRestaurant">
<SplitTexth2
           as="h2"
           text="MAR & BRISA"
           className="Titulo-sectionRestaurant"
         />
<SplitTextp
           as="p"
           text="No Mar & Brisa, o tempo desacelera. Entre sabores do mar, ingredientes frescos e uma cozinha que valoriza o essencial, cada prato nasce do equilíbrio entre técnica, sensibilidade e respeito à matéria-prima. Inspirado pela leveza da brisa e pela profundidade do oceano, o restaurante propõe uma experiência contemporânea, onde o minimalismo encontra a sofisticação. Aqui, menos é mais — e cada detalhe importa. Da cozinha à mesa, tudo é pensado para ser vivido com calma, elegância e prazer."
           className="texto-sectionRestaurante"
         />
</div>
</section>
<img src={LinhaCinza} alt="Divisor" className="linhaCinza" />
</>
 );
};
export default Restaurante;