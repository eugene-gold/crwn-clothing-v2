import styled from "@emotion/styled/macro";
import { device } from "../../variables";

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media ${device.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;
