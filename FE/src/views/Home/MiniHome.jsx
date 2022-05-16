import React, { lazy, memo, useState } from "react";

// style
import './style.css';
import './ministyle.css'

// data
import { SideBarMini } from "./config";

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const [tab, setTab] = useState('xperience')
    const [activeBg, setActiveBg] = useState(false)

    const listSLide = [
        {
            image: require('../../assets/home/slide-0.webp').default
        },
        {
            image: require('../../assets/home/slide-1.webp').default
        },
        {
            image: require('../../assets/home/slide-2.webp').default
        },
        {
            image: require('../../assets/home/slide-3.webp').default
        },
        {
            image: require('../../assets/home/slide-4.webp').default
        },
        {
            image: require('../../assets/home/slide-5.webp').default
        }
    ]

    return (
        <>
            {/* <div className={`home-bg-overlay ${activeBg ? 'active' : ''}`} onClick={() => setActiveBg(false)}></div> */}
            <div className={`home-wraper-content ${activeBg ? 'active' : ''}`}>
                <div className="home-main">
                    <div className="home-content" style={{ width: '100%' }}>
                        <div className='home-cont'>
                            {
                                SideBarMini.map((item, index) => (
                                    <>
                                        {
                                            item.key === tab
                                                ? item.component
                                                : <></>
                                        }
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Home)
