import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%   { transform: translateY(0) }
  50%  { transform: translateY(-15px) }
  100% { transform: translateY(0) }
`;

export const Container = styled.section`
  height: 50rem;
  width: 100%;

  background: var(--background-white-dark);

  #container-inf {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 7rem 20rem;
  }

  img {
    margin-right: -7rem;

    animation: ${bounce} 2s linear infinite;
  }

  .container-inf-texts {
    word-wrap: break-word;

    h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }
    h4 {
      font-size: 2.7rem;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.5rem;
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

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
