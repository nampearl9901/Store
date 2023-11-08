import AdminPage from "../Admin/AdminPage";
import Communication from "../Pages/CommunicationPage/Communication";
import Contactpage from "../Pages/ContactPage/Contactpage";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProductPage from "../Pages/ProductPage/ProductPage";
import CartPage from "../Pages/ProductPage/ShoppingcartPage/CartPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/RegisterPage";



export const routes = [
  {
    path: "/",
    component: <HomePage/>,
  },
  {
    path: "/home",
    component: <HomePage/>,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/register",
    component: <RegisterPage />,
  },
  {
    path: "/product",
    component: <ProductPage />,
  },
  {
    path: "/detail/:id",
    component: <DetailPage />,
  },
  {
    path: "/contact",
    component: <Contactpage />,
  },
  {
    path: "/communication",
    component: <Communication />,
  },
  {
    path: "/profile",
    component: <ProfilePage />,
  },
  {
    path: "/cart",
    component: <CartPage/>,
  },
  {
    path: "/Admin",
    component: <AdminPage/>,
  },
 
 
];
