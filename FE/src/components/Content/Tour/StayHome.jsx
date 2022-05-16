import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StayHome.css";

const StayHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const listNewsTPHCM = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000639648830/Vincom%2520Center%2520Landmark%252081%2520SkyView%2520Observation%2520Deck%2520Tickets-fe56f3ec-1f71-4e0c-b270-e85f11210688.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720",
      "title":"Vé đài quan sát SkyView tại Vincom Center",
      "price": "150.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000038451947/Saigon%2520Waterbus%2520Tickets-d6e1c308-cadb-4347-a6a9-9a86345aecd4.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Vé Saigon Waterbus",
      "price": "15.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Ăn tối trên sông Sài Gòn-Tỉu đêm",
      "price": "500.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/5552324518261/SUP%2520Training%2520Course%2520and%2520SUP%2520Activities%2520in%2520Saigon%2520-8efa8478-a588-4a49-8abe-58848f05dd99.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Khóa học chèo SUP và các hoạt động chèo SUP liên quan",
      "price": "450.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000716793078/Brunch%2520and%2520Beverage%2520at%2520East%2520West%2520Brewing%2520Co.-39a95156-2c3f-4074-9ef1-da01ead93e61.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Brunch và đò uống tại East West Brewing Co.",
      "price": "220.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000716793969/Meal%2520Vouchers%2520at%2520East%2520West%2520Brewing%2520Co.-ccc6d38b-bc82-49bf-a36f-4f4620ad6851.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher bữa ăn tại East West Brewing Co.",
      "price": "600.000"
    }
  ];
  return (
    <div>
      <div className="btn-location-x1">
        <button className="active">TP.HCM</button>
        <button>Hà Nội</button>
        <button>Đà Lạt</button>
        <button>Ninh Bình</button>
        <button>Vũng Tàu</button>
      </div>
      <Slider {...settings}>
        {listNewsTPHCM.map( (value, key) => (
          <a href="/detail-tour/ve-dai-quan-sat">
            <div className="content_news">
              <img src={value.image} alt="img" />
              <h5>{value.title}</h5>
              <h6>VND {value.price}</h6>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default StayHome;
