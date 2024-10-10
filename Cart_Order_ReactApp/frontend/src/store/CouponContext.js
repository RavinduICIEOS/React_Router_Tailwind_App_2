/*import { useState } from "react";
import Button from "../UI/Button"; // Assuming Button is a custom component

export default function Coupon({ onApplyCoupon, showDescription = true }) {
  const [couponCode, setCouponCode] = useState("");
  const [isCouponInvalid, setIsCouponInvalid] = useState(false);

  function applyCoupon() {
    if (couponCode === "DISCOUNT25") {
      onApplyCoupon(25, couponCode); // Pass discount and code to parent component
      setIsCouponInvalid(false); // Coupon is valid
    } else {
      onApplyCoupon(0, ""); // Invalid coupon
      setIsCouponInvalid(true); // Show red border for invalid coupon
    }
  }

  return (
    <div className="mt-20 pb-10 pl-20">
    
      {showDescription && (
        <>
          <span className="text-2xl">Have a coupon?</span><br />
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
*/