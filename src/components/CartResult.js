import React from 'react'
import '../styles/cart-result.css'

const CartResult = () => {
  return (
    <div className="cart-result">
      <div className="cr-container">
        <div className="cr-status">Đặt hàng thành công</div>
        <div className="cr-content">
          <div className="cr-info">
            <div className="cr-customer-info">
              <h5>Anh ABC</h5>
              <h5>Số điện thoại: 098765432</h5>
              <h5>Địa chỉ: abc/123 bcd</h5>
            </div>
            <div className="cr-id">
              <h5>#123456</h5>
            </div>
          </div>

          <div className="line"></div>

          <div className="cr-product-list">
            <div className="cr-product-img">
              <img src="https://cdn.tgdd.vn/Products/Images/3385/309481/may-loc-nuoc-ro-nong-nguoi-lanh-karofi-kad-x56-11-loi-0-200x200.jpg" alt="" />
            </div>
            <div className="cr-product-info">
              <div>
                <h3>Máy lọc nước RO nóng nguội lạnh Karofi KAD-X56 11 lõi</h3>
              </div>
              <div className="cr-product-detail">
                <div>
                  <h5>Màu: Đen</h5>
                  <h5>Số lượng: 1</h5>
                </div>
                <div>
                  <h5>8.490.000₫</h5>
                  <h5>10.790.000₫</h5>
                </div>
              </div>
            </div>
          </div>

          <div className='cr-total'>
            <h5>Tạm tính (1 sản phẩm):</h5>
            <h5>8.490.000₫</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartResult