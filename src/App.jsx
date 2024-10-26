import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Home.jsx';
import LoginPage from './pages/login/index.jsx';
import RegisterPage from './pages/register/index.jsx';
import HomePage from './pages/home/index.jsx';
import ProfilePage from './pages/profile/index.jsx';

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
