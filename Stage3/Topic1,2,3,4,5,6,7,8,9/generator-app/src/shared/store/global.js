import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    initProfile: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.profile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initProfile } = globalSlice.actions;

export default globalSlice.reducer;
