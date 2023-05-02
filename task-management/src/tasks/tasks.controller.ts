import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks') //This is for url (/tasks)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //   localhost:3000/tasks
  @Get() //This is Get decorator
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  //   localhost:3000/tasks/sdfhjkhsh
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post() //This is Post decorator
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
