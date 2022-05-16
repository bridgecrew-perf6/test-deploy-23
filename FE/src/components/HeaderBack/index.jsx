import React, { memo } from 'react'

// Style
import './style.css'

// Data
import { HeaderBackConfig } from './setting'

const HeaderBack = () => {
    return (
        <>
            <div className="hdb-wraper">
                <div className="hdb-main">
                    {
                        HeaderBackConfig.map((item, index) => (
                            <div className="hdb-gr dropdown" key={index}>
                                <p className="hdb-ddl">{item.title}</p>
                                <img src={require('../../assets/header/chev-down-2.svg').default} alt="chev-down" className='hdb-chev-down' />
                                <div className="hdb-submenu dropdown-list">
                                    {
                                        item.sub?.map((it, idx) => (
                                            <p className="__hdb-submenu" key={idx}>
                                                <a href={it.href} className="hdb-sub-link">
                                                    <img src={require(`../../assets/header/${it.icon}.svg`).default} alt={it.icon} className='hdb-chev-down' />
                                                    {it.title}
                                                </a>
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default memo(HeaderBack)