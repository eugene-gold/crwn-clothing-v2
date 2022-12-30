// import styled from "styled-components";
import { device } from "../../variables";
import styled from "@emotion/styled/macro";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    @media ${device.mobile} {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
      font-size: 12px;
    }
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media ${device.mobile} {
    width: 40vw;
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  width: 10%;
`;
