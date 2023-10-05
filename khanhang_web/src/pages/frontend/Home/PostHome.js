import React from "react";

function PostHome() {

    // const [sliders, setSliders] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await sliderservice.getSlider_byPosition('main').then(function (result) {
    //             setSliders(result.data.sliders)
    //         });
    //     })();
    // }, []);

    return (
        <div class="col-md d-none d-lg-block flex-grow-1">
		<aside class="special-home-right">
			<h6 class=" text-center text-dark mb-0 p-2">Bài Đăng Mới</h6>
			
			<div class="card-banner ">
			  <div class="py-3" style={{width:'80'}}>
			    <h6 class="card-title">Ưu Đãi Lễ Hội Trung Thu</h6>
			    <a href="#" class="btn btn-sm btn-light"> Xem bài viết </a>
			  </div> 
			  <img  src={require("../../../assets/images/tt5.jpg")} style={{height:'80px'}} class="img-bg"/>
			</div>

			<div class="card-banner ">
			  <div class="py-3" style={{width:'80'}}>
			    <h6 class="card-title">Bánh Kem Sinh Nhật</h6>
			    <a href="#" class="btn btn-sm btn-light"> Xem bài viết </a>
			  </div> 
			  <img src={require("../../../assets/images/duahau.jpg")}  style={{height:'80px'}} class="img-bg"/>
			</div>

			<div class="card-banner">
			  <div class="py-3" style={{width:'80'}}>
			    <h6 class="card-title">Ưu Đãi Khách Hàng</h6>
			    <a href="#" class="btn  btn-sm btn-light"> Xem bài viết </a>
			  </div> 
			  <img src={require("../../../assets/images/bk3.jpg")}  style={{height:'80px'}} class="img-bg"/>
			</div>

		</aside>
        {/* <!-- col.// --> */}
	</div> 
);
}
export default PostHome;
