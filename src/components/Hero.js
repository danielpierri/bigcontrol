import React from "react"
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import "../css/App.css"

export default function Hero() {
  return (
    <>
      <div className="hero__bg">
        <div className="hero">
          <Navbar />
          <Main />
        </div>
      </div>
    </>
  )
}