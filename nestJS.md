## what is nestJS

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript as its primary language and is built with developer productivity and maintainability in mind. NestJS combines elements from OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming), giving developers a flexible and modular structure to organize their code.

Key features of NestJS include:

Modularity: NestJS encourages modularity in code organization, making it easier to manage complex applications by dividing them into modules.

Dependency Injection: It leverages dependency injection to allow for better testing and reusability of code.

Decorators: Decorators are heavily used in NestJS to define routes, request handlers, middleware, and more, providing a structured and intuitive way to build APIs.

Middleware: Middleware support allows developers to intercept and modify incoming HTTP requests.

WebSockets: Built-in support for WebSockets allows real-time communication between client and server.

GraphQL: NestJS provides built-in support for GraphQL, allowing developers to build APIs using the GraphQL schema language.

CLI: The NestJS Command Line Interface (CLI) provides tools for scaffolding and managing NestJS projects.

Testing: NestJS supports unit testing, integration testing, and end-to-end testing out of the box.

Overall, NestJS is popular among developers for its robustness, scalability, and maintainability, especially for building enterprise-grade applications and APIs in

# Dependency Injection (DI):

Dependency Injection is a design pattern used in software development where the dependencies of a class (i.e., the objects it depends on to function) are injected into it rather than the class creating them itself. In NestJS, DI allows you to define the dependencies of a class or service in a way that promotes modularity, testability, and reusability.

Benefits:
Modularity: Dependencies can be easily swapped or replaced by providing different implementations.
Testability: Simplifies unit testing by allowing mock dependencies to be injected during testing.
Reusability: Encourages reusable components as they are decoupled from specific implementations.

# Decorators:

Decorators are a feature of TypeScript (and JavaScript) that allows you to add metadata or modify the behavior of classes, methods, or properties at design time. In NestJS, decorators are extensively used to define various aspects of your application, such as routes, request handling logic, middleware, and more.

Usage in NestJS:

Controller Decorator: Marks a class as a controller and defines its base route.
Route Decorators: Define HTTP methods (GET, POST, etc.) for specific routes within a controller.
Middleware Decorators: Apply middleware functions to controllers or routes.
Parameter Decorators: Inject request parameters, body, or other data into controller methods.
Custom Decorators: Create custom decorators to encapsulate common behavior or logic.
