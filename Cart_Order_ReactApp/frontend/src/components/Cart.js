import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "../UI/CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

     // State to handle shipping, coupon, and invalid coupon style
  const [shippingCost, setShippingCost] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponInvalid, setIsCouponInvalid] = useState(false); // Track invalid coupon

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const totalItems = cartCtx.items.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

  const finalTotal = cartTotal + shippingCost - couponDiscount;

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleShippingChange(type) {
    if (type === "pickup") {
      setShippingCost(cartTotal * 0.21); // Increase total by 21%
    } else {
      setShippingCost(type); // Apply the fixed cost for other options
    }
  }

  function applyCoupon(){
    if (couponCode === "DISCOUNT10") {
      setCouponDiscount(10); // Example discount
      setIsCouponInvalid(false); // Coupon is valid
    } else {
      setCouponDiscount(0); // Invalid coupon
      setIsCouponInvalid(true); // Show red border for invalid coupon
    }
  }

  return (
    <Modal
      className="cart p-8  bg-red-100  rounded-lg shadow-xl  w-[1240px] h-[800px] mx-auto relative font-['Josefin_Sans']"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2 className="text-[50px] font-semibold mb-6 text-gray-800">Shopping Cart</h2>
      <ul className=" max-h-72 ">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            color={item.color}
            price={item.price}
            image={`http://localhost:3000/${item.image}`} 
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
            remove={() => cartCtx.clearItem(item.id)}       
          />
          
        ))}
      <div className="mt-20 pb-10 pl-20 ">
          <span className="text-2xl  ">Have a coupon?</span><br/>
          <span className="text-sm mb-4 mt-2 block text-gray-600">Add your code for an instant cart discount</span>
        <div className={`flex items-center space-x-4 border ${isCouponInvalid ? 'border-red-500' : 'border-gray-800'} w-[300px]`}>          
          <input type="text" className={`p-2 rounded-lg w-full bg-transparent border-none focus:outline-none ${isCouponInvalid ? 'text-red-500' : ''}`}
              placeholder="Coupon Code"  value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
          <Button className="px-4 py-2 border-none "  textOnly onClick={applyCoupon}>
              Apply
          </Button>
        </div>
        {isCouponInvalid && <p className="text-red-500 mt-2">Invalid Coupon Code</p>}
      </div>

    </ul>

    <div className="mt-6  space-x-4 font-['Josefin_Sans']">

<div className="border border-gray-300 p-4 m-6 absolute top-16 left-[775px] shadow-lg">
  <span className="text-2xl">Cart Summary</span>

  <ul className="list-none mt-4">
    <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center">
      <input className="mr-3 scale-125" type="radio" name="summaryRadio" id="firstRadio" defaultChecked  
              onChange={() => handleShippingChange(0)}/>
      <label className="text-lg" htmlFor="firstRadio">Free Shipping</label>
    </li>

    <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center">
    <div className="flex items-center">
      <input className="mr-3 scale-125" type="radio" name="summaryRadio" id="secondRadio" 
              onChange={() => handleShippingChange(15)} />
      <label className="text-lg" htmlFor="secondRadio">Express Shipping</label>
      </div>
      <span className="text-lg ml-24 ">+$15.00</span>
    </li>

    <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg flex items-center">
    <div className="flex items-center">
      <input className="mr-3 scale-125" type="radio" name="summaryRadio" id="thirdRadio"
              onChange={() => handleShippingChange("pickup")} />
      <label className="text-lg" htmlFor="thirdRadio">Pick Up</label>
    </div>
      <span className="text-lg ml-44 ">%21.00</span>
    </li>
  </ul>

  <div className="mt-6 pb-4 flex justify-between items-center border-b border-gray-300">
          <span className="text-x1 ">Subtotal ({totalItems} items)</span>
        <span className="text-x2  ">
          {currencyFormatter.format(cartTotal)}
        </span>
      </div>

      <div className="mt-6 flex justify-between items-center font-semibold ">
        <span className="text-xl ">Total:</span>
        <span className="text-xl  ">
          {currencyFormatter.format(finalTotal)}
        </span>
      </div>

  {cartCtx.items.length > 0 && (
    <Button
      className="px-4 py-2 w-[365px] h-[52px] bg-[#01ADB5] text-white hover:text-black text-[18px] shadow-lg mt-6"
      textOnly
      onClick={handleGoToCheckout}
    >
      CheckOut
    </Button>
  )}
</div>
        <Button
          className="px-4 py-2 absolute right-28 top-[520px]  border-none text-[20px] mt-20 "
          textOnly
          onClick={handleCloseCart}
        >
         ⬅ Continue Shopping
        </Button>
      </div>

    </Modal>
  );
}