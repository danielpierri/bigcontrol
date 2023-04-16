import React from "react"

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div>
          <ul className="footer__contact">
            <li><i class="fa-solid fa-phone"></i> (21) 98487-0140</li>
            <li><i class="fa-solid fa-envelope"></i> evandro@bigcontrol.com.br</li>
            <li><i class="fa-solid fa-location-dot"></i> Rua do Ouvidor, 130, Centro, RJ</li>
          </ul>
          <ul className="footer__social-media">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="https://wa.me/5521993395960?" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 Big Control. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}