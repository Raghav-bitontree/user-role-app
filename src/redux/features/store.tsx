import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/users-slice";
import rolesReducer from "./roles/roles-slice";

const rootReducer = combineReducers({
  users: userReducer,
  roles: rolesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
