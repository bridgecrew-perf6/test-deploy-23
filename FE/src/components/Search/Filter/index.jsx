import React, { memo, useState } from 'react'

import './style.css'

const Filter = (props) => {
    const DataFilter = [
        {"value": "Trải nghiệm mới"},
        {"value": "Hoàn tiền dễ dàng"},
        {"value": "Đổi lịch dễ dàng"}
    ];
    const [key, setKey] = useState(0)
    const clickFilter = (e) => {
        props.changefilter(1);
        props.keyfilter(e.target.innerText);
        setKey(e.target.innerText)
    }
    return (
        <>
            <div className="filter-wrap">
                <div className="filter-reset">Đặt lại bộ lọc</div>
                <div className="filter">
                    <div className="filter-title">Độc quyền Xperience</div>
                    <div className="filter-content">
                        {DataFilter.map( data => (
                            <div className={`filter-item ${key === data.value ? 'active' : ''}`}>
                                <span onClick={clickFilter}>{data.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Filter)
