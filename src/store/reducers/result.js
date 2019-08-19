import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date().getTime(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const arr = [...state.results];
            // arr.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
                break;
    }
    return state;
};

export default reducer;