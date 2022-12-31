import styled from "@emotion/styled/macro";
import { device } from "../../variables";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
