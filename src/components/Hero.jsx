import React, { useEffect, useState } from "react"
// import Fade from "./hooks/Fade"
import Navbar from "./Navbar"
import "../App.scss"
import wpplogo from "../img/whatsapp-128.png"

const FADE_INTERVAL_MS = 2500
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = [
  "Você sabe se suas câmeras estão gravando?",
  "Você sabia que 90% dos roubos são de pessoas de dentro?",
  "Você sabia que é possível combinar beleza e segurança?",
  "Lorem4 lorem4 lorem4 lorem4?"
]

export default function Hero() {

  const [fadeProp, setFadeProp] = useState({ fade: "fade-in"})
  const [wordOrder, setWordOrder] = useState(0)

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in" ? setFadeProp({ fade: "fade-out" }) : setFadeProp({ fade: "fade-in" })
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
    }, WORD_CHANGE_INTERVAL_MS)

    return () => clearInterval(wordTimeout)
  }, [])

  // const questions = [
  //   "Lorem lorem lorem lorem?",
  //   "Lorem2 lorem2 lorem2 lorem2?",
  //   "Lorem3 lorem3 lorem3 lorem3?",
  //   "Lorem4 lorem4 lorem4 lorem4?",
  //   "Lorem5 lorem5 lorem5 lorem5?",
  //   "Lorem6 lorem6 lorem6 lorem6?",
  //   "Lorem7 lorem7 lorem7 lorem7?",
  //   "Lorem8 lorem8 lorem8 lorem8?",
  // ]

  // const [newQuestion, setNewQuestion] = useState(questions[0])
  
  // const [show, setShow] = useState(true)
  
  // console.log(show)
  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * questions.length)
  //   setShow(show => !show)
  //   setNewQuestion(questions[index])
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  // const shuffle1 = useCallback(() => {
  //   const index = 
  //   setNewQuestion(questions[index])
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  // useEffect(() => {
  //   setShow(show => !show)
  //   const intervalID = setInterval(shuffle, 5000)
  //   return () => clearInterval(intervalID)
  // }, [shuffle])

  return (
    <>
      <div className="hero__bg">
        <div className="hero">

          <Navbar />

          <div className="hero__main">

            <div className="hero__content">
              <h1 className="hero__title">Big<span className="white-text">Control</span></h1>
              <p className="hero__description">
                Segurança Eletrônica,
                <br />
                Perimetral e Controle de Acesso
              </p>
              <div className="hero__question__container">
                  {/* <Fade show={show}>
                    <p className="hero__question" on >{show === true ? newQuestion : () => setShow(show => !show)}</p>
                  </Fade> */}
                  <p className="hero__question">
                    <span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span>
                  </p>
                  {/* <div>{wordData}</div>
                  <div className="flex-row">
                    {words.map((data, i) => <p onClick={handleClick(i)}>.</p>)} 
                  </div>*/}

                </div>
            </div>


            <div className="hero__cta__wrapper">
              <div className="hero__cta__container">
                <p className="hero__cta__title">
                  Projetos,<br /> Execução e Manutenção
                </p>
                {/* <p className="hero__cta__text">Confira nossos serviços</p> */}
                <a href="index.html" className="hero__cta">Conhecer</a>
                {/* <div className="hero__question__container">
                  <p className="hero__question">{newQuestion}</p>
                  <p className="hero__question"></p>
                </div> */}
              </div>
            </div>

          </div>

          <div className="hero__contact__container">

              <a href="https://wa.me/5521993395960?" target="_blank" rel="noreferrer"><img src={wpplogo} alt="WhatsApp logo" /></a>
            <p>(21)99999-9999</p>
          </div>
        </div>
      </div>
    </>
  )
}