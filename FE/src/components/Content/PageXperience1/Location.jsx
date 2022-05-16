import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Location.css";

const Location = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const listNewsTPHCM = [
    {
      "image": "https://liengtam.com/wp-content/uploads/2021/08/3-thanh-pho-ho-chi-minh-ngay-nay.jpg",
      "title":"Sài Gòn"
    },
    {
      "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/61/e5.jpg",
      "title":"Nha Trang"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1549877055589-1500x1125-FIT_AND_TRIM-d64887b59ca65db37bef37d629e6d80d.jpeg?_src=imagekit&tr=c-at_max,h-400,q-40,w-1280",
      "title":"Phú Quốc"
    },
    {
      "image": "http://wiki-travel.com.vn/Uploads/picture/Viet_Dung-185625015619-Lao%20Cai.jpg",
      "title":"Tỉnh Lào Cai"
    },
    {
      "image": "https://i-dulich.vnecdn.net/2020/07/01/shutterstock-1169930359-4299-1593590420.jpg",
      "title":"Đà Nẵng"
    },
    {
      "image": "https://quangcao.thanhnien.vn/HN_thanhphotoiyeu/img/cover.png",
      "title":"Hà Nội"
    }
  ];
  return (
    <div className="news-location">
      <Slider {...settings}>
        {listNewsTPHCM.map( (value, key) => (
          <a href="/detail-tour/ve-dai-quan-sat">
            <div className="content_news_location">
                <h5>{value.title}</h5>
              <img src={value.image} alt="img" />
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Location;
