import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Spacer } from "@/src/shared/components/Spacer";
import { StarWarsPeopleListItemCard } from "./StarWarsPeopleListItemCard";
import { useListStarWarsPeople } from "./useListStarWarsPeople";
import { theme } from "@/src/shared/design-system/theme";

export const StarWarsPeopleList = () => {
  const [search, setSearch] = useState("");

  // TODO : add error handling
  const { starWarsPeople, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useListStarWarsPeople({ search });

  return (
    <View style={styles.container}>
      <Spacer height={theme.spacings.m} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
      {starWarsPeople && (
        // We use ScrollView instead of FlatList because we want to have a grid like layout and flex wrap is not supported by FlatList
        <ScrollView style={styles.scrollView}>
          <View style={styles.itemsListContainer}>
            {starWarsPeople.map((item) => (
              <StarWarsPeopleListItemCard
                starWarsListItem={item}
                key={item.id}
              />
            ))}
          </View>
          {isFetchingNextPage && <ActivityIndicator />}
          {hasNextPage && !isFetchingNextPage && (
            <Text style={styles.loadMoreButton} onPress={() => fetchNextPage()}>
              Load more
            </Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacings.m,
    paddingHorizontal: theme.spacings.m,
    flex: 1,
  },
  textInput: {
    backgroundColor: "#FFF",
    borderRadius: theme.spacings.s,
    ...theme.fonts.body.l,
    padding: theme.spacings.m,
  },
  scrollView: {
    flex: 1,
  },
  itemsListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacings.m,
  },
  loadMoreButton: {
    alignSelf: "center",
    padding: theme.spacings.m,
    color: theme.colors.text.primary,
  },
});
