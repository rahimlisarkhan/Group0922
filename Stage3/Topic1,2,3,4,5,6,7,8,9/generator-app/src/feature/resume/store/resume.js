import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  design: {
    color: '#000000',
    font: 'Arial',
  },
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setDesignColor: (state, action) => {
      const newData = action.payload;

      state.design.color = newData;
    },

    setDesignFont: (state, action) => {
      state.design.font = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setDesignColor,
  setDesignFont,
} = resumeSlice.actions;

export default resumeSlice.reducer;
