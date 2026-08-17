import { colors } from "@/config/colors";
import { workoutData } from "@/config/data";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CategoriesDetails() {
  const { id } = useLocalSearchParams();
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
  const navigation = useNavigation();

  const data = workoutData.find((item) => item.id === id);

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Workout not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circles, { height: 190, width: 190 }]} />
      <View style={[styles.circles, { height: 240, width: 240 }]} />
      <View style={styles.scrollContainer}>
        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={20} color={colors.black} />
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.imageContainer}>
              <Image source={data?.image} style={{ width: 250, height: 250 }} />
            </View>
            <View style={styles.durationContainer}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {data?.duration} min
              </Text>
            </View>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.description}>{data?.description}</Text>
          </View>
        </View>

        <View style={styles.bottomCard}>
          <View
            style={{
              alignItems: "center",
              position: "absolute",
              top: -40,
              left: 0,
              right: 0,
            }}
          >
            <Pressable
              onPress={() => setIsWorkoutStarted(!isWorkoutStarted)}
              style={styles.playBtnContainer}
            >
              <Ionicons
                name={isWorkoutStarted ? "checkmark" : "play"}
                size={24}
                color={colors.white}
              />
            </Pressable>
            <Text style={styles.workoutStatus}>
              {isWorkoutStarted ? "Completed" : "Start Workout"}
            </Text>
          </View>

          <Text
            style={{
              marginVertical: 20,
              color: "gray",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Exercises
          </Text>

          <FlatList
            data={data?.exercises}
            renderItem={({ item }) => (
              <View style={styles.exerciseContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <View style={styles.exerciseLogo}>
                    <Ionicons name="fitness" size={24} color={colors.playbutton} />
                  </View>
                  <Text style={{ textAlign: "left", fontSize: 16, flex: 1 }}>
                    {item.name}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.gray} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc9d1",
    height: "100%",
  },

  circles: {
    position: "absolute",
    top: -30,
    right: -60,
    borderWidth: 3,
    borderRadius: "100%",
    borderColor: colors.white,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  backButton: {
    position: "absolute",
    borderRadius: 50,
    top: 10,
    left: 20,
    borderBlockColor: "black",
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: colors.white,
    borderRadius: "100%",
    padding: 10,
    width: 250,
    height: 250,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 17,
    textAlign: "center",
    color: "gray",
  },
  durationContainer: {
    backgroundColor: colors.white,
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
  },
  bottomCard: {
    backgroundColor: colors.white,
    borderTopEndRadius: 55,
    borderStartStartRadius: 55,
    minHeight: 300,
    flex: 1,
    width: "100%",
    marginTop: 50,
    padding: 30,
  },

  playBtnContainer: {
    backgroundColor: colors.playbutton,
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  workoutStatus: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    color: colors.playbutton,
  },

  exerciseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  exerciseLogo: {
    backgroundColor: colors.background,
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
