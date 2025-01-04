import { useDispatch, useSelector } from "react-redux";
import { UserModel } from "@/models/user.model";
import { logout, setUser } from "../slices/userSlice";
import { RootState } from "../store";

export const useUser = () => {
  const dispatch = useDispatch();

  const handleSetUser = (UserModel: UserModel) => {
    dispatch(setUser({ ...UserModel }));
    return handleSetUser;
  };

  const getUser = () => {
    return useSelector((state: RootState) => state.user);
  };

  const logoutUser = () => {
    dispatch(logout());
    return logoutUser;
  };

  return { handleSetUser, getUser };
};
