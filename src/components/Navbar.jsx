import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../img/big-control-home.png"

export default function Navbar() {
  const [menu, setMenu] = useState(false)
  console.log(menu)
  const menuAction = (e) => {
    e.preventDefault()
    setMenu(prevMenu => !prevMenu)
  }

  return (
    <div className="nav__container">
      <nav className="nav">
        <div>
          <img src={logo} alt="Big Control logo" />
          {/* <label className="menu-hamburger hidden">
            <input type="checkbox"/>
          </label> */}
          <div className="menu-wrapper__btn" onClick={menuAction}>
            <button id="menu-btn" className={menu ? "menu__btn--active" : "menu__btn"}></button>
          </div>
        </div>
        <div id="nav-wrapper" className={menu ? "nav__wrapper--isDisplayed" : "nav__wrapper"}>
          <ul className="nav__list">
            <li>
              <NavLink to="/bigcontrol" className={({ isActive, isPending }) => isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"}>
                <a href={() => false}>HOME</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"}>
                <a href={() => false}>SERVIÇOS</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive, isPending }) => isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"}>
                <a href={() => false}>PROJETOS</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "nav__link pending" : isActive ? "nav__link active" : "nav__link"}>
                <a href={() => false}>CONTATO</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}