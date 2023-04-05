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
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-square-facebook"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
            <li><i class="fa-brands fa-whatsapp"></i></li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 Big Control. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}