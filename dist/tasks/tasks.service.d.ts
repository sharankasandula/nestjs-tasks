import { ITaskModel } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): ITaskModel[];
    createTask(title: string, description: string): ITaskModel;
}
