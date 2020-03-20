import { TasksService } from './tasks.service';
import { ITaskModel } from './task.model';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): ITaskModel[];
    createTask(title: string, description: string): ITaskModel;
}
