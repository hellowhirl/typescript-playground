# About TypeScript

### Benefits of using TS

- a super set of JavaScript (valid JS code is also valid TS code)
- has additional features not in most browswers, like typing (although not required to use in TS)
- TS has object-oriented features (classes, interfaces, constructors, public/private access modifiers, fields, properties, generics, etc.)
- Able to catch many errors at compile-time (rather than run-time)
- TS has great tooling (like intelisense)
- we need to transpile our TS code into JS code

### Hellow world in TS

```
$ sudo npm install -g typescript
```

1. Write some basic JavaScript function that console logs "hello world"
2. Compile into TS which will also generate as .js file

```
$ tsc main.ts

$ node main.js
```
