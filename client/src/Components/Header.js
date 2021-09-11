import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">

            <div className="left">
                <input type="text" placeholder="Search..." className="SearchBar"/>
                <button><i class="fa fa-search"/></button>
            </div>

            <div className="right">
                
            </div>

        </div>
    )
}

export default Header
