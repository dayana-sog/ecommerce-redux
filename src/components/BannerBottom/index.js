import React from 'react';

import samsungFloating from '../../assets/samsung.png';

import { Container } from './styles';

function BannerHome() {
  return (
    <Container>
      <div id="container-inf">
        <div className="container-inf-texts">
          <h1>Temos os melhores preços</h1>
          <h4>Descontos de até 50%</h4>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            nostrum magni qui quaerat excepturi.
          </p>

          <button type="button" className="button-red">
            SHOP NOW
          </button>
        </div>

        <img src={samsungFloating} alt="celular" />
      </div>
    </Container>
  );
}

export default BannerHome;
