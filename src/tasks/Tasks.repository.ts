import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TaskData } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/gte_tasks_filter.dto';
import { user } from 'src/auth/user.entity';

@Injectable()
export class TaskRepository extends Repository<TaskData> {
  private logger = new Logger(`TaskRepository`);
  constructor(private dataSource: DataSource) {
    super(TaskData, dataSource.createEntityManager());
  }

  async createTask(
    createTaskDto: CreateTaskDto,
    User: user,
  ): Promise<TaskData> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
      User,
    });

    await this.save(task);
    return task;
  }
  async DeleteTaskById(id: string, User: user): Promise<void> {
    // this.TaskData = this.tasks.filter((task) => task.id !== id);
    const result = await this.delete({ id, User });
    if (result.affected === 0) {
      throw new NotFoundException(`task not ${id} found`);
    }
  }
  async UpdateTaskById(
    id: string,
    status: TaskStatus,
    User: user,
  ): Promise<TaskData> {
    const task = await this.getById(id, User);
    task.status = status;
    await this.save(task);
    return task;
  }
  async getById(id: string, User: user) {
    const found = await this.findOne({
      where: { id, User },
    });

    if (found) {
      return found;
    } else {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
  async GetTasks(
    filterDto: GetTasksFilterDto,
    User: user,
  ): Promise<TaskData[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('TaskData');
    query.where({ User });
    if (status) {
      query.andWhere('TaskData.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        '(LOWER(TaskData.title) LIKE LOWER(:search) OR LOWER(TaskData.description) LIKE LOWER(:search))',
        { search: `${search}` },
      );
    }
    try {
      const tasks = await query.getMany();
      return tasks;
    } catch (error) {
      this.logger.error(
        `Failed to get the user "${User.username}" with filters "${JSON.stringify(filterDto)}" `,
        error.stack,
      );
    }
  }
}
