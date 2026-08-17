import { WorkoutData } from "@/utils/types";

export const workoutData: WorkoutData[] = [
  {
    id: "1",
    title: "Full Body Blast",
    description:
      "A balanced routine to target all major muscle groups and boost overall fitness.",
    duration: 45,
    image: require("@/assets/images/react-logo.png"),
    icon: "body",
    caloriesBurned: 420,
    exercises: [
      { id: 1, name: "Jumping Jacks" },
      { id: 2, name: "Push-Ups" },
      { id: 3, name: "Bodyweight Squats" },
      { id: 4, name: "Plank Hold" },
      { id: 5, name: "Mountain Climbers" },
    ],
  },
  {
    id: "2",
    title: "Cardio Crusher",
    description:
      "High-energy cardio session designed to increase heart rate and improve endurance.",
    duration: 40,
    image: require("@/assets/images/react-logo.png"),
    icon: "flame",
    caloriesBurned: 500,
    exercises: [
      { id: 1, name: "High Knees" },
      { id: 2, name: "Burpees" },
      { id: 3, name: "Skater Hops" },
      { id: 4, name: "Jump Rope" },
      { id: 5, name: "Sprint Intervals" },
    ],
  },
  {
    id: "3",
    title: "Strength Builder",
    description:
      "Focused strength training with bodyweight and resistance movements.",
    duration: 50,
    image: require("@/assets/images/react-logo.png"),
    icon: "barbell",
    caloriesBurned: 460,
    exercises: [
      { id: 1, name: "Lunges" },
      { id: 2, name: "Tricep Dips" },
      { id: 3, name: "Glute Bridges" },
      { id: 4, name: "Superman Hold" },
      { id: 5, name: "Single-Leg Deadlift" },
    ],
  },
  {
    id: "4",
    title: "Core Focus",
    description:
      "A core-centric workout to strengthen abs, obliques, and lower back stability.",
    duration: 35,
    image: require("@/assets/images/react-logo.png"),
    icon: "square",
    caloriesBurned: 360,
    exercises: [
      { id: 1, name: "Russian Twists" },
      { id: 2, name: "Bicycle Crunches" },
      { id: 3, name: "Leg Raises" },
      { id: 4, name: "Side Plank" },
      { id: 5, name: "Flutter Kicks" },
    ],
  },
  {
    id: "5",
    title: "Upper Body Sculpt",
    description:
      "Build upper body strength with a mix of pushing and pulling exercises.",
    duration: 45,
    image: require("@/assets/images/react-logo.png"),
    icon: "arrow-up-circle",
    caloriesBurned: 410,
    exercises: [
      { id: 1, name: "Shoulder Taps" },
      { id: 2, name: "Inverted Rows" },
      { id: 3, name: "Diamond Push-Ups" },
      { id: 4, name: "Pike Push-Ups" },
      { id: 5, name: "Arm Circles" },
    ],
  },
  {
    id: "6",
    title: "Flexibility Flow",
    description:
      "A low-impact session focused on mobility, stretching, and recovery.",
    duration: 30,
    image: require("@/assets/images/react-logo.png"),
    icon: "leaf",
    caloriesBurned: 220,
    exercises: [
      { id: 1, name: "Cat-Cow Stretch" },
      { id: 2, name: "Downward Dog" },
      { id: 3, name: "Hip Flexor Stretch" },
      { id: 4, name: "Hamstring Stretch" },
      { id: 5, name: "Child’s Pose" },
    ],
  },
];
