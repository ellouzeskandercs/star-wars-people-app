import { theme } from "@/src/shared/design-system/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CARD_MIN_WIDTH = 250;
const ICON_SIZE = 20;

export const StarWarsPeopleListItemCard = ({
  starWarsListItem,
}: {
  starWarsListItem: StarWarsPeopleListItem;
}) => {
  const { push } = useRouter();

  return (
    // We use TouchableOpacity instead of Pressable because we want to have a press effect at low cost
    <TouchableOpacity
      style={styles.card}
      onPress={() => push(`/${starWarsListItem.id}`)}
    >
      <Text style={styles.name} numberOfLines={1}>
        {starWarsListItem.name}
      </Text>
      <Text style={styles.arrow}>〉</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    flexGrow: 1,
    flexBasis: CARD_MIN_WIDTH,
    alignItems: "center",
    backgroundColor: theme.colors.card.background,
    gap: theme.spacings.m,
    padding: theme.spacings.m,
    borderRadius: theme.spacings.m,
  },
  name: {
    color: theme.colors.card.text,
    ...theme.fonts.body.m,
    flexGrow: 1,
    flexShrink: 1,
  },
  arrow: {
    color: theme.colors.card.text,
    fontSize: ICON_SIZE,
  },
});
