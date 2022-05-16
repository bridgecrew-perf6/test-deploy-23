import React from "react";

export default function NoutFound () {
    return (
        <>
            <div className="wrap-notfound">
                <div className="wrap-left">
                    <img importance="low" loading="lazy" src="https://ik.imagekit.io/tvlk/image/imageResource/2017/11/06/1509969696508-63e4a83e52864cf123f6cc7a9ee356fd.png?tr=q-75,w-175" srcset="https://ik.imagekit.io/tvlk/image/imageResource/2017/11/06/1509969696508-63e4a83e52864cf123f6cc7a9ee356fd.png?tr=q-75,w-175 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/11/06/1509969696508-63e4a83e52864cf123f6cc7a9ee356fd.png?tr=dpr-2,q-75,w-175 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/11/06/1509969696508-63e4a83e52864cf123f6cc7a9ee356fd.png?tr=dpr-3,q-75,w-175 3x" decoding="async" />
                </div>
                <div className="wrap-right">
                    <h3>Không tìm thấy giao dịch</h3>
                    <div className="desc">Bạn có thể xem thông tin giao dịch mới tại đây. Các giao dịch cũ sẽ được hiển thị trong Đặt chỗ của tôi</div>
                    <div className="new">Tạo giao dịch mới</div>
                </div>
            </div>
        </>
    )
}