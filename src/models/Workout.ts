import { UserModel } from './users'

export class WorkoutModel {
    id: number;
    userId: number;
    startTime: Date;
    endTime: Date;
}