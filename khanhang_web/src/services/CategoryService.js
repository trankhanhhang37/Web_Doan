import httpAxios from "../httpAxios";


function getCategoryByParentId(parent_id){
    return httpAxios.get(`category/category_list/${parent_id}`); 
}
function getAll()
{
    return httpAxios.get('category/index');
}
function getById(id) {
    return httpAxios.get(`category/show/${id}`);


}
function create(category) {

    return httpAxios.post('category/store',category);
}
function update(category,id) {

    return httpAxios.post(`category/update/${id}`,category);

}
function getBySlug(slug){
    return httpAxios.get(`category/show/${slug}`); 
}

function remove(id) {
    return httpAxios.delete(`category/destroy/${id}`);}
const categoryservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove,
    getCategoryByParentId:getCategoryByParentId,
    getBySlug:getBySlug,

}
export default categoryservice;



