import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { testSlice } from './querySlice/test.slice';
import counterReducer from './localSlices/counterSlice';

// IMPORT SLICES HERE

const rootReducer = combineReducers({
  counter: counterReducer,
  [testSlice.reducerPath]: testSlice.reducer,
  // INSERT REDUCERS HERE
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(testSlice.middleware),
  // INSERT MIDDLEWARES HERE
});

export { store };
