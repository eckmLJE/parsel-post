import { combineReducers } from "redux";

import statementReducer from "./statementReducer";

export const rootReducer = combineReducers({
  statements: statementReducer
});
