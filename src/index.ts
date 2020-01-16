
export const customMiddleWare = (reducer) => (state, action) => {
    console.log('action',action);
    console.log('state',state);
    return reducer(state, action)
};
