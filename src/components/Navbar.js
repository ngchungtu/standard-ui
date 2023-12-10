import React, { useState } from 'react'
import '../styles/navbar.css'

/* #region  origin */
// const Navbar = () => {
//     const [showNavbar, setShowNavbar] = useState(false)

//     const handleShowNavbar = () => {
//         setShowNavbar(!showNavbar)
//     }
//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="logo">
//                     LOGO1
//                 </div>
//                 <div className="menu-icon" onClick={handleShowNavbar}>
//                     {
//                         showNavbar
//                             ? <i className="ri-close-line"></i>
//                             : <i className="ri-align-justify"></i>
//                     }
//                 </div>
//                 <div className={`nav-elements  ${showNavbar && 'active'}`}>
//                     <ul>
//                         <li className='inp-search'>
//                             <i className="ri-search-line"></i>
//                             <input type="text" placeholder="Tìm kiếm nhanh" />
//                         </li>
//                         <li>
//                             <NavLink to="/">Home</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/blog">Blog</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/projects">Projects</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/about">About</NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/contact">Contact</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }
/* #endregion */

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    LOGO1
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    {
                        showNavbar
                            ? <i className="ri-close-line"></i>
                            : <i className="ri-align-justify"></i>
                    }
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li className='inp-search'>
                            <i className="ri-search-line"></i>
                            <input type="text" placeholder="Tìm kiếm nhanh" />
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/product-detail">Product Detail</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar