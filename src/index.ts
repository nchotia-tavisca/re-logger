import { ActionReducer } from "@ngrx/store";

if (!window["middleware"]) {
  window["middleware"] = logState;
}

export function logState(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log(action);
    return reducer(state, action);
  };
};