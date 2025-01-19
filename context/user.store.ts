import { Roles, UserModel } from "@/models/user.model";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  user: UserModel;
};

type Actions = {
  setUser: (UserModel: UserModel) => void;
  logoutUser: () => void;
};

export const useUser = create<State & Actions>()(
  immer((set) => ({
    user: {
      username: "",
      role: Roles.GUEST,
      jwt: "",
    },

    setUser: (user: UserModel) => set({ user }),
    logoutUser: () =>
      set({ user: { username: "", role: Roles.GUEST, jwt: "" } }, false),
  }))
);
