import { NavLink } from 'react-router-dom';
import logoImg from '../assets/Logow.png';
import media from '../assets/Group 1823w.png';

function Footer({top}) {
  return (
    <footer className={"bg-[#00474A] text-white py-5 absolute flex flex-col w-[1600px] h-[186px]"} style={{ top: `${top}px` }}>
      <img src={logoImg} alt="A restaurant" className="absolute top-20 left-36 w-24 h-auto" />
      <img src={media} alt="A restaurant" className="absolute top-20 right-36 w-30 h-auto left-[1310px]" />

      <nav>
        <ul className="list-none flex  mb-4 text-base relative top-16 left-[582px]  ">
          <li className="mx-5 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'text-white'
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
                isActive ? 'text-yellow-400' : 'text-white'
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
                isActive ? 'text-yellow-400' : 'text-white'
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
                isActive ? 'text-yellow-400' : 'text-white'
              }
              end
            >
              Gallery
            </NavLink>
          </li>
          <li className="mx-5 ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400' : 'text-white'
              }
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
