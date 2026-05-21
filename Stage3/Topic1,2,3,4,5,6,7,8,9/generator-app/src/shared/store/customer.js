import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [],
  currentCustomer: null,
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    getCustomers: (state, action) => {
      state.customers = action.payload;
    },

    setCurrentCustomer: (state, action) => {
      state.currentCustomer = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCustomers, setCurrentCustomer } = customerSlice.actions;

export default customerSlice.reducer;
