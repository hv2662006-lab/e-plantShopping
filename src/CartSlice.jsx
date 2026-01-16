import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add a new item to the cart
    addItem: (state, action) => {
      // action.payload should be the plant object to add
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If item already exists, increase quantity by 1
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it with initial quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      // action.payload should be the name of the item to remove
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update quantity of an existing item
    updateQuantity: (state, action) => {
      // action.payload = { name: 'Plant Name', quantity: 3 }
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer as default
export default CartSlice.reducer;
