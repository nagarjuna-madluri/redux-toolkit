import { v1 as uuid } from "uuid";

let contactsInitialState = [
  {
    id: uuid(),
    firstName: "James",
    lastName: "Smith",
    email: "jamessmith@example.com",
    phone: "123-234-345"
  },

  {
    id: uuid(),
    firstName: "Michael",
    lastName: "Hernandez",
    email: "michaelhernandez@example.com",
    phone: "8890492-940"
  },

  {
    id: uuid(),
    firstName: "Maria",
    lastName: "Garcia",
    email: "mariagarcia@example.com",
    phone: "882-891-787"
  },

  {
    id: uuid(),
    firstName: "David",
    lastName: "Williams",
    email: "davidwilliams@example.com",
    phone: "876-771-891"
  },

  {
    id: uuid(),
    firstName: "Clark",
    lastName: "Samuel",
    email: "clarksamuel@example.com",
    phone: "998-660-234"
  }
];

export default contactsInitialState;