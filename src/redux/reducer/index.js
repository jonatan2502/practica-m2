import { GET_ALL_POSTS, GET_ONE_POST } from "../actions";

const initialState = {
    allPosts: [],
    singlePost: []
}


export default function reducer (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                allPosts: action.payload
            }
    
        case GET_ONE_POST:
            return {
                ...state,
                singlePost: action.payload
            }
        default:
            return state
    }
}
