import axios from "axios";

export const fetchResidents = async (urls) => {
  try {
    const responses = await Promise.all(urls.map((url) => axios.get(url)));
    const data = responses.map((response) => response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
