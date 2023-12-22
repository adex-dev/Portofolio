import axios from "axios";
// import Alert from "../library/Alert"
const Sendemail = async (props) => {
  const postData = new FormData();
  postData.append("nama", props.nama);
  postData.append("email", props.email);
  postData.append("message", props.message);
  postData.append("key", "adexganteng");
  try {
    // Make the POST request using Axios
    const response = await axios.post(
      "https://shop.akmadnudin.com/auth/sendemailportofolio",
      postData
    );

    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught and handled in js1.js
  }
};

export default Sendemail;