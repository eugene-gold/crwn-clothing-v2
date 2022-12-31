import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { device } from "../../variables";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media ${device.mobile} {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media ${device.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;
