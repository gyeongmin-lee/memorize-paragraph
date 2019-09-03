import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Background from "./components/common/Background/Background";
import NavBar from "./components/Navbar/NavBar";
import Submission from "./components/Submission/Submission";
import themes from "./styles/themes";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Normalize />
        <ThemeProvider theme={themes}>
          <Background hideStrikeOnMobile>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Submission} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </Background>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
