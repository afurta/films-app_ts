import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICartData = {
  cart: {
    [id: string]: number;
  };
};

type ICartState = {
  cartStore: ICartData;
};

const initialState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addToCart(state: ICartData, action: PayloadAction<string>) {
      let articul = action.payload;
      if (state.cart![articul] === undefined) state.cart[articul] = 0;
      state.cart[articul]++;
    },
    deleteToCart(state: ICartData, action: PayloadAction<string>) {
      let articul = action.payload;
      if (state.cart![articul] === 1) {
        delete state.cart[articul];
      } else {
        state.cart[articul]--;
      }
    },
  },
});

export const { addToCart, deleteToCart } = cartSlice.actions;
export const SelectCart = (state: ICartState) => state.cartStore.cart;
export default cartSlice.reducer;
