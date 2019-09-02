import React from "react";
import styled from "styled-components";
import Button from "../common/Button/Button";
import Layout from "../common/Layout/Layout";
import Separator from "../common/Separator/Separator";
import TextArea from "../common/TextArea/TextArea";
import Typography from "../common/Typography/Typography";
import UploadFile from "./UploadFile/UploadFile";

const CenterButton = styled(Button)`
  justify-self: center;
`;

const Submission = () => {
  return (
    <Layout>
      <Typography align="center" size="mid">
        <Typography size="mid" as="span" color="secondary">
          Enter
        </Typography>{" "}
        or{" "}
        <Typography size="mid" as="span" color="secondary">
          upload
        </Typography>{" "}
        something you want to memorize
      </Typography>
      <TextArea
        rows={16}
        placeholder="Enter what you want to memorize here. It can be a song, poem, speeches..."
      />
      <CenterButton>Memorize!</CenterButton>
      <Separator label="Or" />
      <UploadFile />
    </Layout>
  );
};

export default Submission;
