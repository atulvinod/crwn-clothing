import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, BUTTON_TYPE_CLASSES } from "..";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
import { selectCartTotal, selectCurrentUser } from "../../store";
export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const totalAmount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    //To check if stripe and elements are initialized
    if (!stripe || !elements) {
      return;
    }
    setIsPaymentProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalAmount * 100 }),
    }).then((res) => res.json());

    //Client secret connects our actual payment details to a payment intent
    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        // to get the card details via the stripe card element
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Atul Vinod",
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment success");
      }
    }

    setIsPaymentProcessing(false);
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        {/* Card elements autmatically takes CC values */}
        <CardElement />
        <Button
          isLoading={isPaymentProcessing}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};
