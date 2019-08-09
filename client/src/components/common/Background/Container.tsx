import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: ${props => props.theme.spacing.small};

  overflow-x: hidden;
  overflow-y: auto;

  background: ${props => props.theme.color.primary};
  border-top: 4px solid ${props => props.theme.color.secondary};
  border-bottom: 4px solid ${props => props.theme.color.secondary};
`;

export default Container;
