function ShoppingCart() {
    return (
        <section class="section-content padding-y">
            <div class="container">

                <div class="row">
                    <main class="col-md-9">
                        <div class="card">

                            <table class="table table-borderless table-shopping-cart">
                                <thead class="text-muted">
                                    <tr class="small text-uppercase">
                                        <th scope="col">Product</th>
                                        <th scope="col" width="120">Quantity</th>
                                        <th scope="col" width="120">Price</th>
                                        <th scope="col" class="text-right" width="200"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/tt1.jpg")} class="img-sm"/></div>
                                                <figcaption class="info">
                                                    {/* <a href="#" class="title text-dark">Some name of item goes here nice</a>
                                                    <p class="text-muted small">Size: XL, Color: blue, <br/> Brand: Gucci</p> */}
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">125.000</var>
                                                <small class="text-muted"> 250.000</small>
                                            </div>
                                             {/* <!-- price-wrap .// --> */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light"> Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/tt1.jpg")} class="img-sm"/></div>
                                                <figcaption class="info">
                                                    <a href="#" class="title text-dark">Product name  goes here nice</a>
                                                    {/* <p class="text-muted small">Size: XL, Color: blue, <br/> Brand: Gucci</p> */}
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">100.000</var>
                                                <small class="text-muted"> 200.000 </small>
                                            </div>
                                             {/* <!-- price-wrap .// --> */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light btn-round"> Remove</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <figure class="itemside">
                                                <div class="aside"><img src={require("../../../assets/images/tt1.jpg")} class="img-sm"/></div>
                                                <figcaption class="info">
                                                    {/* <a href="#" class="title text-dark">Another name of some product goes just here as a demo text </a>
                                                    <p class="small text-muted">Size: XL, Color: blue,  Brand: Tissot</p> */}
                                                </figcaption>
                                            </figure>
                                        </td>
                                        <td>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="price-wrap">
                                                <var class="price">90.000</var>
                                                <small class="text-muted"> 180.000</small>
                                            </div> 
                                            {/* <!-- price-wrap .// --> */}
                                        </td>
                                        <td class="text-right">
                                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip"> <i class="fa fa-heart"></i></a>
                                            <a href="" class="btn btn-light btn-round"> Remove</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="card-body border-top">
                                {/* <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
                                <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a> */}
                            </div>
                        </div>
                        {/* <!-- card.// --> */}

                        <div class="alert alert-success mt-3">
                            <p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                        </div>

                    </main>
                    {/* <!-- col.// --> */}
                    <aside class="col-md-3">
                        <div class="card mb-3">
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label>Have coupon?</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                            <span class="input-group-append">
                                                <button class="btn btn-primary">Apply</button>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                        {/* <!-- card .// --> */}
                        <div class="card">
                            <div class="card-body">
                                <dl class="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd class="text-right">360.000</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd class="text-right">30.000</dd>
                                </dl>
                                <dl class="dlist-align">
                                    <dt>Total:</dt>
                                    <dd class="text-right  h5"><strong>1.000.000</strong></dd>
                                </dl>

                                <p class="text-center mb-3">
                                    <img src="images/misc/payments.png" height="26" />
                                </p>

                            </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                        {/* <!-- card .// --> */}
                    </aside>
                    {/* <!-- col.// --> */}
                </div>

            </div>
            {/* <!-- container .//  --> */}
        </section>


    );
}



export default ShoppingCart;