import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Auth from './Auth.jsx';
import Home from './Home.jsx';
import LoginPage from './pages/login/index.jsx';
import RegisterPage from './pages/register/index.jsx';
import HomePage from './pages/home/index.jsx';
import ProfilePage from './pages/profile/index.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/", //Rute Utama
      element: <Auth />,
      children: [
        {
          index: true,
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        }
      ]
    },
    {
      path: "/home/",
      element: <Home/>,
      children: [
        {
          index: true,
          element: <HomePage />

        },
        {
          path: "profile",
          element: <ProfilePage/>
        }
      ]
    } 
  ]);

  return <RouterProvider router={router} />
}

export default App;
