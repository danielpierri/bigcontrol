import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cftvServicos from "../img/cftv-servicos.jpg";
import cercaEletricaServicos from "../img/cerca-eletrica-servicos.jpg";
import controleDeAcessoServicos from "../img/controle-de-acesso-servicos.jpg";
import { NavLink } from "react-router-dom";
import wpplogo from "../img/whatsapp-128.png";

export default function Services() {
  return (
    <div className="services__bg">
      <Navbar />
      <div className="services__container">
        <main className="services">
          <div className="service service-1">
            <div className="service__img__container">
              <img src={cftvServicos} className="service__img" alt="câmera" />
            </div>
            <h2 className="services__title">CFTV</h2>
            <p className="services__text">
              A função principal de segurança perimetral é inibir a ação de
              possíveis invasores. Para isso as principal ferramentas utilizadas
              são a concertina e a cerca elétrica. Outras opções são os sensores
              de barreira ou câmeras perimetrais para identificar se a área do
              perímetro foi invadida. Em geral, quando percebem o sistema de
              segurança, possíveis infratores avaliam a situação e desistem.
            </p>
            <div className="services__card__container">
              <div className="services__card">
                <img src="" alt="" />
                <h3>CÂMERAS EM REDE</h3>
                <p>
                  Câmeras baseadas no protocolo IP para gravação de imagens.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CÂMERAS ANALÓGICAS</h3>
                <p>Câmeras analógicas com gravações digitais.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CÂMERAS PERIMETRAIS</h3>
                <p>
                  Câmeras com analíticos que detectam invasores humanos e
                  veículos.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CÂMERAS LPR</h3>
                <p>Câmeras com analíticos que controlam acesso de carros.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
            </div>
          </div>
          <div className="service service-2">
            <div className="service__img__container">
              <img
                src={cercaEletricaServicos}
                className="service__img"
                alt="câmera"
              />
            </div>
            <h2 className="services__title">Segurança Perimetral</h2>
            <p className="services__text">
              A função principal de segurança perimetral é inibir a ação de
              possíveis invasores. Para isso as principal ferramentas utilizadas
              são a concertina e a cerca elétrica. Outras opções são os sensores
              de barreira ou câmeras perimetrais para identificar se a área do
              perímetro foi invadida. Em geral, quando percebem o sistema de
              segurança, possíveis infratores avaliam a situação e desistem.
            </p>
            <div className="services__card__container">
              <div className="services__card">
                <img src="" alt="" />
                <h3>CERCA ELÉTRICA</h3>
                <p>
                  Câmeras baseadas no protocolo IP para gravação de imagens.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CÂMERA PERIMETRAL</h3>
                <p>Câmeras analógicas com gravações digitais.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>SENSOR INFRAVERMELHO DE BARREIRA</h3>
                <p>Câmeras com analíticos que controlam acesso de carros.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>FIBRA ÓTICA DE BARREIRA</h3>
                <p>Câmeras analógicas com gravações digitais.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CONCERTINA</h3>
                <p>
                  Câmeras com analíticos que detectam invasores humanos e
                  veículos.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>LANÇA CORTANTE</h3>
                <p>Câmeras com analíticos que controlam acesso de carros.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>REDE LAMINADA</h3>
                <p>Câmeras com analíticos que controlam acesso de carros.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
            </div>
          </div>
          <div className="service service-3">
            <div className="service__img__container">
              <img
                src={controleDeAcessoServicos}
                className="service__img"
                alt="câmera"
              />
            </div>
            <h2 className="services__title">Controle de Acesso</h2>
            <p className="services__text">
              A função principal de segurança perimetral é inibir a ação de
              possíveis invasores. Para isso as principal ferramentas utilizadas
              são a concertina e a cerca elétrica. Outras opções são os sensores
              de barreira ou câmeras perimetrais para identificar se a área do
              perímetro foi invadida. Em geral, quando percebem o sistema de
              segurança, possíveis infratores avaliam a situação e desistem.
            </p>
            <div className="services__card__container">
              <div className="services__card">
                <img src="" alt="" />
                <h3>CANCELAS</h3>
                <p>
                  Câmeras baseadas no protocolo IP para gravação de imagens.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>RECONHECIMENTO FACIAL E BIOMÉTRICO</h3>
                <p>Câmeras analógicas com gravações digitais.</p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
              <div className="services__card">
                <img src="" alt="" />
                <h3>CATRACAS</h3>
                <p>
                  Câmeras com analíticos que detectam invasores humanos e
                  veículos.
                </p>
                <NavLink to={""} className={"services__card__link"}>
                  conhecer
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <div className="hero__contact__container">
        <a href="https://wa.me/5521984870140?" target="_blank" rel="noreferrer">
          <img src={wpplogo} alt="WhatsApp logo" />
        </a>
        <a href="tel:+5521984870140" className="hero__phone">
          (21) 98487-0140
        </a>
      </div>
    </div>
  );
}
