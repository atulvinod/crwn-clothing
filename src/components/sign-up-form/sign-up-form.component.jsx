import { useState } from "react";
import {
  signUpWithEmailPassword,
  createUser,
  Logger,
  LogLevel,
} from "../../services";
import { Button, FormInput } from "../../components";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFieldsState] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFieldsState({ ...formFields, [name]: value });
  };

  const clearForm = () => {
    setFormFieldsState(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords don't match");
    }
    try {
      var { user } = await signUpWithEmailPassword(email, password);

      if (user) {
        var userDocRef = await createUser(user, { displayName });
        clearForm();
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
        Logger(err, LogLevel.ERROR);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          inputName="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label={"Confirm Password"}
          type="password"
          inputName="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
