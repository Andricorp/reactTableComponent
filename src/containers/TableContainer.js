import { connect } from 'react-redux';
import { setTable } from '../actions/boundActionCreators/boundTable'
import Table from '../presentationals/Table';
import axios from 'axios';

const  mapStateToProps = (state)=> {
console.log('in container',state.posts.arr)
    return {
      postData: state.posts.arr
    };
  };


//  const setTable = (qu = 'girls') => async (dispatch ) => {
//     //  console.log('hgchgv')
//     dispatch(actionTable.actionPending())
//     try {
//         dispatch(actionTable.actionResolved(
//             // qu
//             // await axios.get(`http://api.tvmaze.com/search/shows?q=${qu}`).then(res => res.data)
//             ))
//     }
//     catch (error) {
//         dispatch(actionTable.actionRejected(error))
//     }
// }


// TableContainer = connect(mapStateToProps, { mapDispatchToProps })(Table)
// const TableContainer = connect(mapStateToProps, { setTable })(Table)
const TableContainer = connect(
    mapStateToProps
    , { setTable })(Table)
export default TableContainer