const axios = require("axios");
const path = require("path");
let count = 0;
let specificValue = null;
const payments = async () => {
  const imp_key = process.env.imp_key;
  const imp_secret = process.env.imp_secret;
  console.log("imp_key", imp_key);
  console.log("imp_secret", imp_secret);
  console.log("payment");
  const url = "https://api.iamport.kr/users/getToken";

  const formData = new FormData();
  formData.append("imp_key", imp_key);
  formData.append("imp_secret", imp_secret);
  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
exports.payment = async (req, res, next) => {
  console.log("여기 접근함");
  if (count == 0) {
    specificValue = await payments();
    count++;
  }

  req.specificValue = specificValue;

  next();
};

exports.payments = payments;
