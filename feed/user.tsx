import { faker } from "@faker-js/faker";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  auth_provider: string;
}

interface Data {
  data: User[];
}

const data: Data = {
  data: [],
};

for (let i = 0; i < 100; i++) {
  const employee = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: "@Password123",
    confirmPassword: "@Password123",
    auth_provider: ["Credentials", "Google", "Facebook", "Github"][
      Math.floor(Math.random() * 4)
    ],
  };

  data.data.push(employee);
}

console.log(JSON.stringify(data));
