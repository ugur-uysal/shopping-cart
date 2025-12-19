import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  if (cart.length < 1) return;

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((item) => (
          <li className="mt-2 flex justify-between" key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}₺</span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <div className="font-semibold text-xl flex justify-between">
        <span>Toplam:</span>
        <span>{total}₺</span>
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 transition-all text-white px-4 py-2 mt-4 rounded w-full"
        onClick={emptyCart}
      >
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;
