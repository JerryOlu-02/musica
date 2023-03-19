import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import CollectionPage from './pages/CollectionPage';
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
    {
      path: '/collections',
      element: <CollectionPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
