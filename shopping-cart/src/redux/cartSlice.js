import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    add_cart: (state, action) => {
      const itemInCart = state.items.findIndex((ite) => ite.id === action.payload.id);
      if (itemInCart >= 0) {
        state.items[itemInCart].qnty += 1;
      } else {
        state.items.push({ ...state.items, ...action.payload, qnty: 1 })
      }
    },

    del_cart: (state, action) => {
      const data = state.items.filter((el) =>
        el.id !== action.payload)

      return {
        ...state,
        items: data
      }
    },
    decrement_qnty: (state, action) => {
      const itemInCart = state.items.findIndex((ite) => ite.id === action.payload.id);
      if (itemInCart <= 1) {
        state.items[itemInCart].qnty -= 1;
      }
      else {
        return { ...state.items, ...action.payload}
      }

    }





  },
},
);

export const { add_cart, del_cart, decrement_qnty } = cartSlice.actions

export default cartSlice.reducer