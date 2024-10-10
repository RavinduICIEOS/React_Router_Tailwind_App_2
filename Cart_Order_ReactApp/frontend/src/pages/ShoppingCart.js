import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import CartItem from "../UI/CartItem";
import Coupon from "../components/Coupon"; // Import Coupon component
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate(); 
  const cartCtx = useContext(CartContext);

  const [shippingCost, setShippingCost] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState(""); // New state for coupon code


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
    const shippingType = shippingCost === 0 ? 'free' : shippingCost === 15 ? 'Express' : 'Pick Up';
    navigate('/checkoutdetails' , { state: { shippingType,  shippingCost , couponDiscount, appliedCouponCode  } }); // Pass the correct shipping info);
  }

  function handleCloseCart() {
    navigate('/merchandise');
  }

  function handleShippingChange(type) {
    if (type === "pickup") {
      setShippingCost(cartTotal * 0.21); // Increase total by 21%
    } else {
      setShippingCost(type); // Apply the fixed cost for other options
    }
  }

  function handleCouponApply(discount, couponCode) {
    setCouponDiscount(discount); // Set discount when coupon is applied
    setAppliedCouponCode(couponCode); // Store the applied coupon code
  }

  return (
    <div className="cart p-8 rounded-lg  w-auto h-auto mx-auto relative top-36 left-36 font-['Josefin_Sans']">
      <div className="flex items-center mb-6">
        <h2 className="text-[50px] font-semibold text-gray-800">Shopping</h2>
        <h2 className="text-[50px] font-semibold text-skyblue ml-2">Cart</h2>
      </div>
      
      <ul className="max-h-[1000px] overflow-y-auto">
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
            customImageStyle="w-40 h-40 relative top-14 mr-[20px]" // Pass a custom class for image width
            customBtnStyle="relative left-[180px]"
            customDesStyle="text-[18px]"

            
          />
        ))}
      </ul>

      {/* Coupon component usage */}
      <Coupon onApplyCoupon={handleCouponApply} />

      <div className="mt-6 space-x-4 font-['Josefin_Sans']">
        <div className="border border-gray-300 p-4 m-6 absolute top-16 left-[775px] shadow-lg">
          <span className="text-2xl">Cart Summary</span>

          <ul className="list-none mt-4 ">
            {/* Shipping options */}
            <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center hover:border-skyblue ">
              <input className="mr-3 scale-125" type="radio" name="summaryRadio"  id="exampleRadios1" value="option1"  defaultChecked onChange={() => handleShippingChange(0)} />
              <label className="text-lg cursor-pointer" for="exampleRadios1" >Free Shipping</label>
            </li>
            <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center hover:border-skyblue ">
              <input className="mr-3 scale-125" type="radio" name="summaryRadio"  id="exampleRadios2" value="option2"  onChange={() => handleShippingChange(15)} />
              <label className="text-lg cursor-pointer" for="exampleRadios2">Express Shipping</label>
              <span className="text-lg ml-24">+$15.00</span>
            </li>
            <li className="py-4 px-4 border border-gray-300 shadow-md rounded-lg flex items-center hover:border-skyblue">
              <input className="mr-3 scale-125" type="radio" name="summaryRadio"  id="exampleRadios3" value="option3"  onChange={() => handleShippingChange("pickup")} />
              <label className="text-lg cursor-pointer" for="exampleRadios3">Pick Up</label>
              <span className="text-lg ml-44">%21.00</span>
            </li>
          </ul>

          <div className="mt-6 pb-4 flex justify-between items-center border-b border-gray-300">
            <span className="text-x1">Subtotal ({totalItems} items)</span>
            <span className="text-x2">{currencyFormatter.format(cartTotal)}</span>
          </div>

          <div className="mt-6 flex justify-between items-center font-semibold">
            <span className="text-xl">Total:</span>
            <span className="text-xl">{currencyFormatter.format(finalTotal)}</span>
          </div>

          {cartCtx.items.length > 0 && (
            <Button
              className="px-4 py-2 w-[365px] h-[52px] bg-[#01ADB6] text-white hover:text-black text-[18px] shadow-lg mt-6"
              textOnly
              onClick={handleGoToCheckout}
            >
              CheckOut
            </Button>
          )}
        </div>

        <Button className="px-4 py-2 absolute right-[680px] top-[540px] border-none text-[20px] mt-20" textOnly onClick={handleCloseCart}>
          ⬅ Continue Shopping
        </Button>
      </div>
    </div>
  );
}