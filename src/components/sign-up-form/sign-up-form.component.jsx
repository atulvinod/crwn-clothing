import { useState } from "react";

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

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};
