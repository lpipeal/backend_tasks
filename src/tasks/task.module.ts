import { Module } from '@nestjs/common';

import { TasksController } from './controller/tasks.controller';
import { TaskService } from './service/tasks.service';

@Module({
  imports: [],
  exports: [],
  controllers: [ TasksController],
  providers: [ TaskService],
})
export class TaskModule {}
