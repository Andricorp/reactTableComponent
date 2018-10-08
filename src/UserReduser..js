export default function(state = {
    posts: null
}, action){
    switch(action.type){
        case 'SET_USER': 
            return {...state, user: action.payload|| false};
        case 'GET_USER': //
    // console.log(state.posts)
    // console.log(action.payload)
            return {...state, user: action.payload|| false};
            
        default:
            return state;
    }
}