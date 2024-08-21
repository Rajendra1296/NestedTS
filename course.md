## DTOS:

• Common concept in software development that is not specific to Nestjs.
Result in more bulletproof code, as it can be used as a TypeScript type.
• Do not have any behavior except for storage, retrieval, serialization and deserialization of its own data.
• Result in increased performance (although negligible in small applications).
nest

## Classes VS Interfaces for DTOS

Data Transfer Objects (DTOs) can be defined as classes or interfaces.  
The recommended approach is to use classes, also clearly documented in the NestS documentation.
The reason is that interfaces are a part of TypeScript and therefore are not preserved post-compilation.
Classes allow us to do more, and since they are a part of JavaScript, they will be preserved post-compilation.
NestS cannot refer to interfaces in run-time, but can refer to classes.
TLDR: Classes are the way to go for DTOs.
nest

## NEST JS pipes

NestJS Pipes
Pipes operate on the arguments to be processed by the route handler,
just before the handler is called.
• Pipes can perform data transformation or data validation.
• Pipes
• Pipes can return data - either original or modified - which will be passed on to the route handler.
• Pipes can throw exceptions. Exceptions thrown will be handled by NestS and parsed into an error response.

# Default Pipes in NestJS

NestS ships with useful pipes within the @nestjs/common module.

# ValidationPipe

Validates the compatibility of an entire object against a class (goes well with DTOs, or Data Transfer Objects). If any property cannot be mapped properly (for example, mismatching type) validation will fail.
A very common use case, therefore having a built-in validation pipe is extremely useful.

# ParseIntPipe

By default, arguments are of type String. This pipe validates that an argument is a number. If successful, the argument is transformed into a Number and passed on to the handler.
/Users/itstock/Desktop/NestedJS/nestjstask-management/Screenshot 2024-08-05 at 2.55.17 PM.png

# Handler-level pipes

are defined at the handler level, via the @UsePipes () decorator. Such pipe will process all parameters for the incoming requests.
@Post ( )
@UsePipes (SomePipe )
createTask(
@Body ('description' ) description
) <
// ...
｝

# Parameter-level pipes

are defined at the parameter level. Only the specific parameter for which the pipe has been specified will be processed.
@Post( )
createTask(
@Body( 'description', SomePipe) description
) <

# Global pipes

are defined at the application level and will be applied to any incoming request.
async function bootstrap() <
const app = await NestFactory. create(ApplicationModule);
app. useGlobalPipes(SomePipe) ;
await app.listen(3000);
bootstrap() ;
