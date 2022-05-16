import React, { memo } from 'react'

import './style.css'

const Breadcrumb = ({ breadcrumb }) => {
    return (
        <>
            <div className="breadcrumb">
                <a href="/" className="bc-link-left">
                    <a dir="auto" role="link" className="bc-link">{breadcrumb[0]}</a>
                </a>
                <div dir="auto" className="bc-line">/</div>
                <div ariaCurrent="page" dir="auto" className="bc-main-link">{breadcrumb[1]}</div>
            </div>
        </>
    )
}

export default memo(Breadcrumb)
