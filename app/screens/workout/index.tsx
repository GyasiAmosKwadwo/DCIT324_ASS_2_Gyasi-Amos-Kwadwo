import WorkoutCard from "@/app/components/WorkoutCard";
import { colors } from "@/config/colors";
import { workoutData } from "@/config/data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
  const onCardPress = (id: string) => {};
  return (
    <View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Ionicons name="close-outline" size={24} color={colors.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Start Workout</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={workoutData}
          renderItem={({ item }) => (
            <WorkoutCard
              key={item.id}
              data={item}
              onPress={() => onCardPress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 50,
    borderBlockColor: "gray",
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
