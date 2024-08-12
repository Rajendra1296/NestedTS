import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskData } from './tasks/task.entity';
import { TaskRepository } from './tasks/Tasks.repository';
import { AuthModule } from './auth/auth.module';
import { UserRepository } from './auth/users.repository';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [TaskData],
    }),
    AuthModule,
  ],
  controllers: [AppController, TasksController],
  providers: [
    AppService,
    TasksModule,
    TasksService,
    TaskRepository,
    UserRepository,
  ],
})
export class AppModule {}
