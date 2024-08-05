import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsEnum(TaskStatus)
  status?: TaskStatus;
  @IsNotEmpty({ message: 'the search in-put is not string' })
  search?: string;
}
