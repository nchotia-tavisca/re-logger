import { ActionReducer } from '@ngrx/store';

export const customMiddleWare = (reducer: ActionReducer<any>): ActionReducer<any> => (state, action) => {
    console.log('action',action);
    console.log('state',state);
    return reducer(state, action)
};