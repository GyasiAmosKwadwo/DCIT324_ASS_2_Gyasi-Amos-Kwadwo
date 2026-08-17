export type WorkoutData = {
  id: string;
  title: string;
  description: string;
  duration: number;
  image: any;
  icon: string;
  caloriesBurned: number;
  exercises: {
    id: number;
    name: string;
  }[];
};
