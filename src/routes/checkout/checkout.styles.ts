import styled from "@emotion/styled/macro";
import { device } from "../../variables";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media ${device.mobile} {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media ${device.mobile} {
    font-size: 1.2rem;
    justify-content: flex-start;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media ${device.mobile} {
    width: 20%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;
