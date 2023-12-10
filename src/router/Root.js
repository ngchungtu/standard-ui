import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import '../styles/navbar-dropdown.css'

const Root = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Root