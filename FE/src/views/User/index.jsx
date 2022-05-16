import React, { memo } from "react";
import './style.css'
import { config } from "./config";
const User = ({ children, page }) => {
    return (
        <>
            <div className="account-wrapper">
                <div className="account-inside">
                    <div className="account-main">
                        <div className="account-left">
                            <div className="main">
                                <div className="top-1">
                                    <div className="inside">
                                        <div className="inside-1">
                                            <div className="left">
                                                <div className="left-1">
                                                    <div className="name">EX</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inside-2">
                                            <div className="right">
                                                <div className="name">Example</div>
                                                <div className="type">Google</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    config.map((item) => (
                                        <>
                                            <div className={`top-2 ${item.key === page ? 'active' : ''}`}>
                                                <a href={item.href} className="menu-item">
                                                    <div className="item">
                                                        <div className="__item">
                                                            <div className="icon">
                                                                <img src={item.icon} />
                                                            </div>
                                                            <div className="name">{item.title}</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            {
                                                item.break === true
                                                ? <div className="break"></div>
                                                : <></>
                                            }
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(User)