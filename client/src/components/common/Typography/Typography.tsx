import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { fontPrimary } from "../../../styles/styles";

export interface TypographyProps {
  /**
   * Font size
   * @default default
   */
  size?: "default" | "mid" | "large";
  /**
   * Font color
   * @default light
   */
  color?: "light" | "mid" | "dark" | "primary" | "secondary";
  /**
   * Text shadow
   * @default true
   */
  shadow?: boolean;
  /**
   * Alignment
   * @default inherit
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";
  /**
   * Tag to display as
   * @default p
   */
  as?: "p" | "span" | "div";
  /**
   * Text to display
   */
  children: ReactNode;
}

const StyledTypo = styled.div<TypographyProps>`
  ${fontPrimary};
  margin: 0;
  font-size: ${props =>
    props.size === "default"
      ? props.theme.fontSize.default
      : props.size === "mid"
      ? props.theme.fontSize.mid
      : props.theme.fontSize.large};
  line-height: ${props =>
    props.size === "default"
      ? props.theme.lineHeight.default
      : props.size === "mid"
      ? props.theme.lineHeight.mid
      : props.theme.lineHeight.large};
  color: ${props =>
    props.color === "light"
      ? props.theme.color.fontLight
      : props.color === "mid"
      ? props.theme.color.fontMid
      : props.color === "dark"
      ? props.theme.color.fontDark
      : props.color === "primary"
      ? props.theme.color.primary
      : props.theme.color.secondary};
  text-shadow: ${props => (props.shadow ? props.theme.boxShadow.blur : "none")};
  text-align: ${props => props.align};
`;

const Typography: FC<TypographyProps> = ({
  children,
  size = "default",
  color = "light",
  align = "inherit",
  shadow = true,
  as = "p"
}) => (
  <StyledTypo size={size} color={color} align={align} shadow={shadow} as={as}>
    {children}
  </StyledTypo>
);

export default Typography;
