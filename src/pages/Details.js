import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setTable } from '../actions/actions'

class Details extends Component {
    cash = []
    func() {

    }


    getArr(setArr) {

        // console.log('to returnjbvgfchfdjchgv,hj', setArr)

        let arr = []

        for (let key in setArr) {
           

            if (arr.length>9) {
                continue
            }
            else{
                arr.push(setArr[key]);
            }
        }
        // console.log('to return JHHVKHBHJBKHHVJGJGCGJCGF', arr)
        return arr
    }

    setDivValue() {
        if (this.props.postData) {
            // console.log(this.props.postData)
            this.cash = this.props.postData[this.props.match.params.id].show
            // console.log(this.cash)
            console.log(this.getArr(this.cash))
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