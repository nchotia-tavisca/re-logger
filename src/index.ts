import { ActionReducer, MetaReducer } from "@ngrx/store";


declare global {
  interface Window { middleware: any; }
}

if(!window.middleware) {
  window.middleware = logState;
}

function logState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log(state);
      return reducer(state, action);
    };
  }

export const customReducer = window.middleware as MetaReducer<any>;