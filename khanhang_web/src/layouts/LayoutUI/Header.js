import { Link } from "react-router-dom";
import "./HeaderStyle.css";

function Header() {
    return (
        <header class="section-header">
            <section class="header-main border-bottom">
                <div class="container">
                    <div class="row row-sm align-items-center">
                        {/* <div class="col-sm-1">
                            <nav class="navbar navbar-main navbar-expand-lg border-bottom">
                                <div class="container">

                                </div>
                            </nav>
                        </div> */}

                        <div class="col-lg-2 col-6 ">
                            <img src={require("../../assets/images/Logo1.jpg")} style={{ width: '100px', height: '80px' }} className="img-fluid1" />   <Link to="/" className="brand-wrap"></Link>
                            <Link />
                        </div>

                        <div class="col-lg col-sm col-md col-6 flex-grow-0">
                            <div class="category-wrap dropdown d-inline-block float-md-right">
                                <div class="dropdown-menu">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/"> <strong>Trang Chủ</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- category-wrap.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg  col-md-6 col">
                            <form action="#" class="search-header">
                                <div class="input-group w-100">
                                    <input type="text" class="form-control" placeholder="Search" />

                                    <div class="input-group-append">
                                        <button class="btn btn-gre" style={{ width: '60px' }} type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- search-wrap .end// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-3 col-sm-12 col-md-12 col-12">
                            <div class="widgets-wrap float-md-right">
                                <Link to="/gio-hang" class="widget-header mr-2">
                                    <i class="icon icon-sm rounded-circle  fa fa-shopping-cart"></i>
                                    <span class="notify">2</span>
                                </Link>
                                <a href="#" class="widget-header mr-2">
                                    <i class="icon icon-sm rounded-circle fa fa-heart"></i>
                                </a>
                                <div class="widget-header dropdown">
                                    <a href="#" data-toggle="dropdown" data-offset="20,10">
                                        <div class="icontext">
                                            <div class="icon">
                                                <i class="icon-sm rounded-circle fa fa-user"></i>
                                            </div>
                                            <div class="text">
                                                <small class="text-muted">Signup| Login</small>
                                                <div>Tài khoản <i class="fa fa-caret-down"></i> </div>
                                            </div>
                                        </div>
                                    </a>

                                    {/* <div class="dropdown-menu dropdown-menu-right">
                                        <form class="px-4 py-3">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="email@example.com" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Sign in</button>
                                        </form>
                                        <hr class="dropdown-divider" />
                                        <a class="dropdown-item" href="#">Have account? Sign up</a>
                                        <a class="dropdown-item" href="#">Forgot password?</a>
                                    </div> */}

                                    {/* <!--  dropdown-menu .// --> */}
                                </div>

                                {/* <!-- widget-header .// --> */}
                            </div>
                            {/* <!-- widgets-wrap.// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                    </div>
                    {/* <!-- row.// --> */}
                </div>
                {/* <!-- container.// --> */}
            </section>
            {/* <!-- header-main .// --> */}


            {/* <!-- navbar main end.// --> */}
            {/* <!-- section-header.// --> */}
        </header>


    );

}

export default Header;