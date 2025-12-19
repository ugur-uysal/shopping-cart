import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "./context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="relative">
      <FiShoppingCart className="text-2xl" />
      {cart.length > 0 && <span className="shopping-cart">{cart.length}</span>}
    </div>
  );
};

export default CartIcon;
