import "./checkout-item.styles.scss";

import {
  addItemsToCart,
  deleteItemFromCart,
  removeItemsFromCart,
} from "../../store";
import { useDispatch } from "react-redux";

export const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const dispatch = useDispatch();

  const deleteItem = (item) => {
    dispatch(deleteItemFromCart(item));
  };

  const removeItem = (item) => {
    dispatch(removeItemsFromCart(item));
  };

  const addItem = (item) => {
    dispatch(addItemsToCart(item));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {" "}
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <div className="value">
          {"  "}
          {quantity}
          {"  "}
        </div>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(item)}>
        &#10005;
      </div>
    </div>
  );
};
