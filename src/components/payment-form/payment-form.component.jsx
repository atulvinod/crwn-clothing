import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, BUTTON_TYPE_CLASSES } from "..";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    //To check if stripe and elements are initialized
    if (!stripe || !elements) {
      return;
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        {/* Card elements autmatically takes CC values */}
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
