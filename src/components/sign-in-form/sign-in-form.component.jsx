import { useState } from "react";
import {
  signUpWithEmailPassword,
  createUser,
  Logger,
  LogLevelEnum,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../services";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFieldsState] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFieldsState({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          Logger(err, LogLevelEnum.ERROR);
      }
    }
  };

  const siginInWithGoogle = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputName="email"
          type="email"
          required
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          inputName="password"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={siginInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
