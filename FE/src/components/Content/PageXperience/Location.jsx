import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Location.css";

const Location = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const settingsport = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const listNewsTransport = [
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/21/1574347441154-b8388ffdeec14f5792bdeb2b6f7f9fd0.jpeg?tr=q-75,w-256",
      "title":"Singapore"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574413716564-01c8dfeec141760831e9121ceb2a8760.jpeg?tr=q-75,w-256",
      "title":"Cam"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574413723758-a6868bfac8e75ec1c7f0f22a6f4478e9.jpeg?tr=q-75,w-256",
      "title":"Thái Lan"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574413728082-7cbb49786470bb520181c4322cec2937.jpeg?tr=q-75,w-256",
      "title":"Lao"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574413732138-20600c0e3324efbaf1716d9410a50c27.jpeg?tr=q-75,w-256",
      "title":"Hàn Quốc"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/22/1574413735852-61082b6de9a648f785e7dc70b26c596d.jpeg?tr=q-75,w-256",
      "title":"Đài Loan"
    }
  ];

  const listNewsSport = [
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/25/1574652848433-ca3be7f064202987e5b80128f3d94fec.jpeg?tr=q-75,w-320",
      "title":"Chèo xuồng vượt thác"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/25/1574652854361-0538a84d226f257d35e592f982c6302b.jpeg?tr=q-75,w-320",
      "title":"Bơi lội"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/25/1574652863812-b75d78d22c63544ea188ff53cafd7579.jpeg?tr=q-75,w-320",
      "title":"Trò chơi mạo hiểm"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2019/11/25/1574652872101-9a8cc603a9c8e70f3c49d1b8f41e6804.jpeg?tr=q-75,w-320",
      "title":"Thể thao nước"
    }
  ];
  
  return (
    <div className="news-location">
      {props.name == "phuong-tien-di-chuyen" ?
        <Slider {...settings}>
          {listNewsTransport.map( (value, key) => (
            <a href="/list">
              <div className="content_news_location">
                  {/* <h5>{value.title}</h5> */}
                <img src={value.image} alt="img" />
              </div>
            </a>
          ))}
        </Slider>
      : props.name == "the-thao" ?
        <Slider {...settingsport}>
          {listNewsSport.map( (value, key) => (
            <a href="/list">
              <div className="content_news_location">
                  <h5>{value.title}</h5>
                <img src={value.image} alt="img" />
              </div>
            </a>
          ))}
        </Slider>
      :
        <Slider {...settings}>
          {listNewsTPHCM.map( (value, key) => (
            <a href="/list">
              <div className="content_news_location">
                  <h5>{value.title}</h5>
                <img src={value.image} alt="img" />
              </div>
            </a>
          ))}
        </Slider>
      }
    </div>
  );
};

export default Location;
