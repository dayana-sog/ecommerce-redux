import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import logo from '../../assets/logo.png';

import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';

function Header() {
  const cart = useSelector(state => state.cart.items.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="e-commerce" />
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
          <span>{cart} itens</span>
        </div>
        <BsBag size={20} color="#333" />
      </Cart>
    </Container>
  );
}

export default Header;
