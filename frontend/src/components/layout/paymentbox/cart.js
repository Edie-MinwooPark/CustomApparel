import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../../layout/paymentbox";

const Cart = () => {
  const userdata = useSelector((state) => state.mypage.data);
  const storedValue = JSON.parse(localStorage.getItem(userdata.user_id)) || [];
  const [selected, setSelected] = useState(storedValue);
  console.log("Cart", userdata);
  const handleRemoveItem = (indexToRemove) => {
    const updatedSelected = selected.filter(
      (_, index) => index !== indexToRemove
    );
    setSelected(updatedSelected);
    localStorage.setItem(userdata.user_id, JSON.stringify(updatedSelected));
  };

  return (
    <div>
      <h2>Cart</h2>
      {/* {userdata.map((value, index) => {
        console.log("userdata",value);
      })} */}
      <ul>
        {selected.map((value, index) => (
          <li key={index}>
            {value.name}, {value.price} ,{value.color},{value.selectsize}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <Payment productinfo={{ selected, userdata }} />
    </div>
  );
};

export default Cart;
