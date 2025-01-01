export type UserModel = {
  email: string;
  role: Roles;
  jwt: string;
};

export enum Roles {
  GUEST = "guest",
  VENDOR = "vendor",
  CLIENT = "client",
  ADMIN = "admin",
}
