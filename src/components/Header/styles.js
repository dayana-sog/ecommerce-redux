import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: 0 10rem;

  box-shadow: 0 2px 5px #0000000d;
  width: 100% !important;
  background: #fff !important;
  position: fixed;
  top: 0;
  z-index: 10;

  img {
    width: 8em;
    height: 8em;
    margin-top: 1rem;
  }

  ul {
    display: flex;
    flex-direction: row;

    list-style-type: none;
    font-size: 2rem;

    li {
      margin-right: 6rem;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: var(--letter-red);
      }

      svg {
        padding-top: 2px;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  height: 45px;
  padding: 0 25px;
  line-height: 45px;
  font-size: 13px;
  border: 0;
  border-radius: 40px;
  background: #f2f3f5;

  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    span {
      font-size: 15px;
      color: var(--letter-grey);
    }
  }
`;
