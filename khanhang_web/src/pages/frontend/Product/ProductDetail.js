import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import { urlImage } from "../../../config";

function ProductDetail() {
    const {slug} =useParams();
    const [product,setProduct] =useState([]);
    const [product_other,setProductOther] =useState([]);

    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if(result.data.success === true){
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other);

                }

            });
        })();
    }, [slug]);


    return (

        // <section class="section-content bg-white padding-y">
        <div class="container">

            {/* <!-- ============================ ITEM DETAIL ======================== --> */}
            <div class="row">
                <aside class="col-md-6">
                    <div class="card">
                        <article class="gallery-wrap">
                            <div class="img-big-wrap">
                                <div> <a href="#"><img src={urlImage+"product/"+product.image}/></a></div>
                            </div>
                            {/* <!-- slider-product.// --> */}
                            {/* <div class="thumbs-wrap">
                                <a href="#" class="item-thumb"> <img src={require("../../../assets/images/tt2.jpg")}/></a>
                                <a href="#" class="item-thumb"> <img src={require("../../../assets/images/tt1.jpg")}/></a>
                                <a href="#" class="item-thumb"> <img src={require("../../../assets/images/tt1.jpg")}/></a>
                                <a href="#" class="item-thumb"> <img src={require("../../../assets/images/tt1.jpg")}/></a>
                            </div> */}
                            {/* <!-- slider-nav.// --> */}
                        </article>
                        {/* <!-- gallery-wrap .end// --> */}
                    </div>
                    {/* <!-- card.// --> */}
                </aside>
                <main class="col-md-6">
                    <article class="product-info-aside">

                        <h2 class="title mt-3">{product.name} </h2>

                        <div class="rating-wrap my-3">
                            <ul class="rating-stars">
                                <li style={{ width: "80%" }} class="stars-active">
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                                <li>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </li>
                            </ul>
                            {/* <small class="label-rating text-muted">132 reviews</small>
                            <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small> */}
                        </div>
                        {/* <!-- rating-wrap.// --> */}

                        <div class="mb-3">
                            <var class="price h4">{product.price}</var>
                            {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                        </div>
                        {/* <!-- price-detail-wrap .// --> */}

                        {/* <p>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat </p> */}


                        <dl class="row">
                            {/* <dt class="col-sm-3">Manufacturer</dt>
                            <dd class="col-sm-9"><a href="#">Great textile Ltd.</a></dd> */}

                            {/* <dt class="col-sm-3">Article number</dt>
                            <dd class="col-sm-9">596 065</dd> */}

                            {/* <dt class="col-sm-3">Guarantee</dt>
                            <dd class="col-sm-9">2 year</dd> */}

                            <dt class="col-sm-3">Thời gian nhận hàng</dt>
                            <dd class="col-sm-9">3-4 days</dd>

                            <dt class="col-sm-3">Availabilty</dt>
                            <dd class="col-sm-9">Còn Hàng</dd>
                        </dl>

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
                                <a href="#" class="btn btn-light">
                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                </a>
                            </div>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}

                    </article>
                    {/* <!-- product-info-aside .// --> */}
                </main>
                {/* <!-- col.// --> */}
            </div>
            {/* <!-- row.// --> */}

            {/* <!-- ================ ITEM DETAIL END .// ================= --> */}


        </div>
        // </section>

    );
}



export default ProductDetail;

