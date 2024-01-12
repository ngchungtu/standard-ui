import React from 'react'
import '../styles/cart-popup.css'

const CartPopup = ({ activePopup, closePopup }) => {
    console.log('activePopup', activePopup);

    const productList = [
        {
            id: 1,
            name: 'Laptop Acer Nitro 5 Gaming AN515 57 5669 i5 11400H/8GB/512GB/144Hz/4GB GTX1650/Win11 (NH.QEHSV.001)',
            image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/1942/303927/TimerThumb/google-tivi-tcl-4k-58-inch-58p635-(18).jpg',
            price: '8.990.000',
            quantity: '1',
        },
        {
            id: 2,
            name: 'Laptop Acer Aspire 3 A315 58 589K i5 1135G7/8GB/256GB/Win11 (NX.AM0SV.008)',
            image: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/44/305600/acer-aspire-3-a315-58-589k-i5-nxam0sv008-thumb-200x200.jpg',
            price: '6.850.000',
            quantity: '1',
        },
        {
            id: 3,
            name: 'Laptop Apple MacBook Air 15 inch M2 2023 8-core CPU/8GB/256GB/10-core GPU (MQKW3SA/A) ',
            image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-vang-600x600.jpg',
            price: '31.490.000',
            quantity: '1',
        },
    ]

    return (
        <>
            {
                activePopup &&
                <>
                    <div className='cp-container'>
                        <div className='cp-header'>
                            <i className="ri-close-line" onClick={() => closePopup()}></i>
                        </div>

                        {
                            productList.map((product) => (
                                <div className='cp-content' key={product.id}>
                                    <div className='cp-product-img'>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className='cp-product-quantity'>
                                        <h5>Số lượng: {product.quantity}</h5>
                                    </div>
                                    <div className='cp-product-name'>
                                        <h5>{product.name}</h5>
                                        <h5>{product.price}₫</h5>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
        </>
    )
}

export default CartPopup