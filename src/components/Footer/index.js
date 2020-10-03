import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';

import { Container } from './styles';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="container-logo">
            <span className="logo">E-commerce</span>
          </div>
          <div className="container-menu">
            <ul className="menu">
              <div className="menu-span">Menu</div>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/">Shop</a>
              </li>

              <li>
                <a href="/">Pages</a>
              </li>

              <li>
                <a href="/">Contactos</a>
              </li>
            </ul>
          </div>
          <div className="container-address">
            <ul className="address">
              <div className="menu-span">Contactos</div>
              <li>
                <FaPhoneAlt size={20} color="#f00" />
                <a href="tel:222222222" className="space-left">
                  222 222 222
                </a>
              </li>
              <li>
                <FaWhatsapp size={20} color="#f00" />
                <a href="tel:000000000000" className="space-left">
                  999 999 999
                </a>
              </li>
              <li>
                <FaMapMarkerAlt size={20} color="#f00" />
                <a href="/" className="space-left">
                  Rua Teste, 01 B - Lisboa
                </a>
              </li>
              <li>
                <MdMailOutline size={20} color="#f00" />
                <a href="mailto:ecommerce@naoexiste.pt" className="space-left">
                  teste@teste.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy">
          © Copyright {year} - Todos os direitos reservados a E-commerce
        </div>
      </div>
    </Container>
  );
}

export default Footer;
