import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDetailinfo,
  getPaymenthistorydetails,
} from "../../../features/paymentslice";
import "./Paymentdetail.css"; // Import your CSS file for styling
const Paymentdetail = () => {
  const dispatch = useDispatch();
  const paymentdataHIS = useSelector((state) => state.payment.paymentdata);
  const [paymentdata, setPaymentdata] = useState(null);
  const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getPaymentDetailinfo());
        const paymentNumbers = data.payload.Unique_payment_number.split(",");
        setPaymentdata(paymentNumbers);
      } catch (error) {
        console.error("오류", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (paymentdata) {
      dispatch(getPaymenthistorydetails(paymentdata));
    }
  }, [paymentdata, dispatch]);

  const handlePaymentDetail = (indexToSpecific) => {
    setSelectedDetailIndex((prevIndex) =>
      prevIndex === indexToSpecific ? null : indexToSpecific
    );
  };

  return (
    <div>
      <ul>
        {paymentdata &&
          paymentdata.map((element, index) => (
            <li key={index}>
              <button
                className="details-button"
                onClick={() => handlePaymentDetail(index)}
              >
                자세히보기
              </button>
              {paymentdataHIS[index].response.name}
              {selectedDetailIndex === index && (
                <div className="details">
                  {paymentdataHIS[index].response.amount}
                  {paymentdataHIS[index].response.name}
                  {paymentdataHIS[index].response.status}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Paymentdetail;
