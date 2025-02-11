import { useState } from 'react';
import Search from './partials/Search';
import Profile from './partials/Profile';
import About from './partials/About';
import NotFound from './partials/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Profile /> },
  { path: '/about', element: <About /> },
  { path: '/search', element: <Search /> },
  { path: '*', element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
