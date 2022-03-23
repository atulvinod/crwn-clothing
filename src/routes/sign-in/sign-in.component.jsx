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
      <h1>Signin</h1>
    </div>
  );
};
