import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* /bigcontrol because of GitHub Pages */}
        <Route path="/bigcontrol" element={ <Home />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </div>
  )
}

export default App
