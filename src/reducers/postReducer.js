import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    items: [], //post from the action, in the action we are putting a fetch request
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
}