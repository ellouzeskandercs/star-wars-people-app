import { API_BASE_URL } from "@/src/shared/config/config";

export const getStarWarsPeopleDetails = async (
  id: string
): Promise<StarWarsPeopleDetails> => {
  const res = await fetch(`${API_BASE_URL}/people/${id}/`);

  return res.json();
};
