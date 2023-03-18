import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import HomePage from './pages/HomePage';

const App = function () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/album',
      element: <AlbumPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
