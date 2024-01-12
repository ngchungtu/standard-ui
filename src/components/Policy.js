import React from 'react'
import '../styles/policy.css'

const Policy = ({ activePolicy }) => {
    return (
        <>
            {
                activePolicy
                && (
                    <div className='po-container'>
                        <ul>
                            <li>Khuyến mãi hệ thống</li>
                            <li>Giá giảm theo ngày lễ, tết</li>
                            <li>Quà tặng BackToSchool</li>
                        </ul>
                    </div>
                )
            }

            {/* <div className='po-container'>
                <ul>
                    <li>Khuyến mãi hệ thống</li>
                    <li>Giá giảm theo ngày lễ, tết</li>
                    <li>Quà tặng BackToSchool</li>
                </ul>
            </div> */}
        </>
    )
}

export default Policy