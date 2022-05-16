import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Promotion.css";
import Carousel from "../../Carousel";

const Promotion = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const listXperience = [
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/01/07/1641548831443-3637411907a3d8ea669eea81e884f0ff.jpeg?tr=dpr-2,q-75,w-427'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2021/10/18/1634542994677-7559f6eed799ac0abff1e983f4babc51.jpeg?tr=dpr-2,q-75,w-427'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/03/01/1646104698248-59e61b0269e449b25ae7df81a7a79046.png?tr=dpr-2,q-75,w-427'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/03/01/1646104714445-7f10b23714963d2b81c14c5de66e6376.jpeg?tr=dpr-2,q-75,w-427'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/03/24/1648094527422-0e461a93ee78c17fa3ad060d7c6d8183.png?tr=dpr-2,q-75,w-427'
    },
    {
      image: 'https://ik.imagekit.io/tvlk/image/imageResource/2022/03/15/1647327706847-c198eed1bbf8370b9d55850bccdd152d.png?tr=dpr-2,q-75,w-427'
    }
  ];
  return (
    <>
      <div className="xpe" style={{ marginBottom: '20px' }}>
        <Carousel list={listXperience} show={3} />
      </div>
    </>
  );
};

export default Promotion;
