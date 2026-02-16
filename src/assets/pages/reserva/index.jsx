// Reserva.jsx
import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import ImageReserva from "../../images/reserva.png";
import SplitTexth2 from "../../../components/splitTexth2/SplitText";
import SplitTextp from "../../../components/splitTextp/SplitTextp";
const Reserva = () => {
 return (
<motion.section
     className="section-reserva"
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.25 }}
     variants={{
       hidden: { opacity: 0, y: 28 },
       show: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
       },
     }}
>
<div className="reserva-wrap">
       {/* TEXTO */}
<motion.div
         className="reserva-texto"
         variants={{
           hidden: { opacity: 0, x: -26 },
           show: {
             opacity: 1,
             x: 0,
             transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
           },
         }}
>
<SplitTexth2 as="h2" text="RESERVE SUA MESA" className="titulo-reserva" />
<SplitTextp
           as="p"
           text="No Mar & Brisa, cada detalhe é cuidadosamente pensado para transformar sua visita em uma experiência memorável. Aqui, sabores refinados, ambiente elegante e serviço atencioso se encontram para criar momentos que merecem ser vividos com calma. Para preservar a excelência no atendimento e garantir a melhor acomodação, recomendamos que sua reserva seja realizada com antecedência. Garanta sua mesa e permita-se desfrutar de uma experiência marcada por sofisticação, equilíbrio e atenção aos detalhes."
           className="texto-reserva"
         />
<motion.button
           className="btn-reserva-page"
           whileHover={{ y: -2, scale: 1.01 }}
           whileTap={{ scale: 0.98 }}
           transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
>
           FAZER RESERVA
</motion.button>
</motion.div>
       {/* IMAGEM */}
<motion.div
         className="reserva-imagem"
         variants={{
           hidden: { opacity: 0, x: 26, scale: 0.98 },
           show: {
             opacity: 1,
             x: 0,
             scale: 1,
             transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
           },
         }}
>
<motion.img
           src={ImageReserva}
           alt="Ambiente Mar & Brisa"
           initial={{ scale: 1.02 }}
           whileHover={{ scale: 1.04 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           style={{ willChange: "transform" }}
         />
</motion.div>
</div>
</motion.section>
 );
};
export default Reserva;