const actionPending = () => ({ type: 'SET_TABLE', status: 'PENDING', payload: null, error: null })
const actionResolved = payload => ({ type: 'SET_TABLE', status: 'RESOLVED', payload, error: null })
const actionRejected = error => ({ type: 'SET_TABLE', status: 'REJECTED', payload: null, error })


export const setTable = (input) => async (dispatch ) => {
    dispatch(actionPending())
    try {
        dispatch(actionResolved(await fetch('http://api.tvmaze.com/search/shows?q='+input).then(res => res.json())))
        // console.log(input)
    }
    catch (error) {
        dispatch(actionRejected(error))
    }
}

