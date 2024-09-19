import { NavLink } from 'react-router-dom';
import logoImg from '../assets/Logob.png';
import media from '../assets/Group 1823b.png';

function MainNavigation() {
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
