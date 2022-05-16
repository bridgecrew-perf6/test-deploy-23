import React, { memo } from "react";

import './style.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ list, show }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: show ? show : 5,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="carousel-wraper">
                <Slider {...settings}>
                    {list.map((value, key) => (
                        <a href={value.href ? value.href : '#'}>
                            <div className="content_news_location">
                                <img src={value.image} alt="img" />
                                {
                                    value.child
                                }
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default memo(Carousel)