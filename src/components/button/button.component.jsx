import * as Buttons from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Buttons.BaseButton,
    [BUTTON_TYPE_CLASSES.google]: Buttons.GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: Buttons.InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...buttonProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonProps}>{children}</CustomButton>;
};
