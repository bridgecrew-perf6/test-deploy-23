import React, { useState } from "react";
import { filterList1, filterList2 } from "./filter.config";

export default function Filter({ show }) {
    const [filter1, setFilter1] = useState(filterList1)
    const [filter2, setFilter2] = useState(filterList2)

    return (
        <>
            <div className="wraper-filter">
                <div className="inside" style={ show === true ? { height: '350px'} : { height: '0px' } }>
                    <div className="__inside" style={ show === true ? { transform: 'translateY(0px)'} : { transform: 'translateY(12px)' } }>
                        <div className="modal-filter">
                            <div className="__modal-filter">
                                <div className="inside__modal-filter">
                                    <div className="_filter-top">
                                        <h3>Hiển thị những giao dịch này...</h3>
                                        <div className="_filter-top-header">
                                            <div className="_filter-top__header">
                                                <div className="_filter-top-reset">
                                                    Đặt lại
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter-middle">
                                        <h3>Loại sản phẩm</h3>
                                        <div className="hr"></div>
                                        <div className="md-content">
                                            {
                                                filter1.map((item, index) => (
                                                    <div className="md-item">
                                                        <div className="__md-item" onClick={() => {
                                                            const ft = filter1
                                                            ft[index].active = true
                                                            setFilter1([...ft])
                                                        }}>
                                                            <div className="md-inside-item">
                                                                <div className="md-item-main">
                                                                    <div className="md-item-left">
                                                                        <div className="md-item-left-check">
                                                                            <div className="check-inside">
                                                                                <div className="_check-inside">
                                                                                    <div className="__check">
                                                                                        <div className="___check"></div>
                                                                                    </div>
                                                                                    <div className="___check___" style={ item.active === true ? { backgroundColor: 'rgb(1, 148, 243)' } : { backgroundColor: 'rgba(255,255,255,1.00)' } }></div>
                                                                                    <div className="___check-bottom">
                                                                                        <div className="___check-bottom___"></div>
                                                                                        <img alt="" draggable="false" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c5185871144bb37280922308a063ff3b.png" className="__check_img" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="md-item-text">{item.title}</div>
                                                                    </div>
                                                                    <img src={require(`../../../assets/user/purchase/${item.icon}`).default} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="filter-bottom">
                                        <h3>Phương thức thanh toán</h3>
                                        <div className="hr"></div>
                                        <div className="md-content">
                                            {
                                                filter2.map((item, index) => (
                                                    <div className="md-item">
                                                        <div className="__md-item" onClick={() => {
                                                            const ft = filter2
                                                            ft[index].active = true
                                                            setFilter2([...ft])
                                                        }}>
                                                            <div className="md-inside-item">
                                                                <div className="md-item-main">
                                                                    <div className="md-item-left">
                                                                        <div className="md-item-left-check">
                                                                            <div className="check-inside">
                                                                                <div className="_check-inside">
                                                                                    <div className="__check">
                                                                                        <div className="___check"></div>
                                                                                    </div>
                                                                                    <div className="___check___" style={ item.active === true ? { backgroundColor: 'rgb(1, 148, 243)' } : { backgroundColor: 'rgba(255,255,255,1.00)' } }></div>
                                                                                    <div className="___check-bottom">
                                                                                        <div className="___check-bottom___"></div>
                                                                                        <img alt="" draggable="false" src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c5185871144bb37280922308a063ff3b.png" className="__check_img" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="md-item-text">{item.title}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}