import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FotoEquipe from "../../../assets/images/equipe.png";
import "./style.css";
import LinhaCinza from "../../../assets/images/Line3.png";
import SplitTextp from "../../splitTextp/SplitTextp";
import SplitTexth2 from "../../splitTexth2/SplitText";
gsap.registerPlugin(ScrollTrigger);
const Equipe = () => {
    const imageRef = useRef(null);
    const sectionRef = useRef(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0,
                    scale: 1.05,
                    x: 120
                },
                {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    duration: 1.6,
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
        <section className="section-equipe" ref={sectionRef}>
            <div className="total-equipe">
                <div className="container-equipe">
                    <SplitTexth2
                        as="h2"
                        text="NOSSA EQUIPE"
                        className="Titulo-sectionRestaurant"
                    />
                    <SplitTextp
                        as="p"
                        text="Nossa equipe une técnica, sensibilidade e paixão pela gastronomia contemporânea, traduzindo sabores do mar em pratos leves, precisos e cheios de intenção. Trabalhamos com produtos frescos, escolhas conscientes e uma cozinha que valoriza o essencial — sem excessos, sem pressa. Mais do que um restaurante, somos um convite à pausa. Um espaço onde o ambiente, o serviço e a cozinha se encontram para criar experiências que se sentem, se lembram e se desejam repetir."
                        className="texto-sectionRestaurant"
                    />
                </div>
                <div className="img-equipe">
                    <img
                        ref={imageRef}
                        src={FotoEquipe}
                        alt="Foto da Equipe"
                    />
                </div>
            </div>
            <img src={LinhaCinza} alt="Divisor" className="linhaCinza" />
        </section>
    );
};
export default Equipe;