import styled from 'styled-components';

export const Container = styled.section`
  height: 150rem;
  padding: 10rem 20rem;

  h1 {
    font-size: 4rem;
    color: var(--letter-grey);
    text-align: center;
  }
`;

export const WrapperProducts = styled.div`
  .container-banner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;

    margin-top: 8rem;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      padding: 35px;

      background-color: #fff;
      transition: all 1s linear;

      &:hover {
        border: 0.02rem solid rgba(0, 0, 0, 0.125);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.125);
      }

      .img-container {
        position: relative;
        overflow: hidden;
      }

      .card-img.top {
        align-self: center;
        padding: 15px 0;
        max-width: 550px;
      }

      p {
        font-size: 2.3rem;
        text-align: center;
        margin-top: 2rem;
      }

      strong {
        font-size: 2.3rem;
        text-align: center;
        margin-top: 1rem;
      }

      .card-button {
        background: var(--red-button);
        color: var(--letter-white);

        font-size: 14px;
        font-weight: 200;
        text-transform: uppercase;
        padding: 14.5px 20px;
        border-radius: 40px;
        border: none;

        position: absolute;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate(-50%, 100%);
        transform: translate(-50%, 100%);
        transition: all 0.3s linear;
      }

      .img-container:hover .card-button {
        transform: translate(-50%, -20%);
      }
    }
  }
`;
