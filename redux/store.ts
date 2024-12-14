import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../app/features/favorites/favoritesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "../app/features/cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistFavoritesReducer = persistReducer(persistConfig, favoritesReducer);
const persistCartReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    favorites: persistFavoritesReducer,
    cart: persistCartReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
