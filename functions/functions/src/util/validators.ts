interface SignupErrorObject {
  email: string | null;
  password: string | null;
  userName: string | null;
}

interface LoginErrorObject {
  email: string | null;
  password: string | null;
}

interface ValidateResult {
  errors: SignupErrorObject | LoginErrorObject;
  valid: boolean;
}

const isEmail = (email: string): RegExpMatchArray | null => {
  // eslint-disable-next-line no-useless-escape
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regEx);
};

const isEmpty = (data: string): boolean => {
  return data.trim() === "";
};

const validateSignupData = (
  email: string,
  password: string,
  confirmPassword: string,
  userName: string
): ValidateResult => {
  const errors = {
    email: isEmpty(email)
      ? "Must not be empty"
      : !isEmail(email)
      ? "Must be a valid email address"
      : null,
    password: isEmpty(password)
      ? "Must not be empty"
      : password !== confirmPassword
      ? "Password must match"
      : null,
    userName: isEmpty(userName) ? "Must not be empty" : null
  };

  return {
    errors,
    valid: Object.values(errors).every(error => error === null)
  };
};

const validateLoginData = (email: string, password: string): ValidateResult => {
  const errors = {
    email: isEmpty(email) ? "Must not be empty" : null,
    password: isEmpty(password) ? "Must not be empty" : null
  };

  return {
    errors,
    valid: Object.values(errors).every(error => error === null)
  };
};

export { validateSignupData, validateLoginData };
