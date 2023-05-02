import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { Task } from './task.entity';

@Module({
  //   imports: [TypeOrmModule.forFeature([TasksRepository])],
  imports: [
    TypeOrmExModule.forCustomRepository([TasksRepository]),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
