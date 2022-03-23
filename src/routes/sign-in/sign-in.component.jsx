import { SignUpForm } from "../../components";
import {
  signIn,
  createUser,
} from "../../services/services";

export const Signin = () => {
  const logGoogleUser = async () => {
    const response = await signIn();
    const userDocRef = await createUser(response);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <SignUpForm/>
    </div>
  );
};
