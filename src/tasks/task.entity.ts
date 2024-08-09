import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';
import { user } from 'src/auth/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class TaskData {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((_type) => user, (User) => User.tasks, { eager: false })
  @Exclude({ toPlainOnly: true })
  User: user;
}
