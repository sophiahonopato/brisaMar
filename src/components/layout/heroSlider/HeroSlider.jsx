import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "./HeroSlider.css";
import img1 from "../../../assets/images/Image1.jpg";
import img2 from "../../../assets/images/Image2.jpg";
import img3 from "../../../assets/images/Image3.jpg";
import img4 from "../../../assets/images/Image4.jpg";
export default function HeroSlider() {
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.8,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(8px)"
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };
    return (
        <section className="hero">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 100, disableOnInteraction: false }}
                loop
                speed={1200}
                className="hero__swiper"
            >
                {[img1, img2, img3, img4].map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="hero__slide">
                            <img className="hero__img" src={img} alt={`Mar & Brisa ${i + 1}`} />
                            <div className="hero__overlay" />
                            <div className="hero__grain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <motion.div
                className="hero__content"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.p
                    className="hero__kicker"
                    variants={itemVariants}
                >
                    MAR & BRISA
                </motion.p>
                <motion.h1
                    className="hero__title"
                    variants={itemVariants}
                >
                    Tempo, precisão e intenção.
                </motion.h1>
                <motion.p
                    className="hero__subtitle"
                    variants={itemVariants}
                >
                    Uma experiência contemporânea onde o essencial encontra a sofisticação.
                </motion.p>
                <motion.div
                    className="hero__actions"
                    variants={itemVariants}
                >
                    <a className="hero__btn hero__btn--primary" href="/reserva">
                        Reservar mesa
                    </a>
                    <a className="hero__btn hero__btn--ghost" href="/menu">
                        Ver menu
                    </a>
                </motion.div>
            </motion.div>
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 1.0, duration: 1 }}
            >
                <span />
            </motion.div>
        </section>
    );
}