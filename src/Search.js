import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setTable } from './actions'

class Search extends Component {
    render() {
        // this.componentWillMount()
        return (
            <section>
                <input ref={r => this.input = r} 
                // onInput={ () => {console.log(this.input.value); return this.props.setTable(this.input.value)}}
/>
                <button onClick={() => {console.log(this.input.value); return this.props.setTable(this.input.value)}}>search</button>
                {/* {()=>{setTable()}} */}
            </section>
        )
    }
}

Search = connect(null
    , { setTable }
)(Search)

export default Search