import React, { Component } from 'react';
// import './App.css';
import { connect } from 'react-redux';
import { setTable } from '../actions/actions'

class Search extends Component {
    render() {
        return (
            <section>
                <input ref={r => this.input = r}
                />
                <button onClick={() => { console.log(this.input.value); return this.props.setTable(this.input.value) }}>search</button>
            </section>
        )
    }
}

Search = connect(null
    , { setTable }
)(Search)

export default Search