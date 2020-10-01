import React from 'react';

import HomeImage from '../../assets/home-image.png';

import { Container } from './styles';

function BannerHome() {
  return (
    <Container>
      <div id="container-inf">
        <div className="container-inf-texts">
          <h3>Promoção</h3>
          <h1>Flash Sales</h1>
          <h4>Descontos de até 50%</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            culpa ipsum! Assumenda, minima.
          </p>

          <button type="button" className="button-red">
            SHOP NOW
          </button>
        </div>

        <img src={HomeImage} alt="celular" />
      </div>
    </Container>
  );
}

export default BannerHome;
