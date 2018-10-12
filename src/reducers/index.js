import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TableReduser from './TableReduser';
import UserReduser from './UserReduser.';

// const redusers =  combineReducers({
//     // form: formReducer,
//     posts: TableReduser,
//     // post: UserReduser
// });
// export default redusers

// export default combineReducers({
//     form: formReducer,
//     posts: TableReduser,
//     // post: UserReduser
// });
export const reducers = combineReducers({
    form: formReducer,
    posts: TableReduser,
    auth: UserReduser
});