import styled from "@emotion/styled/macro";
import { device } from "../../variables";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 950px;
  justify-content: space-between;
  margin: 3rem auto;
  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
