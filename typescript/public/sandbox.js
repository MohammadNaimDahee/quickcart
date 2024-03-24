"use strict";
// Type Aliases
const sayHello = (id, name) => {
    console.log(`${name} with ID ${id} says hello`);
};
sayHello(1, "Ahmad");
const logUserDetails = (user) => {
    console.log(`${user.id} - ${user.details}`);
};
logUserDetails({ id: 2, details: "User Details" });
