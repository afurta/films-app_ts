import { configureStore } from "@reduxjs/toolkit";
import cartStoreSlice from "./cartStoreSlice";
import filmsStoreSlice from "./filmsStoreSlice";

export default configureStore({
  reducer: {
    filmsStore: filmsStoreSlice,
    cartStore: cartStoreSlice,
  },
});
