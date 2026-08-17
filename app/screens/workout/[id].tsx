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
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  // const [data, setData] = useState(null);

  const data = workoutData.find((item) => item.id === id);

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
              top: -34,
              left: 0,
              right: 0,
            }}
          >
            <Pressable>
              <View style={styles.playBtnContainer}>
                <Ionicons name="play" size={20} color={colors.white} />
              </View>
            </Pressable>
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

          <View>
            <FlatList
              data={data?.exercises}
              renderItem={({ item }) => (
                <View style={styles.exerciseContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 30,
                    }}
                  >
                    <View style={styles.exerciseLogo}></View>
                    <Text style={{ textAlign: "left", fontSize: 20 }}>
                      {item.name}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} />
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
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
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  exerciseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  exerciseLogo: {
    backgroundColor: colors.background,
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
