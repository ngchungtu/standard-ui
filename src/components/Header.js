import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './navbar-dropdown/Navbar'
import MobileNav from './navbar-dropdown/MobileNav'

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <Link to="/" className="logo">
                    Logo
                </Link>

                {/* for large screens */}
                <Navbar />

                {/* for small screens */}
                <MobileNav />
            </div>
        </header>
    )
}

export default Header