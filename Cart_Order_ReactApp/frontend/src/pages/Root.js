import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import Checkout from '../UI/Checkout';

function RootLayout() {
  const location = useLocation();

  let footerTop;
  switch (location.pathname) {
    case '/':
      footerTop = 3132;
      break;
    case '/profile':
      footerTop = 1180;
      break;
    case '/gallery':
      footerTop = 3236;
      break;
    case '/contact':
      footerTop = 995;
      break;
    case '/shoppingcart':
      footerTop = 1400;
      break;
    case '/checkoutdetails':
      footerTop = 2851;
      break;
    case '/purchase':
        footerTop = 1335;//1135
        break;
    default:
      footerTop = 2543;
  }

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Cart />
      <Checkout />
      <Footer top={footerTop} />
    </>
  );
}

export default RootLayout;