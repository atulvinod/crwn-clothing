import * as ButtonStyles from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: ButtonStyles.BaseButton,
    [BUTTON_TYPE_CLASSES.google]: ButtonStyles.GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: ButtonStyles.InvertedButton,
  }[buttonType]);

export const Button = ({ children, isLoading, buttonType, ...buttonProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...buttonProps}>
      {isLoading ? <ButtonStyles.ButtonSpinner /> : children}
    </CustomButton>
  );
};
