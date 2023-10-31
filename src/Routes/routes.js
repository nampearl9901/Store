import DetailPage from "Pages/DetailPage/DetailPage";
import HomePage from "Pages/HomePage/HomePage";
import LoginPage from "Pages/LoginPage";
import Register from "Pages/Register";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/detail/:id",
    component: <DetailPage />,
  },
];
