// Explicit Types
let firstName: string;
let age: number;
let isLoggedIn: boolean;

firstName = "ahmad";
age = 10;
isLoggedIn = true;

//Arrays
let names: string[] = [];

names.push("ahmad");
// Union Types
let union: (string | number)[] = [];
union.push("ahmad", 10);

let mixedValue: number | string;
mixedValue = "mohammad";
mixedValue = 10;

// Objects

let person: object;

person = { name: "ahmad", age: 10, isLogged: false };

let user: {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  isLogged?: boolean;
};

user = {
  firstName: "mohammad",
  lastName: "ahmad",
  dateOfBirth: new Date(),
};

console.log(user);
