import { ActionReducer } from "@ngrx/store";
export class Middleware {
  private constructor() {}
  static getInstance() {
    if (!(window as any).middleware) {
      (window as any).middleware = new Middleware();
    }
    return (window as any).middleware;
  }

  logState(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      console.log(action);
      return reducer(state, action);
    };
  }
}
