import * as Styled from "./form-input.styles";

export const FormInput = ({ label, inputName, ...inputProps }) => {
  return (
    <Styled.FormInputGroup>
      <Styled.FormInput name={inputName} {...inputProps} />
      <Styled.FormInputLabel
        htmlFor={inputName}
        shrink={inputProps.value.length}
      >
        {label}
      </Styled.FormInputLabel>
    </Styled.FormInputGroup>
  );
};
