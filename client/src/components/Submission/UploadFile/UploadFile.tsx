import React from "react";
import styled from "styled-components";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";

const UploadWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.medium} 0;
  border-radius: ${props => props.theme.borderRadius.default};
  border: 1px dashed ${props => props.theme.color.fontLight};
`;

const UploadFile = () => {
  return (
    <UploadWrapper>
      <Typography>
        <Typography as="span" color="secondary">
          Drag
        </Typography>{" "}
        your .txt file here or{" "}
      </Typography>
      <Button size="small">Browse file</Button>
    </UploadWrapper>
  );
};

export default UploadFile;
