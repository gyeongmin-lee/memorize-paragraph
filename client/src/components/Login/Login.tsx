import React from "react";
import Layout from "../common/Layout/Layout";
import FormInput from "../common/FormInput/FormInput";

const Login = () => {
  return (
    <Layout layoutType="narrow">
      <FormInput label="Email" placeholder="e.g. example@gmail.com" />
    </Layout>
  );
};

export default Login;
