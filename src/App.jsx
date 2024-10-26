import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import HomePage from './pages/home.jsx';
import ProfilePage from './pages/profile.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", //Rute Utama
      element: <Home />,
      children: [
        {
          path: "home",
          element: <HomePage />
        },
        {
          path: "profile",
          element: <ProfilePage />    
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
  ]);

  return <RouterProvider router={router} />
}

export default App;
