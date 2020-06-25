import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../model/entities/task.entity';
import { TaskDto } from '../model/dto/task.dto';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRepository:Repository<Task>
    ){}

        async getAllTask():Promise<Task[]>{
            return await this.taskRepository.find();
            // return 'hola mundo';
        }

        async createTask(task:TaskDto){
            const newTask = new Task();
            
             newTask.name= task.name;
             newTask.description= task.description;
             newTask.createdAt= task.createdAt;
             newTask.updatedAt= task.updatedAt;
             
            return  this.taskRepository.save(newTask);
        }




}
