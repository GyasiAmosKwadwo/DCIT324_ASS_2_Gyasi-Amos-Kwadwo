export type WorkoutData = {
  id: string;
  title: string;
  description: string;
  duration: number;
  image: any;
  caloriesBurned: number;
  exercises: {
    id: number;
    name: string;
  }[];
};
