import axios from "axios";
export const fetchPlanetsData = async (page, setPlanets, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(
      `https://swapi.dev/api/planets/?page=${page}&format=json`
    );
    const { data } = res;
    setPlanets(data.results);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
export const fetchResidents = async (urls) => {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return response.json();
      })
    );
    return responses;
  } catch (error) {
    console.error(error);
    return [];
  }
};
