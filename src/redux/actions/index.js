export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_ONE_POST = 'GET_ONE_POST'

export function getAllPosts () {
    return async function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then(response => dispatch(
            {
                type: GET_ALL_POSTS,
                payload: response        
            }
        ))
        }
}

export function getOnePost (id) {
    return async function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( response => response.json())
        .then(response => dispatch(
            {
                type: GET_ONE_POST,
                payload: response
            }
        ))
        }
}
