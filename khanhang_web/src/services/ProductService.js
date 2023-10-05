import httpAxios from "../httpAxios";

function get_ProductNew(limit)
{
    return httpAxios.get(`product/product_new/${limit}`);

}

function get_ProductSale(roles)
{
    return httpAxios.get(`product/product_sale/${roles}`);


}


function getProductBySlug(slug){
    return httpAxios.get(`product/product_detail/${slug}`);
}

// function getProductByMetakey(metakey)
// {
//     return httpAxios.get(`product/getByMetakey/${metakey}`);

// }
// function get_byPage(page,limit)
// {
//     return httpAxios.get(`product/get_byPage/${page}/${limit}`);

// }


// function getProductByCategoryId(limit,category_id)
// {
//     return httpAxios.get(`product/product_category/${limit}/${category_id}`);
// }

// function getProductByBrandId(limit,brand_id)
// {
//     return httpAxios.get(`product/product_brand/${limit}/${brand_id}`);
// }

function getProductAll(limit){ 
    return httpAxios.get(`product/product_all/${limit}`);
}

// function getProductHome(limit,category_id=0){ 
//     return httpAxios.get(`product/product_home/${limit}/${category_id}`);
// }




// function getAll()
// {
//     return httpAxios.get('product/index');
// }
// function getById(id) {

//     return httpAxios.get(`product/show/${id}`);

// }
// function create(product) {
//     return httpAxios.post('product/store',product);

// }
// function update(product,id) {

//     return httpAxios.post(`product/update/${id}`,product);

// }
// function remove(id) {
//     return httpAxios.delete(`product/destroy/${id}`);

// }
const productservice={
    get_ProductNew:get_ProductNew,
    get_ProductSale:get_ProductSale,
    getProductBySlug:getProductBySlug,
    getProductAll:getProductAll,

    // getAll:getAll,
    // getById:getById,
    // create:create,
    // update:update,
    // remove:remove,
    // getProductHome:getProductHome,
    // getProductBySlug:getProductBySlug,
    // getProductByCategoryId:getProductByCategoryId,
    // getProductByBrandId:getProductByBrandId,
    // getProductByMetakey:getProductByMetakey,
    // get_byPage:get_byPage,
}
export default productservice;



