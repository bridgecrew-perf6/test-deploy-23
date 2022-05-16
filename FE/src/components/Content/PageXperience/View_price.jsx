import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cuisine.css";

const View_price = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const listNews = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4884642402026/Manwah%2520Restaurant%2520Chain%2520Vouchers%2520by%2520Giftpop-76a9d59e-eb6b-4ac8-b91b-5c31ddcdbcbf.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher Giftpop sử dụng tại nhà hàng Manwah ",
      "price": "95.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/3941547116401/International%2520Buffet%2520Vouchers%2520at%2520LOTTE%2520Hotel%2520Saigon-48f9da08-d6b4-4062-96d0-b91e9c7b4394.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher buffet quốc tế tại Khách sạn LOTTE Hotel Saigon",
      "price": "296.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001453380899/Noir.%2520Dining%2520in%2520the%2520Dark%2520Saigon-ebc4f5dd-8cab-4b8c-800c-9a98a0283570.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Noir. Dining in the Dark Sài Gòn",
      "price":"477.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/8800312056911/Kichi-Kichi%2520Restaurant%2520Chain%2520Vouchers%2520by%2520Giftpop-bcd60df3-3f89-4fb0-aaa4-ea77f2099f1a.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher Giftpop sử dụng tại chuỗi nhà hàng Kichi-Kichi",
      "price":"95.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/8800312056911/Kichi-Kichi%2520Restaurant%2520Chain%2520Vouchers%2520by%2520Giftpop-bcd60df3-3f89-4fb0-aaa4-ea77f2099f1a.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher Giftpop sử dụng tại chuỗi nhà hàng Gogi House ",
      "price":"95.000"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000716793969/Meal%2520Vouchers%2520at%2520East%2520West%2520Brewing%2520Co.-ccc6d38b-bc82-49bf-a36f-4f4620ad6851.jpeg?_src=imagekit&tr=c-at_max,h-456,q-60,w-256",
      "title":"Voucher bữa ăn tại East West Brewing Co. ",
      "price":"660.000"
    }
  ];
  const listTourism = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1002099418305/Singapore%2520Crazy%2520Rich%2520Asians%2520Sidecar%2520Tour%2520PLUS%2520Mandarin%2520Oriental%2520MOBAR%2520Cocktail%2520Workshop-507c5054-0822-4508-bc5d-c9b64687feba.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Tour tham quan các điểm quay Crazy Rich Asians ở Singapore bằng Sidecar"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001717214853/Professional%2520Photo%2520Shoot%2520in%2520Singapore-23a8e5aa-f02c-4026-a02d-44ac3c02204c.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720",
      "title":"Chụp ảnh với nhiếp ảnh gia chuyên nghiệp ở Singapore"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000097609045/Professional%2520Photo%2520Shoot%2520in%2520Osaka-a12945d5-0527-4852-97d7-e4ecdba8cbc3.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Chụp ảnh với nhiếp ảnh gia chuyên nghiệp tại Osaka"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001722515208/Professional%2520Photo%2520Shoot%2520in%2520Melbourne-e39f5957-0ed9-4c0a-a592-8cb34e902c0f.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Chụp ảnh với nhiếp ảnh gia chuyên nghiệp tại Melbourne"
    }
  ];

  const listPlayground = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000128327332/Fanpekka%2520AEON%2520Mall%2520Jakarta%2520Garden%2520City%2520Tickets-38082346-0d75-4b25-bfdb-16ebe29dd90d.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé Fanpekka AEON Mall Jakarta Garden City",
      "price": "192.216"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001582827570/Bounce%2520Street%2520Asia%2520Trampoline%2520Park%2520Tickets-4b3acbdd-de42-4ff7-86a4-f21229f56721.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé công viên bạt nhún Bounce Street Asia - Easy Access",
      "price":"208.300"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001134912544/Apple%2520Bee%2520Playground%2520Taman%2520Anggrek%2520Tickets-76ffff4b-8c13-45d5-8767-19fc5ced7eb9.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé Apple Bee Playground Taman Anggrek",
      "price":"147.800"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001518454104/kidzooona%2520AEON%2520Mall%2520BSD%2520Tickets-85855ba1-1f85-4658-9c26-138883349b05.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé Kidzooona AEON Mall BSD",
      "price":"96.108"
    }
  ];

  return (
    <div className="news-location">
      {props.name === "tien-ich-du-lich" ? 
        <Slider {...settings}>
          {listTourism.map( (value, key) => (
            <a href="/detail-tour/ve-dai-quan-sat">
              <div className="content_news1" id="news">
                <img src={value.image} alt="img" />
                <h5>{value.title}</h5>
              </div>
            </a>
          ))}
        </Slider>
      : props.name === "san-choi" ? 
        <Slider {...settings}>
          {listPlayground.map( (value, key) => (
            <a href="/detail-tour/ve-dai-quan-sat">
              <div className="content_cusine" id="news">
                <img src={value.image} alt="img" />
                <h5>{value.title}</h5>
                <span className="price">VND {value.price}</span>
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

export default View_price;
