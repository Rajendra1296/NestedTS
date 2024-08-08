import { TaskData } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @OneToMany((_type) => TaskData, (task) => task.User, { eager: true })
  tasks: TaskData[];
}
