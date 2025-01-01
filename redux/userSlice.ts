import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roles, UserModel } from "../models/user.model";

interface userSlice {
  user: UserModel;
}

const initialState: userSlice = {
  user: {
    id: "",
    email: "",
    username: "guest",
    role: Roles.GUEST,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
