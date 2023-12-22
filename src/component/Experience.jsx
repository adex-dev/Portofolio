import axios from "axios";

const Experience = async () => {
    try {
      const url = "https://apilib.akmadnudin.com/experience.json";
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return []; // Return an empty array in case of error
    }
  };
  export default Experience