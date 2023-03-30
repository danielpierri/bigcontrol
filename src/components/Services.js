import React from "react"
import cercaEletrica from "../img/cerca-eletrica.jpeg"
import cftv from "../img/cftv.jpeg"
import controleDeAcesso from "../img/controle-de-acesso.jpg"

export default function Services() {
  return (
    <div className="services__container">
      <section className="services__section">

        <div className="services service-1">

          <div className="services__img__container">
            <img src={cftv} alt="circuito fechado de televisão" className="services__img" />
          </div>

          <div className="services-info__container">
            <h3 className="services__title">CFTV</h3>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="services__btn">Saiba mais</a>
          </div>

        </div>

        <div className="services service-2">

          <div className="services__img__container">
            <img src={cercaEletrica} alt="cerca elétrica" className="services__img" />
          </div>

          <div className="services-info__container">
            <h3 className="services__title">SEGURANÇA PERIMETRAL</h3>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="services__btn">Saiba mais</a>
          </div>

        </div>

        <div className="services service-3">

          <div className="services__img__container">
            <img src={controleDeAcesso} alt="controle de acesso" className="services__img" />
          </div>

          <div className="services-info__container">
            <h3 className="services__title">CONTROLE DE ACESSO</h3>
            <p className="services__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="services__btn">Saiba mais</a>
          </div>

        </div>

      </section>
    </div>
  )
}