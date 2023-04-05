import React from "react"
import cercaEletrica from "../img/cerca-eletrica.jpeg"
import cftv from "../img/cftv.jpeg"
import controleDeAcesso from "../img/controle-de-acesso.jpg"

export default function Main() {
  return (
    <div className="main__container">
      <section className="main__section">

        <div className="main service-1">

          <div className="main__img__container">
            <img src={cftv} alt="circuito fechado de televisão" className="main__img" />
          </div>

          <div className="main-info__container">
            <h3 className="main__title">CFTV</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Saiba mais</a>
          </div>

        </div>

        <div className="main service-2">

          <div className="main__img__container">
            <img src={cercaEletrica} alt="cerca elétrica" className="main__img" />
          </div>

          <div className="main-info__container">
            <h3 className="main__title">SEGURANÇA PERIMETRAL</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Saiba mais</a>
          </div>

        </div>

        <div className="main service-3">

          <div className="main__img__container">
            <img src={controleDeAcesso} alt="controle de acesso" className="main__img" />
          </div>

          <div className="main-info__container">
            <h3 className="main__title">CONTROLE DE ACESSO</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Saiba mais</a>
          </div>

        </div>

      </section>
    </div>
  )
}