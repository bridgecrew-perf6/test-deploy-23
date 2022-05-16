import React, { memo } from "react";

import './style.css'

import Carousel from '../Carousel'

const Xperience = () => {


    const listDiscover = [
        {
            image: require('../../assets/Xperience/1.jpeg').default,
            href: "/diem-tham-quan"
        },
        {
            image: require('../../assets/Xperience/2.jpeg').default,
            href: "/tour"
        },
        {
            image: require('../../assets/Xperience/3.jpeg').default,
            href: "/phuong-tien-di-chuyen"
        },
        {
            image: require('../../assets/Xperience/4.jpeg').default,
            href: "/tien-ich-du-lich"
        },
        {
            image: require('../../assets/Xperience/5.jpeg').default,
            href: "/giai-tri"
        },
        {
            image: require('../../assets/Xperience/6.jpeg').default,
            href: "/lam-dep-spa"
        },
        {
            image: require('../../assets/Xperience/7.jpeg').default,
            href: "/the-thao"
        },
        {
            image: require('../../assets/Xperience/8.jpeg').default,
            href: "/san-choi"
        }
    ];

    const listTestCovid = [
        {
            image: require('../../assets/Xperience/covid-1.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">[CHỈ Ở TPHCM] Dịch vụ giao tận nhà kit test...</p>
                    <p className="xpe-title-covid-services-price">VND 120.000</p>
                </>
            )
        },
        {
            image: require('../../assets/Xperience/covid-2.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">Xét nghiệm COVID-19 DIAG </p>
                    <p className="xpe-title-covid-services-price">VND 135.000</p>
                </>
            )
        },
        {
            image: require('../../assets/Xperience/covid-3.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">[TEST TẠI NHÀ] Xét nghiệm COVID-19 ...</p>
                    <p className="xpe-title-covid-services-price">VND 600.000</p>
                </>
            )
        },
        {
            image: require('../../assets/Xperience/covid-4.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">Xét nghiệm COVID-19 tại Pathlab Xét Nghiệm ...</p>
                    <p className="xpe-title-covid-services-price">VND 149.000</p>
                </>
            )
        },
        {
            image: require('../../assets/Xperience/covid-5.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">Xét nghiệm COVID-19 tại Phòng khám Vigor ...</p>
                    <p className="xpe-title-covid-services-price">VND 260.000</p>
                </>
            )
        },
        {
            image: require('../../assets/Xperience/covid-6.webp').default,
            child: (
                <>
                    <p className="xpe-title-covid-services">Xét nghiệm COVID-19 tại Phòng khám Đa ...</p>
                    <p className="xpe-title-covid-services-price">VND 150.000</p>
                </>
            )
        }
    ]

    const listTravel = [
        {
            image: require('../../assets/Xperience/travel-1.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-2.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-3.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-4.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-5.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-6.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-7.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-8.jpeg').default
        },
        {
            image: require('../../assets/Xperience/travel-9.jpeg').default
        }
    ];

    const listTravelWorld = [
        {
            image: require('../../assets/Xperience/global-1.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-2.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-3.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-4.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-5.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-6.jpeg').default
        },
        {
            image: require('../../assets/Xperience/global-7.jpeg').default
        }
    ];

    const listExp = [
        {
            image: require('../../assets/Xperience/exp-1.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-2.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-3.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-4.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-5.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-6.webp').default
        },
        {
            image: require('../../assets/Xperience/exp-7.webp').default
        }
    ];

    return (
        <>
            <div className="xpe-input-search">
                <input className="xpe-input" type="text" placeholder="Tìm hoạt động hoặc điểm đến" />
                <img className="xpe-icon-search" src={require('../../assets/search/search-icon.svg').default} alt="" />
            </div>
            <div className="xpe-wraper">
                <a href="#" className="xpe-near-time">
                    <div className="xpe-near">
                        <span className="_xpe-near-time">
                            <img src={require(`../../assets/Xperience/location.svg`).default} alt="" />
                            Xem những gì đang xảy ra gần Việt Nam!
                            <img src={require(`../../assets/Xperience/arrow-right.svg`).default} alt="" />
                        </span>
                    </div>
                </a>
                <div className="xpe-discover">
                    <div className="xpe-title">Khám phá các danh mục Xperience</div>
                    <div className="xpe-des">Xem thật kỹ các hoạt động và trải nghiệm độc đáo nhé</div>
                    <Carousel list={listDiscover} />
                </div>
                <div className="xpe-discover">
                    <div className="xpe-title">Dịch vụ xét nghiệm Covid-19</div>
                    <div className="xpe-des">Đặt ngay mức giá ưu đãi nhất trên Xperience</div>
                    <div className="xpe-service">
                        <button className="xpe-btn-services active">TP.HCM</button>
                        <button className="xpe-btn-services">Hà Nội</button>
                        <button className="xpe-btn-services">TP.khác</button>
                    </div>
                    <Carousel list={listTestCovid} />
                </div>
                <div className="xpe-discover">
                    <div className="xpe-title">Điểm đến địa phương</div>
                    <div className="xpe-des">Bạn đã sẵn sàng khám phá những địa điểm tốt nhất cùng chúng tôi?</div>
                    <Carousel list={listTravel} />
                    <a href="#" className="xpe-travel-vn">Khám phá Việt Nam&nbsp;&gt;</a>
                </div>
                <div className="xpe-discover">
                    <div className="xpe-title">Bạn muốn đi đâu tiếp theo?</div>
                    <div className="xpe-des">Dọn đường” cho những chuyến phiêu lưu hấp dẫn</div>
                    <Carousel list={listTravelWorld} />
                    <a href="#" className="xpe-travel-vn">Khám phá thế giới&nbsp;&gt;</a>
                </div>
                <div className="xpe-discover">
                    <div className="xpe-title">Những hoạt động Xperience tốt nhất</div>
                    <div className="xpe-des">Những hoạt động phổ biến nhất được đặt bởi các du khách và chuyên gia khám phá</div>
                    <Carousel list={listExp}/>
                </div>
                <div className="exp-bottom">
                    <p>Cần thêm cảm hứng cho chuyến đi sắp tới? Khám phá ngay những đề xuất dành riêng cho bạn!</p>
                    <div>
                        <button>Đi thôi!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Xperience)
