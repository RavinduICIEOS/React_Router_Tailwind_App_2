import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";
import Input from "./Input";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

   // Using finalTotal from CartContext instead of recalculating
   const finalTotal = cartCtx.finalTotal;  // Use finalTotal instead of recalculating

    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig);

   /* const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );*/

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
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
            <Button type="submit" textOnly>Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span className="text-gray-600">Sending order data...</span>;
        console.log('orderrsss ');

    }

    if(error){
        actions = <span className="text-gray-600">Sending order data errrror...</span>;       
         console.log('orderrsss error ');

    }

    if (data && !error) {
        return (
            <Modal 
                open={userProgressCtx.progress === 'checkout'} 
                onClose={handleFinish}
                className=" bg-amber-200 p-6 rounded-lg shadow-lg max-w-md mx-auto text-center"
            >
                <h2 className="text-3xl font-extrabold text-green-600 mb-4">Order Confirmed!</h2>
                <p className="text-lg  text-gray-900 mb-4">Your order was submitted successfully. We will get back to you with more details via email shortly.</p>
                <div className="modal-actions flex justify-center mt-6">
                    <Button 
                    textOnly
                        className="px-6 py-2"
                        onClick={handleFinish}
                    >
                        Okay
                    </Button>
                </div>
            </Modal>
        );
    }
    
    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit} className="space-y-6 p-6  bg-amber-200 text-black font-semibold font-['Josefin_Sans']">
                <h2 className="text-2xl font-bold mb-4">Checkout Details</h2>
                <p className="text-lg font-medium">
                    Total Amount: <span className="font-semibold">{currencyFormatter.format(finalTotal)}</span>
                </p>

                <Input
                    label="FIRST NAME"
                    type="text"
                    id="name"
                    className="block w-full border border-gray-300 rounded-md p-2"
                />
                <Input
                    label="LAST NAME"
                    type="text"
                    id="lname"
                    className="block w-full border border-gray-300 rounded-md p-2"
                />
                <Input
                    label="Phone Number"
                    type="text"
                    id="street"
                    className="block w-full border border-gray-300 rounded-md p-2"
                />
                 <Input
                    label="E-Mail Address"
                    type="email"
                    id="email"
                    className="block w-full border border-gray-300 rounded-md p-2"
                />
                <div className="flex space-x-4">
                    <Input
                        label="Postal Code"
                        type="text"
                        id="postal-code"
                        className="w-1/2 border border-gray-300 rounded-md p-2"
                    />
                    <Input
                        label="City"
                        type="text"
                        id="city"
                        className="w-1/2 border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div className="modal-actions flex justify-end mt-6 space-x-4">
                    {actions}
                </div>
            </form>
        </Modal>
    );
}