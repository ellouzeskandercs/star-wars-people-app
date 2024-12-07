import { StarWarsPeopleDetails } from "@/src/modules/starWars/presentation/StarWarsPeopleDetails";
import { useGlobalSearchParams } from "expo-router/build/hooks";

export default function TabTwoScreen() {
  const { id } = useGlobalSearchParams();

  if (typeof id !== "string") {
    console.error("Invalid id");

    return null;
  }

  return <StarWarsPeopleDetails peopleId={id} />;
}
