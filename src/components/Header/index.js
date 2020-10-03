import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';

import logo from '../../assets/logo.png';

import { Container, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <ul>
        <li>Home</li>
        <li>
          Shop <FaChevronDown size={15} />{' '}
        </li>
        <li>
          Pages <FaChevronDown size={15} />{' '}
        </li>
        <li>Contacto</li>
      </ul>

      <Cart to="/cart">
        <div>
          <span>2 itens</span>
        </div>
        <BsBag size={20} color="#333" />
      </Cart>
    </Container>
  );
}

export default Header;
