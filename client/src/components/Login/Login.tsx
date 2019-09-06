import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import React, { FormEvent, FC } from "react";
import Button from "../common/Button/Button";
import FormInput from "../common/FormInput/FormInput";
import Layout from "../common/Layout/Layout";
import Typography from "../common/Typography/Typography";
import { ButtonGroup, LeftButton, StyledForm } from "../Signup/Signup";
import { RouteComponentProps } from "react-router";

interface LoginProps extends RouteComponentProps {}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted???");
};

const Login: FC<LoginProps> = ({ history }) => {
  return (
    <Layout layoutType="narrow">
      <Typography align="center" size="mid">
        <Typography as="span" color="secondary" size="mid">
          Login
        </Typography>{" "}
        to save your paragraphs
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="e.g. example@gmail.com"
        />
        <FormInput label="Password" type="password" name="password" />
      </StyledForm>
      <ButtonGroup>
        <LeftButton
          buttonType="inverted"
          type="button"
          leftNode={<ArrowLeft />}
          onClick={history.goBack}
        >
          Back
        </LeftButton>
        <Button type="submit" value="Submit">
          Login
        </Button>
      </ButtonGroup>
    </Layout>
  );
};

export default Login;
