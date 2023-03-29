import React, { useState } from "react"
import logo from "../img/big-control-home.png"

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  console.log(menu)
  const menuAction = (e) => {
    e.preventDefault()
    setMenu(prevMenu => !prevMenu)
    console.log("The button was clicked.")
  }

  return (
    <div className="nav__container">
      <nav className="nav">
        <div>
          <img src={logo} alt="Big Control logo" />
          {/* <label className="menu-hamburger hidden">
            <input type="checkbox"/>
          </label> */}
          <div className="menu-hamburger-btn">
            <button id="menu-btn" onClick={menuAction}>x</button>
          </div>
        </div>
        <div id="nav-wrapper" className={menu ? "nav__wrapper--isDisplayed" : "nav__wrapper"}>
          <ul className="nav__list">
            <li><a className="nav__link active"href="index.html">HOME</a></li>
            <li><a className="nav__link" href="index.html">SERVIÇOS</a></li>
            <li><a className="nav__link" href="index.html">QUEM SOMOS</a></li>
            <li><a className="nav__link" href="index.html">CONTATO</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}