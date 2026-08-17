import { colors } from "@/config/colors";
import { View } from "react-native";
import Workout from "./screens/workout";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Workout />
    </View>
  );
}
