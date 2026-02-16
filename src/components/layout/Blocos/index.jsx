import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlocoMaior from "../../../assets/images/blocoGrande.png";
import Bloco1 from "../../../assets/images/bloco1.png";
import Bloco2 from "../../../assets/images/bloco2.png";
import Bloco3 from "../../../assets/images/bloco3.png";
import "./style.css";
gsap.registerPlugin(ScrollTrigger);
const Blocos = () => {
 const sectionRef = useRef(null);
 const itemsRef = useRef([]);
 useEffect(() => {
   const ctx = gsap.context(() => {
     itemsRef.current.forEach((el, index) => {
       gsap.from(el, {
         opacity: 0,
         y: 80,
         scale: 0.97,
         duration: 1.4,
         delay: index * 0.2,
         ease: "power3.out",
         scrollTrigger: {
           trigger: el,
           start: "top 85%",
           toggleActions: "play none none none"
         }
       });
     });
     // botão aparece depois
     gsap.from(".btn-reserva", {
       opacity: 0,
       y: 40,
       duration: 1.2,
       delay: 0.8,
       ease: "power3.out",
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top 85%"
       }
     });
   }, sectionRef);
   return () => ctx.revert();
 }, []);
 return (
<section className="section-blocos" ref={sectionRef}>
<div className="container-blocos">
<div
         className="Maior"
         ref={(el) => itemsRef.current[0] = el}
>
<img src={BlocoMaior} alt="Bloco principal" className="blocoMaior" />
<Link to="/reserva" className="btn-reserva">
           Faça sua reserva
</Link>
</div>
<div className="blocos-menores">
<div ref={(el) => itemsRef.current[1] = el}>
<img src={Bloco1} alt="Prato 1" />
</div>
<div ref={(el) => itemsRef.current[2] = el}>
<img src={Bloco2} alt="Prato 2" />
</div>
<div ref={(el) => itemsRef.current[3] = el}>
<img src={Bloco3} alt="Prato 3" />
</div>
</div>
</div>
</section>
 );
};
export default Blocos;