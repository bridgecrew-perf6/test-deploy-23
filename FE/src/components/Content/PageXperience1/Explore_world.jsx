import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Explore_world.css";

const Explore_world = () => {
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
  return (
    <div className="news-location">
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
    </div>
  );
};

export default Explore_world;
