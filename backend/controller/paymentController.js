const axios = require("axios");
const path = require("path");

exports.payment = async (req, res, next) => {
  console.log("payment");
  const url = "https://api.iamport.kr/users/getToken";
  const imp_key = "0747504834682350"; // Replace with your actual REST API Key
  const imp_secret =
    "XaiQElh8ym0TtJOgCMxgAzkuscqkYUMWy3Bc4SAp1UhMDpPQVtTRElUyprXKA4ejCZqermd5Rd2iQLZm"; // Replace with your actual REST API Secret

  const formData = new FormData();
  formData.append("imp_key", imp_key);
  formData.append("imp_secret", imp_secret);
  try {
    const response = await axios.post(
      "https://api.iamport.kr/users/getToken",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );
    console.log(response.data);
    next();
  } catch (error) {
    console.log(error);
  }
};
