import styled from 'styled-components';

export const Container = styled.section`
  height: 50rem;
  text-align: center;

  h1 {
    margin-top: 10rem;
    font-weight: 500;
    font-size: 3rem;
  }

  .container-banner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    margin: 0 20rem;
    padding: 7rem 0;
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
