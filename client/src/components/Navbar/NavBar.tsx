import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { fontSecondary, wordTextStyle } from "../../styles/styles";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.medium};
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  ${fontSecondary};
  font-size: ${props => props.theme.fontSize.large};
  text-decoration: none;
  color: ${props => props.theme.color.secondary};
  text-shadow: ${props => props.theme.boxShadow.blur};
`;

const CommonLink = styled(NavLink)`
  ${wordTextStyle};
  color: ${props => props.theme.color.fontLight};
  text-shadow: ${props => props.theme.boxShadow.blur};
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  &.active {
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      top: ${props => props.theme.spacing.large};
      height: 1px;
      background-color: ${props => props.theme.color.fontLight};
      box-shadow: ${props => props.theme.boxShadow.blur};
    }
  }
`;

const RightWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: ${props => props.theme.spacing.medium};
`;

const NavBar = () => {
  return (
    <Wrapper>
      <LogoLink to="/">Memorize Paragraph</LogoLink>
      <RightWrapper>
        <CommonLink to="/login" activeClassName="active">
          Login
        </CommonLink>
        <CommonLink to="/signup" activeClassName="active">
          Signup
        </CommonLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default NavBar;
