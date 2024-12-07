import { useInfiniteQuery } from "@tanstack/react-query";
import { listStarWarsPeople } from "@/src/modules/starWars/infra/listStarWarsPeople";

export const useListStarWarsPeople = ({ search }: { search: string }) => {
  // TODO : add error handling
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["star-wars-people-list", search],
      queryFn: ({ pageParam }) => {
        return listStarWarsPeople({
          page: pageParam,
          search,
        });
      },
      getNextPageParam: (lastPage, _allPages, lastPageParam) => {
        if (lastPage.hasNextPage) {
          return lastPageParam + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });

  const starWarsPeople = data?.pages.flatMap((page) => page.results);

  return {
    starWarsPeople,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
