import { FaPhoneSquareAlt, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { Link } from "react-router-dom";
import duahau from"../../../assets/images/duahau.jpg";
import bk1 from"../../../assets/images/bk1.jpg";
import bk2 from"../../../assets/images/bk2.jpeg";

function Contact() {
    
    return ( 
        <section className="Contact">
        <div className="container py-2 text-success ">
            <div className="row">
                <div className ="col-md-6 ">
                    <div className="us">
                        <h5><i>BÁNH KEM THIẾT KẾ</i></h5>
                        <ul className="">
                        <li><Link><FaSearchLocation/></Link> Địa chỉ: 39/20 Đường 10, Phường Tăng Nhơn Phú, TP.Thủ Đức</li>
                        <li><Link><FaPhoneSquareAlt/></Link> SĐT: 0369815742</li>
                        <li><Link><FaVoicemail/></Link> Email: khanhhang@gmail.com</li>
                        </ul>
                    </div>
                    <div className="form text-danger">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i>Họ Tên Khách Hàng</i></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nhập họ tên"/>
                        </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i>Số Điện Thoại</i></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nhập sđt"/>
                        </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"><i>Email address</i></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nhập email"/>
                        </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"><i>Nội dung</i></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        </div>
                </div>

                <div className ="col-md-6 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6717588491038!2d106.7749058739457!3d10.836412058086653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270433ab8aad%3A0xea411369487e8404!2zMzkvMTcgxJDGsOG7nW5nIDEwLCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1684775581962!5m2!1svi!2s"
                 width="600" height="500" style={{marginRight:  'em'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               </div>

        </div>
        </div>
    </section>

     );
}

export default Contact;
