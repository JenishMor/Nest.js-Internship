import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  //   private tasks: Task[] = [];

  //   getAllTasks(): Task[] {
  //     return this.tasks;
  //   }

  //   getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
  //     const { status, search } = filterDto;

  //     let tasks = this.getAllTasks();

  //     if (status) {
  //       tasks = tasks.filter((task) => task.status === status);
  //     }

  //     if (search) {
  //       tasks = tasks.filter((task) => {
  //         if (
  //           task.title.toLowerCase().includes(search) ||
  //           task.description.toLowerCase().includes(search)
  //         ) {
  //           return true;
  //         }
  //         return false;
  //       });
  //     }
  //     return tasks;
  //   }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Task with Id ${id} not found!`);
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with Id ${id} not found!`);
    }
  }

  //   updateTaskStatus(id: string, status: TaskStatus): Task {
  //     const task = this.getTaskById(id);
  //     task.status = status;
  //     return task;
  //   }
}
