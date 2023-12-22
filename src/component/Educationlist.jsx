import axios from "axios";

const Educationlist = async () => {
    try {
      const url = "https://apilib.akmadnudin.com/education.json";
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return []; // Return an empty array in case of error
    }
  };
  export default Educationlist