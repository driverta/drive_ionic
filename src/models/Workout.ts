import { UserModel } from './users'

export class WorkoutModel {
    id: number;
    user: UserModel;
    startTime: Date;
    endTime: Date;
}