import { MuscleGroupModel } from './MuscleGroupModel';

export class Exercise {
    id: number;
    exerciseName: string;
    userId: number;
    variation: string;
    MuscleGroup: MuscleGroupModel;
  }