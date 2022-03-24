import { useState, useContext } from "react";
import {
  signUpWithEmailPassword,
  createUser,
  Logger,
  LogLevel,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../services";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import { UserContext } from "../../contexts";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFieldsState] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFieldsState({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailPassword(email, password);
      setCurrentUser(user);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password!");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          Logger(err, LogLevel.ERROR);
      }
    }
  };

  const siginInWithGoogle = async () => {
    const { user } = await signInWithGoogle();
    setCurrentUser(user);
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
