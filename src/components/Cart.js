import React, { useEffect, useRef, useState } from 'react'
import '../styles/cart.css'
import Policy from './Policy'

const Cart = () => {
  const [activePolicy, setActivePolicy] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handleHoverActivePolicy = (e) => {
      if (activePolicy && ref.current && !ref.current.contains(e.target)) {
        setActivePolicy(true)
      }
    };
    document.addEventListener("mousedown", handleHoverActivePolicy);
    document.addEventListener("touchstart", handleHoverActivePolicy);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleHoverActivePolicy);
      document.removeEventListener("touchstart", handleHoverActivePolicy);
    };
  }, [activePolicy])

  const onMouseEnter = () => {
    // console.log("enter");
    setActivePolicy(true);
  };

  const onMouseLeave = () => {
    // console.log("leave");
    setActivePolicy(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-content">

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
              <input type='text' value='1' />
              <input type="button" className="incre" value="+" />
            </div>
          </div>
        </div>
        <div className="total-provisional">
          <h5>Tạm tính (1 sản phẩm):</h5>
          <h5>8.490.000₫</h5>
        </div>

        <div className="line"></div>

        <div className="customer-info">
          <h2>THÔNG TIN KHÁCH HÀNG</h2>

          <div className='input-chose-gender'>
            <input readOnly type="radio" name="gender" /> Anh
            <input readOnly type="radio" name="gender" /> Chị
          </div>

          <div className='input-phone-name'>
            <input type='text' placeholder="Họ và tên" />
            <input type='text' placeholder="Số điện thoại" />
          </div>

          <h2>CHỌN ĐỊA CHỈ NHẬN HÀNG</h2>

          <div className="another">
            <input type='text' placeholder="Yêu cầu khác (Không bắt buộc)" />
          </div>

        </div>

        <div className="buyNow">
          <button>Đặt hàng</button>
        </div>

        <div className='policy'>
          <li
            className='policy-info'
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={()=>setActivePolicy(!activePolicy)}
          >Chính sách<i className="ri-information-line"></i></li>
          <Policy activePolicy={activePolicy} />
        </div>

      </div>
    </div>
  )
}

export default Cart