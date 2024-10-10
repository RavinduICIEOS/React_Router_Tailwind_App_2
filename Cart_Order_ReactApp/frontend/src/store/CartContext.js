import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearItem: (id) => {},
    clearCart: () => {},

    couponDiscount: (discount, couponCode) => {}, // Add setCoupon to the context

  
});

function cartReducer(state, action){

    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems =[...state.items];

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem ={
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex]= updatedItem;

        }else{
            updatedItems.push({...action.item , quantity: 1 });
        }

        return{...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM'){
     
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        }else{
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity-1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return{...state, items: updatedItems};
        }


        if (action.type === 'CLEAR_ITEM') {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            ); 
            const updatedItems = [...state.items];
            // Check if the item exists in the cart
            if (existingCartItemIndex > -1) {     
                updatedItems.splice(existingCartItemIndex, 1); // Remove the item from the array
            }  
            return { ...state, items: updatedItems }; // Return the updated state with the item removed
        }
        
        
        if(action.type === 'CLEAR_CART'){
            return{...state, items: []};
        }


   // Handle applying the coupon discount
   if (action.type === 'SET_COUPON_DISCOUNT') {
    return { ...state, couponDiscount: action.discount };  // Store the discount in state
}

        return state;
    }

export function CartContextProvider({ children }) {
    const [cart , dispatchCartAction] = useReducer(cartReducer, {items: [], shippingCost: 0, couponDiscount: 0 });

/* export function CartContextProvider({ children }){
    const [cart , dispatchCartAction] = useReducer(cartReducer,{items: [] });*/

    // Include a function to set shipping costs
    function setShippingCost(cost) {
        dispatchCartAction({ type: 'SET_SHIPPING_COST', cost });
    }

    // Include a function to set coupon discount
    function couponDiscount(discount) {
        dispatchCartAction({ type: 'SET_COUPON_DISCOUNT', discount });
    }
    function addItem(item){
        dispatchCartAction({type:'ADD_ITEM', item});
    }

    function removeItem(id){
        dispatchCartAction({type:'REMOVE_ITEM', id});
    }
    
    function clearItem(id, quantity) {
        dispatchCartAction({ type: 'CLEAR_ITEM', id, quantity });  // Pass quantity to remove
    }

    function clearCart(){
        dispatchCartAction({type:'CLEAR_CART' });
    }

     // Calculate cart total
     const cartTotal = cart.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    // Example: Including shipping and discount calculations
   // const finalTotal = cartTotal + cart.shippingCost - cart.couponDiscount;

    const cartContext ={
        items: cart.items,
        cartTotal,  // Add cart total here
        finalTotal: cartTotal + cart.shippingCost - cart.couponDiscount,
        addItem,
        removeItem,
        clearItem,
        clearCart,
        setShippingCost,  // Add the function to context
        couponDiscount,  // Use setCoupon instead of setCouponDiscount
    };

    console.log(cartContext);

    return (
        <CartContext.Provider value={cartContext} >{children}</CartContext.Provider>
    );
}

export default CartContext;
