import { GeniusSong } from "../interfaces/GeniusResponse";

const retrieveSongs = async (query: string): Promise<GeniusSong[]> => {
  try {
    const response = await fetch(`/api/genius/${query}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export { retrieveSongs };