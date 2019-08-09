import React from "react";
import { ThemeProvider } from "styled-components";
import themes from "./styles/themes";
import Background from "./components/common/Background/Background";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Background />
    </ThemeProvider>
  );
};

export default App;
