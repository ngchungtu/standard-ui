import React from 'react'
import '../styles/product.css'

const Product = () => {
  return (
    <div className='product-container'>

      <div className='product-item'>
        <div className='product-header'>
          <span className='product-name'>
            Máy lọc nước RO Sunhouse SHA8866K 7 lõi
          </span>
          <div className='product-img'>
            <img src='https://cdn.tgdd.vn/Products/Images/3385/255987/Slider/vi-vn-ro-sunhouse-sha8866k-7-loi-0001-1020x570-1.jpg' alt='' />
            <div className='product-color'></div>
          </div>
        </div>

        <div className='product-detail'>
          <div className='product-price'>
            <span>2.990.000₫</span>
          </div>
          <div className='product-promotion'>
            <div className='product-promotion-header'>
              <p>Khuyễn mãi</p>
              <p>Giá và khuyến mãi dự kiến áp dụng đến ...</p>
            </div>
            <div className='promotion-info'>
              <span>1</span>
              <div className='r-div'>
                <p>Tặng coupon Miễn phí lõi lọc thô số 1 và 3 coupon Giảm 20% khi mua lõi lần sau</p>
              </div>
            </div>
          </div>
          <div className='buyNow'>
            <button className='btn-buyNow'>Mua ngay</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Product