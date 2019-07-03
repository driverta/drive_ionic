import { UserModel } from './users'
import { WorkoutExercise } from './workout-exercise.model';

export class Workout {
    id: number;
    user: UserModel;
    workoutExercises: WorkoutExercise[];
}