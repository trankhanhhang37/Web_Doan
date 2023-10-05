import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu">

            <nav class="navbar navbar-main navbar-expand-lg border-bottom">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav4" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav4">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link pl-0" to="/"> <strong>Trang Chủ</strong></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link pl-0" to="/danh-muc-san-pham"> <strong>Danh Mục Sản Phẩm</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-0" to="/khuyen-mai"> <strong>Khuyến Mãi</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-0" to="/lien-he"> <strong>Liên Hệ</strong></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );

}

export default Menu;