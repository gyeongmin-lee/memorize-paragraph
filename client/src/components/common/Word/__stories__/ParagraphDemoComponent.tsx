import React, { FC } from "react";
import Background from "../../Background/Background";
import Layout from "../../Layout/Layout";
import ParagraphArea from "../../ParagraphArea/ParagraphArea";

const ParagraphDemoComponent: FC = ({ children }) => {
  return (
    <Background>
      <Layout>
        <ParagraphArea header={"Paragraph"}>{children}</ParagraphArea>
      </Layout>
    </Background>
  );
};

export default ParagraphDemoComponent;
