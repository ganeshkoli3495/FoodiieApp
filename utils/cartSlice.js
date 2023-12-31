import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item?.card?.info?.id === action.payload.id);
            if (existingItemIndex !== -1) {
              state.items[existingItemIndex].quantity += 1;
            } else {
              state.items.push({...action.payload, quantity: 1});
            }
          },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const newItems = state.items.filter((item) => item?.card?.info?.id !== itemId);
            return { ...state, items: newItems };
          },
        clearCart: (state) => {
            state.items =[];
        },
        updateItemQuantity: (state, action) => {
            const {itemId, quantity} = action.payload;
            const existingItem = state.items.find(item => item?.card?.info?.id === itemId);
            if (existingItem) {
              existingItem.quantity = quantity;
            }
          }
        
    }
});

export const{addItem, removeItem, clearCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;