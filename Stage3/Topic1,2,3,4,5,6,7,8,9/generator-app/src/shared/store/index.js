import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from '@/feature/resume/store/resume';
import globalReducer from './global';
import customerReducer from './customer';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    resume: resumeReducer,
    customer: customerReducer,
  },
});
