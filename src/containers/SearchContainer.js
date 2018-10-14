import { connect } from 'react-redux';
import { setTable } from '../actions/boundActionCreators/boundTable'
import Search from '../presentationals/Search';
// import axios from 'axios';

// import {actionPending, actionResolved, actionRejected} from '../actions/actionStatus'
// import axios from 'axios';




//  const setTables = (input) => async (dispatch ) => {
//     dispatch(actionPending())
//     try {
//         dispatch(actionResolved(
//             // input
//             await axios.get(`http://api.tvmaze.com/search/shows?q=${input}`).then(res => res.data)
//         ))
//     }
//     catch (error) {
//         dispatch(actionRejected(error))
//     }
// }

const SearchContainer = connect(null, { setTable })(Search)

 
export default SearchContainer