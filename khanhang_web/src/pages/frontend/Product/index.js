import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../services/ProductService";

function Product() {
    const [product_all, getProductAll] = useState([]);

    useEffect(function () {
        (async function () {

            await productservice.get_ProductSale('sale').then(function (result) {
                getProductAll(result.data.products);

            });
        })();
    }, []);


    return (
        <section className="product-home">
            <div className="container">
                <div class="sidebar  has-scrollbar" data-mobile-menu>

                    <div class="sidebar">

                        <div class="sidebar-top">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </button>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><a href="#" class="list-group-item list-group-item-action">200.000 - 400.000</a></li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">And a fifth one</li>
                                </ul>                    </div>
                        </div>


                    </div>


                    <div class="">
                        <p class="d-inline-flex gap-2">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Mức Giá
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="list-group 1">
                                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                    Dưới 200.000
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">200.000 - 400.000</a>
                                <a href="#" class="list-group-item list-group-item-action">400.000 - 600.000</a>
                                <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="col-md-9 col-xl-9 col-lg-9">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">Sắp Xếp Theo: </div>
                            <div class="col-md-10">
                                <ul class="list-inline">
                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <a href="#" class="">Khuyến mãi</a>

                                        </div>
                                    </li>

                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <a href="#" class="">Giá giảm dần</a>

                                        </div>
                                    </li>

                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <a href="#" class="">Giá tăng dần</a>

                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}
                    </div>
                    <header class="mb-3">
                        <div class="form-inline">
                            {/* <strong class="mr-md-auto">32 Items found </strong> */}
                            <select class="mr-2 form-control">
                                <option>Latest items</option>
                                <option>Trending</option>
                                <option>Most Popular</option>
                                <option>Cheapest</option>
                            </select>
                            <div class="btn-group">
                                <a href="page-listing-grid.html" class="btn btn-light active" data-toggle="tooltip" title="List view">
                                    <i class="fa fa-bars"></i></a>
                                <a href="page-listing-large.html" class="btn btn-light" data-toggle="tooltip" title="Grid view">
                                    <i class="fa fa-th"></i></a>
                            </div>
                        </div>
                    </header>

                    <div className="product-new">
                        <h3 className="text-center">New Products</h3>
                        <div class="row">
                            <div class="col-md-3">
                                <figure class="card card-product-grid">
                                    <div class="img-wrap">
                                        <span class="badge badge-danger"> NEW </span>
                                        <img src={require("../../../assets/images/bk1.jpg")} />
                                    </div>
                                    <figcaption class="info-wrap">
                                        <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                        <div class="price-wrap">
                                            <span class="price">255.000</span>
                                            <small class="text-muted">/bánh</small>
                                        </div>

                                        {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                        <div class="form-row  mt-4">
                                            <div class="form-group col-md flex-grow-0">
                                                <div class="input-group mb-3 input-spinner">
                                                    <div class="input-group-prepend">
                                                        <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                    </div>
                                                    <input type="text" class="form-control" value="1" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- col.// --> */}
                                            <div class="form-group col-md">
                                                <a href="#" class="btn  btn-primary">
                                                    <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                </a>
                                                {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                            </div>
                                            {/* <!-- col.// --> */}
                                        </div>


                                        <a href="#" className="btn btn-primary">  Details </a>

                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-3">
                                <figure class="card card-product-grid">
                                    <div class="img-wrap">
                                        <span class="badge badge-danger"> NEW </span>
                                        <img src={require("../../../assets/images/bk1.jpg")} />
                                    </div>
                                    <figcaption class="info-wrap">
                                        <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                        <div class="price-wrap">
                                            <span class="price">255.000</span>
                                            <small class="text-muted">/bánh</small>
                                        </div>

                                        {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                        <div class="form-row  mt-4">
                                            <div class="form-group col-md flex-grow-0">
                                                <div class="input-group mb-3 input-spinner">
                                                    <div class="input-group-prepend">
                                                        <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                    </div>
                                                    <input type="text" class="form-control" value="1" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- col.// --> */}
                                            <div class="form-group col-md">
                                                <a href="#" class="btn  btn-primary">
                                                    <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                </a>
                                                {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                            </div>
                                            {/* <!-- col.// --> */}
                                        </div>


                                        <a href="#" className="btn btn-primary">  Details </a>

                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-3">
                                <figure class="card card-product-grid">
                                    <div class="img-wrap">
                                        <span class="badge badge-danger"> NEW </span>
                                        <img src={require("../../../assets/images/bk1.jpg")} />
                                    </div>
                                    <figcaption class="info-wrap">
                                        <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                        <div class="price-wrap">
                                            <span class="price">255.000</span>
                                            <small class="text-muted">/bánh</small>
                                        </div>

                                        {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                        <div class="form-row  mt-4">
                                            <div class="form-group col-md flex-grow-0">
                                                <div class="input-group mb-3 input-spinner">
                                                    <div class="input-group-prepend">
                                                        <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                    </div>
                                                    <input type="text" class="form-control" value="1" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- col.// --> */}
                                            <div class="form-group col-md">
                                                <a href="#" class="btn  btn-primary">
                                                    <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                </a>
                                                {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                            </div>
                                            {/* <!-- col.// --> */}
                                        </div>


                                        <a href="#" className="btn btn-primary">  Details </a>

                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-3">
                                <figure class="card card-product-grid">
                                    <div class="img-wrap">
                                        <span class="badge badge-danger"> NEW </span>
                                        <img src={require("../../../assets/images/bk1.jpg")} />
                                    </div>
                                    <figcaption class="info-wrap">
                                        <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                        <div class="price-wrap">
                                            <span class="price">255.000</span>
                                            <small class="text-muted">/bánh</small>
                                        </div>

                                        {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                        <div class="form-row  mt-4">
                                            <div class="form-group col-md flex-grow-0">
                                                <div class="input-group mb-3 input-spinner">
                                                    <div class="input-group-prepend">
                                                        <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                    </div>
                                                    <input type="text" class="form-control" value="1" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- col.// --> */}
                                            <div class="form-group col-md">
                                                <a href="#" class="btn  btn-primary">
                                                    <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                </a>
                                                {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                            </div>
                                            {/* <!-- col.// --> */}
                                        </div>


                                        <a href="#" className="btn btn-primary">  Details </a>

                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>


                    {/* <!-- card-body .// --> */}
                </div>

                {/* <!-- sect-heading --> */}


                <div className="card-body">
                    <div className="product col-md-9 col-xl-9 col-lg-9">

                        <div className="product-new">
                            <h3 className="text-center">New Products</h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src={require("../../../assets/images/bk1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                            <div class="form-row  mt-4">
                                                <div class="form-group col-md flex-grow-0">
                                                    <div class="input-group mb-3 input-spinner">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                        </div>
                                                        <input type="text" class="form-control" value="1" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- col.// --> */}
                                                <div class="form-group col-md">
                                                    <a href="#" class="btn  btn-primary">
                                                        <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                    </a>
                                                    {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                                </div>
                                                {/* <!-- col.// --> */}
                                            </div>


                                            <a href="#" className="btn btn-primary">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src={require("../../../assets/images/bk1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                            <div class="form-row  mt-4">
                                                <div class="form-group col-md flex-grow-0">
                                                    <div class="input-group mb-3 input-spinner">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                        </div>
                                                        <input type="text" class="form-control" value="1" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- col.// --> */}
                                                <div class="form-group col-md">
                                                    <a href="#" class="btn  btn-primary">
                                                        <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                    </a>
                                                    {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                                </div>
                                                {/* <!-- col.// --> */}
                                            </div>


                                            <a href="#" className="btn btn-primary">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src={require("../../../assets/images/bk1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                            <div class="form-row  mt-4">
                                                <div class="form-group col-md flex-grow-0">
                                                    <div class="input-group mb-3 input-spinner">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                        </div>
                                                        <input type="text" class="form-control" value="1" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- col.// --> */}
                                                <div class="form-group col-md">
                                                    <a href="#" class="btn  btn-primary">
                                                        <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                    </a>
                                                    {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                                </div>
                                                {/* <!-- col.// --> */}
                                            </div>


                                            <a href="#" className="btn btn-primary">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> NEW </span>
                                            <img src={require("../../../assets/images/bk1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            {/* <label class="custom-control mb-3 custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Add Cart
                                            </div>
                                        </label> */}

                                            <div class="form-row  mt-4">
                                                <div class="form-group col-md flex-grow-0">
                                                    <div class="input-group mb-3 input-spinner">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                        </div>
                                                        <input type="text" class="form-control" value="1" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-light" type="button" id="button-minus"> &minus; </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- col.// --> */}
                                                <div class="form-group col-md">
                                                    <a href="#" class="btn  btn-primary">
                                                        <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                                    </a>
                                                    {/* <a href="#" class="btn btn-light">
                                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                                </a> */}
                                                </div>
                                                {/* <!-- col.// --> */}
                                            </div>


                                            <a href="#" className="btn btn-primary">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="product-bestseller">
                            <h3 className="text-center">Best Sellers Products</h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Best Sellers </span>
                                            <img src={require("../../../assets/images/duahau.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Best Sellers </span>
                                            <img src={require("../../../assets/images/duahau.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Best Sellers </span>
                                            <img src={require("../../../assets/images/duahau.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Best Sellers </span>
                                            <img src={require("../../../assets/images/duahau.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Kem Mật Ong</a>
                                            <div class="price-wrap">
                                                <span class="price">255.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>







                            </div>
                        </div>

                        <div className="product-bestseller">
                            <h3 className="text-center">Moon Cake</h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt2.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt3.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt4.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>







                            </div>
                        </div>

                        <div className="product-bestseller">
                            <h3 className="text-center">Moon Cake</h3>
                            <div class="row">
                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt1.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt2.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>

                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt3.jpg")} />
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>

                                <div class="col-md-3">
                                    <figure class="card card-product-grid">
                                        <div class="img-wrap">
                                            <span class="badge badge-danger"> Moon Cake </span>
                                            <img src={require("../../../assets/images/tt4.jpg")} />
                                        </div>
                                        {/* <!-- img-wrap.// --> */}
                                        <figcaption class="info-wrap">
                                            <a href="#" class="title mb-2">Bánh Trung Thu Vị Dừa</a>
                                            <div class="price-wrap">
                                                <span class="price">80.000</span>
                                                <small class="text-muted">/bánh</small>
                                            </div>
                                            <label class="custom-control mb-3 custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" />
                                                <div class="custom-control-label">Add Cart
                                                </div>
                                            </label>

                                            <a href="#" className="btn btn-primary ">  Details </a>

                                        </figcaption>
                                    </figure>
                                </div>







                            </div>
                        </div>



                    </div>


                    <div className="w3-padding w3-display-bottommiddle" >
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>



    );
}



export default Product;