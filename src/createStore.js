import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'

import thunk from 'redux-thunk';
// import axios from 'axios';

import redusers from './redusers';

export default (req) => {

    // const axiosInstance = axios.create({
    //     baseURL: webConfig.axiosInstance_baseURL,
    //     query: webConfig.axiosInstance_Tvmaze,//
    //     headers: {
    //         cookie: req.get('cookie') || ''
    //     }
    // });

    const store = createStore( redusers, {}, applyMiddleware(thunk));
    return store;
};