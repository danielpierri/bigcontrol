import React from "react"

export default function Footer() {
  return (
    <div className="footer__container">
      <footer className="footer">
        <div>
          <ul className="footer__contact">
            <li><i class="fa-solid fa-phone"></i> <a href="tel:+5521984870140" target="_blank" rel="noreferrer">(21) 98487-0140</a></li>
            <li><i class="fa-solid fa-envelope"></i> <a href="mailto:evandro@bigcontrol.com.br" target="_blank" rel="noreferrer">evandro@bigcontrol.com.br</a></li>
            <li><i class="fa-solid fa-location-dot"></i> <a href="https://goo.gl/maps/GNWjRTaahop9kZx28" target="_blank" rel="noreferrer">Rua do Rosário, 141, Sobreloja 207, Centro, RJ</a></li>
          </ul>
            <p className="footer__hours">Segunda a sexta de 9h às 18h</p>
          <ul className="footer__social-media">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-youtube"></i></a></li>
            <li><a href="https://wa.me/5521993395960?" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a></li>
          </ul>
          <p className="signature">Desenvolvido por <a href="https://github.com/danielpierri" target="_blank" rel="noreferrer">Daniel Pierri <i class="fa-brands fa-github"></i></a></p>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 Big Control. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}