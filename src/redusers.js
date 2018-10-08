import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import TableReduser from './TableReduser';
// import UserReduser from './UserReduser';

const redusers =  combineReducers({
    // form: formReducer,
    posts: TableReduser,
    // post: UserReduser
});
export default redusers
