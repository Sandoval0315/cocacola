import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="celeste-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">COCA-COLA COMPANY</h3>
          <ul className="footer-links">
            <li><a href="/about">Sobre nosotros</a></li>
            <li><a href="/company">Nuestra empresa</a></li>
            <li><a href="/media">Centro de medios</a></li>
            <li><a href="/history">Historia</a></li>
            <li><a href="/careers">Trabaja con nosotros</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">DIRECTORIO</h3>
          <ul className="footer-links">
            <li><a href="/sitemap">Mapa del sitio</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">LEGAL</h3>
          <ul className="footer-links">
            <li><a href="/terms">Términos de uso</a></li>
            <li><a href="/privacy">Política de privacidad</a></li>
            <li><a href="/cookies">Configuración de cookies</a></li>
          </ul>
        </div>

     
      </div>

      <div className="footer-bottom">
        <p>© 2025 The Coca-Cola Company. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;