export default function(state = {
    arr: null
}, action){
    switch(action.type){
        case 'SET_TABLE': 
        // if(action.status ==="RESOLVED")
        console.log('action in reducer ' , action)
            return {...state, arr: action.payload|| false};
            
        default:
            return state;
    }
}
