const intialState = {
    arr: null
};

export default function(state = intialState, action){
    switch(action.type){
        case 'SET_TABLE': 
        // if(action.status ==="RESOLVED")
        console.log('action in reducer ' , action)
        // return Object.assign({}, state, {id: action.id})
            return {...state, 
                arr: action.peyload
                || false};
            
        default:
            return state;
    }
}
