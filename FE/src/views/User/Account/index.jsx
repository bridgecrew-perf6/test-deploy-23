import React, { memo, useState } from "react";
import './style.css'
import User from '../'
import InfoAccount from "./info-account";
import Security from "./security";
import ManageNew from './manageNews'
import { Fragment } from "react";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

const Account = () => {
    const [tab, setTab] = useState(0)
    return (
        <Fragment>
            <Header/>
        <>
            <User page='account'>
                <div className="account-right">
                    <div className="acc-right-inside">
                        <h1 className="title-setting">Cài đặt</h1>
                        <div className="account-right-menu">
                            <div className="menu-account-right-menu-item" onClick={() => setTab(0)} style={ tab === 0 ? ({color: 'rgb(1, 148, 243)', borderBottom: '2px solid rgb(55 138 204)'}) : {}}>Thông tin tài khoản</div>
                            <div className="menu-account-right-menu-item" onClick={() => setTab(1)} style={ tab === 1 ? ({color: 'rgb(1, 148, 243)', borderBottom: '2px solid rgb(55 138 204)'}) : {}}>Mật khẩu &amp; bảo mật</div>
                            <div className="menu-account-right-menu-item" onClick={() => setTab(2)} style={ tab === 2 ? ({color: 'rgb(1, 148, 243)', borderBottom: '2px solid rgb(55 138 204)'}) : {}}>Bản tin &amp; tin khuyến mãi</div>
                        </div>
                        {
                            tab === 0
                            ? <InfoAccount />
                            : tab === 1
                            ? <Security />
                            : <ManageNew />
                        }
                    </div>
                </div>
            </User>
        </>
        <Footer/>
        </Fragment>
    )
}

export default memo(Account)