import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {}
