import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const listNewsTPHCM = [
    {
      "image": "https://login.medlatec.vn//ImagePath/images/20211021/20211021_xet-nghiem-covid-la-nhu-the-nao-1.jpg",
      "title":"[Chỉ ở TP. HCM] Dịch vụ giao tận nhà kit test xét nghiệm Covid-19"
    },
    {
      "image": "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/12/5/xet-nghiem-xac-dinh-covid-19-16386758216311728013898.png",
      "title":"Xét nghiệm Covid-19 DIAG"
    },
    {
      "image": "https://admin.medinet.gov.vn/UploadImages/soytehcm/2021_11/01/sk-1_101120217.jpg",
      "title":"[TEST TẠI NHÀ] Xét nghiệm covid-19 tại nhà"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wSeq1bQlIUFb1OX4HvWn3xxMHabjJJTZEA&usqp=CAU",
      "title":"Xét nghiệm COVID tại phòng khám Đa Khoa Quốc tế"
    },
    {
      "image": "https://hcdc.vn/public/img/02bf8460bf0d6384849ca010eda38cf8e9dbc4c7/images/mod1/images/tphcm-thuc-hien-lay-mau-xet-nghiem-covid19-tren-dien-rong/images/2102130907%20(1).jpg",
      "title":"Xét nghiệm COVID-19 tại Pathlab"
    },
    {
      "image": "https://login.medlatec.vn//ImagePath/images/20211021/20211021_xet-nghiem-covid-la-nhu-the-nao-1.jpg",
      "title":"Xét nghiệm COVID tại phòng khám Vigor Health"
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
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default News;
