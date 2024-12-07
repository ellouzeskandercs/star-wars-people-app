import { useGlobalSearchParams } from "expo-router/build/hooks";
import { View, Text } from "react-native";

export default function TabTwoScreen() {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <Text>Welcome to the star wars people details page. Id: {id}</Text>
    </View>
  );
}
