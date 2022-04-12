import { loadStripe } from "@stripe/stripe-js";

//To create a stripe instance
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
