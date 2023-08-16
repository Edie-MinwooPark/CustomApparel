// import React, { useRef, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getPaymentDetailinfo,
//   getPaymenthistorydetails,
// } from "../../../features/paymentslice";
// import "./Paymentdetail.css"; // Import your CSS file for styling
// const Paymentdetail = () => {
//   const dispatch = useDispatch();
//   const [paymentdata, setPaymentdata] = useState(null);
//   const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);
//   const paymentdata2 = useSelector((state) => state.payment.data);
//   const paymentdataHIS = useSelector((state) => state.payment.paymentdata);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = dispatch(getPaymentDetailinfo());
//         const paymentNumbers = data.payload.Unique_payment_number.split(",");
//         setPaymentdata(paymentNumbers);
//       } catch (error) {
//         console.error("오류", error);
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   useEffect(() => {
//     console.log(paymentdata);
//     // if (paymentdata) {
//     //   dispatch(getPaymenthistorydetails(paymentdata));
//     // }
//   }, [paymentdata]);

//   const handlePaymentDetail = (indexToSpecific) => {
//     setSelectedDetailIndex((prevIndex) =>
//       prevIndex === indexToSpecific ? null : indexToSpecific
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {paymentdata &&
//           paymentdata.map((element, index) => (
//             <li key={index}>
//               <button
//                 className="details-button"
//                 onClick={() => handlePaymentDetail(index)}
//               >
//                 자세히보기
//               </button>
//               {paymentdataHIS[index].response.name}
//               {selectedDetailIndex === index && (
//                 <div className="details">
//                   {paymentdataHIS[index].response.amount}
//                   {paymentdataHIS[index].response.name}
//                   {paymentdataHIS[index].response.status}
//                 </div>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Paymentdetail;

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./Paymentdetail.css"; // Import your CSS file for styling
const PROXY = process.env.REACT_APP_PROXY;

const Paymentdetail = () => {
  const [selectedDetailIndex, setSelectedDetailIndex] = useState(null);

  const { data: paymentdata } = useQuery("paymentDetail", async () => {
    const response = await axios.get(`${PROXY}/payment/paymentdetail`, {
      withCredentials: true,
    });
    return response.data;
  });

  // Fetch payment history data using React Query
  const { data: paymentdataHIS } = useQuery(
    "paymentHistory",
    async () => {
      if (paymentdata) {
        const response = await axios.post(
          `${PROXY}/payment/paymenthistorydetails`,
          { array: paymentdata.Unique_payment_number.split(",") },
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        return response.data;
      }
    },
    {
      enabled: !!paymentdata, // Enable this query only if paymentdata is available
    }
  );

  if (paymentdata) {
    console.log(paymentdata);
    console.log(paymentdataHIS);
  }

  const handlePaymentDetail = (indexToSpecific) => {
    setSelectedDetailIndex((prevIndex) =>
      prevIndex === indexToSpecific ? null : indexToSpecific
    );
  };

  return (
    <div>
      {paymentdataHIS ? (
        <ul>
          {paymentdataHIS.map((element, index) => (
            <li key={index}>
              {paymentdataHIS[index]?.response.name}
              <button
                className="details-button"
                onClick={() => handlePaymentDetail(index)}
              >
                자세히보기
              </button>
              {selectedDetailIndex === index && (
                <div className="details">
                  {paymentdataHIS[index]?.response.amount}
                  {paymentdataHIS[index]?.response.name}
                  {paymentdataHIS[index]?.response.status}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading payment history data...</p>
      )}
    </div>
  );
};

export default Paymentdetail;
