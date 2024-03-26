import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartList: [],
  userDetail: [],
};

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const itemExist = state.cartList.find(
        (item) => item?.id === actions.payload.id,
      );
      if (itemExist) {
        state.cartList.map((item) => {
          if (item?.id === actions.payload.id) {
            item.count = 1;
          }
        });
      } else {
        state.cartList.push({
          ...actions.payload,
          count: 1,
        });
      }
    },
    increment: (state, actions) => {
      const productId = actions.payload;
      state.cartList.map((item) => {
        if (productId === item.id) {
          item.count++;
        }
      });
    },
    decrement: (state, actions) => {
      const productId = actions.payload;
      state.cartList.map((item) => {
        if (productId === item.id) {
          item.count--;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userDetail.push(action.payload);
        console.log("success");
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("error");
      });
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
