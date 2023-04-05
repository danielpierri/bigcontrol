import React from "react"
import Navbar from "./Navbar"
import "../App.css"
import wpplogo from "../img/whatsapp-128.png"

export default function Hero() {
  return (
    <>
      <div className="hero__bg">
        <div className="hero">
          <Navbar />
          <div className="hero__main">
            <div className="hero__content">
              <h1 className="hero__title">BIG CONTROL</h1>
              <p className="hero__description">
                Segurança Perimetral,
                <br />
                CFTV e Controle de Acesso
              </p>
            </div>
            <div className="hero-cta__container">
              <p className="hero-cta__text">Confira nossos serviços</p>
              <a href="index.html" className="hero-cta">Conhecer</a>
            </div>

            <div className="hero-contact__container">
              <img src={wpplogo} alt="WhatsApp logo" />
              <p>(21)99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}