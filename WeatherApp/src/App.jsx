import { useState } from 'react';
import Search from './partials/Search';
import Profile from './partials/Profile';
import About from './partials/About';
import Nav from './partials/Nav';
import NotFound from './partials/NotFound';
import Back from './partials/Back';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

// Layout component
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Back />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Profile /> },
      { path: '/about', element: <About /> },
      { path: '/search', element: <Search /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
