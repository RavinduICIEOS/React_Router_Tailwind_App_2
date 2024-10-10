import { useContext, useState } from "react";
import Button from "../UI/Button"; // Assuming Button is a custom component
import CartContext from "../store/CartContext"; // Adjust the import path


export default function Coupon({ onApplyCoupon, showDescription = true }) {
  const { setCouponDiscount } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponInvalid, setIsCouponInvalid] = useState(false);

  function applyCoupon() {

   /* const validCoupons = {
      DISCOUNT25: 25,
      SAVE10: 10,
      WELCOME15: 15,
    };

    if (validCoupons[couponCode]) {
      const discount = validCoupons[couponCode];
      setCouponDiscount(discount); // Apply discount in context
      setIsCouponInvalid(false); // Coupon is valid
    } else {
      setCouponDiscount(0); // Invalid coupon
      setIsCouponInvalid(true); // Show red border for invalid coupon
    }
  }*/

    if (couponCode === "DISCOUNT25") {
      onApplyCoupon(25 , couponCode); // Pass discount to parent component
      setIsCouponInvalid(false); // Coupon is valid
    } else {
      onApplyCoupon(0, ""); // Invalid coupon
      setIsCouponInvalid(true); // Show red border for invalid coupon
    }
  }

  return (
    <div className="mt-20 pb-10 pl-20">
      {/* Conditionally show description */}
      {showDescription && (
        <>
          <span className="text-2xl">Have a coupon?</span><br/>
          <span className="text-sm mb-4 mt-2 block text-gray-600">Add your code for an instant cart discount</span>
        </>
      )}
      <div className={`flex items-center space-x-4 border ${isCouponInvalid ? 'border-red-500' : 'border-gray-800'} w-[300px]`}>          
        <input
          type="text"
          className={`p-2 rounded-lg w-full bg-transparent border-none focus:outline-none ${isCouponInvalid ? 'text-red-500' : ''}`}
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <Button className="px-4 py-2 border-none" textOnly onClick={applyCoupon}>
          Apply
        </Button>
      </div>
      {isCouponInvalid && <p className="text-red-500 mt-2">Invalid Coupon Code</p>}
    </div>
  );
}
/*import { useState } from 'react';

export default function Coupon({ onApplyCoupon }) {
  const [couponCode, setCouponCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validCoupons = {
    SAVE10: 10,
    WELCOME15: 15,
    // Add other valid coupons here
  };

  function handleCouponApply() {
    if (validCoupons[couponCode]) {
      const discount = validCoupons[couponCode];
      onApplyCoupon(discount, couponCode); // Call parent handler with discount and coupon code
      setErrorMessage(''); // Clear any previous errors
    } else {
      setErrorMessage('Invalid coupon code');
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button onClick={handleCouponApply}>Apply Coupon</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
*/