import CategoryHome from "./CategoryHome";
import PostHome from "./PostHome";
import ProductHome from "./Products/ProductHome";
import SliderShow from "./SliderShow";

function Home() {
//     const [categories, setCategories] = useState([]);
//     useEffect(function () {
//         (async function () {
//             await categoryservice.getCategoryByParentId(0)
//             .then(function (result) {
//                 setCategories(result.data.categories);

//             });
//         })();
//     }, []);
// // 
    return (
        <section className="container"> 
        <div className="home-slide-cat">

            <CategoryHome/>
             <SliderShow/>
             <PostHome/>
        </div>

            <ProductHome/>

        </section>
    );
}



export default Home;