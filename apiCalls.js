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
