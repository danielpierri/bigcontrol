import React, { useCallback, useEffect, useState } from "react"
import Navbar from "./Navbar"
import "../App.scss"
import wpplogo from "../img/whatsapp-128.png"

const questions = [
  "Lorem lorem lorem lorem?",
  "Lorem2 lorem2 lorem2 lorem2?",
  "Lorem3 lorem3 lorem3 lorem3?"
]

export default function Hero() {
  const [newQuestion, setNewQuestion] = useState(questions[0])

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * questions.length)
    setNewQuestion(questions[index])
  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000)
    return () => clearInterval(intervalID)
  }, [shuffle])

  return (
    <>
      <div className="hero__bg">
        <div className="hero">

          <Navbar />

          <div className="hero__main">

            <div className="hero__content">
              <h1 className="hero__title">BIG CONTROL</h1>
              <p className="hero__description">
                Segurança Eletrônica,
                <br />
                Perimetral e Controle de Acesso
              </p>
            </div>

            <div className="hero__cta__wrapper">
              <div className="hero__cta__container">
                <p className="hero__cta__title">
                  Projetos, Execução e Manutenção
                </p>
                <p className="hero__cta__text">Confira nossos serviços</p>
                <a href="index.html" className="hero__cta">Conhecer</a>
              </div>
              <div className="hero__question__container">
                <p className="hero__question">{newQuestion}</p>
              </div>
            </div>

          </div>


          <div className="hero__contact__container">
            <img src={wpplogo} alt="WhatsApp logo" />
            <p>(21)99999-9999</p>
          </div>
        </div>
      </div>
    </>
  )
}