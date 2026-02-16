import React from "react";
import { motion } from "framer-motion";
import Instagram from "../../assets/images/lucide_instagram.png";
import Line2 from "../../assets/images/Line8.png";
import Whatsapp from "../../assets/images/ph_whatsapp-logo-thin.png";
import LogoBranco from "../../assets/images/LogoBranco.png";
import "./style.css";
const Footer = () => {
 return (
<motion.footer
     className="footer"
     initial={{ opacity: 0, y: 60 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
     viewport={{ once: true }}
>
<motion.div
       className="superior-footer"
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ delay: 0.3, duration: 1 }}
>
<img src={Line2} alt="Divisor" className="footer-line" />
<img src={LogoBranco} alt="Mar & Brisa" className="footer-logo" />
<img src={Line2} alt="Divisor" className="footer-line" />
</motion.div>
<div className="footer-info">
<motion.div
         className="socials"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.4, duration: 0.9 }}
>
<p className="footer-cta">
           Garanta sua experiência conosco
</p>
<div className="footer-social">
<img src={Instagram} alt="Instagram" />
<img src={Whatsapp} alt="WhatsApp" />
</div>
</motion.div>
<motion.div
         className="footer-section"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.5, duration: 0.9 }}
>
<h3 className="footer-title">Nossos Horários</h3>
<p>Segunda a sexta-feira</p>
<p>12h às 15h · 19h às 23h</p>
<p>Sábados, das 19h às 23h</p>
<p>Domingos, fechados</p>
</motion.div>
<motion.div
         className="footer-section"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.6, duration: 0.9 }}
>
<h3 className="footer-title">Endereço</h3>
<p>2464 Royal Ln.</p>
<p>Mesa, New Jersey</p>
<p>45463</p>
</motion.div>
</div>
</motion.footer>
 );
};
export default Footer;