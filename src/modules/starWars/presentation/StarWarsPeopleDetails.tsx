import { useQuery } from "@tanstack/react-query";
import { getStarWarsPeopleDetails } from "../infra/getStarWarsPeopleDetails";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { theme } from "@/src/shared/design-system/theme";

interface StarWarsPeopleDetailsProps {
  peopleId: string;
}

export const StarWarsPeopleDetails = ({
  peopleId,
}: StarWarsPeopleDetailsProps) => {
  const { isFetching, data, error } = useQuery({
    queryKey: ["starWarsPeopleDetails", peopleId],
    queryFn: () => getStarWarsPeopleDetails(peopleId),
  });

  if (isFetching) {
    return <ActivityIndicator />;
  }

  if (error || !data) {
    return (
      <View style={styles.container}>
        <Text>Got an error while fetching the data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.detailsText}>{`Birth year: ${data.birth_year}`}</Text>
      <Text style={styles.detailsText}>{`Height: ${data.height}`}</Text>
      <Text style={styles.detailsText}>{`Weight: ${data.mass}`}</Text>
      <Text
        style={styles.detailsText}
      >{`Number of movies: ${data.films.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacings.m,
    padding: theme.spacings.m,
    flex: 1,
  },
  title: {
    ...theme.fonts.title.m,
    color: theme.colors.text.primary,
  },
  detailsText: {
    ...theme.fonts.body.m,
    color: theme.colors.text.primary,
  },
});
