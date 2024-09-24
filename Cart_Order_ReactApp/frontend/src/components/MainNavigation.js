import { NavLink, useLocation } from 'react-router-dom';
import logoImg from '../assets/Logob.png';
import media from '../assets/Group 1823b.png';
import Button from '../UI/Button';
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { IoCartOutline } from "react-icons/io5";

function MainNavigation() {

  const location = useLocation();
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);


  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
      return totalNumberOfItems+ item.quantity;
  }, 0);

  function handleShowCart(){
    console.log('Cart Button Clicked');
      userProgressCtx.showCart();
  }

  console.log('Current Progress:', userProgressCtx.progress); // Check current progress

  return (
    <header className=" p-4 relative w-[1300px] h-9 top-[65px]">
      <img
        src={logoImg}
        alt="A restaurant"
        className="absolute  left-[150px] w-[93px] h-auto "
      />
      <img
        src={media}
        alt="A restaurant"
        className="absolute left-[1310px] w-[140px] h-9"
      />

        {/* Show the Cart button only on the merchandise page */}
      {location.pathname === '/merchandise' && (
        <Button textOnly onClick={handleShowCart} className='absolute w-16 h-16 top-[1px] left-[1100px] bg-gradient-to-r '>
           <IoCartOutline className="text-6xl absolute top-[8px] left-[3px] "/> 
           <span className="absolute top-[0px] left-[24px]  text-[#2c2ab1]  h-1 w-1  ">
        ({totalCartItems})
           </span>
        </Button>
      )}
     
      <nav>
        <ul className="flex  absolute left-[582px] text-base ">
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;