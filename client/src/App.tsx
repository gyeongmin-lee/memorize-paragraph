import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Background from "./components/common/Background/Background";
import Button from "./components/common/Button/Button";
import themes from "./styles/themes";

const App = () => {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={themes}>
        <Background>
          <Button>HI</Button>
        </Background>
      </ThemeProvider>
    </>
  );
};

export default App;
