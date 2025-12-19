import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const ProductItem = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = () => {
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <div className="border p-4 m-2 rounded-lg shadow-xl">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.image}
        alt="Prodcut image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price}₺</p>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${
            findProduct ? "cursor-no-drop opacity-50" : ""
          }`}
          onClick={addToCart}
          disabled={findProduct}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
