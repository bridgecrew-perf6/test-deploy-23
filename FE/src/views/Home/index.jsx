import React, { lazy, memo, useState } from "react";

// style
import './style.css'

// data
import { SideBar } from "./config";

import Carousel from "../../components/Carousel";
import Header from "../../components/Header"
import Footer from "../../components/Footer"

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
        <Header/>
            <div className="home-banner">
                <div className="home-banner-wraper">
                    <Carousel list={listSLide} show={3} />
                </div>
            </div>
            <div className={`home-bg-overlay ${activeBg ? 'active' : ''}`} onClick={() => setActiveBg(false)}></div>
            <div className={`home-wraper-content ${activeBg ? 'active' : ''}`}>
                <div className="home-main">
                    <div className="home-sidebar" style={{ maxWidth: showSidebar ? '' : '3%' }}>
                        <ul className="__home-sidebar">
                            {
                                SideBar.map((item, index) => (
                                    <li onClick={() => {
                                        setTab(item.key)
                                        setActiveBg(true)
                                    }} className={`home-sidebar-item ${item.key === tab ? 'active' : ''}`} key={index} >
                                        <img className="home-icon-sidebar" src={require(`../../assets/header/${item.icon}.svg`).default} alt={item.icon} />
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="home-hide-sidebar" onClick={() => setShowSidebar(!showSidebar)}>
                        {
                            showSidebar
                                ? <>&lt;</>
                                : <>&gt;</>
                        }
                    </div>
                    <div className="home-content" style={{ width: showSidebar ? '' : '95%' }}>
                        <div className='home-cont'>
                            {
                                SideBar.map((item, index) => (
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
            <Footer/>
        </>
    )
}

export default memo(Home)
