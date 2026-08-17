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
            <Image source={data.image} style={{ width: 100, height: 100 }} />
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
  },
  likeIcon: { position: "absolute", top: 10, right: 10, zIndex: 1 },
  card: {
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});
