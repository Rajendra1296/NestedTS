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