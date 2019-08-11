import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { fontPrimary } from "../../../styles/styles";

const Wrapper = styled.div`
  max-width: 716px;
  border-radius: ${props => props.theme.borderRadius.default};
  padding: ${props => props.theme.spacing.small};
  border: 4px solid ${props => props.theme.color.secondary};
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.boxShadow.default};
  ${fontPrimary}
  font-size: ${props => props.theme.fontSize.default};
  color: ${props => props.theme.color.fontLight};
  line-height: ${props => props.theme.lineHeight.default};
  background: ${props => props.theme.color.primary};
`;

const Header = styled.div`
  height: 40px;
  background-color: ${props => props.theme.color.secondary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: -16px -16px 16px -16px;
  padding: 0 ${props => props.theme.spacing.small};
  display: flex;
  align-items: center;
`;

interface ParagraphAreaProps {
  header?: ReactNode;
}

const ParagraphArea: FC<ParagraphAreaProps> = ({ header, children }) => {
  return (
    <Wrapper>
      {header ? <Header>{header}</Header> : null}
      {children}
    </Wrapper>
  );
};

export default ParagraphArea;
