import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import projetosHome from "../img/projetos-home.jpg"

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>PROJETOS</h2>
        <img src={projetosHome} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta animi voluptatibus voluptate. Delectus neque libero quis laborum vitae deleniti deserunt facilis perspiciatis modi, earum, praesentium tempora distinctio sunt accusamus recusandae totam nemo eum natus sapiente! Asperiores ullam modi officia ducimus incidunt quas illum! Tempora ratione voluptatibus consequuntur sed aliquam? Culpa enim aliquid vero iusto vel totam in fugit quasi ab fugiat quaerat tempora, veritatis aspernatur laudantium tempore molestiae minima atque ad voluptates corrupti iure omnis doloremque explicabo. Quis, odit ullam beatae unde, et autem sunt sequi eveniet molestias ex itaque alias voluptatibus, vero quia eligendi ipsum minus. Officia, iure!</p>
      </div>
      <Footer />
    </div>
  )
}