import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userSlice from "./slices/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistFavoritesReducer = persistReducer(persistConfig, favoritesReducer);
const persistCartReducer = persistReducer(persistConfig, cartSlice);
const persistUserReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    favorites: persistFavoritesReducer,
    cart: persistCartReducer,
    user: persistUserReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
