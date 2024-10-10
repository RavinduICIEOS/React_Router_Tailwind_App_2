import { useState } from "react";
import Input from "./Input";



export default function Payment({ className, onSubmit }) {
        // State to track the selected payment method
        const [paymentMethod, setPaymentMethod] = useState("cash"); // default to cash

        // Handler to update payment method
        const handlePaymentChange = (method) => {
            setPaymentMethod(method);
        };

            // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) {
            // Call the onSubmit function passed as a prop
            onSubmit(paymentMethod);
        }
    };

   
    return (

    <div className=" pt-20" onSubmit={handleSubmit}>
        <span className="text-2xl">Payment Method</span>

          <ul className="list-none mt-4 border-b border-black pb-4 ">
            {/* Shipping options */}
            <li className="py-3 px-3 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center hover:border-skyblue  ">
              <input className="mr-3 scale-125" type="radio" name="Cash on Delivery"  id="exampleRadios1" value="option1"  defaultChecked checked={paymentMethod === "cash"}   
                         onChange={() => handlePaymentChange("cash")} />
              <label className="text-lg cursor-pointer"  for="exampleRadios1">Cash on Delivery</label>
            </li>
            <li className="py-3 px-3 border border-gray-300 shadow-md rounded-lg mb-4 flex items-center hover:border-skyblue ">
              <input className="mr-3 scale-125" type="radio" name="Credit Card"  id="exampleRadios2" value="option2" checked={paymentMethod === "credit"} 
                         onChange={() => handlePaymentChange("credit")}  />
              <label className="text-lg cursor-pointer"  for="exampleRadios2">Credit Card </label>
            </li>
          </ul>
    {/* Conditionally render input fields for credit card details */}
    {paymentMethod === "credit" && (
          <div className="mt-6">
                <Input
                    label="CARD NUMBER"
                    type="text"
                    id="card"
                    placeholder="1234 1234 1234"
                    className="block w-full border border-gray-300 rounded-md p-2 mb-5 "
                />

                <div className="flex space-x-4">
                    <Input
                        label="EXPIRY DATE"
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="border w-[295px] border-gray-300 rounded-md p-2 "
                    />
                    <Input
                        label="CVC "
                        type="text"
                        id="cvc"
                        placeholder="CVC Code"
                        className="border w-[295px] border-gray-300 rounded-md p-2 "
                    />
                </div>
            </div>
        )}
    </div>
    )
}