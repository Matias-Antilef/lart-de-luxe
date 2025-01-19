export type UserModel = {
  username: string;
  role: Roles;
  jwt: string;
};

export enum Roles {
  GUEST = "guest",
  VENDOR = "vendor",
  CLIENT = "client",
  ADMIN = "admin",
}

// {
//   "id": 35,
//   "name": "Matias",
//   "lastname": "Nicolas",
//   "address": null,
//   "email": "nicolas@gmail.com",
//   "phoneNumber": null,
//   "birthday": null,
//   "active": true
// }
