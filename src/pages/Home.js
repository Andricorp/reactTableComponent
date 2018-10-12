import React, { Component } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';

class Home extends Component{
    render(){
        return(
            <main>
                <Search/>
                <Table/>
            </main>
        )
    }
}
export default Home