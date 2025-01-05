import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import cartSlice from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import userSlice from "./slices/userSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
