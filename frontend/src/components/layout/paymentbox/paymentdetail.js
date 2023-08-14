import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDetailinfo,
  getPaymenthistorydetails,
} from "../../../features/paymentslice";
const Paymentdetail = () => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user.data);
  const [paymentdata, setPaymentdata] = useState(null);
  const handlePaymentDetail = (indexToSpecific) => {
    console.log(indexToSpecific);
    console.log(paymentdata[indexToSpecific]);
    const data2 = dispatch(
      getPaymenthistorydetails(paymentdata[indexToSpecific])
    );
    console.log(data2);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getPaymentDetailinfo());
        console.log("useEffect", data);
        console.log("useEffect", data.payload.Unique_payment_number);
        const paymentNumbers = data.payload.Unique_payment_number.split(",");
        setPaymentdata(paymentNumbers);
        console.log("paymentdata", paymentNumbers);
      } catch (error) {
        console.error("오류", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <ul>
        {paymentdata &&
          paymentdata.map((element, index) => (
            <li key={index}>
              {element}
              <button onClick={() => handlePaymentDetail(index)}>Detail</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Paymentdetail;
