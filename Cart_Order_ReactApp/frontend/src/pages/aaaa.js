/*import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../UI/CartItem";
import Coupon from "../components/Coupon"; // Import Coupon component

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
};

export default function CheckoutDetails() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const navigate = useNavigate(); // Initialize the navigate function

    const location = useLocation();

 //   const { shippingType, shippingCost, couponDiscount: initialCouponDiscount } = location.state || { shippingType: 'Standard', shippingCost: 0, couponDiscount: 25 };
 const { shippingType, shippingCost, couponDiscount: initialCouponDiscount, appliedCouponCode: initialAppliedCouponCode } = location.state || { shippingType: 'Standard', shippingCost: 0, couponDiscount: 0, appliedCouponCode: '' }; // Default values
    
 const [couponDiscount, setCouponDiscount] = useState(initialCouponDiscount); // Manage coupon discount with state
 const [appliedCouponCode, setAppliedCouponCode] = useState(initialAppliedCouponCode); // Manage applied coupon code with state

   // const [appliedCouponCode, setAppliedCouponCode] = useState(""); // State to store applied coupon code

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    console.log(couponDiscount)
   

    const finalTotal = cartTotal + shippingCost - couponDiscount;

    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData,
    } = useHttp('http://localhost:3000/orders', requestConfig);

    // Check if data is available and no error occurred, then finish checkout
    if (data && !error) {
        handleFinish();
    }

    function handleClose() {
        navigate('/shoppingcart'); // Navigate back to Shopping Cart page
    }

   function handleCouponApply(discount, couponCode) {
       /* setCouponDiscount(discount); // Set discount when coupon is applied
        setAppliedCouponCode(couponCode); // Store the applied coupon code
        console.log(couponCode)*/
        cartCtx.couponDiscount(discount);  // Use cartCtx to apply the discount
    setAppliedCouponCode(couponCode); // Store the applied coupon code

   /* }

    function handleCouponRemove() {
      //  setCouponDiscount(0); // Reset coupon discount to 0
      //  setAppliedCouponCode(""); // Clear applied coupon code
      setCouponDiscount(0); // Reset coupon discount to 0
      setAppliedCouponCode(''); // Clear applied coupon code
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
        navigate('/purchase'); // Navigate to the purchase page
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData,
            },
        }));
    }

    let actions = (
        <>
            <Button type="button" textOnly onClick={handleClose}>
                Close
            </Button>
            <Button type="submit" textOnly /*disabled={isSending}*//*>
                Submit Order
            </Button>
        </>
 /*   );

    if (isSending) {
        actions = <span className="text-gray-600">Sending order data...</span>;
        console.log('orderrsss ');
    }

    if (error) {
        actions = <span className="text-gray-600">Sending order data error...</span>;
        console.log('orderrsss error ');
    }

    return (
        <div className="relative -left-24 font-josefin">
            <div className="relative -left-80 font-josefin p-8 rounded-lg mx-auto w-[720px] h-[227px] gap-12">
                <h2 className="mt-4 text-[50px] relative top-[100px]">
                    <span className="text-[50px] leading-[1.1]">Checkout</span>
                    <span className="text-[50px] text-skyblue leading-[1.1]"> Details </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 p-6 relative top-[160px] text-black border border-gray-300">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

                    <div className="flex space-x-4">
                        <Input
                            label="FIRST NAME"
                            type="text"
                            id="firstname"
                            placeholder="First Name"
                            className="block w-[295px] border border-gray-300 rounded-md p-2"
                        />
                        <Input
                            label="LAST NAME"
                            type="text"
                            id="lastname"
                            placeholder="Last Name"
                            className="block w-[295px] border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <Input
                        label="PHONE NUMBER"
                        type="text"
                        id="phone"
                        placeholder="Phone Number"
                        className="block w-full border border-gray-300 rounded-md p-2"
                    />
                    <Input
                        label="E-Mail Address"
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="block w-full border border-gray-300 rounded-md p-2"
                    />
                    <p className='text-[28px]'>Shipping Address</p>
                    {/* Embed Google Map below the Billing Address */
                   /* <div className="mt-6 mb-6">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093413!2d144.9537363153166!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4e2c05c5d0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1615493621441!5m2!1sen!2sau"
                            width="612"
                            height="269"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                    <Input
                        label="Street Address *"
                        type="text"
                        id="streetaddress"
                        placeholder="Street Address"
                        className="block w-full border border-gray-300 rounded-md p-2"
                    />
                    <Input
                        label="TOWN / CITY *"
                        type="text"
                        id="city"
                        placeholder="Town / City"
                        className="block w-full border border-gray-300 rounded-md p-2"
                    />
                    <div className="flex space-x-4">
                        <Input
                            label="STATE"
                            type="text"
                            id="state"
                            placeholder="State"
                            className="border w-[295px] border-gray-300 rounded-md p-2"
                        />
                        <Input
                            label="ZIP CODE"
                            type="text"
                            id="zip-code"
                            placeholder="Zip Code"
                            className="border w-[295px] border-gray-300 rounded-md p-2"
                        />
                    </div>

                    <div className="modal-actions flex justify-end mt-6 space-x-4">
                        {actions}
                    </div>
                </form>
            </div>

            <div className="relative left-[1000px] w-[680px] top-[50px] pl-8 pt-8 pb-8 border border-gray-300 ">
                <span className="text-[30px] font-semibold">Order Summary</span>

                <ul className="max-h-[814px]  overflow-y-auto ">
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
                            customImageStyle="w-[80px] h-[96px] top-10 " // Pass a custom class for image width
                            customColoreStyle="mt-[-40px] mb-[-20px] relative left-[110px] text-[12px]"
                            customBtnStyle="mt-[-40px] mb-[-20px] relative left-[110px]"
                            customDesStyle="text-[14px]"


                        />
                    ))}

<div className="mt-[-36px] pb-[-16px] relative -left-16">         
                <Coupon onApplyCoupon= {handleCouponApply} showDescription={false} /> {/* Assuming you still want the coupon component here */
       /*     </div>

            {cartCtx.couponDiscount && appliedCouponCode && couponDiscount  > 0 && ( // Ensure coupon code is displayed
                <div className="flex justify-between mt-[-13px] mb-0 ">
                    <span className="relative left-5">{appliedCouponCode}</span>
                    <span className="relative -left-[138px] text-skyblue">{currencyFormatter.format(-couponDiscount)}</span>
                    <Button type="button" onClick={handleCouponRemove} textOnly className="border-0 relative right-[240px] -top-2 ">[Remove]</Button> {/* Add Remove button */                      
         /*       </div>
            )}

                    <div className="text-base pl-5">
                        <div className="flex">
                            <span className="pr-[240px] pb-4">Shipping</span>
                            <span>{shippingType}</span>
                        </div>

                       

                        <span className="pr-60">Subtotal</span>
                        <span>{currencyFormatter.format(cartTotal)}</span>
                        <p className="text-lg font-medium pt-4">
                            Total <span className="font-semibold pl-64">{currencyFormatter.format(finalTotal)}</span>
                        </p>
                    </div>

                    <div className="col-12 pt-8">
                        <div className="form-check">
                            <input className="form-check-input size-6 relative top-[6px]" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label pl-2">I have read and agree to the Agree to
                                <a href="/terms-and-conditions" target="_blank" className="underline">Terms and Conditions.</a>
                            </label>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
//////

import { useState } from "react";
import Input from "./Input";

export default function Payment({ className, onSubmit, customer }) {
    // State to track the selected payment method
    const [paymentMethod, setPaymentMethod] = useState("cash"); // default to cash

    // Handler to update payment method
    const handlePaymentChange = (method) => {
        setPaymentMethod(method); // This updates the state
    };

    // Handler to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const updatedCustomer = {
            ...customer,
            paymentMethod: paymentMethod,
        };
        onSubmit(updatedCustomer); // Call the onSubmit function with updated customer
    };

    return (
        <form className={`relative top-48 ${className}`} onSubmit={handleSubmit}>
            <span className="text-2xl">Payment Method</span>

            <ul className="list-none mt-4 border-b border-black pb-4">
            /*    {/* Shipping options */
              /*  <li className="py-3 px-3 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center">
                    <input
                        className="mr-3 scale-125"
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === "cash"}
                        onChange={() => handlePaymentChange("cash")}
                    />
                    <label className="text-lg">Cash on Delivery</label>
                </li>
                <li className="py-3 px-3 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center">
                    <input
                        className="mr-3 scale-125"
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === "credit"}
                        onChange={() => handlePaymentChange("credit")}
                    />
                    <label className="text-lg">Credit Card</label>
                </li>
            </ul>

            {/* Conditionally render input fields for credit card details */
         /*   {paymentMethod === "credit" && (
                <div className="mt-6">
                    <Input
                        label="CARD NUMBER"
                        type="text"
                        id="card"
                        placeholder="1234 1234 1234"
                        className="block w-full border border-gray-300 rounded-md p-2 mb-5"
                    />

                    <div className="flex space-x-4">
                        <Input
                            label="EXPIRY DATE"
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            className="border w-[295px] border-gray-300 rounded-md p-2"
                        />
                        <Input
                            label="CVC"
                            type="text"
                            id="cvc"
                            placeholder="CVC Code"
                            className="border w-[295px] border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div>
            )}

            <button
                type="submit"
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Submit
            </button>
        </form>
    );
}
//////

import PageContent from '../components/PageContent';
import ProImg from '../assets/Group 427320635.png';
import Button from '../UI/Button';
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import useHttp from "../hooks/useHttp";
import { currencyFormatter } from "../util/formatting";
import { useLocation, useNavigate } from 'react-router-dom';
import CartItem from '../UI/CartItem';
import Coupon from "../components/Coupon"; // Import Coupon component



function Purchase() {
       const navigate = useNavigate(); 
       const cartCtx = useContext(CartContext);
       const [couponDiscount, setCouponDiscount] = useState(0);
       const location = useLocation();
       const { shippingType, subtotal, total, items } = location.state || {};

       
   
    function handleCloseCart() {
        navigate('/merchandise');
      }

          return (    
            <div  className='relative top-60 left-40 font-josefin'>
                <h2 className="text-3xl mb-4">
                <span className="text-[50px] leading-[1.1]">Thank You for your</span> <br />
                <span className="text-[50px] text-skyblue leading-[1.1]"> purchase !</span> </h2>
                <p className="text-lg text-gray-900 mb-4">Your order will be processed within 24 hours during working 
                    days. We will notify<br /> you by email once your order has been shipped.</p>

                <p className='text-[28px] pt-8'>Billing Address</p>
                {/* Embed Google Map below the Billing Address */
           /* <div className="mt-6 mb-6">
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093413!2d144.9537363153166!3d-37.81720997975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4e2c05c5d0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1615493621441!5m2!1sen!2sau"
                    width="652" 
                    height="269" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
            </div>


     

      <div className=" flex justify-center mt-6">    
      <div className='border relative left-[250px] top-[-590px] p-3 pr-36 border-gray-300 text-[28px] '>
        <span>Your Order - No. 00283957 </span>
                    
                    <div className="flex justify-between mt-2 ">
                    
                    </div>
                    <div className="flex justify-between mt-2 text-[16px]">
                        <span>Shipping</span>
                        <span>{shippingType}</span>
                    </div>
                    <div className="flex justify-between mt-4 text-base">
                        <span>Subtotal</span>
                        <span>{currencyFormatter.format(subtotal)}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-[20px]">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                    </div>
                    


      </div>          
          <Button className="px-4 py-2 relative right-80 top-[-500px] left-[-125px] border-none text-[20px] mt-20 "
            textOnly
            onClick={handleCloseCart}
        >
         ⬅ Continue Shopping
        </Button>
      </div>

                <div className="relative left-[1000px] -top-[1940px]">
    <h2 className="text-[30px] font-semibold ">Order Summary</h2>

 
     
  </div>


</div>

            
         
        );
    }

export default Purchase;*/
