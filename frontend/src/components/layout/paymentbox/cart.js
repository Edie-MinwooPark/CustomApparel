import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../../layout/paymentbox";
import { Cartwrapper } from "./Cart.styled";

const Cart = () => {
  const userdata = useSelector((state) => state.mypage.data);
  const [paymentProgress, setPaymentProgress] = useState(0);
  const storedValue = JSON.parse(localStorage.getItem(userdata.user_id)) || [];
  const [selected, setSelected] = useState(storedValue);
  console.log("Cart", userdata);
  useEffect(() => {
    const backgroundPosition = -200 + paymentProgress;
    const cartTitle = document.querySelector(".carttitle");

    if (cartTitle) {
      cartTitle.style.backgroundPosition = `0 ${backgroundPosition}px`;
    }
  }, [paymentProgress]);
  const handleRemoveItem = (indexToRemove) => {
    const updatedSelected = selected.filter(
      (_, index) => index !== indexToRemove
    );
    setSelected(updatedSelected);
    localStorage.setItem(userdata.user_id, JSON.stringify(updatedSelected));
  };
  const handlepaymentinput = () => {
    setPaymentProgress(paymentProgress + 100);
  };
  const handlepaymentinput2 = () => {
    setPaymentProgress(paymentProgress + 50);
  };
  const handlepaymentinput3 = () => {
    setPaymentProgress(0);
  };
  return (
    <div>
      <Cartwrapper>
        <div className="carttitle"></div>
        {/* {userdata.map((value, index) => {
        console.log("userdata",value);
      })} */}
        <table className="cartTable">
          <thead>
            <tr className="head">
              <th
                className="info2"
                scope="colgroup"
                id="th-product-box"
                colspan="2"
              >
                상품정보
              </th>
              <th scope="col" className="info">
                상품금액
              </th>
              <th scope="col" className="info">
                배송비
              </th>
            </tr>
          </thead>
          <tbody>
            {selected.map((value, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td className="productbox">
                  <div className="prodcutnamebox"> 제품 이름: {value.name}</div>
                  <div>
                    옵션: {value.color} {value.selectsize}
                    <div className="optionpricepart">
                      {value.price}{" "}
                      <span>
                        <select>
                          <option value="1">1</option>
                          {/* <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option> */}
                        </select>
                      </span>{" "}
                    </div>
                  </div>
                </td>
                <td className="totalprice">
                  <span className="price">{value.price}</span>
                </td>
                <td className="totalprice">
                  {" "}
                  <span className="price">0원</span>
                </td>
                <button
                  className="removebutton"
                  onClick={() => handleRemoveItem(index)}
                ></button>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="orderbuttons">
          <Payment
            productinfo={{
              selected,
              userdata,
              handlepaymentinput,
              handlepaymentinput2,
              handlepaymentinput3,
            }}
          />
        </div>
      </Cartwrapper>
    </div>
  );
};

export default Cart;
