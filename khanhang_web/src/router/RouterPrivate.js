// import BrandCreate from "../pages/backend/Brand/BrandCreate";
// import BrandList from "../pages/backend/Brand/BrandList";
// import BrandShow from "../pages/backend/Brand/BrandShow";
// import BrandUpdate from "../pages/backend/Brand/BrandUpdate";

// import CategoryCreate from "../pages/backend/Category/CategoryCreate";
// import CategoryList from "../pages/backend/Category/CategoryList";
// import CategoryShow from "../pages/backend/Category/CategoryShow";
// import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";

// import ContactCreate from "../pages/backend/Contact/ContactCreate";
// import ContactList from "../pages/backend/Contact/ContactList";
// import ContactShow from "../pages/backend/Contact/ContactShow";
// import ContactUpdate from "../pages/backend/Contact/ContactUpdate";

// import Dashboard from "../pages/backend/Dashboard";
// import MenuCreate from "../pages/backend/Menu/MenuCreate";
// import MenuList from "../pages/backend/Menu/MenuList";
// import MenuShow from "../pages/backend/Menu/MenuShow";
// import MenuUpdate from "../pages/backend/Menu/MenuUpdate";

// import OrderCreate from "../pages/backend/Order/OrderCreate";

// import OrderList from "../pages/backend/Order/OrderList";

// import OrderdetailShow from "../pages/backend/Orderdetail/OrderdetailShow";

// import OrderShow from "../pages/backend/Order/OrderShow";

// import OrderdetailUpdate from "../pages/backend/Orderdetail/OrderdetailUpdate";

// import OrderUpdate from "../pages/backend/Order/OrderUpdate";

// import OrderdetailCreate from "../pages/backend/Orderdetail/OrderdetailCreate";

// import OrderdetailList from "../pages/backend/Orderdetail/OrderdetailList";

// import PostCreate from "../pages/backend/Post/PostCreate";
// import PostList from "../pages/backend/Post/PostList";
// import PostShow from "../pages/backend/Post/PostShow";
// import PostUpdate from "../pages/backend/Post/PostUpdate";

// import ProductCreate from "../pages/backend/Product/ProductCreate";
// import ProductList from "../pages/backend/Product/ProductList";
// import ProductShow from "../pages/backend/Product/ProductShow";
// import ProductUpdate from "../pages/backend/Product/ProductUpdate";

// import SliderList from "../pages/backend/Slider/SliderList";
// import SliderShow from "../pages/backend/Slider/SliderShow";
// import SliderCreate from "../pages/backend/Slider/SliderCreate";
// import SliderUpdate from "../pages/backend/Slider/SliderUpdate";


// import TopicCreate from "../pages/backend/Topic/TopicCreate";
// import TopicList from "../pages/backend/Topic/TopicList";
// import TopicShow from "../pages/backend/Topic/TopicShow";
// import TopicUpdate from "../pages/backend/Topic/TopicUpdate";

// import UserList from "../pages/backend/User/UserList";
// import UserCreate from "../pages/backend/User/UserCreate";
// import UserUpdate from "../pages/backend/User/UserUpdate";
// import UserShow from "../pages/backend/User/UserShow";



// import PageList from "../pages/backend/PageUs/PageList";
// import PageCreate from "../pages/backend/PageUs/PageCreate";
// import PageUpdate from "../pages/backend/PageUs/PageUpdate";
// import PageShow from "../pages/backend/PageUs/PageShow";
// import InfoList from "../pages/backend/Info/InfoList";
// import InfoCreate from "../pages/backend/Info/InfoCreate";
// import InfoShow from "../pages/backend/Info/InfoShow";
// import InfoUpdate from "../pages/backend/Info/InfoUpdate";
// import CustomerList from "../pages/backend/Customer/CustomerList";
// import CustomerCreate from "../pages/backend/Customer/CustomerCreate";
// import CustomerShow from "../pages/backend/Customer/CustomerShow";
// import CustomerUpdate from "../pages/backend/Customer/CustomerUpdate";
// import ContactReply from "../pages/backend/Contact/ContactReply";



// const RouterPrivate =[
//     {path:'/admin',component:Dashboard},
//     {path:'/admin/brand',component:BrandList},
//     {path:'/admin/brand/create',component:BrandCreate},
//     {path:'/admin/brand/update/:id',component:BrandUpdate},
//     {path:'/admin/brand/show/:id',component:BrandShow},

//     {path:'/admin/category',component:CategoryList},
//     {path:'/admin/category/create',component:CategoryCreate},
//     {path:'/admin/category/update/:id',component:CategoryUpdate},
//     {path:'/admin/category/show/:id',component:CategoryShow},

//     {path:'/admin/product',component:ProductList},
//     {path:'/admin/product/create',component:ProductCreate},
//     {path:'/admin/product/update/:id',component:ProductUpdate},
//     {path:'/admin/product/show/:id',component:ProductShow},

//     {path:'/admin/contact',component:ContactList},
//     {path:'/admin/contact/create',component:ContactCreate},
//     {path:'/admin/contact/update/:id',component:ContactUpdate},
//     {path:'/admin/contact/show/:id',component:ContactShow},
//     {path:'/admin/contact/reply/:id',component:ContactReply},


//     {path:'/admin/menu',component:MenuList},
//     {path:'/admin/menu/create',component:MenuCreate},
//     {path:'/admin/menu/update/:id',component:MenuUpdate},
//     {path:'/admin/menu/show/:id',component:MenuShow},

//     {path:'/admin/order',component:OrderList},
//     {path:'/admin/order/create',component:OrderCreate},
//     {path:'/admin/order/update/:id',component:OrderUpdate},
//     {path:'/admin/order/show/:id',component:OrderShow},

//     {path:'/admin/orderdetail',component:OrderdetailList},
//     {path:'/admin/orderdetail/create',component:OrderdetailCreate},
//     {path:'/admin/orderdetail/update/:id',component:OrderdetailUpdate},
//     {path:'/admin/orderdetail/show/:id',component:OrderdetailShow},

//     {path:'/admin/post',component:PostList},
//     {path:'/admin/post/create',component:PostCreate},
//     {path:'/admin/post/update/:id',component:PostUpdate},
//     {path:'/admin/post/show/:id',component:PostShow},

//     {path:'/admin/page',component:PageList},
//     {path:'/admin/page/create',component:PageCreate},
//     {path:'/admin/page/update/:id',component:PageUpdate},
//     {path:'/admin/page/show/:id',component:PageShow},


//     {path:'/admin/topic',component:TopicList},
//     {path:'/admin/topic/create',component:TopicCreate},
//     {path:'/admin/topic/update/:id',component:TopicUpdate},
//     {path:'/admin/topic/show/:id',component:TopicShow},
 
//     {path:'/admin/slider',component:SliderList},
//     {path:'/admin/slider/create',component:SliderCreate},
//     {path:'/admin/slider/update/:id',component:SliderUpdate},
//     {path:'/admin/slider/show/:id',component:SliderShow},

//     {path:'/admin/user',component:UserList},
//     {path:'/admin/user/create',component:UserCreate},
//     {path:'/admin/user/update/:id',component:UserUpdate},
//     {path:'/admin/user/show/:id',component:UserShow},

//     {path:'/admin/info',component:InfoList},
//     {path:'/admin/info/create',component:InfoCreate},
//     {path:'/admin/info/update/:id',component:InfoUpdate},
//     {path:'/admin/info/show/:id',component:InfoShow},

//     {path:'/admin/customer',component:CustomerList},
//     {path:'/admin/customer/create',component:CustomerCreate},
//     {path:'/admin/customer/update/:id',component:CustomerUpdate},
//     {path:'/admin/customer/show/:id',component:CustomerShow},






// ];
// export default RouterPrivate;