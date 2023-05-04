import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projetosHome from "../img/projetos-home.jpg"
import wpplogo from "../img/whatsapp-128.png"
import { NavLink } from "react-router-dom"

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div className="project__container">
          <h2 className="project__title">PROJETOS DE CONDOMÍNIO</h2>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta animi voluptatibus voluptate. Delectus neque libero quis laborum vitae deleniti deserunt facilis perspiciatis modi, earum, praesentium tempora distinctio sunt accusamus recusandae totam nemo eum natus sapiente! Asperiores ullam modi officia ducimus incidunt quas illum! Tempora ratione voluptatibus consequuntur sed aliquam? Culpa enim aliquid vero iusto vel totam in fugit quasi ab fugiat quaerat tempora, veritatis aspernatur laudantium tempore molestiae minima atque ad voluptates corrupti iure omnis doloremque explicabo. Quis, odit ullam beatae unde, et autem sunt sequi eveniet molestias ex itaque alias voluptatibus, vero quia eligendi ipsum minus. Officia, iure!</p>
          <NavLink to={""} className={"project__btn"}>Faça um orçamento</NavLink>
        </div>
        <div className="project__container">
          <h2 className="project__title">PROJETOS DE LARGA ESCALA</h2>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta animi voluptatibus voluptate. Delectus neque libero quis laborum vitae deleniti deserunt facilis perspiciatis modi, earum, praesentium tempora distinctio sunt accusamus recusandae totam nemo eum natus sapiente! Asperiores ullam modi officia ducimus incidunt quas illum! Tempora ratione voluptatibus consequuntur sed aliquam? Culpa enim aliquid vero iusto vel totam in fugit quasi ab fugiat quaerat tempora, veritatis aspernatur laudantium tempore molestiae minima atque ad voluptates corrupti iure omnis doloremque explicabo. Quis, odit ullam beatae unde, et autem sunt sequi eveniet molestias ex itaque alias voluptatibus, vero quia eligendi ipsum minus. Officia, iure!</p>
          <NavLink to={""} className={"project__btn"}>Entre em contato</NavLink>
        </div>
        <div className="project__container">
          <h2 className="project__title">CONSULTORIA DE SEGURANÇA</h2>
          <div className="project__img__container">
            <img className="project__img" src={projetosHome} alt="" />
          </div>
          <p className="project__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta animi voluptatibus voluptate. Delectus neque libero quis laborum vitae deleniti deserunt facilis perspiciatis modi, earum, praesentium tempora distinctio sunt accusamus recusandae totam nemo eum natus sapiente! Asperiores ullam modi officia ducimus incidunt quas illum! Tempora ratione voluptatibus consequuntur sed aliquam? Culpa enim aliquid vero iusto vel totam in fugit quasi ab fugiat quaerat tempora, veritatis aspernatur laudantium tempore molestiae minima atque ad voluptates corrupti iure omnis doloremque explicabo. Quis, odit ullam beatae unde, et autem sunt sequi eveniet molestias ex itaque alias voluptatibus, vero quia eligendi ipsum minus. Officia, iure!</p>
          <NavLink to={""} className={"project__btn"}>Agende conosco</NavLink>
        </div>
      </div>
      <Footer />
      <div className="hero__contact__container">
        <a href="https://wa.me/5521984870140?" target="_blank" rel="noreferrer"><img src={wpplogo} alt="WhatsApp logo" /></a>
        <a href="tel:+5521984870140" className="hero__phone" >(21) 98487-0140</a>
      </div>
    </div>
  )
}