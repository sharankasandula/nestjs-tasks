import { Injectable } from '@nestjs/common';
import { ITaskModel, TaskStatus } from './task.model';
import {v4 as uuidv4} from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

  private tasks: ITaskModel[] = [];

  getAllTasks(): ITaskModel[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): ITaskModel {
    const { title, description } = createTaskDto
    const task: ITaskModel = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.DONE
    };

    this.tasks.push(task);
    return task;
  }
}
