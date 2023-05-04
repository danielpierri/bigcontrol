import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="contact__form__container">
          <form action="#">
            <fieldset>
              <legend>Nome</legend>
              <label for="name"></label>
              <input type="text" id="name" name="name"
              placeholder="Digite seu nome"></input>
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <label for="email"></label>
              <input type="email" id="email" name="email"
              placeholder="Digite seu email"></input>
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}