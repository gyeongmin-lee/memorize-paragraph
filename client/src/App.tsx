import React from "react";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import Background from "./components/common/Background/Background";
import Button from "./components/common/Button/Button";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Background>
        <Button>HI</Button>
      </Background>
    </ThemeProvider>
  );
};

export default App;
