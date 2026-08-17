import { colors } from "@/config/colors";
import { View } from "react-native";
import Workout from "./screens/workout";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
      }}
    >
      <Workout />
    </View>
  );
}
