// Type Aliases

type StringOrNumber = string | number;

const sayHello = (id: StringOrNumber, name: string) => {
  console.log(`${name} with ID ${id} says hello`);
};

sayHello(1, "Ahmad");

const logUserDetails = (user: { id: StringOrNumber; details: string }) => {
  console.log(`${user.id} - ${user.details}`);
};

logUserDetails({ id: 2, details: "User Details" });
