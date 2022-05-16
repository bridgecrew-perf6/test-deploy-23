import classes from "./Left.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

const Left = (props) => {
  // const params = useParams();
  // const [tourDetail, setTourDetail] = useState({});

  // useEffect(() => {
  //   axios
  //     .get(`https://622ac4ec14ccb950d224ca1b.mockapi.io/danhmuc/${params.id}`)
  //     .then((res) => setTourDetail(res.data));
  // }, []);
  const { id } = useParams();
  const [singleOderproducttour, setSingleOderproducttour] = useState([]);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  useEffect(() => {
    getData(id);
  }, [id]);
  const booking = useSelector(state => state.tourlist.booking)
  const getData = async (id) => {
    const respone = await axios.get(`/api/products/${id}`).then((res) => {
      setSingleOderproducttour(res.data);
      console.log(res.data);
    });
    console.log("data =>", singleOderproducttour);
  };

  return (
    <div className={classes.left}>
      {singleOderproducttour.map(({ MATOUR,GIATOUR }) => (
        <div>
          <div className={classes.login}>
            <img
              alt="null"
              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6019da794c10a8a7b0357f9ed46f1d6f.png"
            />
            <h2>
              Đăng nhập hoặc đăng ký và tận hưởng ưu đãi dành riêng cho thành viên
            </h2>
            <div className={classes.note}>
              <img
                alt="null"
                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/33fcc4e9daaeafc158c1a2542399ac66.svg"
              />
              <p>Đặt chỗ nhanh và dễ dàng hơn với Passenger Quick Pick</p>
            </div>
            <h1>Đăng nhập hoặc Đăng ký</h1>
          </div>
          <h2>Thông tin liên hệ</h2>
          <div className={classes.thongtin}>
            <div className={classes.fillform}>
              <div className={classes.tieude}>
                <h1>Thông tin liên hệ (nhận vé/phiếu thanh toán</h1>
                <div className={classes.luu}>Lưu</div>
              </div>
              <hr />
              <div className={classes.fillname}>
                <label>Họ tên</label>
                <br />
                <input></input>
                <p>Họ tên là phần bắt buộc</p>
              </div>
              <label>Điện thoại di động</label>
              <div className={classes.sdt}>
                <br />

                <select className={classes.vungmien}>
                  <option>+84</option>
                  <option>+54</option>
                </select>

                <input></input>
              </div>
              <div className={classes.email}>
                <label>Email</label>
                <br />
                <input></input>
              </div>
            </div>
            <div className={classes.chon}>
              <input type="radio" name="KH" value="a" />
              <label for="khtq">Tôi là khách tham quan</label>
              <input type="radio" name="KH" value="a" />
              <label for="khdd">Tôi đặt cho người khác</label>
            </div>
          </div>
          <h2>Thông tin khách</h2>
          <div className={classes.fillform}>
            <div className={classes.tieude}>
              <h1>Người lớn 1</h1>
              <div className={classes.luu}>Lưu</div>
            </div>
            <hr />
            <div className={classes.danhxungs}>
              <label>Danh xưng</label>
              <br />
              <select className={classes.danhxung}>
                <option> </option>
                <option>Ông</option>
                <option>Bà</option>
                <option>Cô</option>
              </select>
            </div>
            <div className={classes.fillname}>
              <label>Họ tên</label>
              <br />
              <input></input>
              <p>Họ tên là phần bắt buộc</p>
            </div>
            <label>Điện thoại di động</label>
            <div className={classes.sdt}>
              <br />

              <select className={classes.vungmien}>
                <option>+84</option>
                <option>+54</option>
              </select>

              <input></input>
            </div>
            <div className={classes.email}>
              <label>Email</label>
              <br />
              <input></input>
            </div>
          </div>
          <br />
          <div className={classes.fillform}>
            <div className={classes.fillother}>
              <label>Yêu cầu thêm (tùy chọn)</label>
              <br />
              <input></input>
              <br />
              <p>
                Định dạng: bằng tiếng Anh hoặc ngôn ngữ địa phương tại điểm đến. Yêu
                cầu tuỳ vào tình hình thực tế của nhà cung cấp.
              </p>
            </div>
          </div>
          <h2>Tóm tắt</h2>
          <div className={classes.fillform}>
            <div className={classes.tongtien} onClick={() => setShow(!show)}>
              <p>Giá bạn phải trả</p>
              <div style={{ display: 'flex', alignItem: 'center' }}>
                <span><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" value={booking.price} /> VND</span>
                {show ? <img style={{transitionDuration: "200ms"}} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8537ce8fe832f4d73d28a686595accec.svg" /> : <img style={{ transform: "rotate(-180deg)", transitionDuration: "200ms", transitionProperty: "-webkit-transform, transform" }} src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8537ce8fe832f4d73d28a686595accec.svg" />}

              </div>
            </div>
            {show && <>
              <hr />
              <div className={classes.chitiettongtien}>
                <div className={classes.chitietnguoi}>
                  <p>Người lớn ({booking.soluongnguoilon}x)</p>
                  <p><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" value={booking.soluongnguoilon * GIATOUR} /> VND</p>
                </div>
                <div className={classes.chitietnguoi}>
                  <p>Trẻ em ({booking.soluongtreem}x)</p>
                  <p><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" value={booking.soluongtreem * (GIATOUR-100000)} /> VND</p>
                </div>
              </div>
            </>}

            <hr />
            <div className={classes.dangnhap}>
              <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f245b20632471f7eb7b4098501bed573.svg" />
              <p> Đăng nhập hoặc Đăng ký để tích ngay điểm thưởng! Bạn có thể tiếp tục
                đặt chỗ sau vì tiến trình đã được lưu trên hệ thống.
              </p>
              <br />
              <a href="">Đăng nhập</a>
            </div>
          </div>
          <button className={classes.tieptuc} onClick={() => navigate("/payment/" + MATOUR)}>Tiếp tục</button>
        </div>
      ))}
    </div>
  );
};

export default Left;
