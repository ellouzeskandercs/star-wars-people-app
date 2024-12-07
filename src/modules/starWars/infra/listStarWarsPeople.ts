import { API_BASE_URL } from "@/src/shared/config/config";
import { ListStarWarsPeopleItemDTO } from "./ListStarWarsPeopleDTO";
import { adaptStartWarsPeopleListItem } from "./adaptStartWarsPeopleListItem";

export const listStarWarsPeople = async ({
  search,
  page,
}: {
  search: string;
  page: number;
}): Promise<{
  results: Array<StarWarsPeopleListItem>;
  hasNextPage: boolean;
}> => {
  const res = await fetch(
    `${API_BASE_URL}/people/?search=${search}&page=${page}`
  );

  const pokemonsListDto = await res.json();

  return {
    results: (pokemonsListDto.results as Array<ListStarWarsPeopleItemDTO>).map(
      adaptStartWarsPeopleListItem
    ),
    hasNextPage: pokemonsListDto.next !== null,
  };
};
