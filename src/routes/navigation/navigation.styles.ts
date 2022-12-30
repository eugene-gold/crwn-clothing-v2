import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { device } from "../../variables";

export const NavigationContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @media ${device.mobile} {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
  @media ${device.mobile} {
    width: 40px;
    padding: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${device.mobile} {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`;
