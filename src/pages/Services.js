import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer.js"

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="services__container">
        <main className="services">
          <div className="service service-1">
            <h2 className="services__title">CFTV</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
          <div className="service service-2">
            <h2 className="services__title">Segurança Perimetral</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
          <div className="service service-3">
            <h2 className="services__title">Controle de Acesso</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}