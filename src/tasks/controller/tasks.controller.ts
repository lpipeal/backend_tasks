import { Controller, Get, Res, HttpStatus, Body, Post } from '@nestjs/common';
import { TaskService } from '../service/tasks.service';
import { TaskDto } from '../model/dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(
        private taskService:TaskService
    ){}
        @Get()
        getAllTask(@Res() response){
            this.taskService.getAllTask()
            .then(mensaje=>{
                response.status(HttpStatus.OK).json(mensaje);
            })
            .catch(()=>{
                response.status(HttpStatus.FORBIDDEN).json({mensaje:"Error al traer las tareas"});
            });
        }



        @Post()
        createTask(@Body() taskDto:TaskDto, @Res() response){
            this.taskService.createTask(taskDto)
            .then(mensaje=>{
                response.status(HttpStatus.CREATED).json(mensaje);
            })
            .catch(()=>{
                response.status(HttpStatus.CREATED).json({mensaje:"Error al insertar una nueva tarea"});
            });
        
        }            

}
