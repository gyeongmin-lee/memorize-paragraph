import React, { FC } from "react";
import styled from "styled-components";

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

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  padding: 0 0;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
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
