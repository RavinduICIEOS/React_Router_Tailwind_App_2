import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "../UI/CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      className="cart bg-amber-200 p-8 rounded-lg shadow-xl max-w-md w-full mx-auto relative"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      <ul className="divide-y divide-gray-200 max-h-72 overflow-y-auto">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-semibold text-[#ff445d]">Total:</span>
        <span className="text-xl font-bold text-[#fc415a]">
          {currencyFormatter.format(cartTotal)}
        </span>
      </div>
      <div className="mt-6 flex justify-between space-x-4">
        <Button
          className="px-4 py-2    w-1/2"
          textOnly
          onClick={handleCloseCart}
        >
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button
            className="px-4 py-2  w-1/2"
            textOnly
            onClick={handleGoToCheckout}
          >
            Go to Checkout
          </Button>
        )}
      </div>
    </Modal>
  );
}