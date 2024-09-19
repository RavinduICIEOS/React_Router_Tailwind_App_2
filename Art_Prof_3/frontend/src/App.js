import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Merchandise from './pages/Merchandise';
import RootLayout from './pages/Root';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'merchandise',
        element: <Merchandise />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;