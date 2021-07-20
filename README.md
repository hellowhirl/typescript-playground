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

## Types

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
