import React, { useEffect, useState } from "react";
import productservice from "../../../../services/ProductService";
import ProductItem from "../../../../Component/Home/ProductItem";

function NewProduct() {
    const [productsNew, setProuctsNew] = useState([]);

    useEffect(function () {
        (async function () {

            await productservice.get_ProductNew(4).then(function (result) {
                setProuctsNew(result.data.new_product);


            });
        })();
    }, []);


    return (


        <div className="product-new">
            <h3 className="text-center">New Products</h3>

            <div class="row">
                {productsNew.map(function (item, index) {
                    return <ProductItem key={index} product={item} />;
                })}


            </div>
        </div>



    );
}
export default NewProduct;
