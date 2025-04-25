import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {{camelCase name}}Reducer from './slices/{{camelCase name}}/{{camelCase name}}Slice';

const rootReducer = combineReducers({
  // {{camelCase name}}: {{camelCase name}}Reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => {
    const middlewares = [
      // INSERT MIDDLEWARES HERE
    ];
    return defaultMiddleware().concat(...middlewares);
  },
});

export { store };
