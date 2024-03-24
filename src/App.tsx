import './App.css';
import Homepage from "./views/app/home/HomepageView";
import Login from "./views/app/login/LoginView";
import Register from "./views/app/register/RegisterView";
import Championships from "./views/app/championships/ChampionshipsView";
import { createBrowserRouter, RouterProvider }
from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/connexion",
        element: <Login />,
    },
    {
        path: "/inscription",
        element: <Register />,
    },
    {
      path: "/championnats",
      element: <Championships />,
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
