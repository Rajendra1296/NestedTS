install python 3, docker , pyAdmin, postgresSQL

# steps to run

docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

> to check if docker is running-

docker contanier ls

> stop the container

docker container stop postgres-nest

> to start

docker container start postgres-nest

> to remove

docker container rm postgres-nest

> > next start pgAdmin register a database then in connections entre password which is same as username

# link ts file to database

add this to app module

> import { TypeOrmModule } from '@nestjs/typeorm';
> @Module({
> imports: [

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
    }),

],
