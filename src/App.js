import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CollectionList, {
  loader as collectionLoader,
} from './components/Collections/CollectionList';
import LikesList from './components/Likes/LikesList';
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
      path: '/album/:albumId',
      element: <AlbumPage />,
    },
    {
      path: '/collections',
      element: <CollectionPage />,
      children: [
        {
          index: true,
          element: <CollectionList />,
        },
        {
          path: 'likes',
          element: <LikesList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
