import {
    ACTION_SET_BROWSE_TYPE,
    ACTION_MEMOIZE_BROWSE_RESULTS,
} from "../actions/browse";

const initialState = {
    type: "comic",
    results: [true],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_SET_BROWSE_TYPE:
            return { ...state, type: payload };
        case ACTION_MEMOIZE_BROWSE_RESULTS:
            return { ...state, results: payload };
        default:
            return state;
    }
};

export default reducer;
