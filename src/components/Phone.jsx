import wpplogo from "../img/whatsapp-128.png";

export default function Phone() {
  return (
    <>
      <div className="hero__contact__container">
        <a href="https://wa.me/5521984870140?" target="_blank" rel="noreferrer">
          <img src={wpplogo} alt="WhatsApp logo" />
        </a>
        <a href="tel:+5521984870140" className="hero__phone">
          (21) 98487-0140
        </a>
      </div>
    </>
  )
}