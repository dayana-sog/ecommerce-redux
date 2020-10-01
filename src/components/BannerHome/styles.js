import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearFromUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.section`
  height: 65rem;
  width: 100%;

  background: var(--background-white-dark);

  #container-inf {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 20rem;
    padding: 5rem 0;
  }

  .container-inf-texts {
    word-wrap: break-word;
    width: 47%;

    h3 {
      animation: ${appearFromUp} 0.5s;
      font-size: 4rem;
    }
    h1 {
      animation: ${appearFromUp} 0.7s;
      font-size: 6rem;
    }
    h4 {
      animation: ${appearFromUp} 1s;
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    p {
      animation: ${appearFromUp} 1.2s;
      font-size: 2rem;
      margin-bottom: 4rem;
    }

    button {
      background: var(--red-button);
      color: var(--letter-white);

      font-size: 15px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 16.5px 45px;
      border: 0;
      border-radius: 40px;

      animation: ${appearFromUp} 1.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  img {
    animation: ${appearFromLeft} 1s;
  }
`;
