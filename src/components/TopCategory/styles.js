import styled from 'styled-components';

import backimage from '../../assets/background-banner.jpg';

export const Container = styled.section`
  height: 75rem;
  text-align: center;

  h1 {
    margin-top: 7rem;
    font-weight: 500;
    font-size: 3rem;
  }

  .container-banner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    margin: 0 20rem;
    padding: 6rem 0;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 15px;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    img {
      align-self: center;
      padding: 10px;
      max-width: 200px;
    }
  }

  .container-banner-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2rem 2rem 0 2rem;
    font-weight: 300;

    button {
      background: var(--background-white-light);
      color: var(--letter-grey);

      font-size: 14px;
      font-weight: 200;
      text-transform: uppercase;
      padding: 14.5px 30px;
      border-radius: 40px;
      border: 1px solid rgba(0, 0, 0, 0.125);

      &:hover {
        opacity: 0.7;
        background: var(--background-white-dark);
      }
    }
  }
`;

export const Banner2 = styled.div`
  height: 30rem;

  background-image: -webkit-gradient(
      linear-gradient(to right, rgba(51, 51, 51, 0.7), rgba(17, 17, 17, 0.8))
    ),
    url(${backimage});
  background-image: linear-gradient(
      to right,
      rgba(68, 68, 68, 0.6),
      rgba(17, 17, 17, 0.6)
    ),
    url(${backimage});
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--letter-white);
    font-weight: 400;
    font-size: 5rem;
  }

  p {
    color: var(--letter-white);
    font-size: 2rem;
    margin-top: 1rem;
  }

  button {
    background: var(--white-button);
    color: var(--letter-grey);

    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 16.5px 45px;
    border: 0;
    border-radius: 40px;
    margin-top: 2rem;
  }
`;
