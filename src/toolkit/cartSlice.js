import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  // cartTotalQuantity: 0,
  // cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card?.info?.id === action.payload.card?.info?.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
        toast.info("increased product quantity", { position: "bottom-left" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
        toast.success(`${action.payload.card?.info?.name} added to cart `, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// state.items.push(action.payload);

//  const existingItem = state.items.find((item) => item.id === action.payload.id);
//  if (existingItem) {
//    existingItem.quantity++;
//  } else {
//    state.items.push({ ...action.payload, quantity: 1 });
//  }

//  removeItem: (state, action) => {
//       // state.items.pop();
//       const itemIndex = state.items.findIndex(
//         (item) => item.card?.info?.id === action.payload?.card?.info?.id
//       );
//       if (itemIndex >= 0) {
//         state.items[itemIndex].cartQuantity--;
//       } else {
//         const removeProduct = { ...action.payload, cartQuantity: 0 };
//         const index = state.items.indexOf(removeProduct);
//         if (index > -1) {
//           state.items.splice(index, 1);
//         }
//       }
//     },
