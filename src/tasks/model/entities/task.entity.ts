import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";
import { Transform } from "stream";
import { timeStamp } from "console";

@Entity('tasks')
export class Task {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    createdAt: Date;
    
    @Column()
    updatedAt: Date;
    
}
