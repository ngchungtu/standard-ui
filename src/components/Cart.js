import React from 'react'
import '../styles/cart.css'

const Cart = () => {
  return (
    <div className="cart-container">
      {/* <div className="cart-status"></div> */}
      <div className="cart-content">
        {/* <div className="cart-info">
          <div className="customer-info"></div>
          <div className="cart-id"></div>
        </div> */}

        <div className="cart-product">
          <div className="cart-product-img">
            <img src='https://cdn.tgdd.vn/Products/Images/3385/309481/may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-0-200x200.jpg' alt='' />
            <i className="ri-close-circle-line"><span>Xóa</span></i>
          </div>

          <div className="cart-product-detail">
            <h3>Máy lọc nước RO nóng nguội lạnh Karofi KAD-X56 11 lõi</h3>
            <h5>Màu: Đen</h5>
          </div>

          <div className="cart-product-item-total">
            <div className="total">
              <h5>8.490.000₫</h5>
              <h5>10.790.000₫</h5>
            </div>

            <div className="de-incre-quantity">
              <input type="button" className="decre" value="-" />
              <input type='text' value='1'/>
              <input type="button" className="incre" value="+" />
            </div>
          </div>
        </div>
        <div className="total-provisional">
          <h5>Tạm tính (1 sản phẩm):</h5>
          <h5>8.490.000₫</h5>
        </div>

        <div className="customer-info"></div>
      </div>
    </div>
  )
}

export default Cart