import { ActionReducer, MetaReducer } from "@ngrx/store";

if(!window['middleware']) {
  window['middleware'] = logState;
}

function logState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log(state);
      return reducer(state, action);
    };
  };

export const customReducer = window['middleware'];