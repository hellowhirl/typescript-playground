let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: any[] = [1, true, "a", false]; // here we can initialize the array with values

// enum - we can put all related constants in a container instaed of `const ColorRed = 0`, etc.
enum Color {
  Red = 0,
  Blue = 1,
  Green = 2,
} // by default, values start from 0, but we should define them explicitly as a good practice
let backgroundColor = Color.Blue; // we can complete code without having to remember all the details

let words;
words = "abc";

let result = (<string>message).endsWith("c"); // parenthesis are essential
let alternative = (message as string).endsWith("c"); // same as above
