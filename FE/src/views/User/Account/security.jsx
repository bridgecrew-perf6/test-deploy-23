import React, { useState } from "react";
import Switch from "./switch";

export default function Security() {
    const [sw, setSw] = useState(false)
    return (
        <>
            <div className="dlcn">
                <div className="dlcn-header">
                    <div className="text-dlcn-header">
                        <p className="dlcn-text-header">Xác thực</p>
                    </div>
                </div>
                <div className="dlcn-main">
                    <div className="contain-section" style={{ opacity: 0.5 }}>
                        <div className="cs-main">
                            <p className="cs-pro">Gửi mã OTP khi đăng nhập</p>
                            <p className="cs-desc">Gửi mã xác thực mới khi tài khoản của tôi được đăng nhập trên thiết bị mới</p>
                        </div>
                        <Switch active={false} setActive={setSw} />
                    </div>
                </div>
            </div>
        </>
    )
}