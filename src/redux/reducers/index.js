import { ADD_CATEGORIES, ADD_RANDOM_QUOTE } from "../constants/action-types";

const initialState = {
    randomQuote: {},
    categories: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_CATEGORIES) {
        return Object.assign({}, state, {
            categories: state.categories.concat(action.payload)
        });
    }

    if (action.type === ADD_RANDOM_QUOTE) {
        return Object.assign({}, state, {
            randomQuote: action.payload
        });
    }

    return state;
}

export default rootReducer;