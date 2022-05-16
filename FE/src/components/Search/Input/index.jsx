import React, { memo } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Home from '../../../views/Home/MiniHome';
// style
import './style.css'

const InputSearch = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const ContentsSearchleft = [
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1548760200339-1500x1125-FIT_AND_TRIM-035bfa2b07fa55cd6db5652d8c2a62e0.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Thành Phố Đà Lạt",
            "location": "Tỉnh Lâm Đồng, Việt Nam"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1548818046002-1600x1200-FIT_AND_TRIM-9b196b4f45b914b3dbfea061903379d8.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Vùng miền Đà Năng",
            "location": "Việt Nam"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1506519278725-1200x600-FIT_AND_TRIM-88462e84ea55eefb999843ea23057c7d.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Thành Phố Depok",
            "location": "Tây Java, Indonesia"
        }
    ];

    const ContentsSearchRight = [
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1530000173097-1950x1300-FIT_AND_TRIM-ac0d9db4669858a28055dd4417b2f74c.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Vùng miền tỉnh Yogyakarta",
            "location": "Indonesia"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1506325324294-1200x600-FIT_AND_TRIM-f626b2aaf2c00143fcbcd280bf37ab0f.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Thành Phố Denpasar",
            "location": "Bali, Indonesia"
        },
        {
            "image": "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1530003863996-1920x1078-FIT_AND_TRIM-9e5732d3e096b8edab83509bc9dad417.jpeg?_src=imagekit&tr=c-at_max,h-105,q-40,w-140",
            "title": "Khu vực Nusa Dua",
            "location": "Huyện Badung, Bali, Indonesia"
        }
    ];

    const [statusSearch, setstatusSearch] = React.useState(0);
    const EventSearch = () => {
        setstatusSearch(1);
    }
    return (
        <>
            {props.status === "1" ?
                <>
                </>
             :
                <>
                    {/* <div className="location" id="location-page" >
                        <div className="location-gr">
                            <img className='input-icon-search' src={require('../../../assets/search/location-icon.jpg').default} alt="search" />
                            <span>Vị trí hiện tại của bạn</span>
                            <div className="location-gr-btn">
                                <div className="location-gr-btn-name">Việt Nam</div>
                                <div className="location-gr-btn-button">Thay đổi</div>
                            </div>
                            <div className="btn-view-action">
                                <a href="#">
                                    Xem các hoạt động ở vị trí của bạn <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3f639b3774cf8826f12d0130bae7ee5.svg" ></img>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </>
             }
                <div className="input-search-wrap">
                    <img className="img-bgr" src="https://ik.imagekit.io/tvlk/image/imageResource/2019/11/26/1574782343873-4868281cc1be2523f5d5cc575a3c1daa.jpeg?tr=h-400,q-75,w-1920" alt=""/>
                    <div className="gr-search">
                        <div className="input-gr">
                            <img className='input-icon-search' src={require('../../../assets/search/search-icon.svg').default} alt="search" />
                            <input onClick={handleClickOpen} type="text" className='input-search' placeholder='Tìm hoạt động hoặc điểm đến' />
                        </div>
                        <a href="/search/Đà-Nẵng" className="input-button-search">Search</a>
                    </div>
                    <div className="location">
                        <div className="location-gr">
                            <div className="wrap-my-loction">
                                <div className='btn-x1'>
                                    <img className='input-icon-location' src={require('../../../assets/search/location-icon.jpg').default} alt="search" />
                                    <span>Vị trí hiện tại của bạn</span>
                                </div>
                                <div className="my-location-gr-btn">
                                    <div className="location-1">Việt Nam</div>
                                    <div className="location-2">Thay đổi</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="btn-view-action">
                                <a href="#">
                                    Xem các hoạt động ở vị trí của bạn →
                                </a>
                            </div>
                    </div>
                </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="main-dialog"
                >
                    <DialogContent className="content-search-dialog">
                        <div className="input-search-dialog">
                            <div className="search-gr-dialog">
                                <div className="search-gr-dialog-input">
                                    <img className='input-icon-search' src={require('../../../assets/search/search-icon.svg').default} alt="search" />
                                    <input onChange={EventSearch} type="text" className='input-search' placeholder='Tìm hoạt động hoặc điểm đến' />
                                </div>
                                <a href="/search/Đà-Nẵng" className="input-button-search">Search</a>
                            </div>
                        </div>
                        <hr />
                        <div className="value-search-dialog">
                            {statusSearch === 0 ? <Home/>
                            :
                            <>
                                <div className="value-search-dialog-content-left">
                                    {ContentsSearchleft.map(val => (
                                        <a href="/detail-tour/view" className='search-result-link'>
                                            <div className="search-result-dialog">
                                                <div className="search-image-dialog">
                                                    <img src={val.image} alt="" className="__search-image" />
                                                </div>
                                                <div className="search-result-detail">
                                                    <div className="search-result-title-dialog">
                                                        {val.title}
                                                    </div>
                                                    <div className="search-result-localtion-dialog">
                                                        <img className="search-icon-text" src={require('../../../assets/search/location.svg').default} alt="location" />
                                                        {val.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                                <div className="value-search-dialog-content-right">
                                    {ContentsSearchRight.map(val => (
                                        <a href="/detail-tour/view" className='search-result-link'>
                                            <div className="search-result-dialog">
                                                <div className="search-image-dialog">
                                                    <img src={val.image} alt="" className="__search-image" />
                                                </div>
                                                <div className="search-result-detail">
                                                    <div className="search-result-title-dialog">
                                                        {val.title}
                                                    </div>
                                                    <div className="search-result-localtion-dialog">
                                                        <img className="search-icon-text" src={require('../../../assets/search/location.svg').default} alt="location" />
                                                        {val.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </>
                            }
                        </div>
                    </DialogContent>
                </Dialog>
        </>
    )
}

export default memo(InputSearch)
