import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTable } from '../actions/actions'

class Details extends Component {
    cash = []
    func() {

    }


    getArr(setArr) {


        let arr = []

        for (let key in setArr) {
            arr.push(setArr[key]);

            if (key === 'rating') {
                return
            }
        }
        console.log(arr)
        return arr
    }

    setDivValue() {
        if (this.props.postData) {
            this.cash = this.props.postData[this.props.match.params.id].show
            return this.getArr(this.cash).map((el, id) => <div key={id}>{el}</div>)
        } else {
            return console.log(this.cash)
        }
    }

    render() {
        return (
            <main>
                <h1>Details</h1>
                <h1>{this.props.match.params.id}</h1>
                <section>{this.setDivValue()}</section>

            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        postData: state.posts.arr
    };
};

Details = connect(mapStateToProps)(Details)

export default Details