import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Explore_world.css";

const Explore_world = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const listNewsTPHCM = [
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000767877110/Marina%2520Bay%2520Sands%2520SkyPark%2520Observation%2520Deck-3d2339b6-c66c-48fc-ad6e-cbe9cb986b47.png?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Vé Marina Bay Sands"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001335874435/Private%2520Tour%2520with%2520a%2520Professional%2520Photographer%2520in%2520Singapore-91560f8a-1771-4bb1-9d47-fa022ead6135.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Tour riêng tham quan Singgapore cùng với nhiếp ảnh gia chuyên nghiệp"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001086258347/Singapore%2520DUCKtours-e542d38f-969b-4c8e-8b4a-748947003495.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Tour tham quan Singgapore trên du thuyền DUCKtours"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1000798145340/Cable%2520Car%2520Sky%2520Dining-8e633f9d-511b-4d48-9212-3bebd929f1d0.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Ăn tối trên cáp treo"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1002099418305/Singapore%2520Crazy%2520Rich%2520Asians%2520Sidecar%2520Tour%2520PLUS%2520Mandarin%2520Oriental%2520MOBAR%2520Cocktail%2520Workshop-507c5054-0822-4508-bc5d-c9b64687feba.jpeg?_src=imagekit&tr=c-at_max,h-569,q-60,w-320",
      "title":"Tour tham quan các điểm quay Crazy Rich Asians ở Singapore bằng Sidecar"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/1001717214853/Professional%2520Photo%2520Shoot%2520in%2520Singapore-23a8e5aa-f02c-4026-a02d-44ac3c02204c.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720",
      "title":"Chụp ảnh với nhiếp ảnh gia chuyên nghiệp ở Singapore"
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
          {listNewsTPHCM.map( (value, key) => (
            <a href="/detail-tour/ve-dai-quan-sat">
              <div className="content_news1" id="news">
                <img src={value.image} alt="img" />
                <h5>{value.title}</h5>
              </div>
            </a>
          ))}
        </Slider>
      }
      
    </div>
  );
};

export default Explore_world;
