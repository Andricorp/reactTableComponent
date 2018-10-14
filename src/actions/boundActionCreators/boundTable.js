import {actionTable} from '../actionCreators'
import axios from 'axios';
import {URL} from '../../constants'



export const setTable = (input = 'girls') => async (dispatch ) => {
    // const data = await axios.get(`http://api.tvmaze.com/search/shows?q=${input}`).then(res => res.data)
    if(!input){
        input = 'girls'
    }

    dispatch(actionTable.actionPending())
    try {
        dispatch( actionTable.actionResolved(
            await axios.get(`${URL.table}${input}`).then(res => {
    console.log(input)                
                return res.data})
            ))
    }
    catch (error) {
        dispatch(actionTable.actionRejected(error))
    }
}