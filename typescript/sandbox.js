// Dynamic (any) type
var firstName;
firstName = "mohammad";
console.log(firstName);
firstName = 20;
console.log(firstName);
firstName = new Date();
firstName = { name: "Mohammad", age: 20 };
console.log(firstName);
var names = [];
names.push("ahmad", 20, false, new Date(), { name: "mohammad", age: 20 });
console.log(names);
var user;
user = { name: "ahmad", age: 20 };
console.log(user);
user = { name: 20, age: "mohammad" };
console.log(user);
var person;
person = {
    name: 20,
    age: "ahmad",
};
console.log(person);
