export type UserModel = {
  id: string;
  email: string;
  username: string;
  role: Roles;
};

export enum Roles {
  GUEST = "guest",
  VENDOR = "vendor",
  CLIENT = "client",
  ADMIN = "admin",
}
