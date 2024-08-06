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


What is the Active Record pattern?
In TypeORM you can use both the Active Record and the Data Mapper patterns.

Using the Active Record approach, you define all your query methods inside the model itself, and you save, remove, and load objects using model methods.

Simply said, the Active Record pattern is an approach to access your database within your models. You can read more about the Active Record pattern on Wikipedia.

Example:

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}
All active-record entities must extend the BaseEntity class, which provides methods to work with the entity. Example of how to work with such entity:

// example how to save AR entity
const user = new User()
user.firstName = "Timber"
user.lastName = "Saw"
user.isActive = true
await user.save()

// example how to remove AR entity
await user.remove()

// example how to load AR entities
const users = await User.find({ skip: 2, take: 5 })
const newUsers = await User.findBy({ isActive: true })
const timber = await User.findOneBy({ firstName: "Timber", lastName: "Saw" })
BaseEntity has most of the methods of the standard Repository. Most of the time you don't need to use Repository or EntityManager with active record entities.

Now let's say we want to create a function that returns users by first and last name. We can create such functions as a static method in a User class:

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean

    static findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    }
}
And use it just like other methods:

const timber = await User.findByName("Timber", "Saw")
What is the Data Mapper pattern?
In TypeORM you can use both the Active Record and Data Mapper patterns.

Using the Data Mapper approach, you define all your query methods in separate classes called "repositories", and you save, remove, and load objects using repositories. In data mapper your entities are very dumb - they just define their properties and may have some "dummy" methods.

Simply said, data mapper is an approach to access your database within repositories instead of models. You can read more about data mapper on Wikipedia.

Example:

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    isActive: boolean
}
Example of how to work with such entity:

const userRepository = dataSource.getRepository(User)

// example how to save DM entity
const user = new User()
user.firstName = "Timber"
user.lastName = "Saw"
user.isActive = true
await userRepository.save(user)

// example how to remove DM entity
await userRepository.remove(user)

// example how to load DM entities
const users = await userRepository.find({ skip: 2, take: 5 })
const newUsers = await userRepository.findBy({ isActive: true })
const timber = await userRepository.findOneBy({
    firstName: "Timber",
    lastName: "Saw",
})


####
// import { Repository } from 'typeorm';
// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Task } from './task.entity';
// @Entity(Task)

import { Injectable } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';

// export class MyEntity <Task> {}
@Injectable()
export class UsersRepository extends Repository<TaskEntity> {
  constructor(private dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  async getById(id: string) {
    return this.findOne({ where: { id } });
  }
  // ...
}
