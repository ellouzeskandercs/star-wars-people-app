import { ListStarWarsPeopleItemDTO } from "./ListStarWarsPeopleDTO";

export const adaptStartWarsPeopleListItem = (
  starWarsListItemDto: ListStarWarsPeopleItemDTO
): StarWarsPeopleListItem => {
  return {
    id: starWarsListItemDto.url.split("/").reverse()[1], // urls look like: https://swapi.dev/api/people/[:id]/
    name: starWarsListItemDto.name,
  };
};
