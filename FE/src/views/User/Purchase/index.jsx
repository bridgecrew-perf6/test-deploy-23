import React, { memo, useState } from "react";
import './style.css'
import User from '../'
import NotFound from './notfound'
import Calendar from './calendar'
import Filter from './filter'
const Purchase = () => {
    const [key, setKey] = useState(0)
    const [type, setType] = useState(-1)
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <User page='purchase'>
                <div className="purchase-right">
                    <div className="header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemToolRetrieveBooking"><path d="M4 7V19C4 20.1046 4.89543 21 6 21H15.5M4 7V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V7M4 7H8.5M20 7H12M20 7V9M7.5 11V12H8.5V11H7.5ZM7.5 16V17H8.5V16H7.5Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 20L17.8284 16.8284M17.8284 16.8284C18.5523 16.1046 19 15.1046 19 14C19 11.7909 17.2091 10 15 10C12.7909 10 11 11.7909 11 14C11 16.2091 12.7909 18 15 18C16.1046 18 17.1046 17.5523 17.8284 16.8284Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p className="desc">Xem tất cả vé máy bay và phiếu thanh toán trong</p>
                        <a href="#" className="link">Đặt chỗ của tôi</a>
                    </div>
                    <div className="body">
                        <div className="body-header">
                            <div className={`btn-filter ${key === 0 ? 'active' : ''}`} onClick={() => setKey(0)}>90 ngày qua</div>
                            <div className={`btn-filter ${key === 1 ? 'active' : ''}`} onClick={() => setKey(1)}>thg 3 2022</div>
                            <div className={`btn-filter ${key === 2 ? 'active' : ''}`} onClick={() => setKey(2)}>thg 2 2022</div>
                            <div className={`btn-filter ${key === 3 ? 'active' : ''}`} onClick={() => setKey(3)}>Ngày tuỳ chọn</div>
                            <div className="break"></div>
                            <div className="filter-purchase">
                                <div className="btn-filter" onClick={() => setShowFilter(!showFilter)}>
                                    <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5b0279c386fb217bdec95b12044704.svg" width="16" height="16" />
                                    Bộ lọc
                                </div>
                                <Filter show={showFilter} />
                            </div>
                        </div>
                        {
                            key === 3
                                ? <div className="body-main calendar">
                                    <div className="calendar-left" onClick={() => {
                                        if (type === 0) {
                                            setType(-1)
                                        } else {
                                            setType(0)
                                        }
                                    }}>
                                        <div className="cld">
                                            <div className="cld-1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <div className="time">
                                                    <div className="type">Từ</div>
                                                    <div className="time-line">Wed, Jan 19, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calendar-right" onClick={() => {
                                        if (type === 1) {
                                            setType(-1)
                                        } else {
                                            setType(1)
                                        }
                                    }}>
                                        <div className="cld">
                                            <div className="cld-1">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemCalendar"><path d="M7 2V5M17 2V5M3 8H21M11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 16.5H12.5V17.5H11.5V16.5ZM16.5 11.5H17.5V12.5H16.5V11.5ZM6.5 16.5H7.5V17.5H6.5V16.5ZM5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21Z" stroke="#687176" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 11.5V12.5H6.5V11.5H7.5Z" stroke="#0194F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                <div className="time">
                                                    <div className="type">Đến</div>
                                                    <div className="time-line">Mon, Apr 18, 2022</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="name-main">
                                        <Calendar type={type} />
                                    </div>
                                </div>
                                : <></>
                        }
                        <div className="body-main">
                            <NotFound />
                        </div>
                    </div>
                </div>
            </User>
        </>
    )
}

export default memo(Purchase)