import React, { useState } from "react";
import Switch from './switch'

export default function ManageNew() {
    const [sw, setSw] = useState(false)
    return (
        <>
            <div className="dlcn">
                <div className="dlcn-header">
                    <div className="text-dlcn-header">
                        <p className="dlcn-text-header">Quản lý đăng ký bản tin</p>
                        <p className="dlcn-text-header-desc">Chọn loại nội dung bạn muốn nhận</p>
                    </div>
                </div>
                <div className="dlcn-main">
                    <div className="contain-section">
                        <p className="pro">Traveloka - Tin Khuyến Mãi</p>
                        <Switch active={sw} setActive={setSw} />
                    </div>
                </div>
            </div>
        </>
    )
}