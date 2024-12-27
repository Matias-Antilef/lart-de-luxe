export type UserModel = {
  id: number;
  email: string;
  username: string;
  role: Roles;
};

export enum Roles {
  VENDOR = "vendor",
  CLIENT = "client",
  ADMIN = "admin",
}
