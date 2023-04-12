import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import cftvServicos from "../img/cftv-servicos.jpg"
import cercaEletricaServicos from "../img/cerca-eletrica-servicos.jpg"
import controleDeAcessoServicos from "../img/controle-de-acesso-servicos.jpg"

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="services__container">
        <main className="services">
          <div className="service service-1">
            <div className="service__img__container">
              <img src={cftvServicos} className="service__img" alt="câmera"/>
            </div>
            <h2 className="services__title">CFTV</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
          <div className="service service-2">
            <div className="service__img__container">
              <img src={cercaEletricaServicos} className="service__img" alt="câmera"/>
            </div>
            <h2 className="services__title">Segurança Perimetral</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
          <div className="service service-3">
            <div className="service__img__container">
              <img src={controleDeAcessoServicos} className="service__img" alt="câmera"/>
            </div>
            <h2 className="services__title">Controle de Acesso</h2>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}