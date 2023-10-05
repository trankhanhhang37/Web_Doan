// import { Next } from "react-bootstrap/esm/PageItem";

import ShoppingCart from "../pages/frontend/Cart";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import CategoryHome from "../pages/frontend/Home/CategoryHome";
import SaleProduct from "../pages/frontend/Home/Products/SaleProduct";
import Login from "../pages/frontend/Login";
import Product from "../pages/frontend/Product";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import SignUp from "../pages/frontend/SignUp";


const RouterPublic =[
    {path:'/',component:Home},
    {path:'/lien-he',component:Contact},
    {path:'/dang-nhap',component:Login},
    {path:'/san-pham',component:Product}, 
    {path:'/dang-ki',component:SignUp},
    {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    // {path:'/danh-muc-san-pham/:slug',component:CategoryHome},

    {path:'/gio-hang',component:ShoppingCart},
    {path:'/khuyen-mai',component:SaleProduct},


    
    







];
export default RouterPublic; 