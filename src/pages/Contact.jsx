import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function sendEmail(e) {
    e.preventDefault()

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos")
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_u2188rl","template_ewgztq5", templateParams, "YVVgn5xjlbMucXKuP")
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text)
          setName("")
          setEmail("")
          setMessage("")
        }, (err) => {
          console.log("ERRO: ", err)
        }
      )
  }

  return (
    <div className="contact__viewport">

      <Navbar />

      <div className="contact">
        <div className="contact__form__container">
          <form className="form" onSubmit={sendEmail}>

            <fieldset className="fieldset input-name">
              <legend>Nome</legend>
              <label for="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </fieldset>

            <fieldset className="fieldset input-email">
              <legend>Email</legend>
              <label for="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </fieldset>

            <fieldset className="fieldset input-message">
              <legend>Mensagem</legend>
              <label for="text"></label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Escreva sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </fieldset>

            <input className="form__btn" type="submit" value="Enviar"/>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
