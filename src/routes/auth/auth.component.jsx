import { SignUpForm, SignInForm } from "../../components";
import "./auth.styles.scss";

export const AuthRoute = () => {
 
  return (
    <div className="auth-container">
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};
