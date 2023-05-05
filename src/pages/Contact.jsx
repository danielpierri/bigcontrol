import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="contact__viewport">

      <Navbar />

      <div className="contact">
        <div className="contact__form__container">
          <form className="form" action="#">

            <fieldset className="fieldset input-name">
              <legend>Nome</legend>
              <label for="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
              ></input>
            </fieldset>

            <fieldset className="fieldset input-email">
              <legend>Email</legend>
              <label for="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
              ></input>
            </fieldset>

            <fieldset className="fieldset input-message">
              <legend>Mensagem</legend>
              <label for="text"></label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Escreva sua mensagem..."
              ></textarea>
            </fieldset>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
