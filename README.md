# About TypeScript

### Benefits of using TS

- a super set of JavaScript (valid JS code is also valid TS code)
- has additional features not in most browswers, like typing (although not required to use in TS)
- TS has object-oriented features (classes, interfaces, constructors, public/private access modifiers, fields, properties, generics, etc.)
- Able to catch many errors at compile-time (rather than run-time)
- TS has great tooling (like Intellisense)
- we need to transpile our TS code into JS code

### Hello world in TS

```
$ sudo npm install -g typescript
```

1. Write some basic JavaScript function that console logs "hello world"
2. Compile into TS which will also generate as .js file

```
$ tsc main.ts

$ node main.js
```

- TS files will report errors in our code wiht a squiggly (scope error, etc.), but TS compiler will still generate valid JavaScript code
- opt to use the `let` keyword whenevver we declare a variable in TS

### Types

- `number, string, boolean, any, number[], any[]`
- `enum` - put all related constants in a container (compiled JS code is quite complicated)
- the type is `any` by default when we don't set any value to a variable
- if we don't specify types then we lose Intellisense suggestions

### Type Assertions

- purely a way to tell TS compiler about the type of a variable, so we can access the Intellisense

```typescript
let result = (<string>message).endsWith("c"); // common method

let alternative = (message as string).endsWith("c"); // alternative method
```

### Arrow Functions

A cleaner way to define functions:

```typescript
let regular = function (message) {
  console.log(message);
};

let arrowFunction = (message) => console.log(message); // called "lambda expressions" in C#
```

### Interfaces

Defining custom types in TS

- with interface we can define the shape of an object
- we can also reuse in multiple places
- use Pascal naming convention, combined with lower-case for our parameter

  ```typescript
  interface Point {
    x: number;
    y: number;
  }

  let drawPoint = (point: Point) => {};
  ```

### Classes & Objects

- Cohesion: things that are related should be part of one unit (go together)
- a class groups properties and methods that are highly related

* \*interfaces are purely for declarations, they cannot include any implementation - so we use a Class

- when defining an object of a custom type, we need to allocate memory to it, so we use `new` to create an instance

```ts
let point: Point = new Point();
// or simply
let point2 = new Point(); // TS compiler can infer that type of this object is 'Point'
```

### Constructors

- a method that is called when we create an instance of that class
- we can give it paramters and assign types to each
- we can initialize an object without passing any arguments if we make the parameters optional
- to make a parameter optional use `?` as a suffix to the parameter, then all parameters on right side should also be optional

```ts
  constructor(x?: number, y?: number) {
    // initialize each field
    this.x = x;
    this.y = y;
  }
```
