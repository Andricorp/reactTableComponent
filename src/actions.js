const actionPending = () => ({ type: 'SET_TABLE', status: 'PENDING', payload: null, error: null })
const actionResolved = payload => ({ type: 'SET_TABLE', status: 'RESOLVED', payload, error: null })
const actionRejected = error => ({ type: 'SET_TABLE', status: 'REJECTED', payload: null, error })


export const setTable = () => async (dispatch) => {
    dispatch(actionPending())
    try {
        dispatch(actionResolved(await fetch('http://api.tvmaze.com/search/shows?q=girls').then(res => res.json())))
    }
    catch (error) {
        dispatch(actionRejected(error))
    }
}

// export const setTable = () => async (dispatch 
//     // , getState
//     )=>{//
//     // console.log('fatched!!')
//     // console.log(getState)
//     // let res = await fetch(url);
//     let res = await fetch('http://api.tvmaze.com/search/shows?q=girls')


//     // .then(response => {

//         dispatch({
//             type: 'SET_TABLE',
//             payload: res.json()
//         })
//     // }).catch((err) => {
//         // console.log('error', err);
//     // })

// // console.log(res)
//     // return res
//     // let data = await res.json();
//     // return data;
// }//
