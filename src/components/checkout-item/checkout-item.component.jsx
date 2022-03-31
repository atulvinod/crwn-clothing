import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts";

export const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  const { deleteItemFromCart, removeItemsFromCart, addItemsToCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {" "}
        <div className="arrow" onClick={() => removeItemsFromCart(item)}>
          &#10094;
        </div>
        <div className="value">
          {"  "}
          {quantity}
          {"  "}
        </div>
        <div className="arrow" onClick={() => addItemsToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};
