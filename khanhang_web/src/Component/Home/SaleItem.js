import React from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../config";


function SaleItem(props) {


    return (
        <div class="col-md-3">
        <figure class="card card-product-grid">
            <div class="img-wrap">
                <span class="badge badge-danger"> Sale </span>
                <img src={urlImage + "product/" + props.product.image} />
            </div>
            <figcaption class="info-wrap">
                <a href="#" class="title mb-2">{props.product.name}</a>
                <div class="price-wrap">
                    <span class="price">{props.product.price}</span>
                    <small class="text-muted">/bánh</small>
                    <hr/>

                    <span class="price text-danger">{props.product.pricesale}</span>
                    <small class="text-muted">/bánh</small>
                </div>

                {/* <label class="custom-control mb-3 custom-checkbox">
                    <input type="checkbox" class="custom-control-input" />
                    <div class="custom-control-label">Add Cart
                    </div>
                </label> */}

                <div class="form-row  mt-4">
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


                <Link to={"/chi-tiet-san-pham/"+props.product.slug} className="btn btn-primary">Chi Tiet </Link>

            </figcaption>
        </figure>
    </div>

    );
}
export default SaleItem;
