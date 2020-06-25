import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/model/entities/task.entity';

const conectionMysql =TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'task_db',
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true,
});

const taskEntity =TypeOrmModule.forFeature([Task]);

@Module({
  imports: [conectionMysql, taskEntity],
  exports:[conectionMysql, taskEntity],
  controllers: [],
  providers: [],
})
export class MysqlModule {}
