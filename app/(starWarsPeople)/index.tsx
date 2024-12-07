import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function StarWarsPeopleListScreen() {
  const { push } = useRouter();

  return (
    <View>
      <Text>Welcome to the Star Wars People List page.</Text>
      <Text onPress={() => push(`/${1}`)}>Go to the details page</Text>
    </View>
  );
}
