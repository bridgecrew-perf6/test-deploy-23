import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const CarouselView = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  const listXperience = [
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801591751-1be71252c00b5739c7d13529cbf0704d.png?tr=q-75,w-183",
      "title":"Điểm tham quan",
      "url": "/diem-tham-quan"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801701552-766586d356118dfde22b0232c896f8cc.png?tr=q-75,w-183",
      "title":"Tour",
      "url": "/tour"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801641399-5ce3a1f8fe7066bfde543ef02f666175.png?tr=q-75,w-183",
      "title":"Phương tiện di chuyển",
      "url": "/phuong-tien-di-chuyen"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801755585-e91557d0e233fdfb2ea9c840247ca5ce.png?tr=q-75,w-183",
      "title":"Ẩm thực",
      "url": "/am-thuc"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801766575-1b75e3b3f930112a71b3f56990950fec.png?tr=q-75,w-183",
      "title":"Tiện ích du lịch",
      "url": "/tien-ich-du-lich"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801665068-0b30ac83d5ffffb79ca3143e670f0d19.png?tr=q-75,w-183",
      "title":"Giải trí",
      "url": "/giai-tri"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801772573-596448b7711bef831cd6b9af3b8f7042.png?tr=q-75,w-183",
      "title":"Làm đẹp & Spa",
      "url": "/lam-dep-spa"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801676145-3d3b0b7529cb4954cbbffae5cda209ce.png?tr=q-75,w-183",
      "title":"Thể thao",
      "url": "/the-thao"
    },
    {
      "image": "https://ik.imagekit.io/tvlk/image/imageResource/2022/01/10/1641801786286-ab248fcdf0eccad028c0606e8b88ebba.png?tr=q-75,w-183",
      "title":"Sân chơi",
      "url": "/san-choi"
    }
  ];
  return (
    <Slider {...settings} style={{with: "150px"}}>
      {listXperience.map( (value, key) => (
        <div className="content">
          <div className="Xperience">
            <a href={value.url}>
              <div className="Xperience-image">
                <img src={value.image} alt="img" />
              </div>
              {/* <h5>{value.title}</h5> */}
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselView;
