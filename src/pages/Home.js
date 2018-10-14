import React, { Component } from 'react';
// import Search from '../presentationals/Search';
import SearchContainer from '../containers/SearchContainer';
import TableContainer from '../containers/TableContainer';

import { setTable } from '../actions/boundActionCreators/boundTable'
  


class Home extends Component{
    render(){
        return(
            <main>
                <SearchContainer/>
                <TableContainer/>
            </main>
        )
    }
}



export default Home