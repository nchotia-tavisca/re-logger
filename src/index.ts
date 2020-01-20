import { ActionReducer } from "@ngrx/store";

export function logState(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log(action);
    return reducer(state, action);
  };
};