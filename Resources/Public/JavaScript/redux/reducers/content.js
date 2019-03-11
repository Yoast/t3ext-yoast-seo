import {GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_ERROR} from '../actions/content';

const initialState = {
    isFetching: false
};

function contentReducer (state = initialState, action) {
    switch(action.type) {
        case GET_CONTENT_REQUEST:
            return {...state, isFetching: true};
        case GET_CONTENT_SUCCESS:
            return {...state, isFetching: false, ...action.payload};
        case GET_CONTENT_ERROR:
            return {...state, isFetching: false, error: action.error}
        default:
            return state;
    }
};

export default contentReducer;