import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import React, { FC, FormEvent } from "react";
import { RouteComponentProps } from "react-router";
import styled from "styled-components";
import Button from "../common/Button/Button";
import FormInput from "../common/FormInput/FormInput";
import Layout from "../common/Layout/Layout";
import Typography from "../common/Typography/Typography";

interface SignupProps extends RouteComponentProps {}

export const StyledForm = styled.form`
  display: grid;
  grid-gap: ${props => props.theme.spacing.small};
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  justify-content: center;
  align-items: center;
`;

export const LeftButton = styled(Button)`
  margin-right: auto;
`;

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted???");
};

const Signup: FC<SignupProps> = ({ history }) => {
  return (
    <Layout layoutType="narrow">
      <Typography align="center" size="mid">
        <Typography as="span" color="secondary" size="mid">
          Sign Up
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmpassword"
        />
        <FormInput label="Display Name" name="displayname" />
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
            Sign Up
          </Button>
        </ButtonGroup>
        <Typography align="center" color="secondary" size="default">
          Existing Display name. Please enter another name.
        </Typography>
      </StyledForm>
    </Layout>
  );
};

export default Signup;
