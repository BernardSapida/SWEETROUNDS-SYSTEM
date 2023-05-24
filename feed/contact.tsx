import { faker } from "@faker-js/faker";

interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Data {
  message: Message[];
}

const data: Data = {
  message: [],
};

for (let i = 0; i < 100; i++) {
  const message = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    subject: "This is a subject",
    message: "Hello Bernard Sapida!",
  };
  data.message.push(message);
}
