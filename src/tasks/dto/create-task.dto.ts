import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'add title ,its mandatory  ' })
  title: string;
  @IsNotEmpty({ message: 'add desc,its mandatory ' })
  description: string;
  @IsNotEmpty({ message: 'add status,its mandatory' })
  status: string;
}
