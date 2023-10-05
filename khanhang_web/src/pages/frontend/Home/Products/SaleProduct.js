import React, { useEffect, useState } from "react";
import productservice from "../../../../services/ProductService";
import ProductItem from "../../../../Component/Home/ProductItem";
import { useParams } from "react-router-dom";
import SaleItem from "../../../../Component/Home/SaleItem";

function SaleProduct() {
    const [productSale, setProductSale] = useState([]);

    useEffect(function () {
        (async function () {

            await productservice.get_ProductSale('sale').then(function (result) {
                setProductSale(result.data.sale_product);

            });
        })();
    }, []);


    return (


        <div className="product-new">
            <h3 className="text-center">Sale Products</h3>

            <div class="row">
                {productSale.map(function (item, index) {
                    return <SaleItem key={index} product={item} />;
                })}
            </div>


        </div>



    );
}
export default SaleProduct;
