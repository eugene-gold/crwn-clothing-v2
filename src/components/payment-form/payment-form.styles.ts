import styled from "@emotion/styled/macro";
import { Button } from "../button/button.component";
import { device } from "../../variables";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.mobile} {
    margin: 0 auto;
    height: unset;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  @media ${device.mobile} {
    margin: 0 auto;
    border: 1px solid #bababa;
    border-radius: 0.3rem;
    padding: 0.5rem;
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 1.6rem;
    }
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  @media ${device.mobile} {
    font-size: 1.4rem;
    margin-top: 4rem;
  }
`;
