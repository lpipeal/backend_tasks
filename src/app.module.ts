import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { MysqlModule } from './mysql.module';
import { TasksController } from './tasks/controller/tasks.controller';
import { TaskService } from './tasks/service/tasks.service';

@Module({
  imports: [MysqlModule],
  controllers: [TasksController],
  providers: [TaskService],
})
export class AppModule {}
