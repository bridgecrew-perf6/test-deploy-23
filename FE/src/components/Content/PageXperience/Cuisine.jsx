import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cuisine.css";

const Cuisine = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const listNews = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000716793078/Brunch%2520and%2520Beverage%2520at%2520East%2520West%2520Brewing%2520Co.-39a95156-2c3f-4074-9ef1-da01ead93e61.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Brunch và đồ uống tại East West Brewing Co.",
      "price": "222.400"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001453380899/Noir.%2520Dining%2520in%2520the%2520Dark%2520Saigon-ebc4f5dd-8cab-4b8c-800c-9a98a0283570.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Noir. Dining in the Dark Sài Gòn",
      "price": "477.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001621918605/Route%252066%2520Cafe%2527%2520Da%2520Lat-94b79f7d-6c58-412c-afc7-53c75400d017.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Route 66 Cafe' Đà Lạt",
      "price":"77.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/dsIfD0QxFcgaDmB6sQchobk5CmBu9PzsWhwFXGFxJ179jzSxIGG5kZNhhHY-p7nw/xxt/experience/image/sailing-club-dining-9-jpg-1080x720-FIT-dfaf781fe887a5695e5cb0089def1465.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Nhà hàng Sailing Club Nha Trang",
      "price":"144.400"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2002043111360/Shri%2520Phu%2520Quoc%2520Restaurant-6eb823ef-2218-405a-8cb0-ea2b8605248c.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Nhà hàng Shri Phú Quốc",
      "price": "158.100"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000333681308/Saigon%2520Princess%2520Dinner%2520Cruise%2520on%2520Saigon%2520River-77832ba2-34b4-4175-b594-5f21f8f0fea2.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Ăn tối và du ngoạn sông Sài Gòn trên tàu Saigon Princess",
      "price":"150.000"
    }
  ];
  const listNewsTransport = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001591261755/Ho%2520Chi%2520Minh%2520City%2520Speedboat%2520Transfer%2520to%2520Vung%2520Tau%2520City-3f0668c7-e33f-488a-8e8a-db9b0ca10871.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé tàu cao tốc GreenlinesDP đi Vũng Tàu từ Sài Gòn"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000220296528/Limousine%2520Bus%2520Transfer%2520from%2520Saigon%2520to%2520Vung%2520Tau%2520-%2520Seat%2520Guaranteed-0d072a33-1253-4bd2-81f4-2823eaeed57c.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé xe Limousine Sài Gòn đi Vũng Tàu - Đảm bảo đặt chỗ"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000220296526/Limousine%2520Bus%2520Round-trip%2520Transfer%2520from%2520Saigon%2520to%2520Vung%2520Tau%2520-%2520Seat%2520Guaranteed-8a5b9fe6-27da-4abf-8058-0fea8cc462bf.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé xe Limousine khứ hồi Sài Gòn - Vũng Tàu - Đảm bảo đặt chỗ "
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001591261749/Vung%2520Tau%2520City%2520Speedboat%2520Transfer%2520to%2520Ho%2520Chi%2520Minh%2520City-edae66df-5d98-4a23-935e-40c71ab88d98.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé tàu cao tốc GreenlinesDP đi Sài Gòn từ Vũng Tàu"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000661009753/Tan%2520Son%2520Nhat%2520International%2520Airport%2520Private%2520Transfer%2520to%2520Districts%2520of%2520Saigon-cbd872f1-c0cf-43c4-96ac-e24999b0774a.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Dịch vụ trung chuyển riêng sân bay quốc tế Tân Sơn Nhất đến các quận tại Sài Gòn"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000661009753/Tan%2520Son%2520Nhat%2520International%2520Airport%2520Private%2520Transfer%2520to%2520Districts%2520of%2520Saigon-cbd872f1-c0cf-43c4-96ac-e24999b0774a.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Dịch vụ trung chuyển riêng các quận tại Sài Gòn đến sân bay quốc tế Tân Sơn Nhất"
    }
  ];
  return (
    <div className="news-location">
      {props.name === "phuong-tien-di-chuyen" ? 
        <Slider {...settings}>
          {listNewsTransport.map( (value, key) => (
            <a href="/detail-tour/ve-dai-quan-sat">
              <div className="content_news1" id="news">
                <img src={value.image} alt="img" />
                <h5>{value.title}</h5>
              </div>
            </a>
          ))}
        </Slider>
      :
        <Slider {...settings}>
          {listNews.map( (value, key) => (
            <a href="/detail-tour/ve-dai-quan-sat">
              <div className="content_cusine" id="news">
                <img src={value.image} alt="img" />
                <h5>{value.title}</h5>
                <span className="price">VND {value.price}</span>
              </div>
            </a>
          ))}
        </Slider>
      }
      
    </div>
  );
};

export default Cuisine;
