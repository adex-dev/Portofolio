import axios from "axios";

const Portofolios = async () => {
    try {
      const url = process.env.REACT_APP_API+"portofolio.json";
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return []; // Return an empty array in case of error
    }
  };
  export default Portofolios