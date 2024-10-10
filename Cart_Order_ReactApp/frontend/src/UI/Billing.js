import { useState } from "react";
import Input from "./Input";

export default function Billing({ className, onSubmit }) {
    // State to track whether the checkbox is checked
    const [isBillingDifferent, setIsBillingDifferent] = useState(false);

    // Handler for checkbox change
    const handleCheckboxChange = (event) => {
        setIsBillingDifferent(event.target.checked);
    };

    return (
        <div className="pb-32">
            <form onSubmit={onSubmit} className="space-y-6 p-6 relative top-[160px] ml-[-24px]">
                <div className="col-12 mt-[-180px] mb-20" >
                    <div className="form-check">
                        <input
                            className="form-check-input size-6 relative top-[6px]"
                            type="checkbox"
                            value=""
                            id="invalidCheck"
                            onChange={handleCheckboxChange} // Add onChange handler
                        />
                        <label className="form-check-label pl-2 cursor-pointer" for="invalidCheck"  >
                            Use a different billing address (optional).
                        </label>
                    </div>
                </div>

        {/* Conditionally render the billing address fields */}
        {isBillingDifferent && (
            <>
                <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>

                <div className="flex space-x-4">
                    <Input
                        label="FIRST NAME"
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                        className="block w-[295px] border border-gray-300 rounded-md p-2"
                        disabled={!isBillingDifferent} // Disable when checkbox is not checked
                    />
                    <Input
                        label="LAST NAME"
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                        className="block w-[295px] border border-gray-300 rounded-md p-2"
                        disabled={!isBillingDifferent} // Disable when checkbox is not checked
                    />
                </div>

                <Input
                    label="PHONE NUMBER"
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    disabled={!isBillingDifferent} // Disable when checkbox is not checked
                />

                <Input
                    label="E-Mail ADDRESS"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    disabled={!isBillingDifferent} // Disable when checkbox is not checked
                />

                <Input
                    label="STREET ADDRESS *"
                    type="text"
                    id="streetaddress"
                    placeholder="Street Address"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    disabled={!isBillingDifferent} // Disable when checkbox is not checked
                />

                <Input
                    label="TOWN / CITY *"
                    type="text"
                    id="city"
                    placeholder="Town / City"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    disabled={!isBillingDifferent} // Disable when checkbox is not checked
                />

                <div className="flex space-x-4">
                    <Input
                        label="STATE"
                        type="text"
                        id="state"
                        placeholder="State"
                        className="border w-[295px] border-gray-300 rounded-md p-2"
                        disabled={!isBillingDifferent} // Disable when checkbox is not checked
                    />
                    <Input
                        label="ZIP CODE"
                        type="text"
                        id="zip-code"
                        placeholder="Zip Code"
                        className="border w-[295px] border-gray-300 rounded-md p-2"
                        disabled={!isBillingDifferent} // Disable when checkbox is not checked
                    />
                 </div>
               </>
              )}
          </form>
      </div>
    );
}
