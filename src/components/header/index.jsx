import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/images/logo.PNG";
export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
            <div className="header__inner">
                <a href="#restaurante" className="header__link">O RESTAURANTE</a>
                <a href="#equipe" className="header__link">NOSSA EQUIPE</a>
                <a href="/" className="header__logoLink">
                    <img src={Logo} alt="Mar & Brisa" className="header__logo" />
                </a>
                <Link to="/reserva" className="header__cta">Reservas</Link>
            </div>
        </header>
    );
}