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
  const onCardPress = (id: string) => {
    // Navigation handled by Link in WorkoutCard
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="close-outline" size={24} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Workouts</Text>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="menu" size={24} color={colors.black} />
        </TouchableOpacity>
      </View>

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
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
  },
  button: {
    padding: 12,
    borderRadius: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
