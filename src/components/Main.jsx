import React from "react"
import cercaEletricaHome from "../img/cerca-eletrica-home.jpeg"
import cftvHome from "../img/cftv-home.jpeg"
import controleDeAcessoHome from "../img/controle-de-acesso-home.jpg"
import projetosHome from "../img/projetos-home.jpg"
import monitoramentoEmTempoReal from "../img/monitoramento-em-tempo-real-home.jpg"
import manutencaoHome from "../img/manutencao-home.jpg"

export default function Main() {
  return (
    <div className="main__container">
      <div className="main__section">

        <section className="main service-1 main__article dark-bg">


          <div className="main__info__container full-bleed dark-bg">
            <h3 className="main__title">PROJETOS</h3>
            <div className="main__img__container">
              <img src={projetosHome} alt="projetos" className="main__img" />
            </div>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__article__btn">Saiba mais</a>
          </div>

        </section>

        <section className="main service-1 main__article light-bg">


          <div className="main__info__container">
            <h3 className="main__title">MONITORAMENTO EM TEMPO REAL</h3>
            <div className="main__img__container">
              <img src={monitoramentoEmTempoReal} alt="monitoramento em tempo real" className="main__img" />
            </div>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__article__btn">Saiba mais</a>
          </div>

        </section>

        <section className="main service-1 main__article">


          <div className="main__info__container dark-bg full-bleed">
            <h3 className="main__title">MANUTENÇÃO</h3>
            <div className="main__img__container">
              <img src={manutencaoHome} alt="manutenção" className="main__img" />
            </div>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__article__btn">Saiba mais</a>
          </div>

        </section>

        <section className="main service-2">

          <div className="main__img__container">
            <img src={cftvHome} alt="circuito fechado de televisão" className="main__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">CFTV</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Continuar lendo</a>
          </div>

        </section>

        <section className="main service-1">

          <div className="main__img__container">
            <img src={cercaEletricaHome} alt="cerca elétrica" className="main__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">SEGURANÇA PERIMETRAL</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Continuar lendo</a>
          </div>

        </section>

        <section className="main service-2">

          <div className="main__img__container">
            <img src={controleDeAcessoHome} alt="controle de acesso" className="main__img" />
          </div>

          <div className="main__info__container">
            <h3 className="main__title">CONTROLE DE ACESSO</h3>
            <p className="main__text">A função principal de segurança perimetral é inibir a ação de possíveis invasores. Para isso as principal ferramentas utilizadas são a concertina e a cerca elétrica. Outras opções são os sensores de barreira ou câmeras perimetrais para identificar se a área do perímetro foi invadida. Em geral, quando percebem o sistema de segurança, possíveis infratores avaliam a situação e desistem.</p>
            <a href="index.html" className="main__btn">Continuar lendo</a>
          </div>

        </section>

      </div>
    </div>
  )
}