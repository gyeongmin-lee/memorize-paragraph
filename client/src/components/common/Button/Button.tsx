import React, { FC } from "react";
import styled, { css } from "styled-components";
import { fontPrimary } from "../../../styles/styles";

interface ButtonProps {
  /**
   * Size of the button
   * @default default
   */
  size?: "small" | "default";
  /**
   * Button type
   * @default default
   */
  buttonType?: "default" | "inverted";
  /**
   * Label for the button
   */
  children: string;
}

const buttonStyle = css`
  display: inline-block;
  border: none;
  margin: 0;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.small};
  ${fontPrimary}
  cursor: pointer;
  text-align: center;
  line-height: 1em;
`;

const defaultButtonStyle = css`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.fontLight};
  font-weight: bold;
  box-shadow: ${props => props.theme.boxShadow.default};
`;

const invertedButtonStyle = css`
  background: transparent;
  color: ${props => props.theme.color.secondary};
  font-weight: 500;
  text-shadow: ${props => props.theme.boxShadow.blur};
`;

const defaultSizeStyle = css`
  padding: 14px 18px;
  font-size: ${props => props.theme.fontSize.mid};
`;

const smallSizeStyle = css`
  padding: 8px 16px;
  font-size: ${props => props.theme.fontSize.default};
  font-weight: 500;
`;

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyle}
  ${props =>
    props.buttonType === "default" ? defaultButtonStyle : invertedButtonStyle}
    ${props => (props.size === "default" ? defaultSizeStyle : smallSizeStyle)}
`;

const Button: FC<ButtonProps> = ({
  size = "default",
  buttonType = "default",
  children
}) => {
  return (
    <StyledButton size={size} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;
