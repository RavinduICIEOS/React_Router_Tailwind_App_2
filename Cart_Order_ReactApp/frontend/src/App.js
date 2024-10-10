import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Merchandise from './pages/Merchandise';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

import { UserProgressContextProvider } from './store/UserProgressContext';
import { CartContextProvider } from './store/CartContext';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutDetails from './pages/CheckoutDetails';
import Purchase from './pages/Purchase';
import Terms from './pages/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'merchandise',
        element: <Merchandise />
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'shoppingcart',
        element: <ShoppingCart />,
      },
      {
        path: 'checkoutdetails',
        element: <CheckoutDetails />,
      },
      {
        path: 'purchase',
        element: <Purchase />,
      },
      {
        path: 'terms-and-conditions', // Add this new route
        element: <Terms />, // Link it to the Terms component
      },
    ],
  },
]);

function App() {
  return (
  <UserProgressContextProvider>
  <CartContextProvider>
      <RouterProvider router={router} />
  </CartContextProvider>
</UserProgressContextProvider>
  );
}

export default App;