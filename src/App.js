import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import Services from "./pages/Services.js"
import Projects from "./pages/Projects.js"
import Contact from "./pages/Contact.js"

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
