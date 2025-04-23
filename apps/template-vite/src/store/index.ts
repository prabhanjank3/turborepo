import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {{camelCase name}}Reducer from './slices/{{camelCase name}}/{{camelCase name}}Slice';

const rootReducer = combineReducers({
  // {{camelCase name}}: {{camelCase name}}Reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      // INSERT MIDDLEWARES HERE
    ),
});

export { store };
