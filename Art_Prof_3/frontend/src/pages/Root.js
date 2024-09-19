import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

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
    default:
      footerTop = 2543;
  }

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer top={footerTop} />
    </>
  );
}

export default RootLayout;