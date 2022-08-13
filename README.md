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
```

3. Execute in node to see that code in .js file outputs what we expect

```
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
class PointClass {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(this.x + ", " + this.y);
  }
}

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

### Access Modifiers

```
public
private
protected
```

- we use when we initialize an object and we don't want the properties to be changeable
- this makes our code more predictable and reduces the chances for bugs

```ts
// let's avoid this
let point = new PointClass(1, 2);
point.x = 3;
```

```ts
// by doing this
class PointClass {
  private x: number;
  y: number;
  // ...
}
```

- all members are `public` by default so using `public` can be redundant, unless we use in our constructor parameters then we should specify `public`
- we can also reduce redundancy in our code like below
  - TS will automatically generate 'x' and 'y' fields
  - TS will ALSO auto generate assignments 'this.x = x' and 'this.y = y'

```ts
class PointClass {
  constructor(private x?: number, private y?: number) {}
  //..
}
```

### Properties

- when we want to get or set the value of a field from the outside we can use properties (which are methods)

```ts
  get x() {
    //
  }
  set x(value) {
    //
  }
```

- we can then use these properties like fields

```ts
let readX = optimalPoint.x;

optimalPoint.x = 10; // set x
```

- a property looks like a field from the outside but internally it's really a method in the class
- common convention is to rename our construcctor parameters with an underline like `_x` and `_y`

```ts
constructor(private _x?: number, private _y?: number) {}
```

### Modules

- separate types into individual files for better code organization. Types can be:
  - classes
  - functions
  - simple variables
  - objects
- add `export` keyword to make class visible outside the file (then it will become a module)

```ts
export class PointOptimal {
  //
}
```

- in curly braces we add the names of the types we want to import
- `from` name of the module which is relative path to module from current file

```ts
import { PointOptimal, a, b, c, etc } from "./point";
```
