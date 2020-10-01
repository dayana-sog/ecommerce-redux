import { createGlobalStyle } from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';
// import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    --background-white-dark: #f2f3f5;
    --background-white-light: ##f8f9fa;

    --red-button: #ff4135;

    --letter-white: #fff;
    --letter-grey: #333;
    --letter-red: #ff4135;

    --background-footer: #3f434e;

  }
  body {
    background-color: var(--back);
    -webkit-font-smoothing: antialiased;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px , 10px/16px =>valor padrao do browser == 62.5%

    @media only screen and (max-width: $bp-large) {
        font-size: 50%;  //8px => 8px/16px =>50%
    }
  }

  body, input, button {
    font: 14px 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }


  .toast {
    background-color: #ffbb00;
    font-size: 14px;
    color: #ffbb00;
    font-weight: bold;
  }
`;
