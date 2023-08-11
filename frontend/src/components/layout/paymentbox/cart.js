import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment from "../../layout/paymentbox";

const Cart = () => {
  const storedValue = JSON.parse(localStorage.getItem("tester")) || [];
  const [selected, setSelected] = useState(storedValue);
  const userdata = useSelector((state) => state.mypage.data);

  console.log(userdata);
  const handleRemoveItem = (indexToRemove) => {
    const updatedSelected = selected.filter(
      (_, index) => index !== indexToRemove
    );
    setSelected(updatedSelected);
    localStorage.setItem("tester", JSON.stringify(updatedSelected));
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
