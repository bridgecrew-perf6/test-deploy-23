import React from 'react'
import classes from '../Content/SearchBox.module.css'

const SearchBox = () => {
    return ( 
    <div className = { classes.search } >

        <input className = { classes.text }
        type = "text"
        placeholder = "Tìm hoạt động hoặc điểm đến"
        size = "70" / >
        <button > Search </button>

    </div>
    )
}

export default SearchBox