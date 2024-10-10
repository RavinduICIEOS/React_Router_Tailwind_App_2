import { NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/Logob.png';
import media from '../assets/Group 1823b.png';
//import Button from '../UI/Button';
import { useContext, useState } from 'react';
import CartContext from '../store/CartContext';
//import UserProgressContext from '../store/UserProgressContext';
import { IoCartOutline } from "react-icons/io5";

function MainNavigation() {

    const [showCheckoutDetails, setShowCheckoutDetails] = useState(false); // State to toggle checkout visibility

  const location = useLocation();

  //const location = useLocation();
  const cartCtx = useContext(CartContext);
 // const userProgressCtx = useContext(UserProgressContext);


  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
      return totalNumberOfItems+ item.quantity;
  }, 0);

 /* function handleShowCart(){
    console.log('Cart Button Clicked');
      userProgressCtx.showCart();
  }*/

  //console.log('Current Progress:', userProgressCtx.progress); // Check current progress

  return (
    <header className=" p-4 relative w-[1300px] h-9 top-[65px] font-josefin">
      <img
        src={logoImg}
        alt="A restaurant"
        className="absolute left-[150px] w-[93px] h-auto "
      />
      <img
        src={media}
        alt="A restaurant"
        className="absolute left-[1310px] w-[140px] h-9"
      />
     
      <nav>
        <ul className="flex absolute left-[582px] text-base ">
          <li className="mx-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4]' : 'text-primary-400'
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/merchandise"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4]' : 'text-primary-400'
              }
              end
            >
              Merchandise
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4]' : 'text-primary-400'
              }
              end
            >
              Profile
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4]' : 'text-primary-400'
              }
              end
            >
              Gallery
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4]' : 'text-primary-400'
              }
              end
            >
              Contact
            </NavLink>
          </li>
          <li className="mx-5">
            <NavLink
              to="/shoppingcart"
              className={({ isActive }) =>
                isActive ? 'text-[#01ADB4] ' : 'text-primary-400'
              }
              end
            >
              <IoCartOutline className="w-10 h-10 absolute top-[-6px] " />
              {/* Show the total number of items in the cart */}
                {totalCartItems > 0 && (
                  <span className="absolute top-[-8px] left-[532px]  bg-[#FF453A] text-white h-5 w-5 rounded-full flex items-center justify-center text-xs">
                      {totalCartItems}
                  </span>
                )}
            </NavLink>
          </li>
         
          {showCheckoutDetails && ( // Conditionally render "Checkout Details"
            <li className="mx-5">
              <NavLink
                to="/checkoutdetails"
                className={({ isActive }) =>
                  isActive ? 'text-[#01ADB4]' : 'text-primary-400'
                }
                end
              >
                Checkout Details
              </NavLink>
            </li>
          )}
           {showCheckoutDetails && ( // Conditionally render "Checkout Details"
            <li className="mx-5">
              <NavLink
                to="/Purchase"
                className={({ isActive }) =>
                  isActive ? 'text-[#01ADB4]' : 'text-primary-400'
                }
                end
              >
                Purchase
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;