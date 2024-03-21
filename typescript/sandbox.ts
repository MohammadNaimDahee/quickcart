// Dynamic (any) type
let firstName: any;

firstName = "mohammad";
console.log(firstName);

firstName = 20;
console.log(firstName);

firstName = new Date();

firstName = { name: "Mohammad", age: 20 };

console.log(firstName);

let names: any[] = [];

names.push("ahmad", 20, false, new Date(), { name: "mohammad", age: 20 });
console.log(names);

let user: any;

user = { name: "ahmad", age: 20 };
console.log(user);

user = { name: 20, age: "mohammad" };
console.log(user);

let person: {
  name: any;
  age: any;
};

person = {
  name: 20,
  age: "ahmad",
};

console.log(person);
