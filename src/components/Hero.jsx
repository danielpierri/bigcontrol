import React, { useCallback, useEffect, useState } from "react"
import Navbar from "./Navbar"
import "../App.scss"
import wpplogo from "../img/whatsapp-128.png"


export default function Hero() {
  const questions = [
    "Lorem lorem lorem lorem?",
    "Lorem2 lorem2 lorem2 lorem2?",
    "Lorem3 lorem3 lorem3 lorem3?"
  ]

  const [newQuestion, setNewQuestion] = useState(questions[0])

  const [opacity, setOpacity] = useState(0)

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * questions.length)
    setNewQuestion(questions[index])
    setOpacity((prevOpacity) => prevOpacity = 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacity])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000)
    return () => clearInterval(intervalID)
  }, [shuffle])

  // SLIDER CODE TEST
  // const words = [
  //   {id: 0, value: "Apple"},
  //   {id: 1, value: "Mango"},
  //   {id: 2, value: "Banana"}
  // ]



  

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
              <div className="hero__question__container">
                  <p style={{}} className="hero__question">{newQuestion}</p>
                  <p className="hero__question"></p>
                  {/* <div>{wordData}</div>
                  <div className="flex-row">
                    {words.map((data, i) => <p onClick={handleClick(i)}>.</p>)} 
                  </div>*/}

                </div>
            </div>


            <div className="hero__cta__wrapper">
              <div className="hero__cta__container">
                <p className="hero__cta__title">
                  Projetos, Execução e Manutenção
                </p>
                {/* <p className="hero__cta__text">Confira nossos serviços</p> */}
                <a href="index.html" className="hero__cta">Conhecer mais</a>
                {/* <div className="hero__question__container">
                  <p className="hero__question">{newQuestion}</p>
                  <p className="hero__question"></p>
                </div> */}
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