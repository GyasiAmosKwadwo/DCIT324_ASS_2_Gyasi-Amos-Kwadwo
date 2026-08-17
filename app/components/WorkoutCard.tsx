import { colors } from "@/config/colors";
import { WorkoutData } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  data: WorkoutData;
  onPress: () => void;
};

export default function WorkoutCard({ data, onPress }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const onLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={{ flex: 1, margin: 10, alignItems: "center" }}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"}
        size={34}
        color={isLiked ? "red" : colors.playbutton}
        onPress={onLikePress}
        style={styles.likeIcon}
      />
      <Link href={`/screens/workout/${data?.id}`}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Ionicons name={data.icon} size={48} color={colors.playbutton} />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoBadge}>
              <Ionicons name="time" size={14} color={colors.playbutton} />
              <Text style={styles.infoText}>{data.duration} min</Text>
            </View>
            <View style={styles.infoBadge}>
              <Ionicons name="flame" size={14} color={colors.playbutton} />
              <Text style={styles.infoText}>{data.caloriesBurned} cal</Text>
            </View>
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
    backgroundColor: colors.background,
    borderRadius: 15,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  likeIcon: { position: "absolute", top: 10, right: 10, zIndex: 1 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: colors.black,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  infoBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: colors.background,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.black,
  },
  description: {
    fontSize: 13,
    textAlign: "center",
    color: colors.gray,
    lineHeight: 18,
  },
});
