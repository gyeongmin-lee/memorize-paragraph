import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { fontPrimary } from "../../../styles/styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  /**
   * Element to display at the left of the button.
   */
  leftNode?: ReactNode;
  /**
   * Element to display at the right of the button.
   */
  rightNode?: ReactNode;
  /**
   * Class name to pass down
   */
  className?: string;
}

const buttonStyle = css`
  display: flex;
  align-items: center;
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

const StyledButton = styled.button<{ buttonType?: string; size?: string }>`
  ${buttonStyle}
  ${props =>
    props.buttonType === "default" ? defaultButtonStyle : invertedButtonStyle}
    ${props => (props.size === "default" ? defaultSizeStyle : smallSizeStyle)}
`;

const LeftNode = styled.div`
  margin: -12px 4px -12px -8px;
  display: flex;
`;

const RightNode = styled.div`
  margin: -12px -8px -12px 4px;
  display: flex;
`;

const Button: FC<ButtonProps> = ({
  size = "default",
  buttonType = "default",
  children,
  leftNode,
  rightNode,
  className,
  ...buttonProps
}) => {
  return (
    <StyledButton
      className={className}
      size={size}
      buttonType={buttonType}
      {...buttonProps}
    >
      {leftNode && <LeftNode>{leftNode}</LeftNode>}
      {children}
      {rightNode && <RightNode>{rightNode}</RightNode>}
    </StyledButton>
  );
};

export default Button;
