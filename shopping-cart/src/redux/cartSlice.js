import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    add_cart: (state, action) => {
      const itemInCart = state.items.findIndex((ite) => ite.id === action.payload.id);
      if (itemInCart >=0) {
        state.items[itemInCart].qnty += 1;
      } else {
        state.items.push({ ...state.items,...action.payload, qnty: 1 })
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
      // const itemdecrement = state.items.find((item) => item.id !== action.payload);
      const decrement=state.items.map((e)=>{
        if(e.id === action.payload)
        {
          return{...e,qnty:e.qnty +1}
        }
        return e;
      })
      return{...state,items:decrement}
      // if (state.items[itemdecrement].qnty >= 1)
      // {
      //   const deleteitem=state.items[itemdecrement] -= 1
      //   console.log([...state.items,deleteitem]);

      //   return{
      //     ...state,
      //     items:[...state.items]
      //   }
      // }
      // if(itemdecrement === 1)
      // {
      //   itemdecrement.qnty = 1
      //       }
      //       else{
      //         itemdecrement.qnty --;
      //       }


    },
  }
})

export const { add_cart, del_cart, increment_qnty ,decrement_qnty} = cartSlice.actions

export default cartSlice.reducer