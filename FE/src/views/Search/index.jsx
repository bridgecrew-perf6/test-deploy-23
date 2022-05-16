import React, { memo } from 'react'
import InputSearch from '../../components/Search/Input'

// Data
import './style.css'

// Component
import Filter from '../../components/Search/Filter'

const Search = (props) => {

    const dataprice = [
        {
            "price": "0 - 4.000.000",
        },
        {
            "price": "4.000.000 - 8.000.000"
        },
        {
            "price": "8.000.000+",
        }
    ];
    const datarate = [
        {
            "rate": "Phổ biến nhất"
        },
        {
            "rate": "Yêu thích nhất"
        },
        {
            "rate": "Liên quan nhất"
        }
    ];
    const dataTour = [
        {
            "image": "https://ipfs.infura.io/ipfs/QmWxutmWK3ejaTnXBqVLDumPRd5s2eMF5fzGT19jxsVj4U",
            "title": "Sun World Ba Na Hills tại Đà Nẵng",
            "location": "Hoa Vang District, Hoa Vang District",
            "vote": "8.6/10",
            "all_vote": "1095 đánh giá",
            "fee": "600.000",
            "discount_fee": "590.000"
        },
        {
            "image": "https://ipfs.infura.io/ipfs/QmNhzM4JJdA9DmU22yDu5L9F1asZGiRbqvk6MGci59MU4F",
            "title": "Tour khám phá Đà Nẵng về đêm - Nửa ngày",
            "location": "Hoa Ninh Commune, Hoa Vang District",
            "vote": "8.6/10",
            "all_vote": "1095 đánh giá",
            "fee": "587.000",
            "discount_fee": "405.000"
        }
    ];
    const dataFilterhtdd = [
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001485577723/Three%2520Islands%2520Excursion%2520and%2520Hon%2520Thom%2520Cable%2520Car%2520in%2520Phu%2520Quoc%2520-%2520Day%2520Tour-630cf8b0-c922-44a6-b8b1-95af8ae01114.jpeg?_src=imagekit&tr=c-at_max,h-200,q-60,w-300",
            "title": "Tour khám phá 3 đảo, trải nghiệm cáp treo Hòn Thơm và công viên nước Aquatopia ở Phú Quốc - 1 ngày",
            "location": "Duong Dong TownShip, Phu Quoc",
            "vote": "7.8/10",
            "all_vote": "5 đánh giá",
            "fee": "550.000",
            "discount_fee": "390.000"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001020533470/Datanla%2520New%2520Alpine%2520Coaster%2520in%2520Da%2520Lat-eed185bf-3652-4903-9f03-7f7d5c1628f4.jpeg?_src=imagekit&tr=c-at_max,h-200,q-60,w-300",
            "title": "Xe trượt New Alpine Coaster Datanla tại Đà Lạt",
            "location": "Ward 3, Da Lat",
            "vote": "8.9/10",
            "all_vote": "39 đánh giá",
            "fee": "100.000",
            "discount_fee": "84.350"
        }
    ]
    const dataFiltertnm = [
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/5552324518261/SUP%2520Training%2520Course%2520and%2520SUP%2520Activities%2520in%2520Saigon%2520-8efa8478-a588-4a49-8abe-58848f05dd99.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-200,q-60,w-300",
            "title": "Khóa học chèo SUP và Các hoạt động chèo SUP tại Sài Gòn",
            "location": "Duong Dong TownShip, Phu Quoc",
            "vote": "7.8/10",
            "all_vote": "5 đánh giá",
            "fee": "405.000",
            "discount_fee": "310.000"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/4061709291911/Private%2520Transfer%2520to%252Ffrom%2520Cam%2520Ranh%2520International%2520Airport%2520-09e41bc2-b810-434a-95a8-17b695611ef9.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-200,q-60,w-300",
            "title": 'Đặt xe riêng đưa/đón Sân bay Quốc tế Cam Ranh ',
            "location": "Ward 3, Da Lat",
            "vote": "8.9/10",
            "all_vote": "39 đánh giá",
            "fee": "390.000",
            "discount_fee": "84.350"
        }
    ]
    const dataFilterdldd = [
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001357730605/%255BSALE%252035%2525%255D%25203D%2520Art%2520In%2520Paradise%2520Da%2520Nang%2520Tickets-cd0bb1c5-9d73-4e85-a529-6d5b61f4bac5.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-200,q-60,w-300",
            "title": "Du ngoạn sông Hàn về đêm trên du thuyền Mỹ Xuân",
            "location": "Duong Dong TownShip, Phu Quoc",
            "vote": "7.8/10",
            "all_vote": "5 đánh giá",
            "fee": "77.800",
            "discount_fee": "70.000"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001540807078/Han%2520River%2520by%2520Night%2520on%2520My%2520Xuan%2520Cruise-06485c60-a512-4228-b985-1b283b92771a.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-200,q-60,w-300",
            "title": "Xe trượt New Alpine Coaster Datanla tại Đà Lạt",
            "location": "Ward 3, Da Lat",
            "vote": "8.9/10",
            "all_vote": "39 đánh giá",
            "fee": "100.000",
            "discount_fee": "84.350"
        }
    ]
    const [statusfilter, setstatusfilter] = React.useState(0);
    const eventFilter = (value) => {
        setstatusfilter(value);
    }
    const [KeyFilter, setKeyFilter] = React.useState("Đà Nẵng");
    const [data, setData] = React.useState(dataFilterhtdd)
    const changKeyFilter = (value) => {
        setKeyFilter(value);
        if (value === 'Trải nghiệm mới') {
            setData(dataFiltertnm);
        } else if (value === 'Hoàn tiền dễ dàng') {
            setData(dataFilterhtdd);
        } else {
            setData(dataFilterdldd);
        }
    }
    return (
        <>
            <div className="search">
                <div className="search-wrap">
                    <InputSearch status="1" />
                    <div className="search-main">
                        <div className="search-breadcumb">
                            <a href="Xperience">Xperience</a>&nbsp;/&nbsp;<a href="/search/Đà-Nẵng">{KeyFilter}</a>
                        </div>
                        <div className="search-result-for">Tất cả kết quả cho {KeyFilter}</div>
                        <div className="search-content">
                            <div className="search-filter">
                                <Filter changefilter={eventFilter} keyfilter={changKeyFilter} />
                            </div>
                            <div className="search-container">
                                <div className="search-filter-top">
                                    <select className="search-range-price" id="price">
                                        {dataprice.map(val => (
                                            <option value="volvo">VND {val.price}</option>
                                        ))}
                                    </select>
                                    <div className="search-range-order">
                                        Xếp theo:
                                        <select className="search-range-same" id="rate">
                                            {datarate.map(val => (
                                                <option value={val.rate}>{val.rate}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {statusfilter == 1 ? (
                                    <>
                                        {
                                            data.map(val => (
                                                <a href="/detail-tour/view" className='search-result-link'>
                                                    <div className="search-result">
                                                        <div className="search-image">
                                                            <span className='search-medal'>{KeyFilter}</span>
                                                            <img src={val.image} alt="" className="__search-image" />
                                                        </div>
                                                        <div className="search-result-detail">
                                                            <div className="search-result-save">
                                                                <img src={require('../../assets/search/save.svg').default} alt="save" />
                                                            </div>
                                                            <div className="search-result-title">
                                                                {val.title}
                                                            </div>
                                                            <div className="search-result-localtion">
                                                                <img className="search-icon-text" src={require('../../assets/search/location.svg').default} alt="location" />
                                                                {val.location}
                                                            </div>
                                                            {val.vote !== "" ? (
                                                                <div className="search-result-vote">
                                                                    <img className="search-icon-text" src={require('../../assets/search/bird.svg').default} alt="traveloka" />
                                                                    <span>{val.vote}</span>&nbsp;({val.all_vote})
                                                                </div>
                                                            ) : ""}
                                                            <div className="search-result-price">
                                                                <div className="search-result-price-old">{val.fee}  VND</div>
                                                                {val.discount_fee !== "" ?
                                                                    <div className="search-result-price-now">{val.discount_fee
                                                                    }  VND</div>
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                    </>
                                ) : (
                                    <>
                                        {
                                            dataTour.map(val => (
                                                <a href="/detail-tour/view" className='search-result-link'>
                                                    <div className="search-result">
                                                        <div className="search-image">
                                                            <span className='search-medal'>Hoàn tiền dễ dàng</span>
                                                            <img src={val.image} alt="" className="__search-image" />
                                                        </div>
                                                        <div className="search-result-detail">
                                                            <div className="search-result-save">
                                                                <img src={require('../../assets/search/save.svg').default} alt="save" />
                                                            </div>
                                                            <div className="search-result-title">
                                                                {val.title}
                                                            </div>
                                                            <div className="search-result-localtion">
                                                                <img className="search-icon-text" src={require('../../assets/search/location.svg').default} alt="location" />
                                                                {val.location}
                                                            </div>
                                                            {val.vote !== "" ? (
                                                                <div className="search-result-vote">
                                                                    <img className="search-icon-text" src={require('../../assets/search/bird.svg').default} alt="traveloka" />
                                                                    <span>{val.vote}</span>&nbsp;({val.all_vote})
                                                                </div>
                                                            ) : ""}
                                                            <div className="search-result-price">
                                                                <div className="search-result-price-old">{val.fee}  VND</div>
                                                                {val.discount_fee !== "" ?
                                                                    <div className="search-result-price-now">{val.discount_fee
                                                                    }  VND</div>
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Search)
